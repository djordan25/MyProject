import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { EdButton, EdIcon } from 'editorial-ui';
import { topics, type QuizQuestion, type Topic } from '../content';
import { XP, progress, useProgress } from '../lib/progress';
import { argumentsOf, gapQuestion, type GapQuestion } from '../lib/games';
import { sectionChecks, type Visuals } from '../lib/lessonSteps';
import { buzz } from '../lib/haptics';
import ArgumentDiagram from './ArgumentDiagram';
import Emblem from './Emblem';
import LessonBody from './LessonBody';
import RefText from './RefText';

type Screen =
  | { kind: 'section'; index: number }
  | { kind: 'quiz'; index: number; q: QuizQuestion }
  | { kind: 'gap'; index: number; q: GapQuestion }
  | { kind: 'recap' };

/**
 * A lesson as a run of short steps: one section to a screen, a quick check after it, and a recap at the end.
 * Reaching the recap marks the lesson read.
 */
export default function LessonSteps({ topic, visuals }: { topic: Topic; visuals: Visuals }) {
  const p = useProgress();
  const wasRead = useRef(!!p.lessonsRead[topic.id]);
  const screens = useMemo<Screen[]>(() => {
    const checks = sectionChecks(topic);
    const all = argumentsOf(topics);
    return [
      ...topic.lesson.flatMap((s, index): Screen[] => {
        const arg = all.find((a) => a.topic.id === topic.id && a.heading === s.heading);
        const check: Screen[] = checks[index] ? [{ kind: 'quiz', index, q: checks[index]! }] : arg ? [{ kind: 'gap', index, q: gapQuestion(arg, all) }] : [];
        return [{ kind: 'section', index }, ...check];
      }),
      { kind: 'recap' },
    ];
  }, [topic]);
  const [at, setAt] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [right, setRight] = useState(0);
  const top = useRef<HTMLDivElement>(null);
  const screen = screens[at];
  const asked = screens.filter((s) => s.kind === 'quiz' || s.kind === 'gap').length;

  useEffect(() => {
    if (screen.kind === 'recap') progress.markLessonRead(topic.id);
  }, [screen.kind, topic.id]);

  const go = (to: number) => {
    setAt(to);
    setPicked(null);
    top.current?.scrollIntoView({ block: 'start' });
  };
  const choose = (n: number, answer: number) => {
    if (picked !== null) return;
    setPicked(n);
    buzz(n === answer ? 'success' : 'miss');
    if (n === answer) setRight((r) => r + 1);
  };

  const nav = (canNext = true, label = 'Next') => (
    <div className="row between step-nav">
      <EdButton variant="ghost" onClick={() => go(at - 1)} disabled={at === 0} leadingIcon={<EdIcon name="ArrowLeft" size="sm" />}>Back</EdButton>
      <EdButton variant="primary" onClick={() => go(at + 1)} disabled={!canNext} trailingIcon={<EdIcon name="ArrowRight" size="sm" />}>{label}</EdButton>
    </div>
  );
  const options = (opts: string[], answer: number) => (
    <div className="options">
      {opts.map((opt, n) => {
        const state = picked === null ? '' : n === answer ? 'correct' : n === picked ? 'wrong' : 'dim';
        return <button key={n} className={`option ${state}`} data-key={'ABCD'[n]} onClick={() => choose(n, answer)} disabled={picked !== null}>{opt}</button>;
      })}
    </div>
  );

  return (
    <div ref={top} className="lesson-steps">
      <div className="step-bar" role="progressbar" aria-label="Lesson progress" aria-valuemin={0} aria-valuemax={screens.length} aria-valuenow={at + 1} aria-valuetext={`Step ${at + 1} of ${screens.length}`}>
        {screens.map((s, n) => <i key={n} className={`${n < at || screen.kind === 'recap' ? 'past' : n === at ? 'now' : ''}${s.kind === 'section' || s.kind === 'recap' ? '' : ' check'}`} />)}
      </div>
      {screen.kind === 'section' && (
        <section className="card lesson step">
          <div className="eyebrow">Part {screen.index + 1} of {topic.lesson.length}</div>
          <h2>{topic.lesson[screen.index].heading}</h2>
          <LessonBody topic={topic} section={topic.lesson[screen.index]} index={screen.index} visuals={visuals} />
          {nav()}
        </section>
      )}
      {screen.kind === 'quiz' && (
        <section className="card quiz step">
          <div className="eyebrow">Quick check · {topic.lesson[screen.index].heading}</div>
          <p className="claim">{screen.q.question}</p>
          {options(screen.q.options, screen.q.answer)}
          {picked !== null && (
            <div className="reveal"><p><strong>{picked === screen.q.answer ? 'Correct.' : 'Not quite.'}</strong> <RefText text={screen.q.explanation} /></p></div>
          )}
          {nav(picked !== null)}
        </section>
      )}
      {screen.kind === 'gap' && (
        <section className="card quiz step">
          <div className="eyebrow">Quick check · rebuild the argument</div>
          <p className="muted">One step is missing. Choose the {screen.q.gap === screen.q.argument.steps.length - 1 ? 'conclusion' : 'premise'} that completes it.</p>
          <ArgumentDiagram
            steps={screen.q.argument.steps}
            stepClass={(n) => (n === screen.q.gap ? (picked !== null ? 'filled' : 'gap') : undefined)}
            renderStep={(step, n) => (n === screen.q.gap && picked === null ? <span className="arg-missing" aria-label="Missing step">?</span> : <RefText text={step} />)}
          />
          {options(screen.q.options, screen.q.answer)}
          {picked !== null && <div className="reveal"><p><strong>{picked === screen.q.answer ? 'Correct.' : 'Not quite.'}</strong> The argument is complete above.</p></div>}
          {nav(picked !== null)}
        </section>
      )}
      {screen.kind === 'recap' && (
        <section className="card recap step">
          <Emblem topic={topic} size={96} />
          <div className="eyebrow">Lesson complete</div>
          <h2>{topic.title}</h2>
          <p className="recap-score mono">
            {asked > 0 && <span>{right} of {asked} checks right</span>}
            {!wasRead.current && <span className="gain">+{XP.lesson} points</span>}
          </p>
          {topic.lesson.some((s) => s.keyLine) && (
            <>
              <h3>What to carry away</h3>
              <ol className="recap-lines">
                {topic.lesson.filter((s) => s.keyLine).map((s) => <li key={s.heading}><RefText text={s.keyLine!} /></li>)}
              </ol>
            </>
          )}
          <div className="row center">
            <EdButton asChild variant="primary"><Link to={`/topic/${topic.id}/objections`}>Practise the objections <EdIcon name="ArrowRight" size="sm" aria-hidden /></Link></EdButton>
            <EdButton asChild variant="secondary"><Link to={`/topic/${topic.id}/quiz`}>Take the quiz</Link></EdButton>
          </div>
          {topic.furtherReading && (
            <details className="recap-reading">
              <summary>Further reading</summary>
              <ul>{topic.furtherReading.map((r) => <li key={r}>{r}</li>)}</ul>
            </details>
          )}
          <p><button type="button" className="link-btn" onClick={() => go(0)}>Go through it again</button></p>
        </section>
      )}
    </div>
  );
}
