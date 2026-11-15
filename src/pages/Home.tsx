import { Link } from 'react-router-dom';
import { topics, tracks, topicsInTrack } from '../content';
import { isDue, topicCompletion, useProgress } from '../lib/progress';
import { trackCompletion } from '../lib/trackProgress';
import ProgressBar from '../components/ProgressBar';

export default function Home() {
  const p = useProgress();
  // The topic to suggest: the first one begun but unfinished, otherwise the first not yet begun.
  const ordered = tracks.flatMap((t) => topicsInTrack(t));
  const done = (id: string) => topicCompletion(p, id, ordered.find((t) => t.id === id)!.objections.map((o) => o.id));
  const inProgress = ordered.find((t) => done(t.id) > 0 && done(t.id) < 1);
  const next = inProgress ?? ordered.find((t) => done(t.id) === 0);
  const started = Boolean(inProgress);
  // Objections already practised at least once whose review date has arrived.
  const due = topics.flatMap((t) => t.objections).filter((o) => p.drills[o.id] && isDue(p, o.id)).length;
  return (
    <>
      <section className="hero">
        <h1>Be ready with an answer</h1>
        <p>Learn the arguments, practise responding to real objections, and test yourself — a few minutes at a time.</p>
      </section>
      {due > 0 && (
        <Link to="/practice?mode=review" className="card due-banner">
          <strong>{due} objection{due === 1 ? '' : 's'} due for review</strong>
          <span>Practise now →</span>
        </Link>
      )}
      {next && (
        <Link to={`/topic/${next.id}`} className="card due-banner">
          <span className="continue-label">
            <small className="muted">{started ? 'Continue' : 'Start here'}</small>
            <strong>{next.icon} {next.title}</strong>
          </span>
          <span>{started ? 'Resume →' : 'Begin →'}</span>
        </Link>
      )}
      <div className="track-list">
        {tracks.map((t) => {
          const done = trackCompletion(p, t);
          return (
            <Link key={t.id} to={`/track/${t.id}`} className="card track-card">
              <div className="topic-icon" aria-hidden>{t.icon}</div>
              <div className="track-body">
                <h2>{t.title}</h2>
                <p>{t.summary}</p>
                <ProgressBar value={done} label={`${t.title} progress`} />
                <small className="muted">
                  {topicsInTrack(t).length} topics · {Math.round(done * 100)}% complete
                </small>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
