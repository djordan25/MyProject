import { foundations } from './foundations';
import { islamA } from './islamA';
import { islamB } from './islamB';
import { sects } from './sects';
import { additions } from './additions';

/**
 * One drawn emblem per lesson, keyed by topic id, so that each lesson has a picture of its own to remember it by.
 * Each value is the inner markup of an SVG with viewBox "0 0 64 64". Shapes take their colour from five classes:
 * e-line (ink outline), e-ink (ink fill), e-accent (rubric fill), e-accent-line (rubric outline), e-soft (pale fill).
 */
export const emblems: Record<string, string> = { ...foundations, ...islamA, ...islamB, ...sects, ...additions };
