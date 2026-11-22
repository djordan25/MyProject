import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { topics, tracks, topLevelTracks, subtracksOf, topicsInTrack } from '../content';
import { isDue, isWeak, useProgress } from '../lib/progress';
import { shuffle } from '../lib/shuffle';
import { EdButton, EdEmptyState, EdIcon } from 'editorial-ui';
import RadioChips from '../components/RadioChips';
import { verseId } from '../lib/verses';
import Drill, { FormatToggle } from '../components/Drill';
import { useDrillFormat } from '../lib/drillFormat';
import ListenDeck from '../components/ListenDeck';
import { canSpeak } from '../lib/speech';

type Mode = 'all' | 'new' | 'review' | 'weak';

/** Mixed drill: random objections across a track (or everything): all of them, only new ones, or only those due for review. */
export default function Practice() {
  const p = useProgress();
  const [params, setParams] = useSearchParams();
  const trackId = params.get('track') ?? 'all';
  const [mode, setMode] = useState<Mode>(params.get('mode') === 'review' ? 'review' : 'all');
  const [seed, setSeed] = useState(0);
  const [i, setI] = useState(0);
  const [format, setFormat] = useDrillFormat();
  const dueVerses = p.verses.filter((r) => isDue(p, verseId(r))).length;

  const pool = useMemo(() => {
    const track = tracks.find((t) => t.id === trackId);
    const ts = track ? topicsInTrack(track) : topics;
    return ts.flatMap((t) => t.objections.map((o) => ({ o, topic: t.title })));
  }, [trackId]);

  const counts = useMemo(
    () => ({
      fresh: pool.filter(({ o }) => !p.drills[o.id]).length,
      due: pool.filter(({ o }) => p.drills[o.id] && isDue(p, o.id)).length,
      weak: pool.filter(({ o }) => isWeak(p, o.id)).length,
    }),
    [pool, p],
  );

  // Deck is fixed per round; rating cards during the round must not reshuffle it.
  const deck = useMemo(
    () =>
      shuffle(
        mode === 'review'
          ? pool.filter(({ o }) => p.drills[o.id] && isDue(p, o.id))
          : mode === 'new'
            ? pool.filter(({ o }) => !p.drills[o.id])
            : mode === 'weak'
              ? pool.filter(({ o }) => isWeak(p, o.id))
              : pool,
      ),
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
      <div className="page-head">
        <h1>Practice</h1>
        <EdButton asChild variant="secondary">
          <Link to="/verses"><EdIcon name="Bookmark" size="sm" /> Memory verses{dueVerses ? ` · ${dueVerses} due` : ''}</Link>
        </EdButton>
      </div>
      <div className="filters">
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
            {topLevelTracks.flatMap((t) => [t, ...subtracksOf(t)]).map((t) => (
              <option key={t.id} value={t.id}>{t.parent ? `— ${t.title}` : t.title}</option>
            ))}
          </select>
        </label>
        <span className="divider" aria-hidden />
        <RadioChips
          label="Which objections"
          value={mode}
          onChange={restart}
          options={[
            { id: 'all', label: 'All', count: pool.length },
            { id: 'new', label: 'New', count: counts.fresh },
            { id: 'review', label: 'Due', count: counts.due },
            { id: 'weak', label: 'Weak spots', count: counts.weak },
          ]}
        />
        <span className="divider" aria-hidden />
        <FormatToggle format={format} onChange={setFormat} listen />
      </div>
      {!card ? (
        <section className="card">
          <EdEmptyState
            icon={<EdIcon name={deck.length > 0 ? 'CircleCheck' : 'Inbox'} size="xl" />}
            tone={deck.length > 0 ? 'success' : 'neutral'}
            title={deck.length > 0 ? 'Round complete' : mode === 'new' ? 'You have practised every objection here' : mode === 'review' ? 'Nothing is due' : mode === 'weak' ? 'No weak spots right now' : 'No objections here yet'}
            body={deck.length > 0 || mode !== 'review' ? undefined : 'Objections come back for review based on how confident you said you were.'}
            actions={<EdButton variant="primary" onClick={() => restart(mode)}>Start again</EdButton>}
          />
        </section>
      ) : format === 'listen' && canSpeak ? (
        <ListenDeck key={`${seed}-${trackId}-${mode}`} deck={deck} />
      ) : (
        <>
          <p className="deck-count">Card {i + 1} of {deck.length}</p>
          <Drill key={`${seed}-${format}-${card.o.id}`} format={format} objection={card.o} context={card.topic} onRated={() => setI(i + 1)} />
        </>
      )}
    </>
  );
}
