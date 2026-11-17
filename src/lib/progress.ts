import { useSyncExternalStore } from 'react';

export type DrillRating = 'got' | 'review';
/** How ready the learner feels to answer an objection in a real conversation. */
export type Confidence = 'again' | 'shaky' | 'solid' | 'teach';

export const CONFIDENCE: { id: Confidence; label: string }[] = [
  { id: 'again', label: 'Again' },
  { id: 'shaky', label: 'Shaky' },
  { id: 'solid', label: 'Solid' },
  { id: 'teach', label: 'Could teach it' },
];

/** Again and Shaky still need review; Solid and Could teach it count as mastered. */
export const ratingOf = (c: Confidence): DrillRating => (c === 'solid' || c === 'teach' ? 'got' : 'review');

export interface Progress {
  lessonsRead: Record<string, boolean>;
  /** Best quiz score per topic, as a fraction 0..1. */
  quizBest: Record<string, number>;
  drills: Record<string, DrillRating>;
  /** Spaced-repetition state per objection: when it is next due, and how many times in a row it was known. */
  review: Record<string, ReviewState>;
  /** The learner's own notes, per topic. */
  notes: Record<string, string>;
  /** The latest confidence rating per objection. */
  confidence: Record<string, Confidence>;
  /** Local dates (YYYY-MM-DD) on which the learner practised, most recent last. */
  days: string[];
}

export interface ReviewState {
  due: number;
  streak: number;
}

const DAY = 24 * 60 * 60 * 1000;
/** Days until the next review after 1, 2, 3… correct answers in a row. */
const INTERVALS = [1, 3, 7, 14, 30];

/**
 * When an objection comes back. Again: now. Shaky: tomorrow, run reset. Solid: the next step of 1, 3, 7, 14, 30 days.
 * Could teach it: skips ahead to at least 14 days. A plain 'got' / 'review' counts as Solid / Again.
 */
export function nextReview(prev: ReviewState | undefined, rating: DrillRating | Confidence, now: number): ReviewState {
  const level: Confidence = rating === 'got' ? 'solid' : rating === 'review' ? 'again' : rating;
  if (level === 'again') return { due: now, streak: 0 };
  if (level === 'shaky') return { due: now + DAY, streak: 0 };
  const prior = prev?.streak ?? 0;
  const streak = level === 'teach' ? Math.max(prior + 2, 4) : prior + 1;
  return { due: now + INTERVALS[Math.min(streak, INTERVALS.length) - 1] * DAY, streak };
}

/** Whole days until the next review if the learner picks this level now (0 = today). */
export function daysUntilReview(prev: ReviewState | undefined, level: Confidence): number {
  return Math.round(nextReview(prev, level, 0).due / DAY);
}

export function localDate(t: number): string {
  const d = new Date(t);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

/** How many of the last seven days (today included) the learner practised on. */
export function daysPractised(p: Progress, now = Date.now()): number {
  const week = new Set(Array.from({ length: 7 }, (_, i) => localDate(now - i * DAY)));
  return p.days.filter((d) => week.has(d)).length;
}

const withToday = (days: string[]): string[] => {
  const today = localDate(Date.now());
  return days[days.length - 1] === today ? days : [...days, today].slice(-60);
};

/** Due if never mastered, marked for review, or its review date has arrived. */
export function isDue(p: Progress, objectionId: string, now = Date.now()): boolean {
  return p.drills[objectionId] !== 'got' || (p.review[objectionId]?.due ?? 0) <= now;
}

const KEY = 'apologetics-progress-v1';
const empty: Progress = { lessonsRead: {}, quizBest: {}, drills: {}, review: {}, notes: {}, confidence: {}, days: [] };

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
    set({
      ...state,
      quizBest: { ...state.quizBest, [topicId]: Math.max(score, state.quizBest[topicId] ?? 0) },
      days: withToday(state.days),
    }),
  rateDrill: (objectionId: string, rating: DrillRating | Confidence) => {
    const level: Confidence = rating === 'got' ? 'solid' : rating === 'review' ? 'again' : rating;
    set({
      ...state,
      drills: { ...state.drills, [objectionId]: ratingOf(level) },
      confidence: { ...state.confidence, [objectionId]: level },
      review: { ...state.review, [objectionId]: nextReview(state.review[objectionId], level, Date.now()) },
      days: withToday(state.days),
    });
  },
  /** Marks today as a practice day (for practice that is not a drill rating or a topic quiz). */
  recordPractice: () => set({ ...state, days: withToday(state.days) }),
  setNote: (topicId: string, text: string) => set({ ...state, notes: { ...state.notes, [topicId]: text } }),
  reset: () => set(empty),
  /** Current progress as a JSON string, for backing up or moving to another device. */
  exportJson: () => JSON.stringify(state),
  /** Replaces progress with a backup made by exportJson. Returns false if the text is not a valid backup. */
  importJson: (text: string): boolean => {
    try {
      const data = JSON.parse(text);
      if (!data || typeof data !== 'object' || typeof data.drills !== 'object' || typeof data.lessonsRead !== 'object') return false;
      set({ ...empty, ...data });
      return true;
    } catch {
      return false;
    }
  },
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
