import { useState } from 'react';
import { Link } from 'react-router-dom';
import { EdIcon } from 'editorial-ui';
import { topics } from '../content';
import { isDue, localDate, topicCompletion, useProgress } from '../lib/progress';
import { buildSession } from '../lib/session';
import { AUDIENCES, orderedTopics, orderedTracks, useAudience } from '../lib/profile';
import Onboarding from '../components/Onboarding';
import TopicIcon from '../components/TopicIcon';
import TrackRow from '../components/TrackRow';

const MAX_SHOWN = 3;
const DAY = 24 * 60 * 60 * 1000;

export default function Home() {
  const p = useProgress();
  const audience = useAudience();
  const [changing, setChanging] = useState(false);
  // The topic to suggest: the first one begun but unfinished, otherwise the first not yet begun.
  const ordered = orderedTopics(audience);
  const done = (id: string) => topicCompletion(p, id, ordered.find((t) => t.id === id)!.objections.map((o) => o.id));
  const inProgress = ordered.find((t) => done(t.id) > 0 && done(t.id) < 1);
  const next = inProgress ?? ordered.find((t) => done(t.id) === 0);
  const started = Boolean(inProgress);
  // Objections already practised at least once whose review date has arrived.
  const due = topics.flatMap((t) => t.objections).filter((o) => p.drills[o.id] && isDue(p, o.id)).length;
  const today = buildSession(p, audience);
  const reviews = today.drills.filter((d) => d.kind !== 'new').length;
  const fresh = today.drills.length - reviews;
  const parts = [
    reviews && `${reviews} review${reviews === 1 ? '' : 's'}`,
    fresh && `${fresh} new objection`,
    today.quiz.length && `${today.quiz.length} quiz questions`,
  ].filter(Boolean);
  // The last seven days, oldest first, for the practice strip.
  const now = Date.now();
  const week = Array.from({ length: 7 }, (_, i) => {
    const t = now - (6 - i) * DAY;
    return { key: localDate(t), label: new Date(t).toLocaleDateString(undefined, { weekday: 'narrow' }), on: p.days.includes(localDate(t)), today: i === 6 };
  });
  const practised = week.filter((d) => d.on).length;

  return (
    <>
      <section className="hero">
        <h1>Be ready with an answer</h1>
        <p>Learn the arguments, practise answering real objections, and test yourself — a few minutes at a time.</p>
        {audience && !changing && (
          <p className="focus-line">
            Preparing for <strong>{AUDIENCES.find((a) => a.id === audience)?.focus}</strong> ·{' '}
            <button type="button" className="link-btn" onClick={() => setChanging(true)}>Change</button>
          </p>
        )}
      </section>
      {(!audience || changing) && <Onboarding current={audience} onDone={() => setChanging(false)} />}

      <Link to="/today" className="card today" aria-label={`Start today’s practice: ${parts.join(', ')}`}>
        <div className="today-main">
          <span className="today-body">
            <span className="eyebrow">Today’s practice · about {today.minutes} min</span>
            <strong>{parts.join(' · ')}</strong>
          </span>
          <span className="btn primary today-start" aria-hidden>
            Start <EdIcon name="ArrowRight" size="sm" />
          </span>
        </div>
        <div className="today-week" aria-label={`Practised on ${practised} of the last 7 days`}>
          {week.map((d) => (
            <span key={d.key} className={`day${d.on ? ' on' : ''}${d.today ? ' today' : ''}`}><i />{d.label}</span>
          ))}
          <small>{due > MAX_SHOWN ? `${due} objections due in all` : practised ? `${practised} of 7 days` : 'A few minutes a day'}</small>
        </div>
      </Link>

      {next && (
        <Link to={`/topic/${next.id}`} className="card card-link continue">
          <span className="continue-label">
            <TopicIcon glyph={next.icon} />
            <span>
              <span className="eyebrow">{started ? 'Continue' : 'Start here'}</span>
              <strong>{next.title}</strong>
            </span>
          </span>
          <span className="go">{started ? 'Resume →' : 'Begin →'}</span>
        </Link>
      )}

      <div className="section-head"><h2>Tracks</h2></div>
      <div className="list">
        {orderedTracks(audience).map((t) => <TrackRow key={t.id} track={t} />)}
      </div>
    </>
  );
}
