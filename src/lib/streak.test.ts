import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { currentStreak, DAILY_GOAL, levelOf, progress, XP, xpToday, type Progress } from './progress';

const DAY = 24 * 60 * 60 * 1000;
const START = new Date(2026, 2, 2, 12).getTime();
const state = (): Progress => JSON.parse(progress.exportJson());

/** Practises once on each listed day (0 = the first day), with the clock set to noon. */
function practiseOn(days: number[]) {
  for (const d of days) {
    vi.setSystemTime(START + d * DAY);
    progress.rateDrill(`o-${d}`, 'solid');
  }
}

describe('streaks, freezes and points across real days', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(START);
    progress.reset();
  });
  afterEach(() => vi.useRealTimers());

  it('starts with one freeze and counts days practised in a row', () => {
    practiseOn([0, 1, 2]);
    expect(currentStreak(state())).toBe(3);
    expect(state().freezes).toBe(1);
  });

  it('spends the freeze on a single missed day and keeps the run', () => {
    practiseOn([0, 1]);
    // Day 2 is missed. On day 3, before practising, the run still shows because a freeze is held.
    vi.setSystemTime(START + 3 * DAY);
    expect(currentStreak(state())).toBe(2);
    practiseOn([3]);
    const p = state();
    expect(p.freezes).toBe(0);
    expect(p.frozen).toHaveLength(1);
    expect(currentStreak(p)).toBe(3);
  });

  it('breaks the run when a day is missed with no freeze left', () => {
    practiseOn([0, 1, 3]);
    expect(state().freezes).toBe(0);
    // Day 4 is missed with nothing to cover it.
    vi.setSystemTime(START + 5 * DAY);
    expect(currentStreak(state())).toBe(0);
    practiseOn([5]);
    expect(currentStreak(state())).toBe(1);
  });

  it('breaks the run when two days are missed, freeze or not', () => {
    practiseOn([0, 1]);
    vi.setSystemTime(START + 4 * DAY);
    expect(currentStreak(state())).toBe(0);
    practiseOn([4]);
    expect(state().freezes).toBe(1);
    expect(currentStreak(state())).toBe(1);
  });

  it('earns a new freeze on the seventh day of a run, and never holds more than one', () => {
    practiseOn([0, 1, 3]);
    expect(state().freezes).toBe(0);
    // The freeze covered day 2 without counting it, so day 7 is the seventh day actually practised.
    practiseOn([4, 5, 6]);
    expect(state().freezes).toBe(0);
    practiseOn([7]);
    expect(currentStreak(state())).toBe(7);
    expect(state().freezes).toBe(1);
    practiseOn([8, 9, 10, 11, 12, 13, 14]);
    expect(currentStreak(state())).toBe(14);
    expect(state().freezes).toBe(1);
  });

  it('pays the same for a drill whatever the rating, and a little more for a review done once it is due', () => {
    progress.rateDrill('a', 'again');
    progress.rateDrill('b', 'teach');
    expect(state().xp).toBe(2 * XP.drill);
    // 'a' was rated Again, so it is due at once: practising it again is an on-time review.
    progress.rateDrill('a', 'solid');
    expect(state().xp).toBe(3 * XP.drill + XP.onTime);
    // 'b' is not due for a fortnight: an early repeat earns the plain amount.
    progress.rateDrill('b', 'solid');
    expect(state().xp).toBe(4 * XP.drill + XP.onTime);
  });

  it('counts points by day for the daily goal, and pays a lesson only once', () => {
    progress.markLessonRead('t');
    progress.markLessonRead('t');
    expect(state().xp).toBe(XP.lesson);
    expect(xpToday(state())).toBe(XP.lesson);
    vi.setSystemTime(START + DAY);
    expect(xpToday(state())).toBe(0);
    progress.award(DAILY_GOAL);
    expect(xpToday(state())).toBe(DAILY_GOAL);
    expect(levelOf(state().xp).name).toBe('Inquirer');
  });

  it('pays a quiz for right answers, with a bonus the first time a topic passes', () => {
    progress.recordQuiz('t', 0.7, 7);
    expect(state().xp).toBe(7 * XP.quizCorrect);
    progress.recordQuiz('t', 0.9, 9);
    expect(state().xp).toBe(16 * XP.quizCorrect + XP.quizPass);
    progress.recordQuiz('t', 1, 10);
    expect(state().xp).toBe(26 * XP.quizCorrect + XP.quizPass);
  });

  it('pays a section challenge in full once, and a little for passing it again', () => {
    progress.recordBoss('k', 0.5);
    expect(state().xp).toBe(0);
    progress.recordBoss('k', 0.9);
    expect(state().xp).toBe(XP.bossPass);
    progress.recordBoss('k', 1);
    expect(state().xp).toBe(XP.bossPass + XP.bossRepeat);
    expect(state().bosses.k).toBe(1);
  });
});
