import { emblems } from '../content/emblems';
import type { Topic } from '../content';
import TopicIcon from './TopicIcon';

/** A lesson's own picture. Falls back to the topic's line icon where no emblem has been drawn. */
export default function Emblem({ topic, size = 48 }: { topic: Pick<Topic, 'id' | 'icon'>; size?: number }) {
  const art = emblems[topic.id];
  if (!art) return <TopicIcon glyph={topic.icon} size={size > 48 ? 'lg' : 'md'} />;
  return (
    <span className="emblem" style={{ width: size, height: size }} aria-hidden>
      <svg viewBox="0 0 64 64" width={size} height={size} dangerouslySetInnerHTML={{ __html: art }} />
    </span>
  );
}
