import { Link, useParams } from 'react-router-dom';
import { getTrack, subtracksOf } from '../content';
import { useProgress } from '../lib/progress';
import { trackSeals } from '../lib/trackProgress';
import { trackPath, trackRank } from '../lib/path';
import BossRow from '../components/BossRow';
import Trail from '../components/Trail';
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
  const path = trackPath(p, track);
  const upNext = path.flat().find((s) => s.state !== 'cleared');
  const rank = trackRank(p, track);
  return (
    <>
      <Link to={parent ? `/track/${parent.id}` : '/'} className="back">← {parent ? parent.title : 'All tracks'}</Link>
      {parent && <div className="eyebrow">{parent.title} · sub-track</div>}
      <h1 className="track-title"><TopicIcon glyph={track.icon} size="lg" /> {track.title}</h1>
      <p className="muted seal-line">
        {seals.sealed === seals.total ? <><Seal tone="track" size={20} /> Track complete: every topic sealed.</> : `${seals.sealed} of ${seals.total} topics sealed. A topic earns its seal when the lesson is read, the quiz is 80% or better, and every objection is Solid.`}
      </p>
      <p className="path-line">
        <span className="rank-chip">{rank.name}</span>
        <span className="muted">
          {rank.cleared} of {rank.total} steps cleared. Topics open in order: read the lesson, try every objection and score 80% on the quiz,
          or score 90% on the quiz to test out.
        </span>
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
      <Trail steps={path.flat()} />
      {track.sections.map((s, i) => (
        <section key={s.title} className="track-section">
          <h2 className="section-title">
            {track.sections.length > 1 && <span className="section-num">{String(i + 1).padStart(2, '0')}</span>}
            {s.title}
          </h2>
          <p className="muted">{s.description}</p>
          <div className="list path">
            {path[i].map((step) =>
              step.kind === 'topic' ? (
                <TopicRow key={step.topic.id} topic={step.topic} next={step === upNext} />
              ) : (
                <BossRow key={step.key} step={step} next={step === upNext} />
              ),
            )}
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
