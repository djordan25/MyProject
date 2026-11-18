import { EdStatusBadge } from 'editorial-ui';
import { CONFIDENCE, type Confidence } from '../lib/progress';

const TONE = { again: 'danger', shaky: 'warning', solid: 'success', teach: 'brand' } as const;

/** An objection's last confidence rating, as a status badge with its word. */
export default function ConfidenceBadge({ level }: { level?: Confidence }) {
  if (!level) return null;
  return <EdStatusBadge tone={TONE[level]} dot>{CONFIDENCE.find((c) => c.id === level)?.label}</EdStatusBadge>;
}
