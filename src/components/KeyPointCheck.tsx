import type { Confidence } from '../lib/progress';
import RefText from './RefText';

interface Props {
  points: string[];
  checked: number[];
  onChange: (checked: number[]) => void;
}

/** The learner ticks which key points their own answer covered, and sees a score. */
export default function KeyPointCheck({ points, checked, onChange }: Props) {
  const toggle = (i: number) => onChange(checked.includes(i) ? checked.filter((x) => x !== i) : [...checked, i]);
  const n = checked.length;
  return (
    <div className="kpc-wrap">
      <h4>Which key points did your answer cover?</h4>
      <ul className="kpc">
        {points.map((k, i) => (
          <li key={k}>
            <label className={checked.includes(i) ? 'hit' : undefined}>
              <input type="checkbox" checked={checked.includes(i)} onChange={() => toggle(i)} />
              <span><RefText text={k} /></span>
            </label>
          </li>
        ))}
      </ul>
      <p className="kpc-score" aria-live="polite">
        <strong>You covered {n} of {points.length}</strong>{' '}
        <span className="muted">
          {n === points.length ? 'A complete answer.' : n === 0 ? 'Read the model response, then try again next time.' : 'Close — add the missing point next time.'}
        </span>
      </p>
    </div>
  );
}

/** A confidence level to suggest from the share of key points covered. */
export const suggestFromCoverage = (covered: number, total: number): Confidence | undefined =>
  total === 0 ? undefined : covered === total ? 'solid' : covered === 0 ? 'again' : 'shaky';
