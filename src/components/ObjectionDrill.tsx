import { useState } from 'react';
import type { Objection } from '../content';
import { progress, useProgress, type DrillRating } from '../lib/progress';

interface Props {
  objection: Objection;
  context?: string;
  onRated?: (rating: DrillRating) => void;
}

/** Shows an objection, lets the learner draft a response, then reveals a model answer for self-assessment. */
export default function ObjectionDrill({ objection, context, onRated }: Props) {
  const p = useProgress();
  const [draft, setDraft] = useState('');
  const [revealed, setRevealed] = useState(false);
  const current = p.drills[objection.id];

  const rate = (r: DrillRating) => {
    progress.rateDrill(objection.id, r);
    onRated?.(r);
  };

  return (
    <article className="card drill">
      {context && <div className="eyebrow">{context}</div>}
      <blockquote className="objection">“{objection.objection}”</blockquote>
      {current && <span className={`badge ${current}`}>{current === 'got' ? 'Mastered' : 'Needs review'}</span>}

      <label className="field">
        <span>How would you respond? (optional — for your own practice)</span>
        <textarea value={draft} onChange={(e) => setDraft(e.target.value)} rows={4} placeholder="Type your answer…" />
      </label>

      {!revealed ? (
        <button className="btn primary" onClick={() => setRevealed(true)}>Show model answer</button>
      ) : (
        <div className="reveal">
          <h3>Model response</h3>
          <p>{objection.response}</p>
          <h4>Key points</h4>
          <ul>
            {objection.keyPoints.map((k) => <li key={k}>{k}</li>)}
          </ul>
          <div className="row">
            <span className="muted">How did you do?</span>
            <button className="btn" onClick={() => rate('review')}>Needs review</button>
            <button className="btn success" onClick={() => rate('got')}>Got it</button>
          </div>
        </div>
      )}
    </article>
  );
}
