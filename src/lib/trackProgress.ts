import type { Track } from '../content';
import { topicsInTrack } from '../content';
import { topicCompletion, topicSealed, type Progress } from './progress';

export function trackCompletion(p: Progress, track: Track): number {
  const ts = topicsInTrack(track);
  if (!ts.length) return 0;
  return ts.reduce((sum, t) => sum + topicCompletion(p, t.id, t.objections.map((o) => o.id)), 0) / ts.length;
}

/** How many of a track's topics (sub-tracks included) have earned their seal. */
export function trackSeals(p: Progress, track: Track): { sealed: number; total: number } {
  const ts = topicsInTrack(track);
  return { sealed: ts.filter((t) => topicSealed(p, t.id, t.objections.map((o) => o.id))).length, total: ts.length };
}
