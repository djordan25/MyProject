import { EdProgressMeter } from 'editorial-ui';

/** A bare progress meter (EditorialUI), 0..1. */
export default function ProgressBar({ value, label }: { value: number; label?: string }) {
  const pct = Math.round(value * 100);
  return <EdProgressMeter percent={pct} tone="brand" ariaLabel={label ?? 'Progress'} valueText={`${pct}%`} />;
}
