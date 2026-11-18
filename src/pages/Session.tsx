import { useState } from 'react';
import { Link } from 'react-router-dom';
import Drill from '../components/Drill';
import Quiz from '../components/Quiz';
import { EdButton, EdProgressSegmented, EdStat, EdStatGrid } from 'editorial-ui';
import Seal from '../components/Seal';
import { useDrillFormat } from '../lib/drillFormat';
import { daysPractised, progress, useProgress } from '../lib/progress';
import { buildSession } from '../lib/session';
import { useAudience } from '../lib/profile';

const LABEL = { review: 'Review', new: 'New objection', refresh: 'Refresher' };

/** Today's practice: a few due reviews, one new objection, two quiz questions, then a summary. */
export default function Session() {
  const p = useProgress();
  const audience = useAudience();
  // Fixed when the session starts: rating cards must not reshuffle it.
  const [session] = useState(() => buildSession(p, audience));
  const [format] = useDrillFormat();
  const [step, setStep] = useState(0);
  const [solid, setSolid] = useState(0);
  const [quizScore, setQuizScore] = useState<number | null>(null);

  const { drills, quiz } = session;
  const total = drills.length + (quiz.length ? 1 : 0);
  const inDrills = step < drills.length;
  const inQuiz = step === drills.length && quiz.length > 0;
  const done = step >= total;

  if (done) {
    return (
      <section className="card done">
        <Seal size={72} label="Session seal" />
        <div className="eyebrow">Session complete</div>
        <h1>You’re more ready than yesterday</h1>
        <div className="done-stats">
          <EdStatGrid columns={3}>
            <EdStat label="Practised" value={drills.length} />
            <EdStat label="Now solid" value={solid} tone={solid ? 'success' : 'neutral'} />
            <EdStat label="Days this week" value={`${daysPractised(p)}/7`} />
          </EdStatGrid>
        </div>
        {quizScore !== null && <p className="muted">Quiz: {Math.round(quizScore * quiz.length)} of {quiz.length} correct.</p>}
        <p className="done-verse">“…with gentleness and respect.”<span className="mono">1 Pet 3:15</span></p>
        <div className="row center">
          <EdButton asChild variant="secondary"><Link to="/">Done for today</Link></EdButton>
          <EdButton asChild variant="primary"><Link to="/practice">Keep practising</Link></EdButton>
        </div>
      </section>
    );
  }

  const current = drills[step];
  return (
    <>
      <div className="session-head">
        <Link to="/" className="back">← Home</Link>
        <span className="muted">Step {step + 1} of {total}</span>
      </div>
      <EdProgressSegmented segments={total} filled={step} tone="brand" ariaLabel="Session progress" valueText={`Step ${step + 1} of ${total}`} />
      <div className="spacer" />
      {inDrills && (
        <Drill
          key={current.objection.id}
          format={format}
          objection={current.objection}
          context={`${LABEL[current.kind]} · ${current.topic.title}`}
          onRated={(level) => {
            if (level === 'solid' || level === 'teach') setSolid((n) => n + 1);
            setStep(step + 1);
          }}
        />
      )}
      {inQuiz && (
        <Quiz
          questions={quiz}
          onFinish={(score) => {
            setQuizScore(score);
            progress.recordPractice();
            setStep(step + 1);
          }}
        />
      )}
    </>
  );
}
