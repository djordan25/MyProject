/** A small ring showing 0..1 readiness, with the percentage in the middle. */
export default function ReadinessRing({ value, label, size = 56 }: { value: number; label: string; size?: number }) {
  const pct = Math.round(value * 100);
  const r = 22;
  const c = 2 * Math.PI * r;
  return (
    <div className="ring" style={{ width: size, height: size }} role="img" aria-label={`${label}: ${pct}% ready`}>
      <svg viewBox="0 0 56 56" aria-hidden>
        <circle className="ring-track" cx="28" cy="28" r={r} />
        <circle className="ring-fill" cx="28" cy="28" r={r} strokeDasharray={c} strokeDashoffset={c * (1 - value)} />
      </svg>
      <b aria-hidden>{pct}<small>%</small></b>
    </div>
  );
}
