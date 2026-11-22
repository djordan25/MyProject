import { describe, expect, it } from 'vitest';
import { ICONS } from './iconRegistry';
import { iconFor } from './icons';
import { tracks, topics } from '../content';

describe('icon registry', () => {
  it('has every icon a topic or track maps to', () => {
    for (const t of [...topics, ...tracks]) expect(ICONS[iconFor(t.icon)], `${t.id} → ${iconFor(t.icon)}`).toBeDefined();
  });
});
