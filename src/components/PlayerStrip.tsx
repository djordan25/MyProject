import { EdIcon } from 'editorial-ui';
import { currentStreak, DAILY_GOAL, levelOf, LEVELS, useProgress, xpToday } from '../lib/progress';
import ProgressBar from './ProgressBar';

/** The learner's standing: level and points, the daily goal, and the run of days practised. */
export default function PlayerStrip() {
  const p = useProgress();
  const level = levelOf(p.xp);
  const today = xpToday(p);
  const streak = currentStreak(p);
  const goalMet = today >= DAILY_GOAL;
  return (
    <section className="card player" aria-label="Your standing">
      <div className="player-level">
        <span className="eyebrow">Level {level.index + 1}</span>
        <strong>{level.name}</strong>
        <ProgressBar value={level.fraction} label={`Progress to the next level: ${Math.round(level.fraction * 100)}%`} />
        <small className="muted">
          {p.xp} points{level.next === null ? '' : ` · ${level.next - p.xp} to ${LEVELS[level.index + 1].name}`}
        </small>
      </div>
      <div className={`player-stat${goalMet ? ' met' : ''}`}>
        <EdIcon name={goalMet ? 'CircleCheck' : 'Target'} size="md" aria-hidden />
        <span>
          <strong>{Math.min(today, DAILY_GOAL)}/{DAILY_GOAL}</strong>
          <small className="muted">{goalMet ? 'Daily goal met' : 'points today'}</small>
        </span>
      </div>
      <div className={`player-stat${streak ? ' met' : ''}`}>
        <EdIcon name="Flame" size="md" aria-hidden />
        <span>
          <strong>{streak} day{streak === 1 ? '' : 's'}</strong>
          <small className="muted">{p.freezes > 0 ? 'in a row · 1 freeze held' : 'in a row · no freeze'}</small>
        </span>
      </div>
    </section>
  );
}
