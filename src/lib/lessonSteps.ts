import type { LessonSection, QuizQuestion, Topic } from '../content';
import { TIMELINE, type TimelineEvent } from '../content/games';
import { chartsFor, type Chart } from '../content/charts';
import { MAPS, placeNamed } from '../content/maps';

/** Text of a section, for matching other material to it. */
export const sectionText = (s: LessonSection): string => [s.heading, ...s.body, ...(s.argument ?? [])].join(' ');

const words = (text: string): Set<string> => new Set(text.toLowerCase().match(/[a-z’]{5,}/g) ?? []);

/** Least weight of shared words for a quiz question to count as being about a section. */
const MIN_SCORE = 2;
/** How much better it must fit its section than any other. */
const MARGIN = 0.75;

/**
 * One quiz question for each section it clearly belongs to, so a section can end with a check on what was just read.
 * A shared word counts for more the fewer sections use it. Each question goes to the one section it fits best,
 * and each section keeps its closest question.
 */
export function sectionChecks(topic: Topic): (QuizQuestion | undefined)[] {
  const sections = topic.lesson.map((s) => words(sectionText(s)));
  const weight = (w: string) => 1 / sections.filter((sec) => sec.has(w)).length;
  const best: ({ q: QuizQuestion; score: number } | undefined)[] = sections.map(() => undefined);
  for (const q of topic.quiz) {
    const mine = [...words(`${q.question} ${q.options[q.answer]} ${q.explanation}`)];
    const scores = sections.map((sec) => mine.filter((w) => sec.has(w)).reduce((sum, w) => sum + weight(w), 0));
    const top = Math.max(...scores);
    const at = scores.indexOf(top);
    // A question that fits a second section nearly as well belongs to neither clearly.
    const second = Math.max(0, ...scores.filter((_, i) => i !== at));
    if (top < MIN_SCORE || top - second < MARGIN) continue;
    if (!best[at] || top > best[at]!.score) best[at] = { q, score: top };
  }
  return best.map((b) => b?.q);
}

/** Index of the section that scores highest, or the last section when none scores at all. */
const bestSection = (topic: Topic, score: (text: string) => number): number => {
  let at = topic.lesson.length - 1;
  let top = 0;
  topic.lesson.forEach((s, i) => {
    const n = score(sectionText(s));
    if (n > top) { top = n; at = i; }
  });
  return at;
};

export interface Visuals {
  /** Section index to the pictures shown with it. */
  map?: number;
  timeline?: number;
  events: TimelineEvent[];
  charts: { chart: Chart; at: number }[];
}

/** Puts each of a lesson's pictures with the section that talks about it most. */
export function placeVisuals(topic: Topic): Visuals {
  const places = (MAPS[topic.id] ?? []).map(placeNamed).filter(Boolean).flatMap((p) => [p!.name, ...(p!.also ?? [])]);
  const events = TIMELINE.filter((e) => e.topicId === topic.id);
  return {
    map: places.length ? bestSection(topic, (t) => places.filter((n) => t.includes(n)).length) : undefined,
    timeline: events.length >= 2 ? bestSection(topic, (t) => events.filter((e) => t.includes(String(Math.abs(e.year)))).length) : undefined,
    events,
    charts: chartsFor(topic.id).map((chart) => ({
      chart,
      at: bestSection(topic, (t) => chart.rows.filter((r) => r.topicId === topic.id && t.includes(r.quote)).length),
    })),
  };
}

export type Piece = { kind: 'text'; text: string; lead?: string } | { kind: 'quote'; quote: string; cite: string };

const SCRIPTURE = /“([^”]{40,})”\s*\(((?:Quran|Sahih|Sunan|Jami|[1-3]?\s?[A-Z][a-z]+)\s[^()]*\d[^()]*)\)([.!]?)\s*/g;
const LEAD = /^([A-Z][A-Za-z’ ]{2,28}):\s+(?=\S)/;

/**
 * Breaks a paragraph into prose and the scripture it quotes, so a long quotation can stand out as a card.
 * A quotation is lifted out only where it ends its sentence; one in mid-sentence stays in the prose.
 */
export function pieces(paragraph: string): Piece[] {
  const out: Piece[] = [];
  const text = (t: string) => {
    const trimmed = t.trim();
    if (!trimmed) return;
    const lead = out.length === 0 ? trimmed.match(LEAD) : null;
    out.push(lead ? { kind: 'text', lead: lead[1], text: trimmed.slice(lead[0].length) } : { kind: 'text', text: trimmed });
  };
  let last = 0;
  for (const m of paragraph.matchAll(SCRIPTURE)) {
    const end = m.index + m[0].length;
    const endsSentence = m[3] !== '' || end >= paragraph.length;
    if (!endsSentence) continue;
    text(paragraph.slice(last, m.index));
    out.push({ kind: 'quote', quote: m[1], cite: m[2] });
    last = end;
  }
  text(paragraph.slice(last));
  return out;
}
