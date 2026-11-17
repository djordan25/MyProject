import { useEffect, useRef, useState } from 'react';
import { canSpeak, speak, type Segment } from '../lib/speech';

/** A small play/stop button that reads the given segments aloud. Renders nothing where speech is unavailable. */
export default function ListenButton({ segments, label = 'Listen' }: { segments: Segment[]; label?: string }) {
  const [playing, setPlaying] = useState(false);
  const stop = useRef<(() => void) | null>(null);
  useEffect(() => () => stop.current?.(), []);
  if (!canSpeak) return null;
  return (
    <button
      type="button"
      className="listen-btn"
      aria-pressed={playing}
      onClick={() => {
        if (playing) {
          stop.current?.();
          setPlaying(false);
          return;
        }
        setPlaying(true);
        stop.current = speak(segments, { onEnd: () => setPlaying(false) });
      }}
    >
      <svg viewBox="0 0 24 24" aria-hidden>
        {playing ? <rect x="7" y="7" width="10" height="10" rx="1.5" /> : <path d="M4 9v6h4l5 4V5L8 9H4Zm12.5-.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" />}
      </svg>
      {playing ? 'Stop' : label}
    </button>
  );
}

/** What to read for an objection: the objection, then (if shown) the model answer and key points. */
export function objectionSegments(o: { objection: string; response: string; keyPoints: string[] }, withAnswer: boolean): Segment[] {
  const head: Segment[] = [{ text: `They say: ${o.objection}`, pauseAfter: withAnswer ? 900 : 0 }];
  if (!withAnswer) return head;
  return [...head, { text: `A strong answer. ${o.response}`, pauseAfter: 700 }, { text: `Key points. ${o.keyPoints.join(' ')}` }];
}
