import { Link } from 'react-router-dom';
import { EdButton } from 'editorial-ui';
import { TIMELINE } from '../content/games';
import TimeAxis from '../components/TimeAxis';

/** Every dated event in the lessons on one axis, banded by period. Each opens the lesson it comes from. */
export default function TimelinePage() {
  return (
    <>
      <Link to="/play" className="back">← Games</Link>
      <h1>The whole timeline</h1>
      <p className="muted">
        {TIMELINE.length} dated events from the lessons, earliest first. The space between two events grows with the years between them,
        on a compressed scale. Tap an event to open its lesson.
      </p>
      <div className="row"><EdButton asChild variant="secondary"><Link to="/play/timeline">Play the Timeline game</Link></EdButton></div>
      <TimeAxis events={TIMELINE} eras links />
    </>
  );
}
