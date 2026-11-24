import { useEffect, useRef, useState } from 'react';
import { EdButton, EdIcon } from 'editorial-ui';
import type { Question } from '../lib/games';
import { buzz } from '../lib/haptics';
import RefText from './RefText';

interface Props {
  question: Question;
  /** Seconds allowed, or 0 for no clock. */
  seconds?: number;
  /** Called when the learner moves on: whether they were right, and the share of the clock left (0 when untimed). */
  onNext: (correct: boolean, timeLeft: number) => void;
  nextLabel?: string;
  /** Show the objection a comeback belongs to. Needed when turns arrive out of order. */
  context?: boolean;
}

/** One turn of a conversation game: their line, a choice of replies, then the full answer. */
export default function GameQuestion({ question, seconds = 0, onNext, nextLabel = 'Next', context = false }: Props) {
  const [picked, setPicked] = useState<number | null>(null);
  const [left, setLeft] = useState(seconds);
  const leftAtAnswer = useRef(0);
  const answered = picked !== null;
  const timedOut = picked === -1;
  const { exchange, options, answer } = question;

  useEffect(() => {
    if (!seconds || answered) return;
    if (left <= 0) {
      setPicked(-1);
      buzz('miss');
      return;
    }
    const t = setTimeout(() => setLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds, answered, left]);

  const choose = (i: number) => {
    if (answered) return;
    leftAtAnswer.current = seconds ? left / seconds : 0;
    setPicked(i);
    buzz(i === answer ? 'success' : 'miss');
  };

  return (
    <section className="card quiz game-question">
      {seconds > 0 && (
        <div className={`clock${left <= 5 && !answered ? ' low' : ''}`} role="timer" aria-label={`${left} seconds left`}>
          <i style={{ width: `${(left / seconds) * 100}%` }} />
        </div>
      )}
      {context && exchange.depth > 0 && <p className="game-context">Earlier they said: “{exchange.root}”</p>}
      <div className="bubble them">
        <span className="who">{exchange.depth === 0 ? 'They say' : 'They come back'}</span>
        {exchange.prompt}
      </div>
      <p className="game-ask">Which reply opens the best answer?</p>
      <div className="options">
        {options.map((opt, i) => {
          const state = !answered ? '' : i === answer ? 'correct' : i === picked ? 'wrong' : 'dim';
          return (
            <button key={i} className={`option ${state}`} data-key={'ABCD'[i]} onClick={() => choose(i)} disabled={answered}>
              {opt}
            </button>
          );
        })}
      </div>
      {answered && (
        <div className="reveal">
          <p><strong>{timedOut ? 'Out of time.' : picked === answer ? 'Correct.' : 'Not quite.'}</strong></p>
          <details className="full-answer" open={picked !== answer}>
            <summary>The full answer</summary>
            <p><RefText text={exchange.answer} /></p>
          </details>
          <div className="row end">
            <EdButton variant="primary" trailingIcon={<EdIcon name="ArrowRight" size="sm" />} onClick={() => onNext(picked === answer, picked === answer ? leftAtAnswer.current : 0)}>
              {nextLabel}
            </EdButton>
          </div>
        </div>
      )}
    </section>
  );
}
