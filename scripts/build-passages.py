#!/usr/bin/env python3
"""Builds src/content/data/passages.json: the text of every passage cited in src/content.

The app shows this text in a popup when a citation is tapped. Run after adding or changing citations:

    scripts/fetch-sources.sh          # once: downloads source texts into .sources/
    python3 scripts/build-passages.py

Sources:
  Bible  - Berean Standard Bible (public domain since 30 April 2023, berean.bible), text from the
           npm package "@bible-help/get-bible-verses"
  Quran  - Sahih International English translation, npm package "quran-json"
  Hadith - sunnah.com English text and numbering, npm package "hadith" (SQLite database)
"""
import json, os, re, sqlite3, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / '.sources'
OUT = ROOT / 'src/content/data/passages.json'

books = list(json.loads((ROOT / 'src/content/data/bible-verse-counts.json').read_text()))
ALIASES = {'Psalm': 'Psalms', 'Song of Songs': "Solomon's Song", 'Song of Solomon': "Solomon's Song"}
OSIS = dict(zip(books, """Gen Exod Lev Num Deut Josh Judg Ruth 1Sam 2Sam 1Kgs 2Kgs 1Chr 2Chr Ezra Neh Esth Job Ps Prov Eccl Song
Isa Jer Lam Ezek Dan Hos Joel Amos Obad Jonah Mic Nah Hab Zeph Hag Zech Mal Matt Mark Luke John Acts Rom 1Cor 2Cor Gal Eph Phil
Col 1Thess 2Thess 1Tim 2Tim Titus Phlm Heb Jas 1Pet 2Pet 1John 2John 3John Jude Rev""".split()))
assert len(OSIS) == 66
book_pat = '|'.join(sorted([re.escape(b) for b in books if b != "Solomon's Song"] + [re.escape(a) for a in ALIASES], key=len, reverse=True))
# Other hadith collections: display name -> name used in the sunnah.com data. Mirrors OTHER_COLLECTIONS in references.ts.
OTHER = {'Sunan Abi Dawud': 'Sunan Abi Dawud', 'Jami at-Tirmidhi': 'Jami` at-Tirmidhi', 'Sunan Ibn Majah': 'Sunan Ibn Majah', 'Musnad Ahmad': 'Musnad Ahmad'}
other_pat = '|'.join(OTHER)
CITE = re.compile(rf"(Quran \d{{1,3}}:\d{{1,3}}(?:-\d{{1,3}})?|Sahih al-Bukhari \d{{1,4}}|Sahih Muslim \d{{1,4}}|(?:{other_pat}) \d{{1,5}}|(?:{book_pat}) \d{{1,3}}:\d{{1,3}}(?:-\d{{1,3}})?)(?!:?\d)")
REF_LIST = re.compile(r"references: \[(.*?)\]", re.S)


CONT = re.compile(r'^(\s*[;,]\s*(?:see\s+)?)(\d{1,3}:\d{1,3}(?:-\d{1,3})?|\d{1,4}(?:-\d{1,3})?)(?![\d:])')


def inline_citations(text):
    """Mirror of segmentCitations() in src/lib/references.ts."""
    parts = CITE.split(text)
    found = []
    for i, part in enumerate(parts):
        if i % 2:
            found.append(part)
            continue
        if i == 0:
            continue
        prev, rest = parts[i - 1], part
        m0 = re.match(r'^(.*) (\d+):', prev)
        chapter = m0[2] if m0 else None
        while (m := CONT.match(rest)):
            tok = m[2]
            if prev.startswith('Quran ') and ':' in tok:
                ref = f'Quran {tok}'
            elif prev.startswith(('Sahih ',) + tuple(OTHER)) and tok.isdigit():
                ref = re.sub(r'\d+$', tok, prev)
            elif not prev.startswith(('Quran ', 'Sahih ') + tuple(OTHER)) and m0:
                ref = f'{m0[1]} {tok}' if ':' in tok else f'{m0[1]} {chapter}:{tok}'
            else:
                break
            found.append(ref)
            if ':' in tok:
                chapter = tok.split(':')[0]
            rest = rest[m.end():]
    return found


def collect_citations():
    refs = set()
    for f in sorted((ROOT / 'src/content').rglob('*.ts')):
        if f.name.endswith('.test.ts'):
            continue
        text = f.read_text(encoding='utf8')
        refs.update(inline_citations(text))
        for block in REF_LIST.findall(text):
            refs.update(re.findall(r"'([^']+)'", block))
    return sorted(refs)


quran = {s['id']: s for s in json.loads((SRC / 'quran-json/package/dist/quran_en.json').read_text())}
db = sqlite3.connect(f"file:{SRC / 'hadith/package/data/hadith.db'}?mode=ro", uri=True)
BSB_DIR = SRC / 'bsb/package/data'
bsb_verses = json.loads((BSB_DIR / 'berean/berean_verses.json').read_text(encoding='utf8'))['verses']
bsb_index = json.loads((BSB_DIR / 'clarkson/index_conversions.json').read_text(encoding='utf8'))['osisRef']

# Passages the earliest manuscripts lack; the popup says so.
LATE = [('Mark', 16, 9, 20), ('John', 7, 53, 53), ('John', 8, 1, 11)]
LATE_NOTE = 'Not found in the earliest manuscripts; most modern Bibles bracket or footnote this passage.'
OMITTED_NOTE = 'A verse here is not in the earliest manuscripts and is left out of the main text of modern translations.'


def bsb(book, chapter, verse):
    i = bsb_index.get(f'{OSIS[book]}.{chapter}.{verse}')
    return None if i is None else re.sub(r'\s+', ' ', bsb_verses[i]).strip()


def hadith(collection, number):
    """Returns (text, grade) for a hadith by its sunnah.com reference number, or None."""
    rows = db.execute('select c3, c4, c8, c7 from hadith_en_content where c8 like ?', (collection + '%',)).fetchall()
    for prefix, content, ref, grade in rows:
        first = ref.split('\n')[0]
        nums = re.findall(r'\d+', first.split(',', 1)[1] if ',' in first else first)
        if str(number) in nums:
            text = re.sub(r'\[\d+\]:.*$', '', f'{prefix or ""} {content}', flags=re.S)  # drop translator footnotes
            text = re.sub(r'<[^>]+>|\[\d+\]', '', text)
            return re.sub(r'\s+', ' ', text).strip(), re.sub(r'\s+', ' ', grade or '').strip()
    return None


def build(ref):
    m = re.fullmatch(r'Quran (\d+):(\d+)(?:-(\d+))?', ref)
    if m:
        s, a = int(m[1]), int(m[2])
        b = int(m[3] or a)
        return {'src': 'Quran · Sahih International', 'v': [[f'{s}:{i}', quran[s]['verses'][i - 1]['translation']] for i in range(a, b + 1)]}
    m = re.fullmatch(r'(Sahih al-Bukhari|Sahih Muslim) (\d+)', ref)
    if m:
        h = hadith(m[1], m[2])
        return h and {'src': f'{m[1]} · sunnah.com English', 't': h[0]}
    m = re.fullmatch(rf'({other_pat}) (\d+)', ref)
    if m:
        h = hadith(OTHER[m[1]], m[2])
        if not h:
            return None
        grade = re.sub(r'\((Darussalam)\)\s*\(\1\)', r'(\1)', h[1])
        return {'src': f'{m[1]} · sunnah.com English' + (f' · graded {grade}' if grade else ''), 't': h[0]}
    m = re.fullmatch(rf'({book_pat}) (\d+):(\d+)(?:-(\d+))?((?:, ?\d+(?:-\d+)?)*)', ref)
    if m:
        book, ch = ALIASES.get(m[1], m[1]), int(m[2])
        spans = [(int(m[3]), int(m[4] or m[3]))]
        for part in re.findall(r'\d+(?:-\d+)?', m[5] or ''):
            a, _, b = part.partition('-')
            spans.append((int(a), int(b or a)))
        out, note = [], None
        for a, b in spans:
            for i in range(a, b + 1):
                text = bsb(book, ch, i)
                if text is None:
                    continue
                if not text:
                    note = OMITTED_NOTE
                    continue
                if any(book == lb and ch == lc and la <= i <= lz for lb, lc, la, lz in LATE):
                    note = LATE_NOTE
                out.append([f'{ch}:{i}', text])
        if not out:
            return None
        res = {'src': 'Berean Standard Bible', 'v': out}
        if note:
            res['note'] = note
        return res
    return None


passages, missing = {}, []
for r in collect_citations():
    p = build(r)
    (passages.__setitem__(r, p) if p else missing.append(r))
tmp = OUT.with_suffix(f'.{os.getpid()}.tmp')
tmp.write_text(json.dumps(passages, ensure_ascii=False, separators=(',', ':'), sort_keys=True), encoding='utf8')
os.replace(tmp, OUT)  # atomic, so a reader never sees a half-written file
print(f'wrote {len(passages)} passages to {OUT.relative_to(ROOT)} ({OUT.stat().st_size // 1024} KB)')
if missing:
    print('MISSING:', ', '.join(missing))
    sys.exit(1)
