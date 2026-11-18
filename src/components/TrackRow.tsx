import { Link } from 'react-router-dom';
import { EdProgressMeter } from 'editorial-ui';
import { subtracksOf, topicsInTrack, type Track } from '../content';
import { useProgress } from '../lib/progress';
import { trackCompletion, trackSeals } from '../lib/trackProgress';
import Seal from './Seal';
import TopicIcon from './TopicIcon';

/** A track as a list row: icon (or its gold-equivalent seal), title, summary and a labelled readiness meter. */
export default function TrackRow({ track }: { track: Track }) {
  const p = useProgress();
  const done = trackCompletion(p, track);
  const seals = trackSeals(p, track);
  const subs = subtracksOf(track).length;
  const pct = Math.round(done * 100);
  return (
    <Link to={`/track/${track.id}`} className="list-row">
      {seals.sealed === seals.total ? <Seal tone="track" size={40} label={`${track.title}: complete`} /> : <TopicIcon glyph={track.icon} />}
      <span className="list-row-body">
        <span className="list-row-title">{track.title}</span>
        <span className="list-row-summary">{track.summary}</span>
        <span className="list-row-meter">
          <EdProgressMeter
            label={`${topicsInTrack(track).length} topics${subs ? ` · ${subs} sub-tracks` : ''}${seals.sealed ? ` · ${seals.sealed} sealed` : ''}`}
            value={`${pct}% ready`}
            percent={pct}
            tone="brand"
            ariaLabel={`${track.title} readiness`}
          />
        </span>
      </span>
      <span aria-hidden className="muted">›</span>
    </Link>
  );
}
