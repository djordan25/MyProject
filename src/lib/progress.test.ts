import { describe, expect, it } from 'vitest';
import { isDue, nextReview, progress, type Progress } from './progress';

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
      notes: {},
    };
    const now = 2 * DAY;
    expect(isDue(p, 'unseen', now)).toBe(true);
    expect(isDue(p, 'missed', now)).toBe(true);
    expect(isDue(p, 'old', now)).toBe(true);
    expect(isDue(p, 'legacy', now)).toBe(true);
    expect(isDue(p, 'fresh', now)).toBe(false);
  });
});

describe('backup', () => {
  it('round-trips progress and rejects invalid files', () => {
    progress.reset();
    progress.markLessonRead('some-topic');
    progress.rateDrill('some-objection', 'got');
    progress.setNote('some-topic', 'remember Luke 1');
    const backup = progress.exportJson();
    progress.reset();
    expect(JSON.parse(progress.exportJson()).lessonsRead).toEqual({});
    expect(progress.importJson(backup)).toBe(true);
    expect(JSON.parse(progress.exportJson()).lessonsRead).toEqual({ 'some-topic': true });
    expect(JSON.parse(progress.exportJson()).notes).toEqual({ 'some-topic': 'remember Luke 1' });
    expect(progress.importJson('not json')).toBe(false);
    expect(progress.importJson('{"foo":1}')).toBe(false);
    progress.reset();
  });
});
