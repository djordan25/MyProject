import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { EdButton, EdChip, EdEmptyState, EdIcon, EdIconButton } from 'editorial-ui';
import { loadPassages, type Passage } from '../lib/passages';
import { isDue, progress, useProgress } from '../lib/progress';
import { STARTER_SETS, verseId, verseText } from '../lib/verses';
import ConfidenceBadge from '../components/ConfidenceBadge';
import VerseDrill from '../components/VerseDrill';

const DAY = 24 * 60 * 60 * 1000;
const clip = (s: string) => (s.length > 90 ? `${s.slice(0, 90).replace(/\s+\S*$/, '')}…` : s);

/** The learner's memory verses: practise them, manage the list, and add from starter sets. */
export default function Verses() {
  const p = useProgress();
  const [texts, setTexts] = useState<Record<string, Passage>>({});
  // A practice round: the verses to go through, fixed when the round starts.
  const [deck, setDeck] = useState<string[] | null>(null);
  const [i, setI] = useState(0);

  useEffect(() => {
    loadPassages().then(setTexts).catch(() => undefined);
  }, []);

  const saved = p.verses;
  const due = saved.filter((r) => isDue(p, verseId(r)));
  const start = (refs: string[]) => {
    setDeck(refs);
    setI(0);
  };
  const when = (ref: string) => {
    const id = verseId(ref);
    if (!p.drills[id]) return 'new';
    if (isDue(p, id)) return 'due now';
    return `review in ${Math.max(1, Math.ceil(((p.review[id]?.due ?? 0) - Date.now()) / DAY))}d`;
  };

  if (deck) {
    const ref = deck[i];
    return (
      <>
        <div className="session-head">
          <button type="button" className="back" onClick={() => setDeck(null)}>← Memory verses</button>
          {ref && <span className="muted">Verse {i + 1} of {deck.length}</span>}
        </div>
        {ref ? (
          <VerseDrill key={`${i}-${ref}`} refName={ref} onRated={() => setI(i + 1)} />
        ) : (
          <section className="card">
            <EdEmptyState
              icon={<EdIcon name="CircleCheck" size="xl" />}
              tone="success"
              title="Round complete"
              body="Each verse comes back for review based on how confident you said you were."
              actions={<EdButton variant="primary" onClick={() => setDeck(null)}>Back to your verses</EdButton>}
            />
          </section>
        )}
      </>
    );
  }

  return (
    <>
      <Link to="/practice" className="back">← Practice</Link>
      <h1>Memory verses</h1>
      <p className="muted">
        An answer lands better when you can quote the verse. Save passages here, then recall them with less and less help.
        They come back for review the same way objections do, and one due verse joins Today’s practice.
      </p>

      {saved.length === 0 ? (
        <section className="card">
          <EdEmptyState
            icon={<EdIcon name="Bookmark" size="xl" />}
            title="No verses saved yet"
            body="Pick a few starter verses below, or tap Memorise on any Bible passage you open in a lesson."
          />
        </section>
      ) : (
        <>
          <div className="row">
            <EdButton variant="primary" disabled={!due.length} onClick={() => start(due)}>
              {due.length ? `Practise ${due.length} due` : 'Nothing due'}
            </EdButton>
            <EdButton variant="secondary" onClick={() => start(saved)}>Practise all {saved.length}</EdButton>
          </div>
          <div className="list">
            {saved.map((ref) => (
              <div key={ref} className="list-row verse-row">
                <button type="button" className="list-row-body verse-open" onClick={() => start([ref])} aria-label={`Practise ${ref}`}>
                  <span className="list-row-title">{ref}</span>
                  {texts[ref] && <span className="list-row-summary">{clip(verseText(texts[ref]))}</span>}
                  <span className="list-row-meta"><span>{when(ref)}</span></span>
                </button>
                <ConfidenceBadge level={p.confidence[verseId(ref)]} />
                <EdIconButton aria-label={`Remove ${ref}`} icon={<EdIcon name="X" size="sm" />} onClick={() => progress.toggleVerse(ref)} />
              </div>
            ))}
          </div>
        </>
      )}

      <section className="track-section">
        <h2 className="section-title">Starter verses</h2>
        <p className="muted">Tap to add or remove. Texts are from the Berean Standard Bible.</p>
        {STARTER_SETS.map((set) => (
          <div key={set.title} className="starter-set">
            <span className="eyebrow">{set.title}</span>
            <div className="format-toggle">
              {set.refs.map((r) => (
                <EdChip key={r} kind="toggle" selected={saved.includes(r)} onSelectedChange={() => progress.toggleVerse(r)}>{r}</EdChip>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
