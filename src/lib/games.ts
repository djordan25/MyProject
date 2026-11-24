import type { FollowUp, Objection, Topic } from '../content';
import { TIMELINE, type TimelineEvent } from '../content/games';
import { shuffle } from './shuffle';

/** One turn of a conversation: what the other person says, and the lesson's answer to it. */
export interface Exchange {
  id: string;
  prompt: string;
  answer: string;
  topic: Topic;
  /** 0 for the opening objection, 1 for a first comeback, and so on. */
  depth: number;
  /** The objection that opened this line of conversation. */
  root: string;
}

/** A turn posed as a choice: the opening of the right answer among the openings of others. */
export interface Question {
  exchange: Exchange;
  options: string[];
  /** Index into options. */
  answer: number;
}

/** The opening of an answer: whole sentences until it is long enough to recognise, cut short if it runs on. */
export function snippet(text: string, min = 70, max = 170): string {
  const sentences = text.match(/[^.!?]+[.!?]+[”’"')\]]*(?:\s+|$)/g) ?? [text];
  let out = '';
  for (const s of sentences) {
    if (out.length >= min) break;
    out += s;
  }
  out = out.trim() || text.trim();
  return out.length > max ? `${out.slice(0, max).replace(/\s+\S*$/, '')}…` : out;
}

const followUpExchanges = (followUps: FollowUp[] | undefined, topic: Topic, id: string, depth: number, root: string): Exchange[] =>
  (followUps ?? []).flatMap((f, i) => [
    { id: `${id}.${i}`, prompt: f.reply, answer: f.answer, topic, depth, root },
    ...followUpExchanges(f.followUps, topic, `${id}.${i}`, depth + 1, root),
  ]);

/** Every turn in a topic: each objection and every comeback beneath it. */
export const exchangesOf = (topic: Topic): Exchange[] =>
  topic.objections.flatMap((o) => [
    { id: o.id, prompt: o.objection, answer: o.response, topic, depth: 0, root: o.objection },
    ...followUpExchanges(o.followUps, topic, o.id, 1, o.objection),
  ]);

/** One line of conversation: the objection, then one comeback at each level, chosen at random. */
export function chainOf(objection: Objection, topic: Topic): Exchange[] {
  const chain: Exchange[] = [{ id: objection.id, prompt: objection.objection, answer: objection.response, topic, depth: 0, root: objection.objection }];
  let level = objection.followUps;
  let id = objection.id;
  while (level?.length) {
    const i = Math.floor(Math.random() * level.length);
    id = `${id}.${i}`;
    chain.push({ id, prompt: level[i].reply, answer: level[i].answer, topic, depth: chain.length, root: objection.objection });
    level = level[i].followUps;
  }
  return chain;
}

/** Poses a turn as a choice among `count` openings. Wrong options come from the same topic first, which makes them plausible. */
export function ask(exchange: Exchange, pool: Exchange[], count = 3): Question {
  const right = snippet(exchange.answer);
  const others = shuffle(pool.filter((e) => e.id !== exchange.id));
  const near = others.filter((e) => e.topic.id === exchange.topic.id);
  const far = others.filter((e) => e.topic.id !== exchange.topic.id);
  const wrong: string[] = [];
  for (const e of [...near, ...far]) {
    const s = snippet(e.answer);
    if (s !== right && !wrong.includes(s)) wrong.push(s);
    if (wrong.length === count - 1) break;
  }
  const options = shuffle([right, ...wrong]);
  return { exchange, options, answer: options.indexOf(right) };
}

/** How many answers may be missed in a challenge of this length while still reaching the pass mark. */
export const missesAllowed = (rounds: number, pass: number): number => rounds - Math.ceil(rounds * pass);

/** Events in one Timeline hand. */
export const HAND = 5;
/** Events in one hand are at least this many years apart, so the order is never a coin toss. */
const MIN_GAP = 5;

/** Draws a hand of events with clearly different dates, in random order. */
export function drawHand(events: TimelineEvent[] = TIMELINE, size = HAND): TimelineEvent[] {
  const hand: TimelineEvent[] = [];
  for (const e of shuffle(events)) {
    if (hand.every((h) => Math.abs(h.year - e.year) >= MIN_GAP)) hand.push(e);
    if (hand.length === size) break;
  }
  return hand;
}
