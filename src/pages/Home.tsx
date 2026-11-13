import { Link } from 'react-router-dom';
import { tracks, topicsInTrack } from '../content';
import { useProgress } from '../lib/progress';
import { trackCompletion } from '../lib/trackProgress';
import ProgressBar from '../components/ProgressBar';

export default function Home() {
  const p = useProgress();
  return (
    <>
      <section className="hero">
        <h1>Be ready with an answer</h1>
        <p>Learn the arguments, practise responding to real objections, and test yourself — a few minutes at a time.</p>
      </section>
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
