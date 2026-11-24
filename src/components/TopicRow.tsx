import { Link } from 'react-router-dom';
import { EdIcon } from 'editorial-ui';
import type { Topic } from '../content';
import { objectionScore, overdueReviews, topicCompletion, topicSealed, useProgress } from '../lib/progress';
import { stepTitle, topicAccess } from '../lib/path';
import ReadinessRing from './ReadinessRing';
import Seal from './Seal';
import Emblem from './Emblem';

/**
 * A topic as a list row: icon, title, summary, a mono status line, and its readiness ring or seal.
 * A topic still locked on the path is shown but cannot be opened; `next` marks the step the learner should take now.
 */
export default function TopicRow({ topic, summary = true, next = false }: { topic: Topic; summary?: boolean; next?: boolean }) {
  const p = useProgress();
  const ids = topic.objections.map((o) => o.id);
  const access = topicAccess(p, topic.id);
  if (access.state === 'locked') {
    return (
      <div className="list-row locked" aria-disabled="true">
        <span className="lock-tile"><EdIcon name="Lock" size="sm" aria-hidden /></span>
        <span className="list-row-body">
          <span className="list-row-title">{topic.title}</span>
          <span className="list-row-meta">
            <span>Locked{access.blocker ? ` · clear “${stepTitle(access.blocker)}” first` : ''}</span>
          </span>
        </span>
      </div>
    );
  }
  const sealed = topicSealed(p, topic.id, ids);
  const faded = sealed && overdueReviews(p, ids).length > 0;
  const solid = ids.filter((id) => objectionScore(p, id) === 1).length;
  const best = p.quizBest[topic.id];
  return (
    <Link to={`/topic/${topic.id}`} className={`list-row${next ? ' next' : ''}`}>
      <Emblem topic={topic} size={48} />
      <span className="list-row-body">
        {next && <span className="eyebrow next-up">Next up</span>}
        <span className="list-row-title">{topic.title}</span>
        {summary && <span className="list-row-summary">{topic.summary}</span>}
        <span className="list-row-meta">
          <span>Lesson {p.lessonsRead[topic.id] ? '✓' : '—'}</span>
          <span>Quiz {best === undefined ? '—' : `${Math.round(best * 100)}%`}</span>
          <span>{solid}/{ids.length} solid</span>
          {access.state === 'cleared' && !sealed && <span className="cleared">Cleared</span>}
          {faded && <span className="fading">Seal fading: reviews overdue</span>}
        </span>
      </span>
      {sealed ? (
        <span className={faded ? 'seal-faded' : undefined}><Seal size={40} label={`${topic.title}: sealed${faded ? ', fading' : ''}`} /></span>
      ) : (
        <ReadinessRing value={topicCompletion(p, topic.id, ids)} label={topic.title} />
      )}
    </Link>
  );
}
