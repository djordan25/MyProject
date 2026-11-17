import { useSyncExternalStore } from 'react';
import { getTopic, topLevelTracks, topicsInTrack, type Topic, type Track } from '../content';

/** Who the learner is preparing to talk with; shapes the order of tracks, topics and daily practice. */
export type Audience = 'skeptic' | 'muslim' | 'doubts' | 'all';

export const AUDIENCES: { id: Audience; label: string; detail: string; focus: string }[] = [
  { id: 'skeptic', label: 'A sceptical friend', detail: 'Truth, God, the Bible and the resurrection, in that order.', focus: 'a sceptical friend' },
  { id: 'muslim', label: 'A Muslim friend or coworker', detail: 'The Islam course first, then the foundations.', focus: 'a Muslim friend or coworker' },
  { id: 'doubts', label: 'My own questions and doubts', detail: 'The hardest questions first: suffering, hard passages, the evidence.', focus: 'your own questions and doubts' },
  { id: 'all', label: 'Show me everything', detail: 'All tracks in their usual order.', focus: 'every track, in order' },
];

/** Topics to put first for someone working through their own doubts. */
const DOUBTS_FIRST = ['problem-of-evil', 'hard-passages', 'existence-of-god', 'resurrection', 'reliability-of-scripture'];

const KEY = 'apologetics-audience';

function load(): Audience | null {
  try {
    const v = localStorage.getItem(KEY);
    return AUDIENCES.some((a) => a.id === v) ? (v as Audience) : null;
  } catch {
    return null;
  }
}

let audience = load();
const listeners = new Set<() => void>();

export function setAudience(a: Audience): void {
  audience = a;
  try {
    localStorage.setItem(KEY, a);
  } catch {
    /* storage unavailable: the choice lasts for this visit only */
  }
  listeners.forEach((l) => l());
}

/** The learner's choice, or null before they have made one. */
export function useAudience(): Audience | null {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => audience,
  );
}

/** Top-level tracks, the one that matters most for this audience first. */
export function orderedTracks(a: Audience | null): Track[] {
  if (a !== 'muslim') return topLevelTracks;
  return [...topLevelTracks.filter((t) => t.id === 'islam'), ...topLevelTracks.filter((t) => t.id !== 'islam')];
}

/** Every topic in the order this audience should meet them. */
export function orderedTopics(a: Audience | null): Topic[] {
  const all = orderedTracks(a).flatMap((t) => topicsInTrack(t));
  if (a !== 'doubts') return all;
  const first = DOUBTS_FIRST.map((id) => getTopic(id)).filter((t): t is Topic => Boolean(t));
  return [...first, ...all.filter((t) => !DOUBTS_FIRST.includes(t.id))];
}
