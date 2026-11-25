import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { EdButton, EdIcon } from 'editorial-ui';
import { getTopic } from '../content';
import { MAP_LAND } from '../content/mapLand';
import { progress, useProgress, XP } from '../lib/progress';
import { mapQuestion, mapTopics } from '../lib/mapGame';
import { openTopics } from '../lib/gamePool';
import { shuffle } from '../lib/shuffle';
import { buzz } from '../lib/haptics';
import Emblem from '../components/Emblem';

const ROUND = 8;
const KEY = 'map';

/** Where was it? One place is marked on a lesson's map. Name it. */
export default function MapGame() {
  const p = useProgress();
  const [round, setRound] = useState(0);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [right, setRight] = useState(0);
  const [done, setDone] = useState(false);

  // Maps from lessons that are open come first, so the game follows the path; the rest fill the round.
  const questions = useMemo(() => {
    const open = new Set(openTopics(p).map((t) => t.id));
    const all = mapTopics();
    const order = [...shuffle(all.filter((id) => open.has(id))), ...shuffle(all.filter((id) => !open.has(id)))];
    return shuffle(Array.from({ length: ROUND }, (_, n) => order[n % order.length])).map((id) => mapQuestion(id));
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
        <h1>Where was it?</h1>
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
          <h1>{right === questions.length ? 'You know the ground' : right / questions.length >= 0.7 ? 'Well placed' : 'Worth another look'}</h1>
          <p className="big">{right} / {questions.length}</p>
          <p className="muted">Knowing where things happened makes the story easier to hold together. Your best: {Math.max(p.games[KEY] ?? 0, right)} of {questions.length}.</p>
          <div className="row center">
            <EdButton variant="primary" leadingIcon={<EdIcon name="RotateCcw" size="sm" />} onClick={restart}>Play again</EdButton>
          </div>
        </section>
      </>
    );
  }

  const q = questions[i];
  const { view } = q;
  const { u } = view;
  const topic = getTopic(q.topicId);
  const answered = picked !== null;
  const mark = view.pins.find((pin) => pin.place.name === q.target.name)!;
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
      <p className="muted">One place is marked. Which is it? The grey dots are the other places this lesson names.</p>
      <div className="step-bar" role="progressbar" aria-label="Round progress" aria-valuemin={0} aria-valuemax={questions.length} aria-valuenow={i + 1} aria-valuetext={`Place ${i + 1} of ${questions.length}`}>
        {questions.map((_, n) => <i key={n} className={n < i ? 'past' : n === i ? 'now' : ''} />)}
      </div>
      <div className="spacer" />
      <section className="card quiz">
        {topic && <div className="game-source"><Emblem topic={topic} size={40} /><span className="eyebrow">{topic.title}</span></div>}
        <figure className="lesson-map quiz-map">
          <svg viewBox={`${view.x} ${view.y} ${view.w} ${view.h}`} role="img" aria-label="A map of the region with one place marked">
            <rect className="map-sea" x={view.x} y={view.y} width={view.w} height={view.h} />
            <path className="map-land" d={MAP_LAND} strokeWidth={0.25 * u} />
            {view.pins.filter((pin) => pin !== mark).map((pin) => <circle key={pin.place.name} className="map-other" cx={pin.x} cy={pin.y} r={1.1 * u} />)}
            <circle className="map-ring" cx={mark.x} cy={mark.y} r={4.2 * u} strokeWidth={0.7 * u} />
            <circle className="map-dot" cx={mark.x} cy={mark.y} r={1.8 * u} />
          </svg>
        </figure>
        <div className="options">
          {q.options.map((opt, n) => {
            const state = !answered ? '' : n === q.answer ? 'correct' : n === picked ? 'wrong' : 'dim';
            return <button key={n} className={`option ${state}`} data-key={'ABCD'[n]} onClick={() => choose(n)} disabled={answered}>{opt}</button>;
          })}
        </div>
        {answered && (
          <div className="reveal">
            <p><strong>{picked === q.answer ? 'Correct.' : 'Not quite.'}</strong> That is {q.target.name}.</p>
            <div className="row end">
              {topic && <EdButton asChild variant="ghost"><Link to={`/topic/${topic.id}`}>Open the lesson</Link></EdButton>}
              <EdButton variant="primary" trailingIcon={<EdIcon name="ArrowRight" size="sm" />} onClick={next}>{i + 1 < questions.length ? 'Next place' : 'See result'}</EdButton>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
