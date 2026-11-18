import { EdChip } from 'editorial-ui';
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
  const options: { id: DrillFormat; label: string }[] = [
    { id: 'sparring', label: 'Sparring' },
    { id: 'cards', label: 'Cards' },
    ...(listen && canSpeak ? [{ id: 'listen' as const, label: 'Listen' }] : []),
  ];
  return (
    <div className="format-toggle" role="radiogroup" aria-label="Drill format">
      {options.map((o) => (
        <EdChip key={o.id} kind="radio" selected={shown === o.id} onSelectedChange={() => onChange(o.id)}>{o.label}</EdChip>
      ))}
    </div>
  );
}
