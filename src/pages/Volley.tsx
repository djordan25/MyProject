import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { EdButton, EdIcon, EdProgressSegmented, EdStat, EdStatGrid } from 'editorial-ui';
import { progress, useProgress, XP } from '../lib/progress';
import { ask, chainOf, exchangesOf } from '../lib/games';
import { openTopics, playableTopics } from '../lib/gamePool';
import { shuffle } from '../lib/shuffle';
import GameQuestion from '../components/GameQuestion';

const SECONDS = 30;
const CHAINS = 3;
const BASE = 10;
const TIME_BONUS = 5;
const TIMER_KEY = 'apologetics-volley-timer';

const loadTimer = (): boolean => {
  try {
    return localStorage.getItem(TIMER_KEY) !== 'off';
  } catch {
    return true;
  }
};

/** Combo multiplier: each answer in a row adds a quarter, up to double. */
const multiplier = (combo: number): number => Math.min(2, 1 + combo * 0.25);

/** Volley: follow-up chains played as a quick back-and-forth. Each right reply builds a combo; a miss resets it. */
export default function Volley() {
  const p = useProgress();
  const [params, setParams] = useSearchParams();
  const open = openTopics(p);
  const offered = playableTopics(p);
  const [fallback] = useState(() => shuffle(offered)[0]);
  const topic = open.find((t) => t.id === params.get('topic')) ?? fallback;
  const [round, setRound] = useState(0);
  const [timed, setTimed] = useState(loadTimer);
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [right, setRight] = useState(0);
  const [done, setDone] = useState(false);

  const questions = useMemo(() => {
    if (!topic) return [];
    const pool = exchangesOf(topic);
    return shuffle(topic.objections).slice(0, CHAINS).flatMap((o) => chainOf(o, topic)).map((e) => ask(e, pool, 3));
    // A fresh draw for each round; the questions must not change while one is in progress.
  }, [topic?.id, round]);

  const restart = () => {
    setRound((r) => r + 1);
    setI(0);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setRight(0);
    setDone(false);
  };

  if (!topic) return <p className="muted">No topics are open yet.</p>;
  const key = `volley:${topic.id}`;
  const best = p.games[key] ?? 0;

  return (
    <>
      <Link to="/play" className="back">← Games</Link>
      <div className="game-head">
        <h1>Volley</h1>
        <span className="game-score mono" aria-label={`Score ${score}`}>{score}</span>
      </div>
      <div className="filters">
        <label className="select">
          <span className="muted">Topic</span>
          <select
            value={topic.id}
            onChange={(e) => {
              setParams({ topic: e.target.value });
              restart();
            }}
          >
            {(offered.includes(topic) ? offered : [topic, ...offered]).map((t) => <option key={t.id} value={t.id}>{t.title}</option>)}
          </select>
        </label>
        <span className="divider" aria-hidden />
        <label className="check">
          <input
            type="checkbox"
            checked={timed}
            onChange={(e) => {
              setTimed(e.target.checked);
              try {
                localStorage.setItem(TIMER_KEY, e.target.checked ? 'on' : 'off');
              } catch {
                /* the choice lasts for this visit only */
              }
            }}
          />{' '}
          Clock ({SECONDS}s a turn)
        </label>
      </div>
      {done ? (
        <section className="card done">
          <div className="eyebrow">{topic.title}</div>
          <h1>{right === questions.length ? 'A clean rally' : right / questions.length >= 0.7 ? 'Well played' : 'Keep at it'}</h1>
          <p className="big">{score}</p>
          <div className="done-stats">
            <EdStatGrid columns={3}>
              <EdStat label="Right" value={`${right}/${questions.length}`} tone={right === questions.length ? 'success' : 'neutral'} />
              <EdStat label="Best combo" value={`×${bestCombo}`} />
              <EdStat label="Your best" value={Math.max(best, score)} />
            </EdStatGrid>
          </div>
          <div className="row center">
            <EdButton asChild variant="secondary"><Link to={`/topic/${topic.id}/objections`}>Review the objections</Link></EdButton>
            <EdButton variant="primary" leadingIcon={<EdIcon name="RotateCcw" size="sm" />} onClick={restart}>Play again</EdButton>
          </div>
        </section>
      ) : (
        <>
          <div className="game-status">
            <span className="deck-count">Turn {i + 1} of {questions.length}{best ? ` · best ${best}` : ''}</span>
            <span className={`combo${combo > 1 ? ' hot' : ''}`} aria-live="polite">{combo > 1 ? `Combo ×${combo}` : ' '}</span>
          </div>
          <EdProgressSegmented segments={questions.length} filled={i} tone="brand" ariaLabel="Round progress" valueText={`Turn ${i + 1} of ${questions.length}`} />
          <div className="spacer" />
          <GameQuestion
            key={`${round}-${i}`}
            question={questions[i]}
            seconds={timed ? SECONDS : 0}
            nextLabel={i + 1 < questions.length ? 'Next turn' : 'See score'}
            onNext={(correct, timeLeft) => {
              const gained = correct ? Math.round((BASE + TIME_BONUS * timeLeft) * multiplier(combo)) : 0;
              const total = score + gained;
              const nowRight = right + (correct ? 1 : 0);
              const nowCombo = correct ? combo + 1 : 0;
              setScore(total);
              setRight(nowRight);
              setCombo(nowCombo);
              setBestCombo(Math.max(bestCombo, nowCombo));
              if (i + 1 < questions.length) setI(i + 1);
              else {
                progress.recordGame(key, total, nowRight * XP.gameCorrect + (nowRight === questions.length ? 5 : 0));
                setDone(true);
              }
            }}
          />
        </>
      )}
    </>
  );
}
