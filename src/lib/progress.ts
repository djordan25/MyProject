import { useSyncExternalStore } from 'react';

export type DrillRating = 'got' | 'review';

export interface Progress {
  lessonsRead: Record<string, boolean>;
  /** Best quiz score per topic, as a fraction 0..1. */
  quizBest: Record<string, number>;
  drills: Record<string, DrillRating>;
  /** Spaced-repetition state per objection: when it is next due, and how many times in a row it was known. */
  review: Record<string, ReviewState>;
}

export interface ReviewState {
  due: number;
  streak: number;
}

const DAY = 24 * 60 * 60 * 1000;
/** Days until the next review after 1, 2, 3… correct answers in a row. */
const INTERVALS = [1, 3, 7, 14, 30];

export function nextReview(prev: ReviewState | undefined, rating: DrillRating, now: number): ReviewState {
  if (rating === 'review') return { due: now, streak: 0 };
  const streak = (prev?.streak ?? 0) + 1;
  return { due: now + INTERVALS[Math.min(streak, INTERVALS.length) - 1] * DAY, streak };
}

/** Due if never mastered, marked for review, or its review date has arrived. */
export function isDue(p: Progress, objectionId: string, now = Date.now()): boolean {
  return p.drills[objectionId] !== 'got' || (p.review[objectionId]?.due ?? 0) <= now;
}

const KEY = 'apologetics-progress-v1';
const empty: Progress = { lessonsRead: {}, quizBest: {}, drills: {}, review: {} };

function load(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...empty, ...JSON.parse(raw) } : empty;
  } catch {
    return empty;
  }
}

let state = load();
const listeners = new Set<() => void>();

function set(next: Progress) {
  state = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* storage unavailable (private mode) — keep in memory */
  }
  listeners.forEach((l) => l());
}

export const progress = {
  markLessonRead: (topicId: string) => set({ ...state, lessonsRead: { ...state.lessonsRead, [topicId]: true } }),
  recordQuiz: (topicId: string, score: number) =>
    set({ ...state, quizBest: { ...state.quizBest, [topicId]: Math.max(score, state.quizBest[topicId] ?? 0) } }),
  rateDrill: (objectionId: string, rating: DrillRating) =>
    set({
      ...state,
      drills: { ...state.drills, [objectionId]: rating },
      review: { ...state.review, [objectionId]: nextReview(state.review[objectionId], rating, Date.now()) },
    }),
  reset: () => set(empty),
};

export function useProgress(): Progress {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => state,
  );
}

/** 0..1 completion for a topic: lesson read, quiz best, share of objections mastered — equally weighted. */
export function topicCompletion(p: Progress, topicId: string, objectionIds: string[]): number {
  const lesson = p.lessonsRead[topicId] ? 1 : 0;
  const quiz = p.quizBest[topicId] ?? 0;
  const drills = objectionIds.length ? objectionIds.filter((id) => p.drills[id] === 'got').length / objectionIds.length : 0;
  return (lesson + quiz + drills) / 3;
}
