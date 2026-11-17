import { Link } from 'react-router-dom';
import type { Topic } from '../content';
import { objectionScore, topicCompletion, topicSealed, useProgress } from '../lib/progress';
import ReadinessRing from './ReadinessRing';
import Seal from './Seal';

export default function TopicCard({ topic }: { topic: Topic }) {
  const p = useProgress();
  const ids = topic.objections.map((o) => o.id);
  const ready = topicCompletion(p, topic.id, ids);
  const sealed = topicSealed(p, topic.id, ids);
  const solid = ids.filter((id) => objectionScore(p, id) === 1).length;
  const best = p.quizBest[topic.id];
  return (
    <Link to={`/topic/${topic.id}`} className={`card topic-card${sealed ? ' sealed' : ''}`}>
      <div className="topic-card-head">
        <div className="topic-icon" aria-hidden>{topic.icon}</div>
        {sealed ? <Seal size={48} label={`${topic.title}: complete`} /> : <ReadinessRing value={ready} label={topic.title} />}
      </div>
      <h2>{topic.title}</h2>
      <p>{topic.summary}</p>
      <small className="muted topic-meta">
        <span>Lesson {p.lessonsRead[topic.id] ? '✓' : '—'}</span>
        <span>Quiz {best === undefined ? '—' : `${Math.round(best * 100)}%`}</span>
        <span>{solid}/{ids.length} solid</span>
      </small>
    </Link>
  );
}
