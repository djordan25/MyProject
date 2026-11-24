import { describe, expect, it } from 'vitest';
import passages from '../content/data/passages.json';
import { compareRecall, firstLetters, STARTER_SETS, suggestFromRecall, verseId } from './verses';
import { buildSession } from './session';
import { emptyProgress, type Progress } from './progress';

describe('memory verses', () => {
  it('has bundled Berean text for every starter verse, each listed once', () => {
    const all = passages as unknown as Record<string, { src: string; v?: unknown[] }>;
    const refs = STARTER_SETS.flatMap((s) => s.refs);
    expect(new Set(refs).size).toBe(refs.length);
    for (const r of refs) {
      expect(all[r], r).toBeDefined();
      expect(all[r].src, r).toContain('Berean');
      expect(all[r].v?.length, r).toBeGreaterThan(0);
    }
  });

  it('reduces words to first letters, keeping punctuation', () => {
    expect(firstLetters('For God so loved the world, that He gave…')).toBe('F__ G__ s_ l____ t__ w____, t___ H_ g___…');
  });

  it('scores typed recall word by word, ignoring case and punctuation', () => {
    const r = compareRecall('in the beginning god made the heavens and earth', 'In the beginning God created the heavens and the earth.');
    expect(r.total).toBe(10);
    expect(r.correct).toBe(8);
    expect(r.words.filter((w) => !w.hit).map((w) => w.text)).toEqual(['created', 'the']);
    expect(suggestFromRecall(10, 10)).toBe('solid');
    expect(suggestFromRecall(8, 10)).toBe('shaky');
    expect(suggestFromRecall(3, 10)).toBe('again');
  });

  it('adds a due saved verse to the daily session, and leaves it out once it is not due', () => {
    const p: Progress = { ...emptyProgress(), verses: ['John 14:6'] };
    expect(buildSession(p).verse).toBe('John 14:6');
    const id = verseId('John 14:6');
    const later: Progress = { ...p, drills: { [id]: 'got' }, review: { [id]: { due: Date.now() + 5 * 864e5, streak: 2 } } };
    expect(buildSession(later).verse).toBeNull();
  });
});
