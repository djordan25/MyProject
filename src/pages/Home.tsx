import { Link } from 'react-router-dom';
import { topics } from '../content';
import { topicCompletion, useProgress } from '../lib/progress';
import ProgressBar from '../components/ProgressBar';

export default function Home() {
  const p = useProgress();
  return (
    <>
      <section className="hero">
        <h1>Be ready with an answer</h1>
        <p>Learn the arguments, practise responding to real objections, and test yourself — a few minutes at a time.</p>
      </section>
      <div className="grid">
        {topics.map((t) => {
          const done = topicCompletion(p, t.id, t.objections.map((o) => o.id));
          return (
            <Link key={t.id} to={`/topic/${t.id}`} className="card topic-card">
              <div className="topic-icon" aria-hidden>{t.icon}</div>
              <h2>{t.title}</h2>
              <p>{t.summary}</p>
              <ProgressBar value={done} label={`${t.title} progress`} />
              <small className="muted">{Math.round(done * 100)}% complete</small>
            </Link>
          );
        })}
      </div>
    </>
  );
}
