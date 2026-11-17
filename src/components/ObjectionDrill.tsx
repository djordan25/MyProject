import { useState } from 'react';
import type { FollowUp, Objection } from '../content';
import { progress, useProgress, type Confidence } from '../lib/progress';
import RefText from './RefText';
import RefList from './RefList';
import ConfidenceRater from './ConfidenceRater';
import KeyPointCheck, { suggestFromCoverage } from './KeyPointCheck';
import ListenButton, { objectionSegments } from './ListenButton';
import ShareButton from './ShareButton';

interface Props {
  objection: Objection;
  context?: string;
  onRated?: (level: Confidence) => void;
}

const LEAD = ['If they reply', 'If they push back', 'If they press further', 'And if they then say'];

/** The back-and-forth after the model response: each reply opens to its answer, which may hold further replies. */
function FollowUps({ items, depth }: { items?: FollowUp[]; depth: number }) {
  if (!items?.length) return null;
  return (
    <>
      {items.map((f) => (
        <details key={f.reply} className="followup">
          <summary>
            <span className="round">Round {depth + 2}</span> {LEAD[Math.min(depth, LEAD.length - 1)]}: “{f.reply}”
          </summary>
          <p><RefText text={f.answer} /></p>
          <FollowUps items={f.followUps} depth={depth + 1} />
        </details>
      ))}
    </>
  );
}

/** Shows an objection, lets the learner draft a response, then reveals a model answer for self-assessment. */
export default function ObjectionDrill({ objection, context, onRated }: Props) {
  const p = useProgress();
  const [draft, setDraft] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [covered, setCovered] = useState<number[]>([]);
  const current = p.drills[objection.id];
  const drafted = draft.trim().length > 0;

  const rate = (level: Confidence) => {
    progress.rateDrill(objection.id, level);
    onRated?.(level);
  };

  return (
    <article className="card drill">
      {context && <div className="eyebrow">{context}</div>}
      <blockquote className="objection">“{objection.objection}”</blockquote>
      <div className="drill-tools">
        {current && <span className={`badge ${current}`}>{current === 'got' ? 'Mastered' : 'Needs review'}</span>}
        <ListenButton key={String(revealed)} segments={objectionSegments(objection, revealed)} label={revealed ? 'Listen to answer' : 'Listen'} />
        {revealed && <ShareButton objection={objection} />}
      </div>

      <label className="field">
        <span>How would you respond? Write a few lines, then check them against the model answer.</span>
        <textarea value={draft} onChange={(e) => setDraft(e.target.value)} rows={4} placeholder="Type your answer…" />
      </label>

      {!revealed ? (
        <button className="btn primary" onClick={() => setRevealed(true)}>Show model answer</button>
      ) : (
        <div className="reveal">
          <h3>Model response</h3>
          <p><RefText text={objection.response} /></p>
          {drafted ? (
            <KeyPointCheck points={objection.keyPoints} checked={covered} onChange={setCovered} />
          ) : (
            <>
              <h4>Key points</h4>
              <ul>
                {objection.keyPoints.map((k) => <li key={k}><RefText text={k} /></li>)}
              </ul>
            </>
          )}
          <RefList refs={objection.references} />
          <FollowUps items={objection.followUps} depth={0} />
          <ConfidenceRater
            objectionId={objection.id}
            onRate={rate}
            suggested={drafted ? suggestFromCoverage(covered.length, objection.keyPoints.length) : undefined}
          />
        </div>
      )}
    </article>
  );
}
