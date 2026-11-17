import { useState } from 'react';
import { topics, type Objection } from '../content';

/** Turns an objection and its answer into an image and opens the share sheet (or downloads it). */
export default function ShareButton({ objection }: { objection: Objection }) {
  const [state, setState] = useState<'idle' | 'busy' | 'done'>('idle');
  const topic = topics.find((t) => t.objections.some((o) => o.id === objection.id))?.title ?? 'Apologetics Trainer';
  return (
    <button
      type="button"
      className="listen-btn"
      disabled={state === 'busy'}
      onClick={async () => {
        setState('busy');
        try {
          // Loaded on demand: most sessions never share.
          const { shareCard } = await import('../lib/shareCard');
          const r = await shareCard(objection, topic);
          setState(r === 'cancelled' ? 'idle' : 'done');
        } catch {
          setState('idle');
        }
      }}
    >
      <svg viewBox="0 0 24 24" aria-hidden><path d="M12 15V4m0 0L8 8m4-4 4 4M5 12v6.5c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5V12" /></svg>
      {state === 'busy' ? 'Preparing…' : state === 'done' ? 'Shared' : 'Share card'}
    </button>
  );
}
