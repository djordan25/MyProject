import { Link } from 'react-router-dom';
import { EdIcon } from 'editorial-ui';
import type { BossStep } from '../lib/path';

/** The section challenge as a row at the end of its section on the path. */
export default function BossRow({ step, next = false }: { step: BossStep; next?: boolean }) {
  const body = (
    <>
      <span className={`boss-tile ${step.state}`}>
        <EdIcon name={step.state === 'locked' ? 'Lock' : step.state === 'cleared' ? 'Trophy' : 'Swords'} size="sm" aria-hidden />
      </span>
      <span className="list-row-body">
        {next && <span className="eyebrow next-up">Next up</span>}
        <span className="list-row-title">Section challenge</span>
        <span className="list-row-meta">
          <span>
            {step.state === 'locked'
              ? 'Locked · clear every topic in this section first'
              : step.state === 'cleared'
                ? `Passed · best ${Math.round(step.best * 100)}%`
                : `Mixed objections from this section, in random order${step.best ? ` · best ${Math.round(step.best * 100)}%` : ''}`}
          </span>
        </span>
      </span>
    </>
  );
  if (step.state === 'locked') return <div className="list-row locked boss" aria-disabled="true">{body}</div>;
  return (
    <Link to={`/boss/${step.track.id}/${step.sectionIndex}`} className={`list-row boss${next ? ' next' : ''}`}>
      {body}
      <span aria-hidden className="muted">›</span>
    </Link>
  );
}
