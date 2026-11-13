import { describe, expect, it } from 'vitest';
import { topics } from '.';

describe('content', () => {
  it('has unique ids across topics, objections and questions', () => {
    const ids = topics.flatMap((t) => [t.id, ...t.objections.map((o) => o.id), ...t.quiz.map((q) => q.id)]);
    expect(new Set(ids).size).toBe(ids.length);
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
  }
});
