import { Link } from 'react-router-dom';
import { topics } from '../content';
import { progress, topicCompletion, useProgress } from '../lib/progress';
import ProgressBar from '../components/ProgressBar';

export default function ProgressPage() {
  const p = useProgress();
  const totalObjections = topics.reduce((n, t) => n + t.objections.length, 0);
  const mastered = Object.values(p.drills).filter((r) => r === 'got').length;

  return (
    <>
      <h1>Your progress</h1>
      <div className="stats">
        <div className="card stat"><span className="big">{Object.keys(p.lessonsRead).length}/{topics.length}</span>lessons read</div>
        <div className="card stat"><span className="big">{mastered}/{totalObjections}</span>objections mastered</div>
        <div className="card stat"><span className="big">{Object.keys(p.quizBest).length}/{topics.length}</span>quizzes taken</div>
      </div>
      {topics.map((t) => {
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
      <p className="muted">Progress is saved on this device only.</p>
      <button className="btn" onClick={() => confirm('Reset all progress?') && progress.reset()}>Reset progress</button>
    </>
  );
}
