import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { EdButton, EdIcon, EdProgressSegmented } from 'editorial-ui';
import { topics } from '../content';
import { tracks } from '../content/tracks';
import { progress, useProgress, XP } from '../lib/progress';
import { argumentsOf, gapQuestion } from '../lib/games';
import { openTopics } from '../lib/gamePool';
import { shuffle } from '../lib/shuffle';
import { buzz } from '../lib/haptics';
import RefText from '../components/RefText';

const ROUND = 6;
const KEY = 'build';

/** Build the argument: one step of a lesson's argument is missing. Pick the step that makes it hold together. */
export default function BuildGame() {
  const p = useProgress();
  const [round, setRound] = useState(0);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [right, setRight] = useState(0);
  const [done, setDone] = useState(false);

  // Arguments from topics that are open come first, so the game follows the path; the rest fill the round.
  const questions = useMemo(() => {
    const all = argumentsOf(topics);
    const open = new Set(openTopics(p).map((t) => t.id));
    const mine = shuffle(all.filter((a) => open.has(a.topic.id)));
    const rest = shuffle(all.filter((a) => !open.has(a.topic.id)));
    const trackOf = (id: string) => tracks.find((t) => t.sections.some((s) => s.topicIds.includes(id)))?.id;
    return shuffle([...mine, ...rest].slice(0, ROUND)).map((a) => gapQuestion(a, all, 4, (b) => trackOf(b.topic.id) === trackOf(a.topic.id)));
    // A fresh draw for each round; it must not change while one is in progress.
  }, [round]);

  const restart = () => {
    setRound((r) => r + 1);
    setI(0);
    setPicked(null);
    setRight(0);
    setDone(false);
  };

  const head = (
    <>
      <Link to="/play" className="back">← Games</Link>
      <div className="game-head">
        <h1>Build the argument</h1>
        <span className="game-score mono" aria-label={`${right} right`}>{right}/{questions.length}</span>
      </div>
    </>
  );

  if (done) {
    return (
      <>
        {head}
        <section className="card done">
          <div className="eyebrow">Round complete</div>
          <h1>{right === questions.length ? 'Every step in place' : right / questions.length >= 0.7 ? 'Well reasoned' : 'Worth another look'}</h1>
          <p className="big">{right} / {questions.length}</p>
          <p className="muted">An argument you can rebuild is one you can explain. Your best: {Math.max(p.games[KEY] ?? 0, right)} of {questions.length}.</p>
          <div className="row center">
            <EdButton variant="primary" leadingIcon={<EdIcon name="RotateCcw" size="sm" />} onClick={restart}>Play again</EdButton>
          </div>
        </section>
      </>
    );
  }

  const q = questions[i];
  const answered = picked !== null;
  const last = q.gap === q.argument.steps.length - 1;
  const choose = (n: number) => {
    if (answered) return;
    setPicked(n);
    buzz(n === q.answer ? 'success' : 'miss');
    if (n === q.answer) setRight((r) => r + 1);
  };
  const next = () => {
    if (i + 1 < questions.length) {
      setI(i + 1);
      setPicked(null);
    } else {
      progress.recordGame(KEY, right, right * XP.gameCorrect + (right === questions.length ? 5 : 0));
      setDone(true);
    }
  };

  return (
    <>
      {head}
      <p className="muted">One step is missing. Choose the {last ? 'conclusion' : 'premise'} that completes the argument.</p>
      <EdProgressSegmented segments={questions.length} filled={i} tone="brand" ariaLabel="Round progress" valueText={`Argument ${i + 1} of ${questions.length}`} />
      <div className="spacer" />
      <section className="card quiz">
        <div className="eyebrow">{q.argument.topic.title} · {q.argument.heading}</div>
        <ol className="argument build">
          {q.argument.steps.map((step, n) => (
            <li key={n} className={n === q.gap ? (answered ? 'filled' : 'gap') : undefined}>
              {n === q.gap ? (answered ? <RefText text={step} /> : <span aria-label="Missing step">?</span>) : <RefText text={step} />}
            </li>
          ))}
        </ol>
        <div className="options">
          {q.options.map((opt, n) => {
            const state = !answered ? '' : n === q.answer ? 'correct' : n === picked ? 'wrong' : 'dim';
            return (
              <button key={n} className={`option ${state}`} data-key={'ABCD'[n]} onClick={() => choose(n)} disabled={answered}>
                {opt}
              </button>
            );
          })}
        </div>
        {answered && (
          <div className="reveal">
            <p><strong>{picked === q.answer ? 'Correct.' : 'Not quite.'}</strong> The argument is now complete above.</p>
            <div className="row end">
              <EdButton asChild variant="ghost"><Link to={`/topic/${q.argument.topic.id}`}>Open the lesson</Link></EdButton>
              <EdButton variant="primary" trailingIcon={<EdIcon name="ArrowRight" size="sm" />} onClick={next}>{i + 1 < questions.length ? 'Next argument' : 'See result'}</EdButton>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
