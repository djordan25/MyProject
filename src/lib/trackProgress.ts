import type { Track } from '../content';
import { topicsInTrack } from '../content';
import { topicCompletion, type Progress } from './progress';

export function trackCompletion(p: Progress, track: Track): number {
  const ts = topicsInTrack(track);
  if (!ts.length) return 0;
  return ts.reduce((sum, t) => sum + topicCompletion(p, t.id, t.objections.map((o) => o.id)), 0) / ts.length;
}
