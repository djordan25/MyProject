import { describe, expect, it } from 'vitest';
import { isDue, nextReview, type Progress } from './progress';

const DAY = 24 * 60 * 60 * 1000;

describe('spaced repetition', () => {
  it('lengthens the interval with each correct answer and resets on a miss', () => {
    const a = nextReview(undefined, 'got', 0);
    expect(a).toEqual({ due: 1 * DAY, streak: 1 });
    const b = nextReview(a, 'got', 0);
    expect(b).toEqual({ due: 3 * DAY, streak: 2 });
    expect(nextReview({ due: 0, streak: 9 }, 'got', 0).due).toBe(30 * DAY);
    expect(nextReview(b, 'review', 5)).toEqual({ due: 5, streak: 0 });
  });

  it('treats unseen, missed and expired objections as due', () => {
    const p: Progress = {
      lessonsRead: {},
      quizBest: {},
      drills: { missed: 'review', fresh: 'got', old: 'got', legacy: 'got' },
      review: { fresh: { due: 10 * DAY, streak: 1 }, old: { due: 1 * DAY, streak: 1 } },
    };
    const now = 2 * DAY;
    expect(isDue(p, 'unseen', now)).toBe(true);
    expect(isDue(p, 'missed', now)).toBe(true);
    expect(isDue(p, 'old', now)).toBe(true);
    expect(isDue(p, 'legacy', now)).toBe(true);
    expect(isDue(p, 'fresh', now)).toBe(false);
  });
});
