import { EdButton, EdIcon } from 'editorial-ui';
import { useMemo, useState } from 'react';
import type { QuizQuestion } from '../content';
import { shuffle } from '../lib/shuffle';
import RefText from './RefText';
import { buzz } from '../lib/haptics';

interface Props {
  questions: QuizQuestion[];
  onFinish: (score: number) => void;
  /** Ask at most this many questions per attempt, drawn at random from the bank. */
  limit?: number;
}

/** A question with its options in random order and the answer index moved to match. */
function shuffleOptions(q: QuizQuestion): QuizQuestion {
  const order = shuffle(q.options.map((_, i) => i));
  return { ...q, options: order.map((i) => q.options[i]), answer: order.indexOf(q.answer) };
}

export default function Quiz({ questions, onFinish, limit }: Props) {
  const [round, setRound] = useState(0);
  // A fresh random draw, question order and option order on every attempt.
  const order = useMemo(
    () => shuffle(questions).slice(0, limit ?? questions.length).map(shuffleOptions),
    [questions, limit, round],
  );
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);

  if (done) {
    const score = correct / order.length;
    return (
      <section className="card quiz-result">
        <h2>{score === 1 ? 'Perfect score!' : score >= 0.7 ? 'Well done!' : 'Keep practising'}</h2>
        <p className="big">{correct} / {order.length}</p>
        {questions.length > order.length && (
          <p className="muted">Each attempt draws {order.length} of this topic’s {questions.length} questions at random.</p>
        )}
        <EdButton
          variant="primary"
          onClick={() => {
            setRound((r) => r + 1);
            setI(0);
            setPicked(null);
            setCorrect(0);
            setDone(false);
          }}
        >
          Try again
        </EdButton>
      </section>
    );
  }

  const q = order[i];
  const answered = picked !== null;

  const choose = (idx: number) => {
    if (answered) return;
    setPicked(idx);
    buzz(idx === q.answer ? 'success' : 'miss');
    if (idx === q.answer) setCorrect((c) => c + 1);
  };

  const next = () => {
    if (i + 1 < order.length) {
      setI(i + 1);
      setPicked(null);
    } else {
      setDone(true);
      onFinish(correct / order.length);
    }
  };

  return (
    <section className="card quiz">
      <div className="eyebrow">Question {i + 1} of {order.length}</div>
      <h2>{q.question}</h2>
      <div className="options">
        {q.options.map((opt, idx) => {
          const state = !answered ? '' : idx === q.answer ? 'correct' : idx === picked ? 'wrong' : 'dim';
          return (
            <button key={`${q.id}-${idx}`} className={`option ${state}`} data-key={'ABCDEF'[idx]} onClick={() => choose(idx)} disabled={answered}>
              {opt}
            </button>
          );
        })}
      </div>
      {answered && (
        <div className="reveal">
          <p><strong>{picked === q.answer ? 'Correct.' : 'Not quite.'}</strong> <RefText text={q.explanation} /></p>
          <div className="row end">
            <EdButton variant="primary" trailingIcon={<EdIcon name="ArrowRight" size="sm" />} onClick={next}>{i + 1 < order.length ? 'Next question' : 'See results'}</EdButton>
          </div>
        </div>
      )}
    </section>
  );
}
