import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom';
import { getTopic, trackForTopic, type Topic } from '../content';
import { objectionScore, progress, SEAL_QUIZ, topicSealed, useProgress } from '../lib/progress';
import { buzz } from '../lib/haptics';
import Seal from '../components/Seal';
import Drill, { FormatToggle } from '../components/Drill';
import { useDrillFormat } from '../lib/drillFormat';
import Quiz from '../components/Quiz';
import RefText from '../components/RefText';
import RefList from '../components/RefList';
import NotFound from './NotFound';

export default function TopicPage() {
  const { topicId } = useParams();
  const topic = getTopic(topicId);
  if (!topic) return <NotFound />;
  const base = `/topic/${topic.id}`;
  const track = trackForTopic(topic.id);

  return (
    <>
      <Link to={track ? `/track/${track.id}` : '/'} className="back">← {track ? track.title : 'Home'}</Link>
      <h1><span aria-hidden>{topic.icon}</span> {topic.title}</h1>
      <SealStatus key={topic.id} topic={topic} />
      <nav className="tabs">
        <NavLink to={base} end>Learn</NavLink>
        <NavLink to={`${base}/objections`}>Objections ({topic.objections.length})</NavLink>
        <NavLink to={`${base}/quiz`}>Quiz</NavLink>
        <NavLink to={`${base}/summary`}>Summary</NavLink>
      </nav>
      <Routes>
        <Route index element={<Learn topic={topic} />} />
        <Route path="objections" element={<Objections topic={topic} />} />
        <Route path="quiz" element={<Quiz key={topic.id} questions={topic.quiz} limit={10} onFinish={(s) => progress.recordQuiz(topic.id, s)} />} />
        <Route path="summary" element={<Summary topic={topic} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
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
    return (
      <div className={`seal-status done${justEarned ? ' just' : ''}`} role="status">
        <Seal size={justEarned ? 56 : 32} />
        <span>
          <strong>{justEarned ? 'Seal earned!' : 'Topic complete'}</strong>
          {justEarned && <small className="muted">Lesson read, quiz passed, every objection Solid. Keep it fresh with reviews.</small>}
        </span>
      </div>
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
            <ol className="argument">
              {s.argument.map((a) => <li key={a}><RefText text={a} /></li>)}
            </ol>
          )}
          <RefList refs={s.references} />
        </section>
      ))}
      {topic.furtherReading && (
        <section className="card">
          <h2>Further reading</h2>
          <ul>{topic.furtherReading.map((r) => <li key={r}>{r}</li>)}</ul>
        </section>
      )}
      <div className="row end">
        {read ? (
          <span className="badge got">Lesson complete ✓</span>
        ) : (
          <button className="btn success" onClick={() => progress.markLessonRead(topic.id)}>Mark lesson complete</button>
        )}
        <Link className="btn primary" to={`/topic/${topic.id}/objections`}>Practise objections →</Link>
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
        <Link className="btn primary" to={`/topic/${topic.id}/quiz`}>Take the quiz →</Link>
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
        <button className="btn" onClick={() => window.print()}>Print</button>
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
