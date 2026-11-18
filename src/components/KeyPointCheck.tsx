import { EdCheckbox, EdStatusBadge } from 'editorial-ui';
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
      <span className="eyebrow">Key points · tick what your answer covered</span>
      <div className="kpc">
        {points.map((k, i) => (
          <EdCheckbox key={k} checked={checked.includes(i)} onCheckedChange={() => toggle(i)} label={<RefText text={k} />} />
        ))}
      </div>
      <p className="kpc-score" aria-live="polite">
        <EdStatusBadge tone={n === points.length ? 'success' : n === 0 ? 'neutral' : 'warning'} dot>
          {n} of {points.length} covered
        </EdStatusBadge>
        <span className="muted">
          {n === points.length ? 'A complete answer.' : n === 0 ? 'Read the model response, then try again next time.' : 'Add the missing point next time.'}
        </span>
      </p>
    </div>
  );
}

/** A confidence level to suggest from the share of key points covered. */
export const suggestFromCoverage = (covered: number, total: number): Confidence | undefined =>
  total === 0 ? undefined : covered === total ? 'solid' : covered === 0 ? 'again' : 'shaky';
