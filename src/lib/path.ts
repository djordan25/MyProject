import { getTopic, tracks, trackForTopic, type Topic, type Track, type TrackSection } from '../content';
import { DOUBTS_FIRST, getAudience, type Audience } from './profile';
import { BOSS_PASS, SEAL_QUIZ, type Progress } from './progress';

/**
 * The guided path. Each track is a line of steps: its topics in order, with a section challenge after each section.
 * A step opens when everything before it in the track is cleared. Sub-tracks are separate paths.
 */

/** Quiz score that clears a topic by itself: the learner already knows the material. */
export const TEST_OUT = 0.9;

/** Lesson read, every objection attempted and the quiz passed; or the quiz passed at the test-out mark. */
export function topicCleared(p: Progress, topic: Topic): boolean {
  const best = p.quizBest[topic.id] ?? 0;
  if (best >= TEST_OUT) return true;
  return Boolean(p.lessonsRead[topic.id]) && best >= SEAL_QUIZ && topic.objections.every((o) => p.drills[o.id]);
}

/** Any work already done on the topic. Work begun before the path existed is never locked away. */
export function topicStarted(p: Progress, topic: Topic): boolean {
  return Boolean(p.lessonsRead[topic.id]) || p.quizBest[topic.id] !== undefined || topic.objections.some((o) => p.drills[o.id]);
}

export type StepState = 'cleared' | 'open' | 'locked';

export interface TopicStep {
  kind: 'topic';
  topic: Topic;
  state: StepState;
}

export interface BossStep {
  kind: 'boss';
  /** Key under which the best score is stored: trackId:sectionIndex. */
  key: string;
  track: Track;
  sectionIndex: number;
  section: TrackSection;
  state: StepState;
  /** Best score so far, 0..1. */
  best: number;
}

export type PathStep = TopicStep | BossStep;

export const bossKey = (track: Track, sectionIndex: number): string => `${track.id}:${sectionIndex}`;

const sectionTopics = (section: TrackSection): Topic[] => section.topicIds.map((id) => getTopic(id)).filter((t): t is Topic => Boolean(t));

/** Every step of a track's own path, in order, grouped by section. */
export function trackPath(p: Progress, track: Track, audience: Audience | null = getAudience()): PathStep[][] {
  // Someone working through their own doubts may start with the hardest questions.
  const free = audience === 'doubts' ? DOUBTS_FIRST : [];
  let open = true;
  return track.sections.map((section, sectionIndex) => {
    const steps: PathStep[] = [];
    let sectionCleared = true;
    for (const topic of sectionTopics(section)) {
      const cleared = topicCleared(p, topic);
      steps.push({ kind: 'topic', topic, state: cleared ? 'cleared' : open || topicStarted(p, topic) || free.includes(topic.id) ? 'open' : 'locked' });
      open = open && cleared;
      sectionCleared = sectionCleared && cleared;
    }
    const key = bossKey(track, sectionIndex);
    const best = p.bosses[key] ?? 0;
    const passed = best >= BOSS_PASS;
    steps.push({ kind: 'boss', key, track, sectionIndex, section, best, state: passed ? 'cleared' : sectionCleared && (open || best > 0) ? 'open' : 'locked' });
    open = open && passed;
    return steps;
  });
}

/** The first step of a track that is not yet cleared, or undefined when the whole track is done. */
export function nextStep(p: Progress, track: Track): PathStep | undefined {
  return trackPath(p, track).flat().find((s) => s.state !== 'cleared');
}

export const stepTitle = (s: PathStep): string => (s.kind === 'topic' ? s.topic.title : `${s.section.title}: section challenge`);
export const stepLink = (s: PathStep): string => (s.kind === 'topic' ? `/topic/${s.topic.id}` : `/boss/${s.track.id}/${s.sectionIndex}`);

/** Where a topic stands on its track's path, the step that is holding it back if it is locked, and the step after it. */
export function topicAccess(p: Progress, topicId: string): { state: StepState; blocker?: PathStep; next?: PathStep; track?: Track } {
  const track = trackForTopic(topicId);
  if (!track) return { state: 'open' };
  const steps = trackPath(p, track).flat();
  const i = steps.findIndex((s) => s.kind === 'topic' && s.topic.id === topicId);
  if (i < 0) return { state: 'open', track };
  const state = steps[i].state;
  return { state, track, blocker: state === 'locked' ? steps.slice(0, i).find((s) => s.state !== 'cleared') : undefined, next: steps[i + 1] };
}

/** Topics the learner cannot open yet, across every track. */
export function lockedTopicIds(p: Progress, audience: Audience | null = getAudience()): Set<string> {
  const ids = new Set<string>();
  for (const track of tracks) for (const s of trackPath(p, track, audience).flat()) if (s.kind === 'topic' && s.state === 'locked') ids.add(s.topic.id);
  return ids;
}

const RANKS = ['Not started', 'Novice', 'Apprentice', 'Journeyman', 'Master'] as const;

/** A track's rank, from the share of its own steps that are cleared. */
export function trackRank(p: Progress, track: Track): { name: (typeof RANKS)[number]; cleared: number; total: number } {
  const steps = trackPath(p, track).flat();
  const cleared = steps.filter((s) => s.state === 'cleared').length;
  const f = steps.length ? cleared / steps.length : 0;
  return { name: RANKS[f === 0 ? 0 : f < 1 / 3 ? 1 : f < 2 / 3 ? 2 : f < 1 ? 3 : 4], cleared, total: steps.length };
}
