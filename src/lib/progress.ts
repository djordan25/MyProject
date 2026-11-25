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
  /** Bible passages the learner is memorising, by reference. Ratings live in drills/confidence/review under verse:<ref>. */
  verses: string[];
  /** Real conversations the learner has logged, newest first. */
  conversations: Conversation[];
  /** Points earned in all. */
  xp: number;
  /** Points earned per local date (YYYY-MM-DD), for the daily goal. */
  xpDays: Record<string, number>;
  /** Streak freezes held. One is spent automatically to cover a single missed day. */
  freezes: number;
  /** Missed days that a freeze covered. */
  frozen: string[];
  /** Best score (0..1) in each section challenge, keyed trackId:sectionIndex. */
  bosses: Record<string, number>;
  /** Best score in each game, keyed by game (and topic where it has one). */
  games: Record<string, number>;
  /** The local date (YYYY-MM-DD) on which the daily warm-up was last finished. */
  warmUp?: string;
}

export interface Conversation {
  id: string;
  /** Local date, YYYY-MM-DD. */
  date: string;
  who: string;
  notes: string;
  /** Something to send, ask or pray for. */
  next: string;
  /** Objections that came up. */
  objectionIds: string[];
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

/** Points for each kind of work. Drills pay the same whatever the self-rating, so there is no reason to inflate it. */
export const XP = { lesson: 20, drill: 5, onTime: 3, quizCorrect: 2, quizPass: 15, gameCorrect: 2, bossPass: 40, bossRepeat: 10 } as const;
/** Points that complete a day's goal. */
export const DAILY_GOAL = 30;
/** Most streak freezes that can be held at once. */
export const MAX_FREEZES = 1;

export const LEVELS: { name: string; xp: number }[] = [
  { name: 'Inquirer', xp: 0 },
  { name: 'Hearer', xp: 100 },
  { name: 'Student', xp: 250 },
  { name: 'Reader', xp: 500 },
  { name: 'Respondent', xp: 900 },
  { name: 'Defender', xp: 1400 },
  { name: 'Advocate', xp: 2000 },
  { name: 'Apologist', xp: 2800 },
  { name: 'Teacher', xp: 3800 },
  { name: 'Sage', xp: 5000 },
];

/** The level a points total has reached, and how far it is towards the next. */
export function levelOf(xp: number): { index: number; name: string; floor: number; next: number | null; fraction: number } {
  let i = 0;
  while (i + 1 < LEVELS.length && xp >= LEVELS[i + 1].xp) i++;
  const floor = LEVELS[i].xp;
  const next = LEVELS[i + 1]?.xp ?? null;
  return { index: i, name: LEVELS[i].name, floor, next, fraction: next === null ? 1 : (xp - floor) / (next - floor) };
}

/** Points earned today. */
export const xpToday = (p: Progress, now = Date.now()): number => p.xpDays[localDate(now)] ?? 0;

/**
 * Days practised in a row, ending today or yesterday. A missed day a freeze covered keeps the run going but is not counted.
 * If yesterday was missed and a freeze is held, the run still shows, because the freeze will cover it at the next practice.
 */
export function currentStreak(p: Pick<Progress, 'days' | 'frozen' | 'freezes'>, now = Date.now()): number {
  const practised = new Set(p.days);
  const covered = new Set(p.frozen);
  let t = now;
  if (!practised.has(localDate(t))) {
    t -= DAY;
    if (!practised.has(localDate(t)) && !covered.has(localDate(t))) {
      if (p.freezes < 1 || !practised.has(localDate(t - DAY))) return 0;
      t -= DAY;
    }
  }
  let n = 0;
  for (; practised.has(localDate(t)) || covered.has(localDate(t)); t -= DAY) if (practised.has(localDate(t))) n++;
  return n;
}

/** Marks today as practised and adds points. Spends a freeze on a single missed day, and awards one for every seventh day of a run. */
function touch(s: Progress, gain = 0, now = Date.now()): Progress {
  const today = localDate(now);
  let { days, freezes, frozen } = s;
  if (days[days.length - 1] !== today) {
    const yesterday = localDate(now - DAY);
    if (days[days.length - 1] === localDate(now - 2 * DAY) && freezes > 0) {
      frozen = [...frozen, yesterday].slice(-60);
      freezes -= 1;
    }
    days = [...days, today].slice(-400);
    const run = currentStreak({ days, frozen, freezes }, now);
    if (run > 0 && run % 7 === 0) freezes = Math.min(MAX_FREEZES, freezes + 1);
  }
  if (!gain) return { ...s, days, freezes, frozen };
  const before = levelOf(s.xp).index;
  const xp = s.xp + gain;
  const after = levelOf(xp);
  gainEvent = { xp: gain, at: now, levelUp: after.index > before ? after.name : undefined };
  return { ...s, days, freezes, frozen, xp, xpDays: { ...s.xpDays, [today]: (s.xpDays[today] ?? 0) + gain } };
}

/** The most recent award of points, for the on-screen toast. */
export interface GainEvent {
  xp: number;
  at: number;
  /** The new level's name, if this award reached one. */
  levelUp?: string;
}
let gainEvent: GainEvent | null = null;

/** Whether the daily warm-up has been finished today. */
export function warmedUpToday(p: Progress, now = Date.now()): boolean {
  return p.warmUp === localDate(now);
}

/** Due if never mastered, marked for review, or its review date has arrived. */
export function isDue(p: Progress, objectionId: string, now = Date.now()): boolean {
  return p.drills[objectionId] !== 'got' || (p.review[objectionId]?.due ?? 0) <= now;
}

const KEY = 'apologetics-progress-v1';
const empty: Progress = {
  lessonsRead: {}, quizBest: {}, drills: {}, review: {}, notes: {}, confidence: {}, days: [], verses: [], conversations: [],
  xp: 0, xpDays: {}, freezes: MAX_FREEZES, frozen: [], bosses: {}, games: {},
};

function load(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...empty, ...JSON.parse(raw) } : empty;
  } catch {
    return empty;
  }
}

/** A blank record, for tests and for code that builds progress by hand. */
export const emptyProgress = (): Progress => ({ ...empty });

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
  markLessonRead: (topicId: string) => {
    if (state.lessonsRead[topicId]) return;
    set(touch({ ...state, lessonsRead: { ...state.lessonsRead, [topicId]: true } }, XP.lesson));
  },
  /** Records a topic quiz. Points: a little for each correct answer, and a bonus the first time the topic reaches the pass mark. */
  recordQuiz: (topicId: string, score: number, correct = 0) => {
    const prev = state.quizBest[topicId] ?? 0;
    const bonus = prev < SEAL_QUIZ && score >= SEAL_QUIZ ? XP.quizPass : 0;
    set(touch({ ...state, quizBest: { ...state.quizBest, [topicId]: Math.max(score, prev) } }, correct * XP.quizCorrect + bonus));
  },
  rateDrill: (objectionId: string, rating: DrillRating | Confidence) => {
    const level: Confidence = rating === 'got' ? 'solid' : rating === 'review' ? 'again' : rating;
    const now = Date.now();
    // A review done once it has come due earns a little more than a first attempt or an early repeat.
    const onTime = Boolean(state.drills[objectionId]) && (state.review[objectionId]?.due ?? 0) <= now;
    set(
      touch(
        {
          ...state,
          drills: { ...state.drills, [objectionId]: ratingOf(level) },
          confidence: { ...state.confidence, [objectionId]: level },
          review: { ...state.review, [objectionId]: nextReview(state.review[objectionId], level, now) },
        },
        XP.drill + (onTime ? XP.onTime : 0),
        now,
      ),
    );
  },
  /** Marks today's warm-up as done, so that home stops asking for it and leads with the path. */
  finishWarmUp: () => {
    const today = localDate(Date.now());
    if (state.warmUp !== today) set({ ...state, warmUp: today });
  },
  /** Adds points for practice that has no record of its own (the daily session's quiz, a mixed quiz). */
  award: (xp: number) => set(touch(state, xp)),
  /** Records a game: keeps the best score and adds the points earned. */
  recordGame: (key: string, score: number, xp: number) =>
    set(touch({ ...state, games: { ...state.games, [key]: Math.max(score, state.games[key] ?? 0) } }, xp)),
  /** Records a section challenge. The first pass pays in full; later passes pay a little. */
  recordBoss: (key: string, score: number) => {
    const prev = state.bosses[key] ?? 0;
    const xp = score >= BOSS_PASS ? (prev >= BOSS_PASS ? XP.bossRepeat : XP.bossPass) : 0;
    set(touch({ ...state, bosses: { ...state.bosses, [key]: Math.max(score, prev) } }, xp));
  },
  /** Logs a real conversation. Tagged objections already practised become due now, so practice follows real life. */
  addConversation: (c: Omit<Conversation, 'id'>) => {
    const now = Date.now();
    const review = { ...state.review };
    for (const id of c.objectionIds) if (state.drills[id]) review[id] = { due: now, streak: state.review[id]?.streak ?? 0 };
    set({ ...state, review, conversations: [{ ...c, id: String(now) }, ...state.conversations] });
  },
  removeConversation: (id: string) => set({ ...state, conversations: state.conversations.filter((c) => c.id !== id) }),
  /** Adds a Bible passage to the learner's memory verses, or removes it. Its rating is kept either way. */
  toggleVerse: (ref: string) =>
    set({ ...state, verses: state.verses.includes(ref) ? state.verses.filter((r) => r !== ref) : [...state.verses, ref] }),
  /** Marks today as a practice day (for practice that is not a drill rating or a topic quiz). */
  recordPractice: () => set(touch(state)),
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

const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

/** The latest award of points, or null if none has been made since the page loaded. */
export function useGainEvent(): GainEvent | null {
  return useSyncExternalStore(subscribe, () => gainEvent);
}

export function useProgress(): Progress {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => state,
  );
}

const LEVEL_SCORE: Record<Confidence, number> = { again: 0, shaky: 0.5, solid: 1, teach: 1 };

/** 0..1 for one objection: Solid or better counts in full, Shaky as half. Ratings from before confidence levels count as Solid or Again. */
export function objectionScore(p: Progress, objectionId: string): number {
  const c = p.confidence[objectionId];
  if (c) return LEVEL_SCORE[c];
  return p.drills[objectionId] === 'got' ? 1 : 0;
}

/** Practised, and last rated Again or Shaky. */
export const isWeak = (p: Progress, objectionId: string): boolean => Boolean(p.drills[objectionId]) && objectionScore(p, objectionId) < 1;

/** 0..1 readiness for a topic: lesson read, quiz best, and objection confidence — equally weighted. */
export function topicCompletion(p: Progress, topicId: string, objectionIds: string[]): number {
  const lesson = p.lessonsRead[topicId] ? 1 : 0;
  const quiz = p.quizBest[topicId] ?? 0;
  const drills = objectionIds.length ? objectionIds.reduce((n, id) => n + objectionScore(p, id), 0) / objectionIds.length : 0;
  return (lesson + quiz + drills) / 3;
}

/** Quiz score a topic needs, alongside the lesson and every objection at Solid or better, to earn its seal. */
export const SEAL_QUIZ = 0.8;
/** Score that passes a section challenge. */
export const BOSS_PASS = 0.8;
/** Days a review may run late before a topic's seal fades. */
export const FADE_AFTER_DAYS = 7;

/** A sealed topic whose reviews have been left overdue: the seal is shown faded until they are done. */
export function overdueReviews(p: Progress, objectionIds: string[], now = Date.now()): string[] {
  return objectionIds.filter((id) => p.drills[id] && (p.review[id]?.due ?? 0) < now - FADE_AFTER_DAYS * DAY);
}

/** A topic's seal: lesson read, quiz best at least 80%, and every objection rated Solid or better. */
export function topicSealed(p: Progress, topicId: string, objectionIds: string[]): boolean {
  return Boolean(p.lessonsRead[topicId]) && (p.quizBest[topicId] ?? 0) >= SEAL_QUIZ && objectionIds.every((id) => objectionScore(p, id) === 1);
}
