import { describe, expect, it } from 'vitest';
import { topics } from '../content';
import { pieces, placeVisuals, sectionChecks, sectionText } from './lessonSteps';

describe('key lines', () => {
  it('are copied word for word from their own section, and are short', () => {
    for (const t of topics) {
      for (const s of t.lesson) {
        if (!s.keyLine) continue;
        expect([...s.body, ...(s.argument ?? [])].some((p) => p.includes(s.keyLine!)), `${t.id}: ${s.heading}`).toBe(true);
        expect(s.keyLine.length, `${t.id}: ${s.heading}`).toBeLessThanOrEqual(175);
      }
    }
  });

  it('open most sections', () => {
    const all = topics.flatMap((t) => t.lesson);
    expect(all.filter((s) => s.keyLine).length / all.length).toBeGreaterThan(0.9);
  });
});

describe('quick checks', () => {
  it('give a section only a question from its own topic, and use no question twice', () => {
    for (const t of topics) {
      const checks = sectionChecks(t);
      expect(checks).toHaveLength(t.lesson.length);
      const used = checks.filter(Boolean).map((q) => q!.id);
      expect(new Set(used).size).toBe(used.length);
      for (const id of used) expect(t.quiz.some((q) => q.id === id)).toBe(true);
    }
  });
});

describe('pictures', () => {
  it('are placed with a section of the lesson', () => {
    for (const t of topics) {
      const v = placeVisuals(t);
      for (const at of [v.map, v.timeline, ...v.charts.map((c) => c.at)]) {
        if (at === undefined) continue;
        expect(at).toBeGreaterThanOrEqual(0);
        expect(at).toBeLessThan(t.lesson.length);
      }
    }
  });
});

describe('quotation cards', () => {
  it('lift out scripture that ends its sentence and leave the rest as prose', () => {
    const out = pieces('Jesus said it plainly: “I am the way and the truth and the life. No one comes to the Father except through Me” (John 14:6). So the question is whether he was right.');
    expect(out.map((p) => p.kind)).toEqual(['text', 'quote', 'text']);
    expect(out[1]).toMatchObject({ quote: 'I am the way and the truth and the life. No one comes to the Father except through Me', cite: 'John 14:6' });
  });

  it('keep a quotation that sits in mid-sentence, and one that is not scripture', () => {
    expect(pieces('The verse says “Let the People of the Gospel judge by what Allah has revealed therein” (Quran 5:47), so a Muslim has reason to read it.')).toHaveLength(1);
    expect(pieces('One historian called it “the most certain fact about the historical figure in question” (a lecture, 1999).')).toHaveLength(1);
  });

  it('never drop or change a word of the lesson', () => {
    const squash = (t: string) => t.replace(/[\s“”().:!]/g, '');
    for (const t of topics) {
      for (const s of t.lesson) {
        for (const para of s.body) {
          const back = pieces(para).map((p) => (p.kind === 'quote' ? p.quote + p.cite : (p.lead ?? '') + p.text)).join('');
          expect(squash(back), `${t.id}: ${s.heading}`).toBe(squash(para));
        }
      }
    }
    expect(sectionText(topics[0].lesson[0]).length).toBeGreaterThan(0);
  });
});
