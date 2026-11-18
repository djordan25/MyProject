/** The wax seal: rubric for a completed topic, brand ink for a completed track. Also the app's mark. */
export default function Seal({ tone = 'topic', size = 40, label }: { tone?: 'topic' | 'track'; size?: number; label?: string }) {
  return (
    <svg className={`seal ${tone}`} width={size} height={size} viewBox="0 0 512 512" role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      <rect className="seal-bg" width="512" height="512" rx="144" />
      <path className="seal-shield" d="M256 92 L380 140 V250 C380 330 326 392 256 420 C186 392 132 330 132 250 V140 Z" />
      <rect className="seal-cross" x="244" y="170" width="24" height="190" rx="4" />
      <rect className="seal-cross" x="196" y="218" width="120" height="24" rx="4" />
    </svg>
  );
}
