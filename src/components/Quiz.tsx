import { useMemo, useState } from 'react';
import type { QuizQuestion } from '../content';
import { shuffle } from '../lib/shuffle';

interface Props {
  questions: QuizQuestion[];
  onFinish: (score: number) => void;
}

export default function Quiz({ questions, onFinish }: Props) {
  const [round, setRound] = useState(0);
  const order = useMemo(() => shuffle(questions), [questions, round]);
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
        <button
          className="btn primary"
          onClick={() => {
            setRound((r) => r + 1);
            setI(0);
            setPicked(null);
            setCorrect(0);
            setDone(false);
          }}
        >
          Try again
        </button>
      </section>
    );
  }

  const q = order[i];
  const answered = picked !== null;

  const choose = (idx: number) => {
    if (answered) return;
    setPicked(idx);
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
            <button key={idx} className={`option ${state}`} onClick={() => choose(idx)} disabled={answered}>
              {opt}
            </button>
          );
        })}
      </div>
      {answered && (
        <div className="reveal">
          <p><strong>{picked === q.answer ? 'Correct.' : 'Not quite.'}</strong> {q.explanation}</p>
          <button className="btn primary" onClick={next}>{i + 1 < order.length ? 'Next question' : 'See results'}</button>
        </div>
      )}
    </section>
  );
}
