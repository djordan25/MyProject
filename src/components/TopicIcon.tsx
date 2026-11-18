import { EdIcon, type EdIconSize } from 'editorial-ui';
import { iconFor } from '../lib/icons';

/** A topic or track's icon as a lucide line icon in a quiet tile. */
export default function TopicIcon({ glyph, size = 'md', tile = true }: { glyph: string; size?: EdIconSize; tile?: boolean }) {
  const icon = <EdIcon name={iconFor(glyph)} size={size} aria-hidden />;
  return tile ? <span className={`topic-icon topic-icon-${size}`} aria-hidden>{icon}</span> : icon;
}
