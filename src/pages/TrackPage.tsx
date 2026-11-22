import { Link, useParams } from 'react-router-dom';
import { getTopic, getTrack, subtracksOf } from '../content';
import { useProgress } from '../lib/progress';
import { trackSeals } from '../lib/trackProgress';
import { EdButton, EdIcon } from 'editorial-ui';
import Seal from '../components/Seal';
import TopicRow from '../components/TopicRow';
import TrackRow from '../components/TrackRow';
import TopicIcon from '../components/TopicIcon';
import RefText from '../components/RefText';
import NotFound from './NotFound';

export default function TrackPage() {
  const p = useProgress();
  const track = getTrack(useParams().trackId);
  if (!track) return <NotFound />;
  const parent = getTrack(track.parent);
  const subs = subtracksOf(track);
  const seals = trackSeals(p, track);
  return (
    <>
      <Link to={parent ? `/track/${parent.id}` : '/'} className="back">← {parent ? parent.title : 'All tracks'}</Link>
      {parent && <div className="eyebrow">{parent.title} · sub-track</div>}
      <h1 className="track-title"><TopicIcon glyph={track.icon} size="lg" /> {track.title}</h1>
      <p className="muted seal-line">
        {seals.sealed === seals.total ? <><Seal tone="track" size={20} /> Track complete: every topic sealed.</> : `${seals.sealed} of ${seals.total} topics sealed. A topic earns its seal when the lesson is read, the quiz is 80% or better, and every objection is Solid.`}
      </p>
      {track.intro && (
        <section className="card intro">
          {track.intro.map((para, i) => <p key={i}><RefText text={para} /></p>)}
        </section>
      )}
      <div className="row">
        <EdButton asChild variant="primary">
          <Link to={`/practice?track=${track.id}`}><EdIcon name="MessagesSquare" size="sm" aria-hidden /> Practise this {parent ? 'sub-track' : 'track'}</Link>
        </EdButton>
        <EdButton asChild variant="secondary">
          <Link to={`/quiz?track=${track.id}`}><EdIcon name="ListChecks" size="sm" aria-hidden /> Mixed quiz</Link>
        </EdButton>
        {(track.id === 'islam' || track.parent === 'islam') && (
          <EdButton asChild variant="ghost">
            <Link to="/glossary"><EdIcon name="BookA" size="sm" aria-hidden /> Glossary</Link>
          </EdButton>
        )}
      </div>
      {subs.length > 0 && (
        <nav className="subtrack-chips" aria-label="Sub-tracks">
          <span className="muted">Sub-tracks:</span>
          {subs.map((s) => (
            <Link key={s.id} to={`/track/${s.id}`}>
              <TopicIcon glyph={s.icon} size="xs" tile={false} /> {s.title}
            </Link>
          ))}
        </nav>
      )}
      {track.sections.map((s, i) => (
        <section key={s.title} className="track-section">
          <h2 className="section-title">
            {track.sections.length > 1 && <span className="section-num">{String(i + 1).padStart(2, '0')}</span>}
            {s.title}
          </h2>
          <p className="muted">{s.description}</p>
          <div className="list">
            {s.topicIds.map((id) => {
              const t = getTopic(id);
              return t ? <TopicRow key={id} topic={t} /> : null;
            })}
          </div>
        </section>
      ))}
      {subs.length > 0 && (
        <section className="track-section">
          <h2 className="section-title">
            <span className="section-num">{String(track.sections.length + 1).padStart(2, '0')}</span>
            Sub-tracks: who are you talking to?
          </h2>
          <p className="muted">
            Muslims do not all accept the same sources or beliefs. Each sub-track covers one group: what it teaches, which
            arguments apply, and how to answer its own claims.
          </p>
          <div className="list">
            {subs.map((sub) => <TrackRow key={sub.id} track={sub} />)}
          </div>
        </section>
      )}
    </>
  );
}
