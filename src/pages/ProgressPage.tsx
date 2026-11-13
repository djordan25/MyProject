import { Link } from 'react-router-dom';
import { topics, tracks, topicsInTrack } from '../content';
import { progress, topicCompletion, useProgress } from '../lib/progress';
import { trackCompletion } from '../lib/trackProgress';
import ProgressBar from '../components/ProgressBar';

export default function ProgressPage() {
  const p = useProgress();
  const totalObjections = topics.reduce((n, t) => n + t.objections.length, 0);
  const mastered = topics.flatMap((t) => t.objections).filter((o) => p.drills[o.id] === 'got').length;
  const lessons = topics.filter((t) => p.lessonsRead[t.id]).length;
  const quizzes = topics.filter((t) => p.quizBest[t.id] !== undefined).length;

  return (
    <>
      <h1>Your progress</h1>
      <div className="stats">
        <div className="card stat"><span className="big">{lessons}/{topics.length}</span>lessons read</div>
        <div className="card stat"><span className="big">{mastered}/{totalObjections}</span>objections mastered</div>
        <div className="card stat"><span className="big">{quizzes}/{topics.length}</span>quizzes taken</div>
      </div>
      {tracks.map((track) => (
        <section key={track.id} className="track-section">
          <h2 className="section-title">{track.icon} {track.title}</h2>
          <ProgressBar value={trackCompletion(p, track)} label={`${track.title} progress`} />
          <div className="spacer" />
          {topicsInTrack(track).map((t) => {
            const done = topicCompletion(p, t.id, t.objections.map((o) => o.id));
            const best = p.quizBest[t.id];
            return (
              <Link to={`/topic/${t.id}`} key={t.id} className="card progress-row">
                <strong>{t.icon} {t.title}</strong>
                <ProgressBar value={done} label={`${t.title} progress`} />
                <small className="muted">
                  Lesson {p.lessonsRead[t.id] ? '✓' : '—'} · Quiz best {best === undefined ? '—' : `${Math.round(best * 100)}%`} ·{' '}
                  {t.objections.filter((o) => p.drills[o.id] === 'got').length}/{t.objections.length} objections
                </small>
              </Link>
            );
          })}
        </section>
      ))}
      <p className="muted">Progress is saved on this device only.</p>
      <button className="btn" onClick={() => confirm('Reset all progress?') && progress.reset()}>Reset progress</button>
    </>
  );
}
