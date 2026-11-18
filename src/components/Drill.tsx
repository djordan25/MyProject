import type { Objection } from '../content';
import type { DrillFormat } from '../lib/drillFormat';
import type { Confidence } from '../lib/progress';
import ObjectionDrill from './ObjectionDrill';
import SparringDrill from './SparringDrill';
import { canSpeak } from '../lib/speech';

interface Props {
  objection: Objection;
  format: DrillFormat;
  context?: string;
  onRated?: (level: Confidence) => void;
}

/** An objection drill in the chosen format. Listen mode is a whole deck, so a single drill falls back to sparring. */
export default function Drill({ format, ...rest }: Props) {
  return format === 'cards' ? <ObjectionDrill {...rest} /> : <SparringDrill {...rest} />;
}

/** Switch between the two drill formats. */
export function FormatToggle({ format, onChange, listen = false }: { format: DrillFormat; onChange: (f: DrillFormat) => void; listen?: boolean }) {
  const shown = format === 'listen' && !(listen && canSpeak) ? 'sparring' : format;
  return (
    <div className="segmented" role="group" aria-label="Drill format">
      <button type="button" aria-pressed={shown === 'sparring'} onClick={() => onChange('sparring')}>Sparring</button>
      <button type="button" aria-pressed={shown === 'cards'} onClick={() => onChange('cards')}>Cards</button>
      {listen && canSpeak && <button type="button" aria-pressed={shown === 'listen'} onClick={() => onChange('listen')}>Listen</button>}
    </div>
  );
}
