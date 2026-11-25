import { useState } from 'react';
import { Link } from 'react-router-dom';
import { EdButton, EdIcon } from 'editorial-ui';
import { getTopic, trackForTopic, type Topic, type Track } from '../content';
import { currentStreak, DAILY_GOAL, levelOf, useProgress, warmedUpToday, xpToday } from '../lib/progress';
import { nextStep, stepLink, topicCleared, topicStarted, trackRank } from '../lib/path';
import { buildSession } from '../lib/session';
import { AUDIENCES, DOUBTS_FIRST, orderedTracks, useAudience } from '../lib/profile';
import Onboarding from '../components/Onboarding';
import Emblem from '../components/Emblem';
import ProgressBar from '../components/ProgressBar';
import TrackRow from '../components/TrackRow';

/** The one thing to do now. */
interface Next {
  eyebrow: string;
  title: string;
  why: string;
  to: string;
  button: string;
  topic?: Topic;
  track?: Track;
}

/**
 * Home answers one question: what do I do now? It shows a single next step with a single button.
 * Reviews that are due come first, once a day, because a short warm-up keeps what was learned. After today's warm-up
 * (or when nothing is due) it is the next step on the path, and any reviews still due are offered as a second choice.
 * Everything else (standing, the other tracks) sits below, quietly.
 */
export default function Home() {
  const p = useProgress();
  const audience = useAudience();
  const [changing, setChanging] = useState(false);

  if (!audience || changing) {
    return (
      <>
        <section className="hero">
          <h1>Be ready with an answer</h1>
          <p>Learn the arguments, practise answering real objections, and test yourself, a few minutes at a time. One question first, so the app can point you to the right place.</p>
        </section>
        <Onboarding current={audience} onDone={() => setChanging(false)} />
      </>
    );
  }

  const tracks = orderedTracks(audience);
  const doubt = audience === 'doubts' ? DOUBTS_FIRST.map((id) => getTopic(id)).find((t) => t && !topicCleared(p, t)) : undefined;
  const step = tracks.map((t) => nextStep(p, t)).find(Boolean);
  const session = buildSession(p, audience);
  const reviews = session.drills.filter((d) => d.kind === 'review').length;

  // The step on the path, kept as the second choice when reviews come first.
  const path: Next | null = doubt
    ? { eyebrow: topicStarted(p, doubt) ? 'Continue' : 'Start here', title: doubt.title, why: doubt.summary, to: `/topic/${doubt.id}`, button: topicStarted(p, doubt) ? 'Continue the lesson' : 'Start the lesson', topic: doubt, track: trackForTopic(doubt.id) }
    : step?.kind === 'topic'
      ? { eyebrow: topicStarted(p, step.topic) ? 'Continue' : p.xp ? 'Next lesson' : 'Start here', title: step.topic.title, why: step.topic.summary, to: stepLink(step), button: topicStarted(p, step.topic) ? 'Continue the lesson' : 'Start the lesson', topic: step.topic, track: trackForTopic(step.topic.id) }
      : step
        ? { eyebrow: 'Section challenge', title: step.section.title, why: 'You have cleared every topic in this section. Pass the challenge to open the next one.', to: stepLink(step), button: 'Take the challenge', track: step.track }
        : null;
  // The warm-up leads only until it has been done today: a backlog must never stand between the learner and the path.
  const warmFirst = reviews > 0 && (!warmedUpToday(p) || !path);
  const next: Next | null = warmFirst
    ? { eyebrow: warmedUpToday(p) ? 'Keep it fresh' : 'Warm up first', title: `${reviews} review${reviews === 1 ? '' : 's'} due`, why: `Answers you have practised are due again. About ${session.minutes} minutes keeps them from fading, then carry on with the path.`, to: '/today', button: 'Start the warm-up' }
    : path;

  const rank = next?.track ? trackRank(p, next.track) : null;
  const level = levelOf(p.xp);
  const today = xpToday(p);
  const streak = currentStreak(p);
  const others = next?.track ? tracks.filter((t) => t.id !== next.track!.id) : tracks;

  return (
    <>
      {p.xp > 0 && (
        <Link to="/progress" className="home-stats" aria-label={`Your standing: ${streak} day streak, ${Math.min(today, DAILY_GOAL)} of ${DAILY_GOAL} points today, level ${level.name}`}>
          <span className={streak ? 'on' : undefined}><EdIcon name="Flame" size="sm" aria-hidden /> {streak} day{streak === 1 ? '' : 's'}</span>
          <span className={today >= DAILY_GOAL ? 'on' : undefined}><EdIcon name={today >= DAILY_GOAL ? 'CircleCheck' : 'Target'} size="sm" aria-hidden /> {Math.min(today, DAILY_GOAL)}/{DAILY_GOAL} today</span>
          <span>{level.name}</span>
        </Link>
      )}

      {next ? (
        <section className="card next-card">
          <div className="next-art">
            {next.topic ? <Emblem topic={next.topic} size={96} /> : <span className="next-glyph"><EdIcon name={warmFirst ? 'RotateCcw' : 'Swords'} size="lg" aria-hidden /></span>}
          </div>
          <div className="eyebrow">{next.eyebrow}</div>
          <h1>{next.title}</h1>
          <p className="next-why">{next.why}</p>
          <EdButton asChild variant="primary" size="lg">
            <Link to={next.to}>{next.button} <EdIcon name="ArrowRight" size="sm" aria-hidden /></Link>
          </EdButton>
          {warmFirst && path && (
            <p className="next-alt">Or go straight to <Link to={path.to}>{path.title}</Link></p>
          )}
          {!warmFirst && reviews > 0 && (
            <p className="next-alt">Today’s warm-up is done. More reviews are due if you want <Link to="/today">another round</Link>.</p>
          )}
          {rank && next.track && (
            <Link to={`/track/${next.track.id}`} className="next-progress">
              <span>{next.track.title} · step {Math.min(rank.cleared + 1, rank.total)} of {rank.total}</span>
              <ProgressBar value={rank.cleared / rank.total} label={`${rank.cleared} of ${rank.total} steps cleared`} />
              <span className="go">See the whole path →</span>
            </Link>
          )}
        </section>
      ) : (
        <section className="card next-card">
          <div className="eyebrow">Path complete</div>
          <h1>Every step is cleared</h1>
          <p className="next-why">Keep what you have learned fresh with a short round.</p>
          <EdButton asChild variant="primary" size="lg"><Link to="/play">Play a round <EdIcon name="ArrowRight" size="sm" aria-hidden /></Link></EdButton>
        </section>
      )}

      <details className="home-more">
        <summary>{next?.track ? 'Other tracks' : 'All tracks'}</summary>
        <div className="list">
          {others.map((t) => <TrackRow key={t.id} track={t} />)}
        </div>
      </details>

      <p className="focus-line">
        Preparing for <strong>{AUDIENCES.find((a) => a.id === audience)?.focus}</strong> ·{' '}
        <button type="button" className="link-btn" onClick={() => setChanging(true)}>Change</button>
      </p>
    </>
  );
}
