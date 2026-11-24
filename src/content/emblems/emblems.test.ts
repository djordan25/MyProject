import { describe, expect, it } from 'vitest';
import { topics } from '..';
import { TIMELINE } from '../games';
import { emblems } from '.';
import { eraOf, gapHeight, inOrder, yearsBetween } from '../../lib/eras';

describe('lesson emblems', () => {
  it('gives every lesson an emblem, and no emblem to a lesson that does not exist', () => {
    const ids = topics.map((t) => t.id);
    expect(ids.filter((id) => !emblems[id])).toEqual([]);
    expect(Object.keys(emblems).filter((id) => !ids.includes(id))).toEqual([]);
  });

  it('uses only plain shapes coloured by the five emblem classes', () => {
    for (const [id, art] of Object.entries(emblems)) {
      for (const [, tag] of art.matchAll(/<\/?([a-zA-Z]+)/g)) expect(['path', 'circle', 'rect', 'line', 'ellipse', 'polygon', 'polyline'], id).toContain(tag);
      for (const [, name] of art.matchAll(/\s([a-zA-Z-]+)=/g)) expect(name, id).toMatch(/^(class|d|cx|cy|r|rx|ry|x|y|x1|y1|x2|y2|width|height|points|transform)$/);
      for (const [, cls] of art.matchAll(/class="([^"]*)"/g)) expect(['e-line', 'e-ink', 'e-accent', 'e-accent-line', 'e-soft'], id).toContain(cls);
    }
  });

  it('draws no two lessons alike', () => {
    const arts = Object.values(emblems).map((a) => a.replace(/\s+/g, ' ').trim());
    expect(new Set(arts).size).toBe(arts.length);
  });
});

describe('time axis', () => {
  it('counts years across the turn of the era without a year 0', () => {
    expect(yearsBetween(-1, 1)).toBe(1);
    expect(yearsBetween(-701, 70)).toBe(770);
    expect(yearsBetween(325, 380)).toBe(55);
  });

  it('gives longer gaps more room, within a limit', () => {
    expect(gapHeight(1000)).toBeGreaterThan(gapHeight(10));
    expect(gapHeight(1_000_000)).toBeLessThanOrEqual(56);
  });

  it('puts every event in a period, in order', () => {
    const sorted = inOrder(TIMELINE);
    for (let i = 1; i < sorted.length; i++) expect(sorted[i].year).toBeGreaterThan(sorted[i - 1].year);
    expect(eraOf(-701).id).toBe('ot');
    expect(eraOf(33).id).toBe('first');
    expect(eraOf(632).id).toBe('islam');
    expect(eraOf(1961).id).toBe('modern');
  });
});
