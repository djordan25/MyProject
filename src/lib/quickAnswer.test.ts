import { describe, expect, it } from 'vitest';
import { quickAnswers, SAID_EXAMPLES, terms } from './quickAnswer';

describe('they just said', () => {
  it('reduces a sentence to its content words', () => {
    expect(terms('The disciples were just hallucinating!')).toEqual(['disci', 'hallu']);
  });

  it('finds the matching objection from a rough paraphrase', () => {
    expect(quickAnswers('I think the disciples were hallucinating')[0].line).toBe('The disciples just hallucinated.');
    const relativism = quickAnswers('well thats true for you but not for me')[0];
    expect(relativism.topicId).toBe('truth-and-relativism');
    expect(relativism.kind).toBe('objection');
    expect(quickAnswers('ok but who made God then')[0].line).toBe('If everything needs a cause, then who caused God?');
  });

  it('returns an answer for every example, and nothing for filler words', () => {
    for (const e of SAID_EXAMPLES) expect(quickAnswers(e).length, e).toBeGreaterThan(0);
    expect(quickAnswers('but you just do not')).toEqual([]);
  });
});
