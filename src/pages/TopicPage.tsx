import { useEffect } from 'react';
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom';
import { getTopic, type Topic } from '../content';
import { progress, useProgress } from '../lib/progress';
import ObjectionDrill from '../components/ObjectionDrill';
import Quiz from '../components/Quiz';
import NotFound from './NotFound';

export default function TopicPage() {
  const { topicId } = useParams();
  const topic = getTopic(topicId);
  if (!topic) return <NotFound />;
  const base = `/topic/${topic.id}`;

  return (
    <>
      <Link to="/" className="back">← All topics</Link>
      <h1><span aria-hidden>{topic.icon}</span> {topic.title}</h1>
      <nav className="tabs">
        <NavLink to={base} end>Learn</NavLink>
        <NavLink to={`${base}/objections`}>Objections ({topic.objections.length})</NavLink>
        <NavLink to={`${base}/quiz`}>Quiz</NavLink>
      </nav>
      <Routes>
        <Route index element={<Learn topic={topic} />} />
        <Route path="objections" element={<Objections topic={topic} />} />
        <Route path="quiz" element={<Quiz key={topic.id} questions={topic.quiz} onFinish={(s) => progress.recordQuiz(topic.id, s)} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
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
          {s.body.map((para, i) => <p key={i}>{para}</p>)}
          {s.argument && (
            <ol className="argument">
              {s.argument.map((a) => <li key={a}>{a}</li>)}
            </ol>
          )}
          {s.scriptures && (
            <p className="scriptures">
              <strong>Scripture:</strong> {s.scriptures.join(' · ')}
            </p>
          )}
        </section>
      ))}
      <section className="card">
        <h2>Further reading</h2>
        <ul>{topic.furtherReading.map((r) => <li key={r}>{r}</li>)}</ul>
      </section>
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
  return (
    <>
      <p className="muted">Read each objection, try answering it in your own words, then compare with the model response.</p>
      {topic.objections.map((o) => <ObjectionDrill key={o.id} objection={o} />)}
      <div className="row end">
        <Link className="btn primary" to={`/topic/${topic.id}/quiz`}>Take the quiz →</Link>
      </div>
    </>
  );
}
