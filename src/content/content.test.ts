import { describe, expect, it } from 'vitest';
import { topics, tracks, topicsInTrack, type Topic } from '.';
import { CITATION_REGEX, parseRef } from '../lib/references';
import bibleCounts from './data/bible-verse-counts.json';
import quranCounts from './data/quran-verse-counts.json';

const bible = bibleCounts as Record<string, number[]>;
const quran = quranCounts as number[];

/** Every citation in a topic: explicit reference lists plus citations found in running text. */
function citations(t: Topic): string[] {
  const text = [
    ...t.lesson.flatMap((s) => [...s.body, ...(s.argument ?? [])]),
    ...t.objections.flatMap((o) => [o.response, ...o.keyPoints]),
    ...t.quiz.map((q) => q.explanation),
  ].join('\n');
  const inline = text.match(CITATION_REGEX) ?? [];
  const listed = [...t.lesson.flatMap((s) => s.references ?? []), ...t.objections.flatMap((o) => o.references ?? [])];
  return [...new Set([...inline, ...listed])];
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

  for (const t of topics) {
    it(`${t.id}: is complete and quiz answers are valid`, () => {
      expect(t.lesson.length).toBeGreaterThan(0);
      expect(t.objections.length).toBeGreaterThan(0);
      expect(t.quiz.length).toBeGreaterThan(0);
      for (const q of t.quiz) {
        expect(q.answer).toBeGreaterThanOrEqual(0);
        expect(q.answer).toBeLessThan(q.options.length);
        expect(new Set(q.options).size).toBe(q.options.length);
      }
    });

    it(`${t.id}: every listed reference points to a real verse or hadith`, () => {
      const listed = [...t.lesson.flatMap((s) => s.references ?? []), ...t.objections.flatMap((o) => o.references ?? [])];
      const bad = listed.map((r) => [r, validate(r)]).filter(([, e]) => e);
      expect(bad).toEqual([]);
    });
  }

  for (const track of tracks.filter((tr) => tr.primarySourcesOnly)) {
    describe(`${track.id} (primary sources only)`, () => {
      for (const t of topicsInTrack(track)) {
        it(`${t.id}: cites only the Bible, the Quran, Sahih al-Bukhari and Sahih Muslim`, () => {
          expect(t.furtherReading).toBeUndefined();
          const bad = citations(t).map((r) => [r, validate(r)]).filter(([, e]) => e);
          expect(bad).toEqual([]);
        });
      }
    });
  }
});
