import { describe, expect, it } from 'vitest';
import { getTrack, type Topic } from '../content';
import { currentStreak, emptyProgress, levelOf, localDate, type Progress } from './progress';
import { lockedTopicIds, TEST_OUT, topicAccess, topicCleared, trackPath, trackRank } from './path';

const DAY = 24 * 60 * 60 * 1000;
const foundations = getTrack('foundations')!;
const firstSection = trackPath(emptyProgress(), foundations, null)[0];
const topicsOf = (steps: ReturnType<typeof trackPath>[number]): Topic[] => steps.flatMap((s) => (s.kind === 'topic' ? [s.topic] : []));

/** Progress with these topics cleared the long way: lesson, every objection tried, quiz at 80%. */
function cleared(topics: Topic[], base: Progress = emptyProgress()): Progress {
  const p = { ...base, lessonsRead: { ...base.lessonsRead }, quizBest: { ...base.quizBest }, drills: { ...base.drills } };
  for (const t of topics) {
    p.lessonsRead[t.id] = true;
    p.quizBest[t.id] = 0.8;
    for (const o of t.objections) p.drills[o.id] = 'review';
  }
  return p;
}

describe('the guided path', () => {
  it('opens only the first step of a track to begin with', () => {
    const steps = trackPath(emptyProgress(), foundations, null).flat();
    expect(steps[0].state).toBe('open');
    expect(steps.slice(1).every((s) => s.state === 'locked')).toBe(true);
  });

  it('clears a topic by lesson, drills and an 80% quiz, or by the quiz alone at the test-out mark', () => {
    const t = topicsOf(firstSection)[0];
    expect(topicCleared(emptyProgress(), t)).toBe(false);
    expect(topicCleared(cleared([t]), t)).toBe(true);
    expect(topicCleared({ ...emptyProgress(), quizBest: { [t.id]: 0.8 } }, t)).toBe(false);
    expect(topicCleared({ ...emptyProgress(), quizBest: { [t.id]: TEST_OUT } }, t)).toBe(true);
  });

  it('puts a section challenge after the section, and holds the next section until it is passed', () => {
    const done = cleared(topicsOf(firstSection));
    const sections = trackPath(done, foundations, null);
    const boss = sections[0][sections[0].length - 1];
    expect(boss.kind).toBe('boss');
    expect(boss.state).toBe('open');
    expect(sections[1][0].state).toBe('locked');
    const passed = { ...done, bosses: { [boss.kind === 'boss' ? boss.key : '']: 0.9 } };
    expect(trackPath(passed, foundations, null)[1][0].state).toBe('open');
  });

  it('never locks a topic the learner has already begun', () => {
    const later = topicsOf(trackPath(emptyProgress(), foundations, null)[2])[0];
    const p = { ...emptyProgress(), lessonsRead: { [later.id]: true } };
    expect(topicAccess(p, later.id).state).toBe('open');
    expect(lockedTopicIds(p, null).has(later.id)).toBe(false);
  });

  it('names the step that is holding a locked topic back', () => {
    const second = topicsOf(trackPath(emptyProgress(), foundations, null)[1])[0];
    const access = topicAccess(emptyProgress(), second.id);
    expect(access.state).toBe('locked');
    expect(access.blocker?.kind).toBe('topic');
  });

  it('opens the hardest questions at once for someone working through doubts', () => {
    expect(lockedTopicIds(emptyProgress(), null).has('problem-of-evil')).toBe(true);
    expect(lockedTopicIds(emptyProgress(), 'doubts').has('problem-of-evil')).toBe(false);
  });

  it('ranks a track by the share of steps cleared', () => {
    expect(trackRank(emptyProgress(), foundations).name).toBe('Not started');
    expect(trackRank(cleared(topicsOf(firstSection)), foundations).name).toBe('Novice');
  });
});

describe('levels and streaks', () => {
  it('finds the level for a points total', () => {
    expect(levelOf(0).name).toBe('Inquirer');
    expect(levelOf(100).name).toBe('Hearer');
    expect(levelOf(175).fraction).toBeCloseTo(0.5);
    expect(levelOf(999999).next).toBeNull();
  });

  it('counts days in a row, ending today or yesterday', () => {
    const now = Date.UTC(2026, 5, 15, 12);
    const day = (n: number) => localDate(now - n * DAY);
    expect(currentStreak({ days: [day(2), day(1), day(0)], frozen: [], freezes: 0 }, now)).toBe(3);
    expect(currentStreak({ days: [day(2), day(1)], frozen: [], freezes: 0 }, now)).toBe(2);
    expect(currentStreak({ days: [day(3), day(2)], frozen: [], freezes: 0 }, now)).toBe(0);
  });

  it('bridges one missed day with a freeze, without counting it', () => {
    const now = Date.UTC(2026, 5, 15, 12);
    const day = (n: number) => localDate(now - n * DAY);
    // Yesterday missed, a freeze still held: the run is kept for now.
    expect(currentStreak({ days: [day(3), day(2)], frozen: [], freezes: 1 }, now)).toBe(2);
    // A freeze already spent on the missed day.
    expect(currentStreak({ days: [day(3), day(2), day(0)], frozen: [day(1)], freezes: 0 }, now)).toBe(3);
  });
});
