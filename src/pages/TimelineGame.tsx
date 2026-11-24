import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { EdButton, EdIcon } from 'editorial-ui';
import type { TimelineEvent } from '../content/games';
import { drawHand, HAND } from '../lib/games';
import { progress, useProgress, XP } from '../lib/progress';
import { buzz } from '../lib/haptics';
import TimeAxis from '../components/TimeAxis';

const KEY = 'timeline';

/** Timeline: put sources and events in order, earliest first. */
export default function TimelineGame() {
  const p = useProgress();
  const [order, setOrder] = useState<TimelineEvent[]>(() => drawHand());
  const [checked, setChecked] = useState(false);
  const [rounds, setRounds] = useState(0);
  const [total, setTotal] = useState(0);

  const correct = useMemo(() => [...order].sort((a, b) => a.year - b.year), [order]);
  const right = order.filter((e, i) => e.id === correct[i].id).length;

  const move = (i: number, by: number) => {
    const j = i + by;
    if (checked || j < 0 || j >= order.length) return;
    const next = [...order];
    [next[i], next[j]] = [next[j], next[i]];
    setOrder(next);
    buzz('tap');
  };

  const check = () => {
    setChecked(true);
    setRounds((n) => n + 1);
    setTotal((n) => n + right);
    buzz(right === order.length ? 'success' : 'miss');
    progress.recordGame(KEY, right, right * XP.gameCorrect + (right === order.length ? 5 : 0));
  };

  const deal = () => {
    setOrder(drawHand());
    setChecked(false);
  };

  return (
    <>
      <Link to="/play" className="back">← Games</Link>
      <div className="game-head">
        <h1>Timeline</h1>
        <span className="game-score mono" aria-label={`${total} placed correctly in ${rounds} rounds`}>{rounds ? `${total}/${rounds * HAND}` : ''}</span>
      </div>
      <p className="muted">Put these in order, earliest at the top. Use the arrows to move each one, then check.</p>
      <ol className="timeline">
        {order.map((e, i) => {
          const ok = checked && e.id === correct[i].id;
          return (
            <li key={e.id} className={checked ? (ok ? 'right' : 'wrong') : undefined}>
              <span className="timeline-body">
                <strong>{e.label}</strong>
                {checked && <small className="mono">{e.when}{ok ? '' : ` · belongs at ${correct.findIndex((c) => c.id === e.id) + 1}`}</small>}
              </span>
              {!checked && (
                <span className="timeline-moves">
                  <button onClick={() => move(i, -1)} disabled={i === 0} aria-label={`Move “${e.label}” earlier`}><EdIcon name="ChevronUp" size="sm" aria-hidden /></button>
                  <button onClick={() => move(i, 1)} disabled={i === order.length - 1} aria-label={`Move “${e.label}” later`}><EdIcon name="ChevronDown" size="sm" aria-hidden /></button>
                </span>
              )}
            </li>
          );
        })}
      </ol>
      {checked && (
        <section className="card">
          <h2>How far apart they are</h2>
          <TimeAxis events={order} links />
          <p className="muted"><Link to="/timeline">See the whole timeline →</Link></p>
        </section>
      )}
      <div className="row end" aria-live="polite">
        {checked ? (
          <>
            <span className="muted">{right === order.length ? 'All in order.' : `${right} of ${order.length} in the right place.`} Best: {Math.max(p.games[KEY] ?? 0, right)} of {HAND}.</span>
            <EdButton variant="primary" leadingIcon={<EdIcon name="RotateCcw" size="sm" />} onClick={deal}>Deal again</EdButton>
          </>
        ) : (
          <EdButton variant="primary" onClick={check}>Check the order</EdButton>
        )}
      </div>
    </>
  );
}
