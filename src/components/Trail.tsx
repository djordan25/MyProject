import { Link } from 'react-router-dom';
import { EdIcon } from 'editorial-ui';
import { stepLink, stepTitle, type PathStep } from '../lib/path';
import Emblem from './Emblem';
import { TRAIL, trailPoint } from '../lib/trail';

const { COLS, DX, DY, TOP } = TRAIL;


/** A smooth line through the first `count` stops, in a 100-unit-wide space. */
const line = (count: number): string => {
  let d = '';
  for (let n = 0; n < count; n++) {
    const p = trailPoint(n);
    if (n === 0) d += `M${p.x} ${p.y}`;
    else if (n % COLS === 0) {
      const q = trailPoint(n - 1);
      const out = q.x > 50 ? 100 - DX / 8 : DX / 8;
      d += ` C${out} ${q.y} ${out} ${p.y} ${p.x} ${p.y}`;
    } else d += ` L${p.x} ${p.y}`;
  }
  return d;
};

/**
 * The track as a journey: every topic is a stop marked by its emblem, every section challenge a gate.
 * The road is solid as far as the learner has come and dashed beyond.
 */
export default function Trail({ steps }: { steps: PathStep[] }) {
  const here = steps.findIndex((s) => s.state !== 'cleared');
  const reached = here === -1 ? steps.length : here + 1;
  const rows = Math.ceil(steps.length / COLS);
  const height = TOP * 2 + (rows - 1) * DY;
  return (
    <nav className="trail" aria-label="The path through this track" style={{ height }}>
      <svg viewBox={`0 0 100 ${height}`} preserveAspectRatio="none" aria-hidden>
        <path className="trail-road ahead" d={line(steps.length)} vectorEffect="non-scaling-stroke" />
        <path className="trail-road done" d={line(reached)} vectorEffect="non-scaling-stroke" />
      </svg>
      {steps.map((s, n) => {
        const p = trailPoint(n);
        const cls = `trail-stop ${s.kind} ${s.state}${n === here ? ' here' : ''}`;
        const style = { left: `${p.x}%`, top: p.y };
        const mark = s.kind === 'topic'
          ? <Emblem topic={s.topic} size={40} />
          : <span className="trail-gate"><EdIcon name={s.state === 'cleared' ? 'Trophy' : s.state === 'locked' ? 'Lock' : 'Swords'} size="sm" aria-hidden /></span>;
        const label = `${stepTitle(s)}: ${s.state === 'cleared' ? 'cleared' : s.state === 'locked' ? 'locked' : n === here ? 'next up' : 'open'}`;
        return s.state === 'locked'
          ? <span key={n} className={cls} style={style} role="img" aria-label={label} title={stepTitle(s)}>{mark}</span>
          : <Link key={n} to={stepLink(s)} className={cls} style={style} aria-label={label} title={stepTitle(s)}>{mark}{n === here && <span className="trail-flag">You are here</span>}</Link>;
      })}
    </nav>
  );
}
