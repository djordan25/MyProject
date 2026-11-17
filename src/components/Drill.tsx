import type { Objection } from '../content';
import type { DrillFormat } from '../lib/drillFormat';
import type { Confidence } from '../lib/progress';
import ObjectionDrill from './ObjectionDrill';
import SparringDrill from './SparringDrill';

interface Props {
  objection: Objection;
  format: DrillFormat;
  context?: string;
  onRated?: (level: Confidence) => void;
}

/** An objection drill in the chosen format. */
export default function Drill({ format, ...rest }: Props) {
  return format === 'sparring' ? <SparringDrill {...rest} /> : <ObjectionDrill {...rest} />;
}

/** Switch between the two drill formats. */
export function FormatToggle({ format, onChange }: { format: DrillFormat; onChange: (f: DrillFormat) => void }) {
  return (
    <div className="segmented" role="group" aria-label="Drill format">
      <button type="button" aria-pressed={format === 'sparring'} onClick={() => onChange('sparring')}>Sparring</button>
      <button type="button" aria-pressed={format === 'cards'} onClick={() => onChange('cards')}>Cards</button>
    </div>
  );
}
