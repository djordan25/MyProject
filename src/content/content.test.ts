import { describe, expect, it } from 'vitest';
import { flattenFollowUps, topics, tracks, type Topic } from '.';
import { parseRef, segmentCitations } from '../lib/references';
import bibleCounts from './data/bible-verse-counts.json';
import quranCounts from './data/quran-verse-counts.json';
import passages from './data/passages.json';
import { glossary } from './glossary';

const bible = bibleCounts as Record<string, number[]>;
const quran = quranCounts as number[];

/** Every citation in a topic: explicit reference lists plus citations found in running text. */
function citations(t: Topic): string[] {
  const text = [
    ...t.lesson.flatMap((s) => [...s.body, ...(s.argument ?? [])]),
    ...t.objections.flatMap((o) => [o.response, ...o.keyPoints, ...flattenFollowUps(o.followUps).map((f) => f.answer)]),
    ...t.quiz.map((q) => q.explanation),
  ].join('\n');
  const inline = segmentCitations(text).flatMap((s) => (s.ref ? [s.ref] : []));
  const listed = [...t.lesson.flatMap((s) => s.references ?? []), ...t.objections.flatMap((o) => o.references ?? [])];
  return [...new Set([...inline, ...listed])];
}

type PassageData = { t?: string; v?: [string, string][] };
const passageData = passages as unknown as Record<string, PassageData>;

/** Lower-cased words only; optionally drops translators' [bracketed] and (parenthesised) glosses. */
function words(text: string, dropGlosses: boolean): string {
  let t = text.toLowerCase().replace(/[’']/g, '');
  if (dropGlosses) t = t.replace(/\[[^\]]*\]|\([^)]*\)/g, ' ');
  return t.replace(/[^a-z0-9]+/g, ' ').trim();
}

function passageVariants(ref: string): string[] {
  const p = passageData[ref];
  if (!p) return [];
  const raw = p.t ?? (p.v ?? []).map(([, text]) => text).join(' ');
  return [words(raw, false), words(raw, true)];
}

/**
 * Finds quotations that are directly followed by a citation, e.g. “…” (Quran 5:47; 5:68), and returns those whose
 * wording is not found in the cited passage(s). Ellipses split a quotation into pieces that are checked separately.
 */
function misquotes(text: string): string[] {
  const bad: string[] = [];
  for (const m of text.matchAll(/“([^”]{12,})”/g)) {
    const segs = segmentCitations(text.slice(m.index! + m[0].length));
    let i = 0;
    if (segs[0] && !segs[0].ref) {
      if (!/^[\s.,;:!?)]*\(?\s*(?:see\s+|cf\.\s+)?$/i.test(segs[0].text)) continue;
      i = 1;
    }
    const refs: string[] = [];
    while (segs[i]?.ref) {
      refs.push(segs[i].ref!);
      if (segs[i + 1] && !segs[i + 1].ref && /^\s*[;,]\s*(?:see\s+)?$/.test(segs[i + 1].text) && segs[i + 2]?.ref) i += 2;
      else break;
    }
    if (!refs.length) continue;
    const sources = refs.flatMap(passageVariants);
    const pieces = m[1].split(/…|\.\.\./).filter((x) => words(x, false).split(' ').length >= 2);
    const ok = pieces.every((x) => [words(x, false), words(x, true)].some((q) => q && sources.some((src) => src.includes(q))));
    if (!ok) bad.push(`“${m[1]}” (${refs.join('; ')})`);
  }
  return bad;
}

function validate(ref: string): string | null {
  const p = parseRef(ref);
  if (!p) return 'unrecognised reference';
  if (p.kind === 'quran') {
    const max = quran[p.chapter! - 1];
    if (!max) return `no surah ${p.chapter}`;
    if (p.verses![1] > max || p.verses![0] > p.verses![1]) return `surah ${p.chapter} has ${max} verses`;
  }
  if (p.kind === 'bible') {
    const chapters = bible[p.book!];
    if (!chapters) return `unknown book ${p.book}`;
    const max = chapters[p.chapter! - 1];
    if (!max) return `${p.book} has ${chapters.length} chapters`;
    if (p.verses![1] > max || p.verses![0] > p.verses![1]) return `${p.book} ${p.chapter} has ${max} verses`;
  }
  if (p.kind === 'bukhari' && (p.number! < 1 || p.number! > 7563)) return 'out of range';
  if (p.kind === 'muslim' && (p.number! < 1 || p.number! > 3033)) return 'out of range';
  return null;
}

describe('segmentCitations', () => {
  const refs = (t: string) => segmentCitations(t).flatMap((s) => (s.ref ? [s.ref] : []));
  it('expands shorthand follow-on citations', () => {
    expect(refs('(Quran 47:19; 40:55; see 48:2)')).toEqual(['Quran 47:19', 'Quran 40:55', 'Quran 48:2']);
    expect(refs('(Sahih al-Bukhari 4986, 4988)')).toEqual(['Sahih al-Bukhari 4986', 'Sahih al-Bukhari 4988']);
    expect(refs('(Mark 8:31; 9:31; 10:33-34)')).toEqual(['Mark 8:31', 'Mark 9:31', 'Mark 10:33-34']);
    expect(refs('(John 1:1, 14)')).toEqual(['John 1:1', 'John 1:14']);
    expect(refs('Quran 2:62 and 5:69')).toEqual(['Quran 2:62']);
  });
  it('keeps the original text intact', () => {
    const t = 'See (Quran 6:34, 6:115) and Sahih Muslim 1452, 1050.';
    expect(segmentCitations(t).map((s) => s.text).join('')).toBe(t);
  });
});

describe('glossary', () => {
  it('has unique terms and only valid citations with passage text', () => {
    expect(new Set(glossary.map((g) => g.term)).size).toBe(glossary.length);
    const refs = glossary.flatMap((g) => segmentCitations(g.meaning).flatMap((s) => (s.ref ? [s.ref] : [])));
    expect(refs.filter((r) => validate(r) || !(r in passageData))).toEqual([]);
  });
});

describe('other hadith collections', () => {
  it('parses and links citations to graded collections', () => {
    expect(parseRef('Sunan Abi Dawud 4449')).toMatchObject({ kind: 'hadith', url: 'https://sunnah.com/abudawud:4449' });
    expect(parseRef('Jami at-Tirmidhi 3193')?.url).toBe('https://sunnah.com/tirmidhi:3193');
    expect(segmentCitations('(Sunan Ibn Majah 1944)').some((s) => s.ref === 'Sunan Ibn Majah 1944')).toBe(true);
  });
});

describe('misquotes', () => {
  it('accepts exact quotations and flags altered ones', () => {
    expect(misquotes('He said “And let the People of the Gospel judge by what Allah has revealed therein” (Quran 5:47).')).toEqual([]);
    expect(misquotes('He said “Let the People of the Gospel ignore what Allah has revealed” (Quran 5:47).')).toHaveLength(1);
    expect(misquotes('“the Word was God… The Word became flesh” (John 1:1, 14)')).toEqual([]);
    expect(misquotes('A “scare quote of some length” in a sentence (John 1:1).')).toEqual([]);
  });
});

describe('content', () => {
  it('has unique ids across topics, objections and questions', () => {
    const ids = topics.flatMap((t) => [t.id, ...t.objections.map((o) => o.id), ...t.quiz.map((q) => q.id)]);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('places every topic in exactly one track, and every track topic exists', () => {
    const placed = tracks.flatMap((t) => t.sections.flatMap((s) => s.topicIds));
    expect(new Set(placed).size).toBe(placed.length);
    expect([...placed].sort()).toEqual(topics.map((t) => t.id).sort());
  });

  it('gives every sub-track a real top-level parent and unique track ids', () => {
    expect(new Set(tracks.map((t) => t.id)).size).toBe(tracks.length);
    for (const t of tracks.filter((x) => x.parent)) {
      const parent = tracks.find((x) => x.id === t.parent);
      expect(parent, t.id).toBeDefined();
      expect(parent!.parent, t.id).toBeUndefined();
    }
  });

  for (const t of topics) {
    it(`${t.id}: is complete and quiz answers are valid`, () => {
      expect(t.lesson.length).toBeGreaterThan(0);
      expect(t.objections.length).toBeGreaterThan(0);
      expect(t.quiz.length).toBeGreaterThan(0);
      for (const q of t.quiz) {
        expect(q.answer).toBeGreaterThanOrEqual(0);
        expect(q.answer).toBeLessThan(q.options.length);
        expect(new Set(q.options).size).toBe(q.options.length);
        // Options are shown in random order, so none may refer to another by position.
        expect(q.options.filter((o) => /\b(above|below)\b|^(both|neither) [a-d]\b|\b[a-d] and [a-d]\b/i.test(o)), q.id).toEqual([]);
      }
    });

    it(`${t.id}: every citation has passage text for its popup (run scripts/build-passages.py)`, () => {
      const missing = citations(t).filter((r) => !(r in (passages as Record<string, unknown>)));
      expect(missing).toEqual([]);
    });

    it(`${t.id}: quotations followed by a citation match the cited passage`, () => {
      const texts = [
        ...t.lesson.flatMap((s) => [...s.body, ...(s.argument ?? [])]),
        ...t.objections.flatMap((o) => [o.objection, o.response, ...o.keyPoints, ...flattenFollowUps(o.followUps).flatMap((f) => [f.reply, f.answer])]),
        ...t.quiz.flatMap((q) => [q.question, q.explanation]),
      ];
      expect(texts.flatMap(misquotes)).toEqual([]);
    });

    it(`${t.id}: every listed reference points to a real verse or hadith`, () => {
      const listed = [...t.lesson.flatMap((s) => s.references ?? []), ...t.objections.flatMap((o) => o.references ?? [])];
      const bad = listed.map((r) => [r, validate(r)]).filter(([, e]) => e);
      expect(bad).toEqual([]);
    });
  }

});
