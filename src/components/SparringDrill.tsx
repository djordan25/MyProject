import { useEffect, useMemo, useRef, useState } from 'react';
import type { FollowUp, Objection } from '../content';
import { progress, type Confidence } from '../lib/progress';
import RefText from './RefText';
import RefList from './RefList';
import ConfidenceRater from './ConfidenceRater';
import KeyPointCheck, { suggestFromCoverage } from './KeyPointCheck';

interface Props {
  objection: Objection;
  context?: string;
  onRated?: (level: Confidence) => void;
}

interface Turn {
  line: string;
  answer: string;
}

/** One line of argument through the follow-up tree: at each round the other person picks one of their likely replies. */
function pickPath(o: Objection): Turn[] {
  const turns: Turn[] = [{ line: o.objection, answer: o.response }];
  let next: FollowUp[] | undefined = o.followUps;
  while (next?.length) {
    const f: FollowUp = next[Math.floor(Math.random() * next.length)];
    turns.push({ line: f.reply, answer: f.answer });
    next = f.followUps;
  }
  return turns;
}

/** The objection drill as a conversation: they speak, you reply, you see a strong answer, and they come back with their next line. */
export default function SparringDrill({ objection, context, onRated }: Props) {
  const path = useMemo(() => pickPath(objection), [objection]);
  const [step, setStep] = useState(0);
  const [replies, setReplies] = useState<string[]>([]);
  const [answered, setAnswered] = useState(false);
  const [draft, setDraft] = useState('');
  const [covered, setCovered] = useState<number[]>([]);
  const latest = useRef<HTMLDivElement>(null);
  const last = step === path.length - 1;
  const finished = last && answered;
  const wroteAny = replies.some((r) => r.trim());

  useEffect(() => {
    if (step > 0 || answered) latest.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [step, answered]);

  const reply = (text: string) => {
    setReplies((r) => [...r.slice(0, step), text]);
    setDraft('');
    setAnswered(true);
  };

  const rate = (level: Confidence) => {
    progress.rateDrill(objection.id, level);
    onRated?.(level);
  };

  return (
    <article className="card spar">
      <div className="spar-head">
        <div className="eyebrow">{context ? `${context} · Sparring` : 'Sparring'}</div>
        <div className="spar-rounds" role="img" aria-label={`Round ${step + 1} of ${path.length}`}>
          {path.map((_, i) => <i key={i} className={i <= step ? 'on' : undefined} />)}
        </div>
      </div>

      {path.slice(0, step + 1).map((t, i) => {
        const done = i < step || answered;
        const mine = replies[i]?.trim();
        return (
          <div key={i} className="spar-turn" ref={i === step ? latest : undefined}>
            <div className="bubble them">
              <span className="who">{i === 0 ? 'They say' : `Round ${i + 1} · They reply`}</span>“{t.line}”
            </div>
            {done && mine && <div className="bubble you"><span className="who">You</span>{mine}</div>}
            {done && (
              <div className="bubble model">
                <span className="who">A strong answer</span>
                <RefText text={t.answer} />
              </div>
            )}
          </div>
        );
      })}

      {!answered && (
        <div className="spar-compose">
          <label className="sr-only" htmlFor={`spar-${objection.id}`}>Your reply</label>
          <textarea
            id={`spar-${objection.id}`}
            rows={3}
            value={draft}
            placeholder="Your move…"
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && (e.metaKey || e.ctrlKey) && draft.trim()) reply(draft.trim());
            }}
          />
          <div className="row end">
            <button className="btn" onClick={() => reply('')}>Show me a strong answer</button>
            <button className="btn primary" disabled={!draft.trim()} onClick={() => reply(draft.trim())}>Reply</button>
          </div>
        </div>
      )}

      {answered && !last && (
        <div className="row end">
          <button className="btn primary" onClick={() => { setStep(step + 1); setAnswered(false); }}>They respond →</button>
        </div>
      )}

      {finished && (
        <div className="reveal">
          <p className="muted">That is as far as this conversation usually goes. You held {path.length} round{path.length === 1 ? '' : 's'}.</p>
          {wroteAny ? (
            <KeyPointCheck points={objection.keyPoints} checked={covered} onChange={setCovered} />
          ) : (
            <>
              <h4>Key points</h4>
              <ul>{objection.keyPoints.map((k) => <li key={k}><RefText text={k} /></li>)}</ul>
            </>
          )}
          <RefList refs={objection.references} />
          <ConfidenceRater
            objectionId={objection.id}
            onRate={rate}
            suggested={wroteAny ? suggestFromCoverage(covered.length, objection.keyPoints.length) : undefined}
          />
        </div>
      )}
    </article>
  );
}
