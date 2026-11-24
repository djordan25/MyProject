import { topics, type Topic } from '../content';
import { lockedTopicIds, topicStarted } from './path';
import type { Progress } from './progress';

/** Topics a game may draw on: those open on the path. Games rehearse what has been met, they do not run ahead of it. */
export function openTopics(p: Progress): Topic[] {
  const locked = lockedTopicIds(p);
  return topics.filter((t) => !locked.has(t.id));
}

/** Topics to offer first: those the learner has begun. Falls back to every open topic. */
export function playableTopics(p: Progress): Topic[] {
  const open = openTopics(p);
  const begun = open.filter((t) => topicStarted(p, t));
  return begun.length ? begun : open;
}
