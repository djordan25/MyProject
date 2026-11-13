import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { topics, tracks, topicsInTrack } from '../content';
import { useProgress } from '../lib/progress';
import { shuffle } from '../lib/shuffle';
import ObjectionDrill from '../components/ObjectionDrill';

type Mode = 'all' | 'review';

/** Mixed drill: random objections across a track (or everything), optionally only those not yet mastered. */
export default function Practice() {
  const p = useProgress();
  const [params, setParams] = useSearchParams();
  const trackId = params.get('track') ?? 'all';
  const [mode, setMode] = useState<Mode>('all');
  const [seed, setSeed] = useState(0);
  const [i, setI] = useState(0);

  const pool = useMemo(() => {
    const track = tracks.find((t) => t.id === trackId);
    const ts = track ? topicsInTrack(track) : topics;
    return ts.flatMap((t) => t.objections.map((o) => ({ o, topic: t.title })));
  }, [trackId]);

  // Deck is fixed per round; rating cards during the round must not reshuffle it.
  const deck = useMemo(
    () => shuffle(mode === 'review' ? pool.filter(({ o }) => p.drills[o.id] !== 'got') : pool),
    [pool, mode, seed],
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
        <label className="select">
          <span className="muted">Track</span>
          <select
            value={trackId}
            onChange={(e) => {
              setParams(e.target.value === 'all' ? {} : { track: e.target.value });
              setI(0);
            }}
          >
            <option value="all">All tracks</option>
            {tracks.map((t) => <option key={t.id} value={t.id}>{t.title}</option>)}
          </select>
        </label>
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
