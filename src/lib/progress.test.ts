import { describe, expect, it } from 'vitest';
import { daysPractised, daysUntilReview, emptyProgress, isDue, localDate, nextReview, progress, topicCompletion, topicSealed, warmedUpToday, type Progress } from './progress';

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
      ...emptyProgress(),
      lessonsRead: {},
      quizBest: {},
      drills: { missed: 'review', fresh: 'got', old: 'got', legacy: 'got' },
      review: { fresh: { due: 10 * DAY, streak: 1 }, old: { due: 1 * DAY, streak: 1 } },
      notes: {},
      confidence: {},
      days: [], verses: [], conversations: [],
    };
    const now = 2 * DAY;
    expect(isDue(p, 'unseen', now)).toBe(true);
    expect(isDue(p, 'missed', now)).toBe(true);
    expect(isDue(p, 'old', now)).toBe(true);
    expect(isDue(p, 'legacy', now)).toBe(true);
    expect(isDue(p, 'fresh', now)).toBe(false);
  });
});

describe('confidence ratings', () => {
  it('schedules each level differently', () => {
    expect(nextReview(undefined, 'again', 5)).toEqual({ due: 5, streak: 0 });
    expect(nextReview({ due: 0, streak: 3 }, 'shaky', 0)).toEqual({ due: 1 * DAY, streak: 0 });
    expect(nextReview({ due: 0, streak: 1 }, 'solid', 0)).toEqual({ due: 3 * DAY, streak: 2 });
    expect(nextReview(undefined, 'teach', 0)).toEqual({ due: 14 * DAY, streak: 4 });
    expect(nextReview({ due: 0, streak: 4 }, 'teach', 0)).toEqual({ due: 30 * DAY, streak: 6 });
    expect(daysUntilReview(undefined, 'solid')).toBe(1);
  });

  it('maps levels onto mastery and records the practice day', () => {
    progress.reset();
    progress.rateDrill('a', 'shaky');
    progress.rateDrill('b', 'teach');
    const p = JSON.parse(progress.exportJson()) as Progress;
    expect(p.drills).toEqual({ a: 'review', b: 'got' });
    expect(p.confidence).toEqual({ a: 'shaky', b: 'teach' });
    expect(p.days).toEqual([localDate(Date.now())]);
    progress.reset();
  });

  it('counts practice days in the last week', () => {
    const now = new Date(2026, 10, 17, 12).getTime();
    const p = { days: ['2026-11-01', '2026-11-11', '2026-11-12', '2026-11-16', '2026-11-17'] } as Progress;
    expect(daysPractised(p, now)).toBe(4);
  });
});

describe('readiness and seals', () => {
  const base: Progress = emptyProgress();

  it('weights objections by confidence, counting old ratings as Solid or Again', () => {
    const p: Progress = { ...base, confidence: { a: 'shaky', b: 'teach' }, drills: { a: 'review', b: 'got', c: 'got', d: 'review' } };
    expect(topicCompletion(p, 't', ['a', 'b', 'c', 'd'])).toBeCloseTo((0 + 0 + 2.5 / 4) / 3);
  });

  it('seals a topic only with the lesson, an 80% quiz and every objection Solid or better', () => {
    const p: Progress = { ...base, lessonsRead: { t: true }, quizBest: { t: 0.8 }, confidence: { a: 'solid', b: 'teach' } };
    expect(topicSealed(p, 't', ['a', 'b'])).toBe(true);
    expect(topicSealed({ ...p, quizBest: { t: 0.7 } }, 't', ['a', 'b'])).toBe(false);
    expect(topicSealed({ ...p, confidence: { a: 'shaky', b: 'teach' } }, 't', ['a', 'b'])).toBe(false);
    expect(topicSealed({ ...p, lessonsRead: {} }, 't', ['a', 'b'])).toBe(false);
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

describe('conversation journal', () => {
  it('stores entries newest first and makes tagged, practised objections due again', () => {
    progress.reset();
    progress.rateDrill('known', 'teach');
    const before = JSON.parse(progress.exportJson()) as Progress;
    expect(isDue(before, 'known')).toBe(false);
    progress.addConversation({ date: '2026-11-20', who: 'Sam', notes: 'Went well', next: '', objectionIds: ['known', 'never-practised'] });
    const after = JSON.parse(progress.exportJson()) as Progress;
    expect(after.conversations).toHaveLength(1);
    expect(after.conversations[0].who).toBe('Sam');
    expect(isDue(after, 'known')).toBe(true);
    expect(after.review['never-practised']).toBeUndefined();
    progress.removeConversation(after.conversations[0].id);
    expect((JSON.parse(progress.exportJson()) as Progress).conversations).toEqual([]);
    progress.reset();
  });
});

describe('the daily warm-up', () => {
  it('counts as done only on the day it was finished', () => {
    const now = new Date(2026, 0, 10, 9).getTime();
    expect(warmedUpToday(emptyProgress(), now)).toBe(false);
    const p: Progress = { ...emptyProgress(), warmUp: localDate(now) };
    expect(warmedUpToday(p, now)).toBe(true);
    expect(warmedUpToday(p, now + DAY)).toBe(false);
  });
});
