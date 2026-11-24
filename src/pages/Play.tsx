import { Link } from 'react-router-dom';
import { EdIcon, type EdIconName } from 'editorial-ui';
import { tracks } from '../content';
import { useProgress } from '../lib/progress';
import { nextStep } from '../lib/path';
import { HAND } from '../lib/games';
import PlayerStrip from '../components/PlayerStrip';
import BossRow from '../components/BossRow';

interface Game {
  to: string;
  icon: EdIconName;
  title: string;
  summary: string;
  best?: string;
}

/** The games: quick ways to rehearse what the lessons teach, each paying points for right answers. */
export default function Play() {
  const p = useProgress();
  const volleyBest = Math.max(0, ...Object.entries(p.games).filter(([k]) => k.startsWith('volley:')).map(([, v]) => v));
  const games: Game[] = [
    { to: '/play/volley', icon: 'Swords', title: 'Volley', summary: 'A conversation at speed. They object, you pick the reply, they come back. Each right answer builds your combo.', best: volleyBest ? `Best ${volleyBest}` : undefined },
    { to: '/play/sound-or-weak', icon: 'Scale', title: 'Sound or weak?', summary: 'Judge the argument: use it, overstated, or leave alone. Learn which claims will not stand up.', best: p.games.sort !== undefined ? `Best ${p.games.sort}/8` : undefined },
    { to: '/play/timeline', icon: 'ListOrdered', title: 'Timeline', summary: 'Put the sources and events in order, from Merneptah’s monument to the Dome of the Rock.', best: p.games.timeline !== undefined ? `Best ${p.games.timeline}/${HAND}` : undefined },
    { to: '/play/build', icon: 'Puzzle', title: 'Build the argument', summary: 'One step of an argument is missing. Pick the premise or conclusion that makes it hold together.', best: p.games.build !== undefined ? `Best ${p.games.build}/6` : undefined },
    { to: '/quiz', icon: 'ListChecks', title: 'Mixed quiz', summary: 'Random questions from every topic you have opened.' },
    { to: '/verses', icon: 'Bookmark', title: 'Memory verses', summary: 'Recall the passages you are learning by heart.' },
  ];
  // Section challenges that are open now, one per track at most.
  const bosses = tracks.flatMap((t) => {
    const step = nextStep(p, t);
    return step?.kind === 'boss' && step.state === 'open' ? [step] : [];
  });

  return (
    <>
      <h1>Games</h1>
      <p className="muted">Short rounds that rehearse what you have learned. Points are for right answers, never for tapping through.</p>
      <PlayerStrip />
      {bosses.length > 0 && (
        <>
          <div className="section-head"><h2>Open challenges</h2></div>
          <div className="list">
            {bosses.map((b) => <BossRow key={b.key} step={b} />)}
          </div>
        </>
      )}
      <div className="section-head"><h2>Play</h2></div>
      <div className="list">
        {games.map((g) => (
          <Link key={g.to} to={g.to} className="list-row">
            <span className="topic-icon" aria-hidden><EdIcon name={g.icon} size="md" /></span>
            <span className="list-row-body">
              <span className="list-row-title">{g.title}</span>
              <span className="list-row-summary">{g.summary}</span>
              {g.best && <span className="list-row-meta"><span>{g.best}</span></span>}
            </span>
            <span aria-hidden className="muted">›</span>
          </Link>
        ))}
      </div>
    </>
  );
}
