import type { ReactNode } from 'react';
import RefText from './RefText';

/**
 * A numbered argument drawn as a chain: each premise is a numbered node on a rail that runs down into the conclusion.
 * The same shape is used wherever the argument appears, so that the picture itself becomes the cue.
 */
export default function ArgumentDiagram({ steps, renderStep, stepClass }: {
  steps: string[];
  /** Replaces the text of a step, for a game that hides one. */
  renderStep?: (step: string, index: number) => ReactNode;
  stepClass?: (index: number) => string | undefined;
}) {
  const last = steps.length - 1;
  return (
    <ol className="arg-diagram">
      {steps.map((step, n) => (
        <li key={n} className={[n === last ? 'conclusion' : 'premise', stepClass?.(n)].filter(Boolean).join(' ')}>
          <span className="arg-node mono" aria-hidden>{n === last ? '∴' : n + 1}</span>
          <div className="arg-step">
            <span className="arg-role">{n === last ? 'Conclusion' : `Premise ${n + 1}`}</span>
            {renderStep ? renderStep(step, n) : <RefText text={step} />}
          </div>
        </li>
      ))}
    </ol>
  );
}
