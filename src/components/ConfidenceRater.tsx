import { buzz } from '../lib/haptics';
import { CONFIDENCE, daysUntilReview, useProgress, type Confidence } from '../lib/progress';

const when = (days: number) => (days === 0 ? 'review today' : days >= 28 ? 'review 30d' : `review ${days}d`);

interface Props {
  objectionId: string;
  onRate: (level: Confidence) => void;
  /** A level to highlight as the suggestion (e.g. from the key-point check). */
  suggested?: Confidence;
}

/** Four joined steps; each shows its colour bar, its word, and when the objection will come back. */
export default function ConfidenceRater({ objectionId, onRate, suggested }: Props) {
  const p = useProgress();
  const current = p.confidence[objectionId];
  return (
    <div className="conf-wrap">
      <span className="eyebrow">How ready are you to say this out loud?</span>
      <div className="conf" role="group" aria-label="Confidence">
        {CONFIDENCE.map((l) => (
          <button
            key={l.id}
            type="button"
            className={`conf-${l.id}${l.id === suggested ? ' suggested' : ''}`}
            aria-pressed={current === l.id}
            onClick={() => {
              buzz(l.id === 'solid' || l.id === 'teach' ? 'success' : 'tap');
              onRate(l.id);
            }}
          >
            <span className="conf-bar" aria-hidden />
            <strong>{l.label}</strong>
            <small>{when(daysUntilReview(p.review[objectionId], l.id))}</small>
          </button>
        ))}
      </div>
    </div>
  );
}
