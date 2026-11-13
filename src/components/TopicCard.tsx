import { Link } from 'react-router-dom';
import type { Topic } from '../content';
import { topicCompletion, useProgress } from '../lib/progress';
import ProgressBar from './ProgressBar';

export default function TopicCard({ topic }: { topic: Topic }) {
  const p = useProgress();
  const done = topicCompletion(p, topic.id, topic.objections.map((o) => o.id));
  return (
    <Link to={`/topic/${topic.id}`} className="card topic-card">
      <div className="topic-icon" aria-hidden>{topic.icon}</div>
      <h2>{topic.title}</h2>
      <p>{topic.summary}</p>
      <ProgressBar value={done} label={`${topic.title} progress`} />
      <small className="muted">{Math.round(done * 100)}% complete</small>
    </Link>
  );
}
