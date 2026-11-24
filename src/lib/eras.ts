import type { TimelineEvent } from '../content/games';

/** Broad periods used to band the timeline. `to` is exclusive. */
export const ERAS = [
  { id: 'ot', title: 'Before Christ', to: 1 },
  { id: 'first', title: 'The first century', to: 100 },
  { id: 'church', title: 'The early church', to: 600 },
  { id: 'islam', title: 'The rise of Islam', to: 900 },
  { id: 'medieval', title: 'The Middle Ages', to: 1500 },
  { id: 'modern', title: 'The modern era', to: Infinity },
] as const;

export type Era = (typeof ERAS)[number];

export const eraOf = (year: number): Era => ERAS.find((e) => year < e.to) ?? ERAS[ERAS.length - 1];

/** Years between two dates, allowing for there being no year 0. */
export const yearsBetween = (a: number, b: number): number => Math.abs(b - a) - (Math.min(a, b) < 0 && Math.max(a, b) > 0 ? 1 : 0);

/**
 * Space to leave above an event, in pixels, for the gap since the one before. The scale is compressed (logarithmic),
 * so that a year and a thousand years both fit on one screen while the longer gap still looks longer.
 */
export const gapHeight = (years: number): number => Math.round(Math.min(56, 6 + 16 * Math.log10(1 + years)));

export const gapLabel = (years: number): string =>
  years >= 1000 ? `${(years / 1000).toFixed(1).replace('.0', '')} thousand years` : years === 1 ? '1 year' : `${years} years`;

export const inOrder = (events: TimelineEvent[]): TimelineEvent[] => [...events].sort((a, b) => a.year - b.year);
