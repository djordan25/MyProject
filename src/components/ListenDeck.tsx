import { useEffect, useRef, useState } from 'react';
import type { Objection } from '../content';
import { progress } from '../lib/progress';
import { speak } from '../lib/speech';
import RefText from './RefText';

interface Card {
  o: Objection;
  topic: string;
}

type Phase = 'objection' | 'think' | 'answer' | 'points' | 'idle';

const THINK_OPTIONS = [0, 5, 10];

/** Hands-free practice: reads each objection, pauses for you to answer in your head, then reads a strong answer and moves on. */
export default function ListenDeck({ deck }: { deck: Card[] }) {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [phase, setPhase] = useState<Phase>('idle');
  const [think, setThink] = useState(5);
  const [rate, setRate] = useState(1);
  const stop = useRef<(() => void) | null>(null);
  const card = deck[i];

  useEffect(() => {
    if (!playing || !card) return;
    const thinkMs = think * 1000;
    stop.current = speak(
      [
        { id: 'objection', text: `${card.topic}. They say: ${card.o.objection}`, pauseAfter: 300 },
        ...(thinkMs ? [{ id: 'think', text: 'How would you answer?', pauseAfter: thinkMs }] : []),
        { id: 'answer', text: `A strong answer. ${card.o.response}`, pauseAfter: 600 },
        { id: 'points', text: `Key points. ${card.o.keyPoints.join(' ')}`, pauseAfter: 1500 },
      ],
      {
        onSegment: (k) => setPhase((thinkMs ? ['objection', 'think', 'answer', 'points'] : ['objection', 'answer', 'points'])[k] as Phase),
        onEnd: () => {
          if (i + 1 < deck.length) setI(i + 1);
          else {
            setPlaying(false);
            setPhase('idle');
          }
        },
      },
      rate,
    );
    return () => stop.current?.();
  }, [playing, i, card, think, rate, deck.length]);

  if (!card) return null;
  const showAnswer = phase === 'answer' || phase === 'points';
  const go = (n: number) => {
    setPhase('idle');
    setI(Math.max(0, Math.min(deck.length - 1, n)));
  };

  return (
    <section className="card listen-deck" aria-live="polite">
      <div className="eyebrow">Listening · {card.topic}</div>
      <blockquote className="objection">“{card.o.objection}”</blockquote>
      <p className="listen-phase">
        {phase === 'think' ? 'Your turn — answer it in your head…'
          : phase === 'objection' ? 'Reading the objection…'
          : showAnswer ? 'A strong answer:'
          : playing ? '' : 'Press play. Works with the screen on; some phones pause speech when locked.'}
      </p>
      {showAnswer && <p className="listen-answer"><RefText text={card.o.response} /></p>}
      <div className="listen-controls">
        <button className="btn" aria-label="Previous objection" onClick={() => go(i - 1)} disabled={i === 0}>‹ Prev</button>
        <button
          className="btn primary listen-play"
          onClick={() => {
            if (!playing) progress.recordPractice();
            setPlaying(!playing);
            if (playing) setPhase('idle');
          }}
        >
          {playing ? 'Pause' : 'Play'}
        </button>
        <button className="btn" aria-label="Next objection" onClick={() => go(i + 1)} disabled={i + 1 >= deck.length}>Next ›</button>
      </div>
      <div className="listen-settings">
        <span className="muted">Card {i + 1} of {deck.length}</span>
        <label className="select">
          <span className="muted">Thinking time</span>
          <select value={think} onChange={(e) => setThink(Number(e.target.value))}>
            {THINK_OPTIONS.map((t) => <option key={t} value={t}>{t ? `${t} seconds` : 'None'}</option>)}
          </select>
        </label>
        <label className="select">
          <span className="muted">Speed</span>
          <select value={rate} onChange={(e) => setRate(Number(e.target.value))}>
            <option value={0.9}>Slower</option>
            <option value={1}>Normal</option>
            <option value={1.15}>Faster</option>
          </select>
        </label>
      </div>
    </section>
  );
}
