import { Link } from 'react-router-dom';
import type { TimelineEvent } from '../content/games';
import { getTopic } from '../content';
import { eraOf, gapHeight, gapLabel, inOrder, yearsBetween } from '../lib/eras';
import Emblem from './Emblem';

/**
 * Events on a vertical time axis, earliest at the top. The space between two events grows with the years between
 * them, the gap is written on the rail, and each period has its own colour.
 */
export default function TimeAxis({ events, eras = false, links = false }: { events: TimelineEvent[]; eras?: boolean; links?: boolean }) {
  const sorted = inOrder(events);
  return (
    <ol className="time-axis">
      {sorted.map((e, i) => {
        const prev = sorted[i - 1];
        const era = eraOf(e.year);
        const newEra = eras && (!prev || eraOf(prev.year) !== era);
        const gap = prev && !newEra ? yearsBetween(prev.year, e.year) : 0;
        const topic = getTopic(e.topicId);
        return (
          <li key={e.id} className={`era-${era.id}`} style={{ paddingTop: prev && !newEra ? gapHeight(gap) : undefined }}>
            {newEra && <h2 className="era-title">{era.title}</h2>}
            {gap >= 20 && <span className="time-gap mono">{gapLabel(gap)}</span>}
            <span className="time-when mono">{e.when}</span>
            <span className="time-dot" aria-hidden />
            <span className="time-what">
              {links && topic ? (
                <Link to={`/topic/${topic.id}`}><Emblem topic={topic} size={28} /><span>{e.label}</span></Link>
              ) : (
                <span>{e.label}</span>
              )}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
