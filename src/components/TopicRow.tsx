import { Link } from 'react-router-dom';
import type { Topic } from '../content';
import { objectionScore, topicCompletion, topicSealed, useProgress } from '../lib/progress';
import ReadinessRing from './ReadinessRing';
import Seal from './Seal';
import TopicIcon from './TopicIcon';

/** A topic as a list row: icon, title, summary, a mono status line, and its readiness ring or seal. */
export default function TopicRow({ topic, summary = true }: { topic: Topic; summary?: boolean }) {
  const p = useProgress();
  const ids = topic.objections.map((o) => o.id);
  const sealed = topicSealed(p, topic.id, ids);
  const solid = ids.filter((id) => objectionScore(p, id) === 1).length;
  const best = p.quizBest[topic.id];
  return (
    <Link to={`/topic/${topic.id}`} className="list-row">
      <TopicIcon glyph={topic.icon} />
      <span className="list-row-body">
        <span className="list-row-title">{topic.title}</span>
        {summary && <span className="list-row-summary">{topic.summary}</span>}
        <span className="list-row-meta">
          <span>Lesson {p.lessonsRead[topic.id] ? '✓' : '—'}</span>
          <span>Quiz {best === undefined ? '—' : `${Math.round(best * 100)}%`}</span>
          <span>{solid}/{ids.length} solid</span>
        </span>
      </span>
      {sealed ? <Seal size={40} label={`${topic.title}: sealed`} /> : <ReadinessRing value={topicCompletion(p, topic.id, ids)} label={topic.title} />}
    </Link>
  );
}
