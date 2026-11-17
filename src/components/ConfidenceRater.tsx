import { CONFIDENCE, daysUntilReview, useProgress, type Confidence } from '../lib/progress';

const when = (days: number) =>
  days === 0 ? 'Again today' : days === 1 ? 'Review tomorrow' : days >= 28 ? 'Review in a month' : `Review in ${days} days`;

interface Props {
  objectionId: string;
  onRate: (level: Confidence) => void;
  /** A level to highlight as the suggestion (e.g. from the key-point check). */
  suggested?: Confidence;
}

/** Four-step self-rating; each button shows when the objection will come back. */
export default function ConfidenceRater({ objectionId, onRate, suggested }: Props) {
  const p = useProgress();
  const current = p.confidence[objectionId];
  return (
    <div className="conf-wrap">
      <p className="muted conf-prompt">How ready are you to answer this in a real conversation?</p>
      <div className="conf" role="group" aria-label="Confidence">
        {CONFIDENCE.map((l) => (
          <button
            key={l.id}
            type="button"
            className={l.id === suggested ? 'suggested' : undefined}
            aria-pressed={current === l.id}
            onClick={() => onRate(l.id)}
          >
            <strong>{l.label}</strong>
            <small>{when(daysUntilReview(p.review[objectionId], l.id))}</small>
          </button>
        ))}
      </div>
    </div>
  );
}
