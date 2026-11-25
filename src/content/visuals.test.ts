import { describe, expect, it } from 'vitest';
import { getTopic, topics, type Topic } from '.';
import { CHARTS } from './charts';
import { MAPS, PLACES, ROUTES, placeNamed } from './maps';
import { layoutMap } from '../lib/mapLayout';
import { trailPoint } from '../lib/trail';

const textOf = (t: Topic): string => JSON.stringify(t);

describe('lesson maps', () => {
  it('shows only places the lesson names', () => {
    for (const [id, names] of Object.entries(MAPS)) {
      const topic = getTopic(id);
      expect(topic, id).toBeDefined();
      expect(names.length, id).toBeGreaterThanOrEqual(3);
      const text = textOf(topic!);
      for (const name of names) {
        const place = placeNamed(name);
        expect(place, name).toBeDefined();
        expect([name, ...(place!.also ?? [])].some((n) => text.includes(n)), `${id}: ${name}`).toBe(true);
      }
    }
  });

  it('keeps every place inside the drawn region, and every route between places on its map', () => {
    for (const p of PLACES) {
      expect(p.lat, p.name).toBeGreaterThan(2);
      expect(p.lat, p.name).toBeLessThan(60);
      expect(p.lon, p.name).toBeGreaterThan(2);
      expect(p.lon, p.name).toBeLessThan(86);
    }
    for (const [id, r] of Object.entries(ROUTES)) {
      expect(MAPS[id]).toContain(r.from);
      expect(MAPS[id]).toContain(r.to);
    }
  });

  it('frames all the places and keeps their numbered badges apart', () => {
    for (const [id, names] of Object.entries(MAPS)) {
      const v = layoutMap(names.map((n) => placeNamed(n)!));
      for (const p of v.pins) {
        expect(p.x, id).toBeGreaterThan(v.x);
        expect(p.x, id).toBeLessThan(v.x + v.w);
        expect(p.y, id).toBeGreaterThan(v.y);
        expect(p.y, id).toBeLessThan(v.y + v.h);
      }
      for (let i = 0; i < v.pins.length; i++) {
        for (let j = i + 1; j < v.pins.length; j++) {
          expect(Math.hypot(v.pins[i].bx - v.pins[j].bx, v.pins[i].by - v.pins[j].by), `${id}: ${v.pins[i].place.name}/${v.pins[j].place.name}`).toBeGreaterThan(6 * v.u);
        }
      }
    }
  });
});

describe('comparison charts', () => {
  it('rests every row on words found in the lesson it names', () => {
    for (const chart of CHARTS) {
      for (const id of chart.topics) expect(getTopic(id), `${chart.id}: ${id}`).toBeDefined();
      for (const row of chart.rows) {
        const topic = getTopic(row.topicId);
        expect(topic, row.topicId).toBeDefined();
        if ('also' in row && row.also) expect(JSON.stringify(topic).includes(row.also), `${chart.id}: ${row.label}`).toBe(true);
        const found = [...topic!.lesson.flatMap((s) => s.body), ...topic!.objections.map((o) => o.response), textOf(topic!)].some((t) => t.includes(row.quote));
        expect(found, `${chart.id}: ${row.label}`).toBe(true);
      }
      if (chart.kind === 'gap') for (const r of chart.rows) expect(r.from <= r.to && r.to <= chart.max, r.label).toBe(true);
    }
  });
});

describe('journey trail', () => {
  it('gives every stop its own place, winding back and forth', () => {
    const pts = topics.map((_, n) => trailPoint(n));
    expect(new Set(pts.map((p) => `${p.x},${p.y}`)).size).toBe(pts.length);
    expect(trailPoint(3).x).toBe(trailPoint(4).x);
    expect(trailPoint(4).y).toBeGreaterThan(trailPoint(3).y);
  });
});
