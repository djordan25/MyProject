import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom';
import { getTopic, trackForTopic, type Topic } from '../content';
import { objectionScore, overdueReviews, progress, SEAL_QUIZ, topicSealed, useProgress } from '../lib/progress';
import { stepLink, stepTitle, TEST_OUT, topicAccess, topicCleared } from '../lib/path';
import { buzz } from '../lib/haptics';
import Seal from '../components/Seal';
import Emblem from '../components/Emblem';
import ArgumentDiagram from '../components/ArgumentDiagram';
import TimeAxis from '../components/TimeAxis';
import { TIMELINE } from '../content/games';
import { MAPS } from '../content/maps';
import { chartsFor } from '../content/charts';
import LessonChart from '../components/LessonChart';
import LessonMap from '../components/LessonMap';
import { EdButton, EdIcon, EdNotification, EdStatusBadge } from 'editorial-ui';
import Drill, { FormatToggle } from '../components/Drill';
import { useDrillFormat } from '../lib/drillFormat';
import Quiz from '../components/Quiz';
import RefText from '../components/RefText';
import RefList from '../components/RefList';
import NotFound from './NotFound';

export default function TopicPage() {
  const { topicId } = useParams();
  const p = useProgress();
  const topic = getTopic(topicId);
  if (!topic) return <NotFound />;
  const base = `/topic/${topic.id}`;
  const track = trackForTopic(topic.id);
  const access = topicAccess(p, topic.id);

  if (access.state === 'locked') {
    const blocker = access.blocker;
    return (
      <>
        <Link to={track ? `/track/${track.id}` : '/'} className="back">← {track ? track.title : 'Home'}</Link>
        <h1 className="track-title"><Emblem topic={topic} size={64} /> {topic.title}</h1>
        <section className="card locked-card">
          <span className="lock-tile lg"><EdIcon name="Lock" size="md" aria-hidden /></span>
          <h2>This topic is further along the path</h2>
          <p>
            Topics open in order, so that each one builds on the last.
            {blocker ? <> Clear <strong>{stepTitle(blocker)}</strong> to move on.</> : null}
          </p>
          {blocker && (
            <div className="row center">
              <EdButton asChild variant="primary"><Link to={stepLink(blocker)}>Go to {blocker.kind === 'topic' ? 'that topic' : 'the challenge'} <EdIcon name="ArrowRight" size="sm" aria-hidden /></Link></EdButton>
              {blocker.kind === 'topic' && (
                <EdButton asChild variant="secondary"><Link to={`/topic/${blocker.topic.id}/quiz`}>Test out of it</Link></EdButton>
              )}
            </div>
          )}
          <p className="muted">
            Already know the earlier material? Score {Math.round(TEST_OUT * 100)}% on a topic’s quiz and it is cleared without the lesson.
            Need an answer for a conversation today? <Link to="/search">Search</Link> is always open.
          </p>
        </section>
      </>
    );
  }

  return (
    <>
      <Link to={track ? `/track/${track.id}` : '/'} className="back">← {track ? track.title : 'Home'}</Link>
      <h1 className="track-title"><Emblem topic={topic} size={64} /> {topic.title}</h1>
      <SealStatus key={topic.id} topic={topic} />
      {topicCleared(p, topic) && access.next && access.next.state !== 'locked' && (
        <Link to={stepLink(access.next)} className="path-next">
          <span>Cleared. Next on the path: <strong>{stepTitle(access.next)}</strong></span>
          <span className="go">Continue →</span>
        </Link>
      )}
      <nav className="tabs">
        <NavLink to={base} end>Learn</NavLink>
        <NavLink to={`${base}/objections`}>Objections ({topic.objections.length})</NavLink>
        <NavLink to={`${base}/quiz`}>Quiz</NavLink>
        <NavLink to={`${base}/summary`}>Summary</NavLink>
      </nav>
      <Routes>
        <Route index element={<Learn topic={topic} />} />
        <Route path="objections" element={<Objections topic={topic} />} />
        <Route path="quiz" element={<QuizTab topic={topic} />} />
        <Route path="summary" element={<Summary topic={topic} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

/** The topic quiz, with the pass mark, the test-out mark, and the way onward once the topic is cleared. */
function QuizTab({ topic }: { topic: Topic }) {
  const p = useProgress();
  const cleared = topicCleared(p, topic);
  const best = p.quizBest[topic.id];
  return (
    <>
      {!cleared && (
        <p className="muted">
          Score {Math.round(SEAL_QUIZ * 100)}% to pass. Score {Math.round(TEST_OUT * 100)}% and the topic is cleared even without the
          lesson and drills.{best !== undefined ? ` Your best so far: ${Math.round(best * 100)}%.` : ''}
        </p>
      )}
      <Quiz key={topic.id} questions={topic.quiz} limit={10} onFinish={(s, correct) => progress.recordQuiz(topic.id, s, correct)} />
    </>
  );
}

/** What the topic still needs for its seal, and a moment of celebration when it is earned. */
function SealStatus({ topic }: { topic: Topic }) {
  const p = useProgress();
  const ids = topic.objections.map((o) => o.id);
  const sealed = topicSealed(p, topic.id, ids);
  const wasSealed = useRef(sealed);
  const [justEarned, setJustEarned] = useState(false);
  useEffect(() => {
    if (sealed && !wasSealed.current) {
      setJustEarned(true);
      buzz('success');
    }
    wasSealed.current = sealed;
  }, [sealed]);

  if (sealed) {
    return justEarned ? (
      <EdNotification
        className="seal-earned"
        severity="success"
        variant="rail"
        icon={<Seal size={40} />}
        title="Seal earned"
        description="Lesson read, quiz passed, every objection Solid. Keep it fresh with reviews."
      />
    ) : overdueReviews(p, ids).length ? (
      <p className="seal-done fading">
        <span className="seal-faded"><Seal size={24} /></span> Seal fading: {overdueReviews(p, ids).length} review{overdueReviews(p, ids).length === 1 ? ' is' : 's are'} overdue.{' '}
        <Link to={`/practice?ids=${overdueReviews(p, ids).join(',')}`}>Restore it</Link>
      </p>
    ) : (
      <p className="seal-done"><Seal size={24} /> Topic sealed</p>
    );
  }
  const solid = ids.filter((id) => objectionScore(p, id) === 1).length;
  const best = p.quizBest[topic.id] ?? 0;
  return (
    <ul className="seal-status" aria-label="Steps to this topic’s seal">
      <li className={p.lessonsRead[topic.id] ? 'met' : undefined}>Lesson read</li>
      <li className={best >= SEAL_QUIZ ? 'met' : undefined}>Quiz {Math.round(SEAL_QUIZ * 100)}%+</li>
      <li className={solid === ids.length ? 'met' : undefined}>{solid}/{ids.length} objections Solid</li>
    </ul>
  );
}

function Learn({ topic }: { topic: Topic }) {
  const p = useProgress();
  const read = !!p.lessonsRead[topic.id];
  const dated = TIMELINE.filter((e) => e.topicId === topic.id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [topic.id]);

  return (
    <>
      {topic.lesson.map((s) => (
        <section key={s.heading} className="card lesson">
          <h2>{s.heading}</h2>
          {s.body.map((para, i) => <p key={i}><RefText text={para} /></p>)}
          {s.argument && (
            <ArgumentDiagram steps={s.argument} />
          )}
          <RefList refs={s.references} />
        </section>
      ))}
      {chartsFor(topic.id).map((c) => (
        <section key={c.id} className="card">
          <h2>{c.title}</h2>
          <LessonChart chart={c} topicId={topic.id} />
        </section>
      ))}
      {MAPS[topic.id] && (
        <section className="card">
          <h2>Places in this lesson</h2>
          <LessonMap topic={topic} />
        </section>
      )}
      {dated.length >= 2 && (
        <section className="card">
          <h2>Dates in this lesson</h2>
          <TimeAxis events={dated} />
          <p className="muted"><Link to="/timeline">See them on the whole timeline →</Link></p>
        </section>
      )}
      {topic.furtherReading && (
        <section className="card">
          <h2>Further reading</h2>
          <ul>{topic.furtherReading.map((r) => <li key={r}>{r}</li>)}</ul>
        </section>
      )}
      <div className="row end">
        {read ? (
          <EdStatusBadge tone="success" dot>Lesson complete</EdStatusBadge>
        ) : (
          <EdButton variant="secondary" leadingIcon={<EdIcon name="Check" size="sm" />} onClick={() => progress.markLessonRead(topic.id)}>Mark lesson complete</EdButton>
        )}
        <EdButton asChild variant="primary"><Link to={`/topic/${topic.id}/objections`}>Practise objections <EdIcon name="ArrowRight" size="sm" aria-hidden /></Link></EdButton>
      </div>
    </>
  );
}

function Objections({ topic }: { topic: Topic }) {
  const [format, setFormat] = useDrillFormat();
  return (
    <>
      <div className="row between">
        <p className="muted">
          {format === 'sparring'
            ? 'Each objection plays out as a conversation: reply in your own words, see a strong answer, then hear their comeback.'
            : 'Read each objection, try answering it in your own words, then compare with the model response.'}
        </p>
        <FormatToggle format={format} onChange={setFormat} />
      </div>
      {topic.objections.map((o) => <Drill key={`${format}-${o.id}`} format={format} objection={o} />)}
      <div className="row end">
        <EdButton asChild variant="primary"><Link to={`/topic/${topic.id}/quiz`}>Take the quiz <EdIcon name="ArrowRight" size="sm" aria-hidden /></Link></EdButton>
      </div>
    </>
  );
}

/** One-page review: each argument and each objection with its key points. Prints cleanly. */
function Summary({ topic }: { topic: Topic }) {
  const p = useProgress();
  return (
    <>
      <div className="row no-print">
        <p className="muted">A one-page review of this topic. Tap a reference to read it.</p>
        <EdButton variant="secondary" leadingIcon={<EdIcon name="Printer" size="sm" />} onClick={() => window.print()}>Print</EdButton>
      </div>
      <section className="card summary">
        <h2>Main points</h2>
        <ul>
          {topic.lesson.map((s) => (
            <li key={s.heading}>
              <strong>{s.heading}</strong>
              {s.argument && (
                <ol>
                  {s.argument.map((a) => <li key={a}><RefText text={a} /></li>)}
                </ol>
              )}
              <RefList refs={s.references} label="See" />
            </li>
          ))}
        </ul>
      </section>
      <section className="card summary">
        <h2>Objections and key points</h2>
        {topic.objections.map((o) => (
          <div key={o.id} className="summary-item">
            <strong>“{o.objection}”</strong>
            <ul>
              {o.keyPoints.map((k) => <li key={k}><RefText text={k} /></li>)}
            </ul>
            <RefList refs={o.references} label="See" />
          </div>
        ))}
      </section>
      <section className="card summary">
        <h2>My notes</h2>
        <textarea
          rows={5}
          value={p.notes[topic.id] ?? ''}
          onChange={(e) => progress.setNote(topic.id, e.target.value)}
          placeholder="Your own notes on this topic. Saved on this device and included in your progress backup."
          aria-label="My notes"
        />
      </section>
    </>
  );
}
