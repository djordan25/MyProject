import { useEffect, useMemo, useState } from 'react';
import { EdButton, EdStatusBadge, EdTextField } from 'editorial-ui';
import { loadPassages, type Passage } from '../lib/passages';
import { progress, useProgress, type Confidence } from '../lib/progress';
import { compareRecall, firstLetters, suggestFromRecall, verseId, verseText, type RecallMode } from '../lib/verses';
import ConfidenceBadge from './ConfidenceBadge';
import ConfidenceRater from './ConfidenceRater';
import ListenButton from './ListenButton';
import RadioChips from './RadioChips';

const MODES: { id: RecallMode; label: string }[] = [
  { id: 'read', label: 'Read' },
  { id: 'letters', label: 'First letters' },
  { id: 'recall', label: 'From memory' },
];

interface Props {
  /** The passage reference, exactly as it is keyed in the bundled passages (e.g. "John 14:6"). */
  refName: string;
  context?: string;
  onRated?: (level: Confidence) => void;
}

/**
 * Recalling a Bible passage with fading help: read it, then with only first letters, then from memory.
 * A typed attempt is checked word by word; the rating uses the same schedule as objections.
 */
export default function VerseDrill({ refName, context = 'Memory verse', onRated }: Props) {
  const p = useProgress();
  const id = verseId(refName);
  const level = p.confidence[id];
  const [passage, setPassage] = useState<Passage | null | undefined>(undefined);
  // Start with as little help as the last rating earned.
  const [mode, setMode] = useState<RecallMode>(level === 'solid' || level === 'teach' ? 'recall' : level === 'shaky' ? 'letters' : 'read');
  const [typed, setTyped] = useState('');
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    let live = true;
    loadPassages()
      .then((all) => live && setPassage(all[refName] ?? null))
      .catch(() => live && setPassage(null));
    return () => {
      live = false;
    };
  }, [refName]);

  const text = passage ? verseText(passage) : '';
  const result = useMemo(() => (checked && typed.trim() ? compareRecall(typed, text) : null), [checked, typed, text]);

  const rate = (l: Confidence) => {
    progress.rateDrill(id, l);
    onRated?.(l);
  };

  return (
    <article className="card verse-drill">
      <div className="spar-head">
        <span className="eyebrow">{context}</span>
        <ConfidenceBadge level={level} />
      </div>
      <h2 className="verse-ref">{refName}</h2>
      <span className="mono muted verse-src">{passage?.src ?? ' '}</span>

      {passage === undefined && <p className="muted">Loading…</p>}
      {passage === null && <p className="muted">This passage’s text isn’t available.</p>}

      {passage && !checked && (
        <>
          <div className="drill-tools">
            <RadioChips label="How much help" value={mode} onChange={setMode} options={MODES} />
            {mode === 'read' && <ListenButton segments={[{ text: `${refName}. ${text}` }]} />}
          </div>
          {mode === 'read' ? (
            <>
              <p className="verse-text">{text}</p>
              <div className="row end">
                <EdButton variant="primary" onClick={() => setMode('letters')}>Now try with first letters</EdButton>
              </div>
            </>
          ) : (
            <>
              {mode === 'letters' ? (
                <p className="verse-hint" aria-label="The first letter of each word">{firstLetters(text)}</p>
              ) : (
                <p className="muted">Say it aloud, or type it below, then check yourself.</p>
              )}
              <EdTextField
                label="From memory"
                hint="Optional. If you type it, the app checks you word by word."
                multiline
                minRows={3}
                fullWidth
                value={typed}
                onChange={(e) => setTyped(e.target.value)}
                placeholder="Type the verse…"
              />
              <div className="row end">
                <EdButton variant="primary" onClick={() => setChecked(true)}>Check</EdButton>
              </div>
            </>
          )}
        </>
      )}

      {passage && checked && (
        <div className="reveal">
          {result ? (
            <>
              <p className="verse-text verse-check">
                {result.words.map((w, i) => (
                  <span key={i} className={w.hit ? undefined : 'miss'}>{w.text} </span>
                ))}
              </p>
              <p className="kpc-score" aria-live="polite">
                <EdStatusBadge tone={result.correct === result.total ? 'success' : result.correct / result.total >= 0.7 ? 'warning' : 'danger'} dot>
                  {result.correct} of {result.total} words
                </EdStatusBadge>
                <span className="muted">{result.correct === result.total ? 'Word perfect.' : 'Missed words are marked.'}</span>
              </p>
            </>
          ) : (
            <p className="verse-text">{text}</p>
          )}
          <div className="drill-tools">
            <ListenButton segments={[{ text: `${refName}. ${text}` }]} />
            <EdButton variant="ghost" size="sm" onClick={() => { setChecked(false); setTyped(''); }}>Try again</EdButton>
          </div>
          <ConfidenceRater objectionId={id} onRate={rate} suggested={result ? suggestFromRecall(result.correct, result.total) : undefined} />
        </div>
      )}
    </article>
  );
}
