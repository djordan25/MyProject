import { describe, expect, it } from 'vitest';
import { getTopic, topics } from '../content';
import { ARGUMENTS, TIMELINE, VERDICTS } from '../content/games';
import { ask, chainOf, drawHand, exchangesOf, HAND, missesAllowed, snippet } from './games';

describe('game material', () => {
  it('ties every argument to a real topic, with a known verdict and a unique id', () => {
    const verdicts = VERDICTS.map((v) => v.id);
    for (const a of ARGUMENTS) {
      expect(getTopic(a.topicId), a.id).toBeDefined();
      expect(verdicts, a.id).toContain(a.verdict);
      expect(a.why.length, a.id).toBeGreaterThan(20);
    }
    expect(new Set(ARGUMENTS.map((a) => a.id)).size).toBe(ARGUMENTS.length);
  });

  it('has a fair share of each verdict, so no answer is a safe guess', () => {
    for (const v of VERDICTS) expect(ARGUMENTS.filter((a) => a.verdict === v.id).length / ARGUMENTS.length, v.id).toBeGreaterThan(0.2);
  });

  it('ties every timeline event to a real topic, with a unique id and year', () => {
    for (const e of TIMELINE) expect(getTopic(e.topicId), e.id).toBeDefined();
    expect(new Set(TIMELINE.map((e) => e.id)).size).toBe(TIMELINE.length);
    expect(new Set(TIMELINE.map((e) => e.year)).size).toBe(TIMELINE.length);
  });

  it('deals timeline hands whose dates are clearly apart', () => {
    for (let n = 0; n < 50; n++) {
      const years = drawHand().map((e) => e.year).sort((a, b) => a - b);
      expect(years).toHaveLength(HAND);
      for (let i = 1; i < years.length; i++) expect(years[i] - years[i - 1]).toBeGreaterThanOrEqual(5);
    }
  });
});

describe('conversation games', () => {
  it('takes the opening of an answer in whole sentences', () => {
    expect(snippet('It may. Many historians think these writers spoke loosely of the Arabs as his people, and that is one reading. A third sentence.')).toBe(
      'It may. Many historians think these writers spoke loosely of the Arabs as his people, and that is one reading.',
    );
    expect(snippet('x'.repeat(400)).length).toBeLessThanOrEqual(171);
  });

  it('turns every topic into turns, each with distinct options that include the right one', () => {
    for (const topic of topics) {
      const pool = exchangesOf(topic);
      expect(pool.length, topic.id).toBeGreaterThanOrEqual(topic.objections.length);
      for (const e of pool) {
        const q = ask(e, pool, 3);
        expect(q.options, e.id).toHaveLength(3);
        expect(new Set(q.options).size, e.id).toBe(3);
        expect(q.options[q.answer], e.id).toBe(snippet(e.answer));
      }
    }
  });

  it('follows one line of comebacks from an objection', () => {
    const topic = getTopic('islam-outside-writers')!;
    const chain = chainOf(topic.objections[0], topic);
    expect(chain[0].prompt).toBe(topic.objections[0].objection);
    expect(chain.length).toBeGreaterThan(1);
    expect(chain.map((e) => e.depth)).toEqual(chain.map((_, i) => i));
  });

  it('allows two misses in ten at an 80% pass mark', () => {
    expect(missesAllowed(10, 0.8)).toBe(2);
    expect(missesAllowed(5, 0.8)).toBe(1);
  });
});
