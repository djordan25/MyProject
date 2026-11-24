import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { EdButton, EdIcon, EdProgressSegmented } from 'editorial-ui';
import { getTrack } from '../content';
import { BOSS_PASS, progress, useProgress } from '../lib/progress';
import { stepLink, stepTitle, trackPath, type BossStep } from '../lib/path';
import { ask, exchangesOf, missesAllowed } from '../lib/games';
import { shuffle } from '../lib/shuffle';
import GameQuestion from '../components/GameQuestion';
import Seal from '../components/Seal';
import NotFound from './NotFound';

const ROUNDS = 10;

/** The section challenge: mixed objections and comebacks from every topic in a section, in random order. */
export default function Boss() {
  const { trackId, section } = useParams();
  const p = useProgress();
  const track = getTrack(trackId);
  const steps = track ? trackPath(p, track).flat() : [];
  const index = steps.findIndex((s) => s.kind === 'boss' && s.sectionIndex === Number(section));
  const step = steps[index] as BossStep | undefined;
  const [attempt, setAttempt] = useState(0);
  const [i, setI] = useState(0);
  const [missed, setMissed] = useState(0);
  const [finished, setFinished] = useState<number | null>(null);

  const questions = useMemo(() => {
    if (!step) return [];
    const pool = step.section.topicIds.flatMap((id) => steps.flatMap((s) => (s.kind === 'topic' && s.topic.id === id ? exchangesOf(s.topic) : [])));
    return shuffle(pool).slice(0, ROUNDS).map((e) => ask(e, pool, 4));
    // A fresh draw for each attempt; the questions must not change while one is in progress.
  }, [step?.key, attempt]);

  if (!track || !step) return <NotFound />;
  const back = <Link to={`/track/${track.id}`} className="back">← {track.title}</Link>;
  const allowed = missesAllowed(questions.length, BOSS_PASS);

  if (step.state === 'locked' && finished === null) {
    return (
      <>
        {back}
        <h1>Section challenge</h1>
        <section className="card locked-card">
          <span className="lock-tile lg"><EdIcon name="Lock" size="md" aria-hidden /></span>
          <h2>Clear every topic in “{step.section.title}” first</h2>
          <p className="muted">The challenge mixes objections from the whole section, so it opens once each topic is cleared.</p>
          <div className="row center"><EdButton asChild variant="primary"><Link to={`/track/${track.id}`}>Back to the path</Link></EdButton></div>
        </section>
      </>
    );
  }

  const restart = () => {
    setAttempt((a) => a + 1);
    setI(0);
    setMissed(0);
    setFinished(null);
  };

  if (finished !== null) {
    const passed = finished >= BOSS_PASS;
    const next = steps[index + 1];
    return (
      <>
        {back}
        <section className="card done">
          {passed ? <Seal tone="track" size={72} label="Section seal" /> : <span className="lock-tile lg"><EdIcon name="RotateCcw" size="md" aria-hidden /></span>}
          <div className="eyebrow">{step.section.title}</div>
          <h1>{passed ? 'Challenge passed' : 'Not this time'}</h1>
          <p className="big">{Math.round(finished * questions.length)} / {questions.length}</p>
          <p className="muted">
            {passed
              ? 'You answered a mixed run from the whole section. The next section is open.'
              : `You may miss ${allowed} of ${questions.length}. Look again at the answers you missed, then try a fresh draw.`}
          </p>
          <div className="row center">
            <EdButton variant={passed ? 'secondary' : 'primary'} onClick={restart}>Try again</EdButton>
            {passed && next && next.state !== 'locked' && (
              <EdButton asChild variant="primary"><Link to={stepLink(next)}>Next: {stepTitle(next)} <EdIcon name="ArrowRight" size="sm" aria-hidden /></Link></EdButton>
            )}
            {passed && !next && <EdButton asChild variant="primary"><Link to={`/track/${track.id}`}>Back to the track</Link></EdButton>}
          </div>
        </section>
      </>
    );
  }

  const finish = (misses: number) => {
    const score = (questions.length - misses) / questions.length;
    progress.recordBoss(step.key, score);
    setFinished(score);
  };

  return (
    <>
      {back}
      <div className="game-head">
        <h1>Section challenge</h1>
        <span className="lives" aria-label={`${allowed - missed} of ${allowed} misses left`}>
          {Array.from({ length: allowed }, (_, n) => <EdIcon key={n} name="Heart" size="sm" className={n < allowed - missed ? 'on' : 'off'} aria-hidden />)}
        </span>
      </div>
      <p className="muted">{step.section.title} · {questions.length} turns in random order · you may miss {allowed}.</p>
      <EdProgressSegmented segments={questions.length} filled={i} tone="brand" ariaLabel="Challenge progress" valueText={`Turn ${i + 1} of ${questions.length}`} />
      <div className="spacer" />
      <p className="deck-count">{questions[i].exchange.topic.title}</p>
      <GameQuestion
        key={`${attempt}-${i}`}
        question={questions[i]}
        context
        nextLabel={i + 1 < questions.length ? 'Next turn' : 'See result'}
        onNext={(correct) => {
          const misses = missed + (correct ? 0 : 1);
          setMissed(misses);
          // Out of misses: the run ends at once.
          if (misses > allowed || i + 1 >= questions.length) finish(misses > allowed ? misses + questions.length - i - 1 : misses);
          else setI(i + 1);
        }}
      />
    </>
  );
}
