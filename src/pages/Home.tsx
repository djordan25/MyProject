import { useState } from 'react';
import { Link } from 'react-router-dom';
import { topics, subtracksOf, topicsInTrack } from '../content';
import { AUDIENCES, orderedTopics, orderedTracks, useAudience } from '../lib/profile';
import Onboarding from '../components/Onboarding';
import { daysPractised, isDue, topicCompletion, useProgress } from '../lib/progress';
import { buildSession } from '../lib/session';
import { trackCompletion, trackSeals } from '../lib/trackProgress';
import Seal from '../components/Seal';
import ProgressBar from '../components/ProgressBar';

const MAX_SHOWN = 3;

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
  const week = daysPractised(p);
  const parts = [
    reviews && `${reviews} review${reviews === 1 ? '' : 's'}`,
    fresh && `${fresh} new objection`,
    today.quiz.length && `${today.quiz.length} quiz questions`,
  ].filter(Boolean);
  return (
    <>
      <section className="hero">
        <h1>Be ready with an answer</h1>
        <p>Learn the arguments, practise responding to real objections, and test yourself — a few minutes at a time.</p>
        {audience && !changing && (
          <p className="focus-line">
            Preparing for: <strong>{AUDIENCES.find((a) => a.id === audience)?.focus}</strong>{' '}
            <button type="button" className="link-btn" onClick={() => setChanging(true)}>Change</button>
          </p>
        )}
      </section>
      {(!audience || changing) && <Onboarding current={audience} onDone={() => setChanging(false)} />}
      <Link to="/today" className="card today">
        <span className="today-body">
          <span className="eyebrow">Today’s practice · about {today.minutes} min</span>
          <strong>{parts.join(' · ')}</strong>
          <small className="muted">
            {week ? `You’ve practised on ${week} of the last 7 days.` : 'A few minutes a day keeps the answers ready.'}
            {due > MAX_SHOWN ? ` ${due} objections are due in all.` : ''}
          </small>
        </span>
        <span className="btn primary">Start</span>
      </Link>
      {next && (
        <Link to={`/topic/${next.id}`} className="card due-banner">
          <span className="continue-label">
            <small className="muted">{started ? 'Continue' : 'Start here'}</small>
            <strong>{next.icon} {next.title}</strong>
          </span>
          <span>{started ? 'Resume →' : 'Begin →'}</span>
        </Link>
      )}
      <div className="track-list">
        {orderedTracks(audience).map((t) => {
          const done = trackCompletion(p, t);
          const subs = subtracksOf(t).length;
          const seals = trackSeals(p, t);
          return (
            <Link key={t.id} to={`/track/${t.id}`} className="card track-card">
              {seals.sealed === seals.total ? <Seal tone="track" size={44} label={`${t.title}: complete`} /> : <div className="topic-icon" aria-hidden>{t.icon}</div>}
              <div className="track-body">
                <h2>{t.title}</h2>
                <p>{t.summary}</p>
                <ProgressBar value={done} label={`${t.title} progress`} />
                <small className="muted">
                  {topicsInTrack(t).length} topics{subs ? ` · ${subs} sub-tracks` : ''} · {Math.round(done * 100)}% ready
                  {seals.sealed > 0 && ` · ${seals.sealed} sealed`}
                </small>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
