import { topLevelTracks, topicsInTrack, type Objection, type QuizQuestion, type Topic } from '../content';
import { isDue, type Progress } from './progress';
import { shuffle } from './shuffle';

export interface SessionDrill {
  objection: Objection;
  topic: Topic;
  kind: 'review' | 'new' | 'refresh';
}

export interface Session {
  drills: SessionDrill[];
  quiz: QuizQuestion[];
  minutes: number;
}

const MAX_REVIEWS = 3;
const QUIZ = 2;

/** Today's practice: up to three due reviews (oldest first), one new objection, then two quiz questions on the same topics. */
export function buildSession(p: Progress, now = Date.now()): Session {
  const ordered = topLevelTracks.flatMap((t) => topicsInTrack(t));
  const all = ordered.flatMap((topic) => topic.objections.map((objection) => ({ objection, topic })));

  const due = all
    .filter(({ objection }) => p.drills[objection.id] && isDue(p, objection.id, now))
    .sort((a, b) => (p.review[a.objection.id]?.due ?? 0) - (p.review[b.objection.id]?.due ?? 0))
    .slice(0, MAX_REVIEWS)
    .map((d): SessionDrill => ({ ...d, kind: 'review' }));

  const fresh = all.find(({ objection }) => !p.drills[objection.id]);
  const drills: SessionDrill[] = [...due, ...(fresh ? [{ ...fresh, kind: 'new' as const }] : [])];

  // Everything practised and nothing due: refresh the two that are due soonest.
  if (!drills.length) {
    drills.push(
      ...all
        .sort((a, b) => (p.review[a.objection.id]?.due ?? 0) - (p.review[b.objection.id]?.due ?? 0))
        .slice(0, 2)
        .map((d): SessionDrill => ({ ...d, kind: 'refresh' })),
    );
  }

  const topicIds = new Set(drills.map((d) => d.topic.id));
  const pool = ordered.filter((t) => topicIds.has(t.id)).flatMap((t) => t.quiz);
  const quiz = shuffle(pool).slice(0, QUIZ);

  const minutes = drills.reduce((m, d) => m + (d.kind === 'new' ? 2 : 1), 0) + Math.ceil(quiz.length / 2);
  return { drills, quiz, minutes };
}
