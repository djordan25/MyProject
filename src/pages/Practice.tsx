import { useMemo, useState } from 'react';
import { topics } from '../content';
import { useProgress } from '../lib/progress';
import { shuffle } from '../lib/shuffle';
import ObjectionDrill from '../components/ObjectionDrill';

type Mode = 'all' | 'review';

/** Mixed drill: random objections across every topic, optionally only those not yet mastered. */
export default function Practice() {
  const p = useProgress();
  const [mode, setMode] = useState<Mode>('all');
  const [seed, setSeed] = useState(0);
  const [i, setI] = useState(0);

  const all = useMemo(() => topics.flatMap((t) => t.objections.map((o) => ({ o, topic: t.title }))), []);
  // Deck is fixed per session/mode; ratings during the session don't reshuffle it.
  const deck = useMemo(
    () => shuffle(mode === 'review' ? all.filter(({ o }) => p.drills[o.id] !== 'got') : all),
    [mode, seed], // intentionally not p.drills: rating a card must not reshuffle the deck
  );

  const restart = (m: Mode) => {
    setMode(m);
    setSeed((s) => s + 1);
    setI(0);
  };

  const card = deck[i];

  return (
    <>
      <h1>Practice</h1>
      <div className="row">
        <button className={`btn ${mode === 'all' ? 'primary' : ''}`} onClick={() => restart('all')}>All objections</button>
        <button className={`btn ${mode === 'review' ? 'primary' : ''}`} onClick={() => restart('review')}>Not yet mastered</button>
      </div>
      {!card ? (
        <section className="card">
          <h2>{deck.length === 0 ? 'Nothing to review — everything is mastered!' : 'Round complete'}</h2>
          <button className="btn primary" onClick={() => restart(mode)}>Start again</button>
        </section>
      ) : (
        <>
          <p className="muted">Card {i + 1} of {deck.length}</p>
          <ObjectionDrill key={`${seed}-${card.o.id}`} objection={card.o} context={card.topic} onRated={() => setI(i + 1)} />
        </>
      )}
    </>
  );
}
