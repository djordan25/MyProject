import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { EdButton, EdIcon, EdProgressSegmented } from 'editorial-ui';
import { getTopic } from '../content';
import { ARGUMENTS, VERDICTS, type Verdict } from '../content/games';
import { progress, useProgress, XP } from '../lib/progress';
import { openTopics } from '../lib/gamePool';
import { shuffle } from '../lib/shuffle';
import { buzz } from '../lib/haptics';

const ROUND = 8;
const KEY = 'sort';

/** Sound or weak? Judge each argument: use it, overstated, or leave alone. */
export default function SortGame() {
  const p = useProgress();
  const [round, setRound] = useState(0);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<Verdict | null>(null);
  const [right, setRight] = useState(0);
  const [done, setDone] = useState(false);

  // Arguments from topics that are open come first, so the game follows the path; the rest fill the round.
  const cards = useMemo(() => {
    const open = new Set(openTopics(p).map((t) => t.id));
    const mine = shuffle(ARGUMENTS.filter((a) => open.has(a.topicId)));
    const rest = shuffle(ARGUMENTS.filter((a) => !open.has(a.topicId)));
    return shuffle([...mine, ...rest].slice(0, ROUND));
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
        <h1>Sound or weak?</h1>
        <span className="game-score mono" aria-label={`${right} right`}>{right}/{cards.length}</span>
      </div>
    </>
  );

  if (done) {
    return (
      <>
        {head}
        <section className="card done">
          <div className="eyebrow">Round complete</div>
          <h1>{right === cards.length ? 'Sound judgement' : right / cards.length >= 0.7 ? 'Well judged' : 'Worth another look'}</h1>
          <p className="big">{right} / {cards.length}</p>
          <p className="muted">A weak argument costs you the hearing your good ones deserve. Your best: {Math.max(p.games[KEY] ?? 0, right)} of {cards.length}.</p>
          <div className="row center">
            <EdButton variant="primary" leadingIcon={<EdIcon name="RotateCcw" size="sm" />} onClick={restart}>Play again</EdButton>
          </div>
        </section>
      </>
    );
  }

  const card = cards[i];
  const topic = getTopic(card.topicId);
  const answered = picked !== null;
  const choose = (v: Verdict) => {
    if (answered) return;
    setPicked(v);
    buzz(v === card.verdict ? 'success' : 'miss');
    if (v === card.verdict) setRight((n) => n + 1);
  };
  const next = () => {
    if (i + 1 < cards.length) {
      setI(i + 1);
      setPicked(null);
    } else {
      progress.recordGame(KEY, right, right * XP.gameCorrect + (right === cards.length ? 5 : 0));
      setDone(true);
    }
  };

  return (
    <>
      {head}
      <p className="muted">Would you use this argument as it stands? Some are sound, some claim too much, and some the lessons tell you to leave alone.</p>
      <EdProgressSegmented segments={cards.length} filled={i} tone="brand" ariaLabel="Round progress" valueText={`Argument ${i + 1} of ${cards.length}`} />
      <div className="spacer" />
      <section className="card quiz">
        <div className="eyebrow">Argument {i + 1} of {cards.length}</div>
        <p className="claim">“{card.claim}”</p>
        <div className="verdicts" role="group" aria-label="Your verdict">
          {VERDICTS.map((v) => {
            const state = !answered ? '' : v.id === card.verdict ? 'correct' : v.id === picked ? 'wrong' : 'dim';
            return (
              <button key={v.id} className={`verdict ${v.id} ${state}`} onClick={() => choose(v.id)} disabled={answered}>
                {v.label}
              </button>
            );
          })}
        </div>
        {answered && (
          <div className="reveal">
            <p>
              <strong>{picked === card.verdict ? 'Correct.' : 'Not quite.'}</strong> {VERDICTS.find((v) => v.id === card.verdict)!.label}: {card.why}
            </p>
            <div className="row end">
              {topic && <EdButton asChild variant="ghost"><Link to={`/topic/${topic.id}`}>From “{topic.title}”</Link></EdButton>}
              <EdButton variant="primary" trailingIcon={<EdIcon name="ArrowRight" size="sm" />} onClick={next}>{i + 1 < cards.length ? 'Next argument' : 'See result'}</EdButton>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
