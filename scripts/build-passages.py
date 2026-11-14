#!/usr/bin/env python3
"""Builds src/content/data/passages.json: the text of every passage cited in src/content.

The app shows this text in a popup when a citation is tapped. Run after adding or changing citations:

    scripts/fetch-sources.sh          # once: downloads source texts into .sources/
    python3 scripts/build-passages.py

Sources:
  Bible  - World English Bible (public domain), npm package "world-english-bible"
  Quran  - Sahih International English translation, npm package "quran-json"
  Hadith - sunnah.com English text and numbering, npm package "hadith" (SQLite database)
"""
import json, re, sqlite3, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / '.sources'
OUT = ROOT / 'src/content/data/passages.json'

books = list(json.loads((ROOT / 'src/content/data/bible-verse-counts.json').read_text()))
ALIASES = {'Psalm': 'Psalms', 'Song of Songs': "Solomon's Song", 'Song of Solomon': "Solomon's Song"}
WEB_FILE = {"Solomon's Song": 'songofsolomon'}
book_pat = '|'.join(sorted([re.escape(b) for b in books if b != "Solomon's Song"] + [re.escape(a) for a in ALIASES], key=len, reverse=True))
CITE = re.compile(rf"(Quran \d{{1,3}}:\d{{1,3}}(?:-\d{{1,3}})?|Sahih al-Bukhari \d{{1,4}}|Sahih Muslim \d{{1,4}}|(?:{book_pat}) \d{{1,3}}:\d{{1,3}}(?:-\d{{1,3}})?)(?![:\d])")
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
            elif prev.startswith('Sahih ') and tok.isdigit():
                ref = re.sub(r'\d+$', tok, prev)
            elif not prev.startswith(('Quran ', 'Sahih ')) and m0:
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
web_cache = {}


def web_chapter(book, chapter):
    key = (book, chapter)
    if key not in web_cache:
        name = WEB_FILE.get(book, book.lower().replace(' ', ''))
        verses = {}
        for e in json.loads((SRC / f'world-english-bible/package/json/{name}.json').read_text()):
            if e.get('chapterNumber') == chapter and 'value' in e:
                verses[e['verseNumber']] = (verses.get(e['verseNumber'], '') + ' ' + e['value']).strip()
        web_cache[key] = {v: re.sub(r'\s+', ' ', t) for v, t in verses.items()}
    return web_cache[key]


def hadith(collection, number):
    rows = db.execute('select c3, c4, c8 from hadith_en_content where c8 like ?', (collection + '%',)).fetchall()
    for prefix, content, ref in rows:
        first = ref.split('\n')[0]
        nums = re.findall(r'\d+', first.split(',', 1)[1] if ',' in first else first)
        if str(number) in nums:
            text = re.sub(r'<[^>]+>', '', f'{prefix or ""} {content}')
            return re.sub(r'\s+', ' ', text).strip()
    return None


def build(ref):
    m = re.fullmatch(r'Quran (\d+):(\d+)(?:-(\d+))?', ref)
    if m:
        s, a = int(m[1]), int(m[2])
        b = int(m[3] or a)
        return {'src': 'Quran · Sahih International', 'v': [[f'{s}:{i}', quran[s]['verses'][i - 1]['translation']] for i in range(a, b + 1)]}
    m = re.fullmatch(r'(Sahih al-Bukhari|Sahih Muslim) (\d+)', ref)
    if m:
        t = hadith(m[1], m[2])
        return t and {'src': f'{m[1]} · sunnah.com English', 't': t}
    m = re.fullmatch(rf'({book_pat}) (\d+):(\d+)(?:-(\d+))?((?:, ?\d+(?:-\d+)?)*)', ref)
    if m:
        book, ch = ALIASES.get(m[1], m[1]), int(m[2])
        spans = [(int(m[3]), int(m[4] or m[3]))]
        for part in re.findall(r'\d+(?:-\d+)?', m[5] or ''):
            a, _, b = part.partition('-')
            spans.append((int(a), int(b or a)))
        verses = web_chapter(book, ch)
        out = [[f'{ch}:{i}', verses[i]] for a, b in spans for i in range(a, b + 1) if i in verses]
        return out and {'src': 'World English Bible', 'v': out}
    return None


passages, missing = {}, []
for r in collect_citations():
    p = build(r)
    (passages.__setitem__(r, p) if p else missing.append(r))
OUT.write_text(json.dumps(passages, ensure_ascii=False, separators=(',', ':'), sort_keys=True), encoding='utf8')
print(f'wrote {len(passages)} passages to {OUT.relative_to(ROOT)} ({OUT.stat().st_size // 1024} KB)')
if missing:
    print('MISSING:', ', '.join(missing))
    sys.exit(1)
