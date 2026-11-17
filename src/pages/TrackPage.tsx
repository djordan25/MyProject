import { Link, useParams } from 'react-router-dom';
import { getTopic, getTrack, subtracksOf, topicsInTrack } from '../content';
import { useProgress } from '../lib/progress';
import { trackCompletion, trackSeals } from '../lib/trackProgress';
import Seal from '../components/Seal';
import TopicCard from '../components/TopicCard';
import ProgressBar from '../components/ProgressBar';
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
      <h1 className="track-title"><span aria-hidden>{track.icon}</span> {track.title}</h1>
      <p className="muted seal-line">
        {seals.sealed === seals.total ? <><Seal tone="track" size={24} /> Track complete: every topic sealed.</> : `${seals.sealed} of ${seals.total} topics sealed. A topic earns its seal when the lesson is read, the quiz is 80% or better, and every objection is Solid.`}
      </p>
      {track.intro && (
        <section className="card intro">
          {track.intro.map((para, i) => <p key={i}><RefText text={para} /></p>)}
        </section>
      )}
      <div className="row">
        <Link className="btn" to={`/practice?track=${track.id}`}>Practise objections from this {parent ? 'sub-track' : 'track'} →</Link>
        <Link className="btn" to={`/quiz?track=${track.id}`}>Mixed quiz →</Link>
        {(track.id === 'islam' || track.parent === 'islam') && <Link className="btn" to="/glossary">Glossary of Islamic terms</Link>}
      </div>
      {subs.length > 0 && (
        <nav className="subtrack-chips" aria-label="Sub-tracks">
          <span className="muted">Sub-tracks:</span>
          {subs.map((s) => (
            <Link key={s.id} to={`/track/${s.id}`} className="chip">
              <span aria-hidden>{s.icon}</span> {s.title}
            </Link>
          ))}
        </nav>
      )}
      {track.sections.map((s, i) => (
        <section key={s.title} className="track-section">
          <h2 className="section-title">
            {track.sections.length > 1 && <span className="section-num">{i + 1}</span>}
            {s.title}
          </h2>
          <p className="muted">{s.description}</p>
          <div className="grid">
            {s.topicIds.map((id) => {
              const t = getTopic(id);
              return t ? <TopicCard key={id} topic={t} /> : null;
            })}
          </div>
        </section>
      ))}
      {subs.length > 0 && (
        <section className="track-section">
          <h2 className="section-title">
            <span className="section-num">{track.sections.length + 1}</span>
            Sub-tracks: who are you talking to?
          </h2>
          <p className="muted">
            Muslims do not all accept the same sources or beliefs. Each sub-track covers one group: what it teaches, which
            arguments apply, and how to answer its own claims.
          </p>
          <div className="track-list">
            {subs.map((s) => {
              const done = trackCompletion(p, s);
              const seals = trackSeals(p, s);
              return (
                <Link key={s.id} to={`/track/${s.id}`} className="card track-card">
                  {seals.sealed === seals.total ? <Seal tone="track" size={44} label={`${s.title}: complete`} /> : <div className="topic-icon" aria-hidden>{s.icon}</div>}
                  <div className="track-body">
                    <h3>{s.title}</h3>
                    <p>{s.summary}</p>
                    <ProgressBar value={done} label={`${s.title} progress`} />
                    <small className="muted">{topicsInTrack(s).length} topics · {Math.round(done * 100)}% ready{seals.sealed > 0 && ` · ${seals.sealed} sealed`}</small>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}
