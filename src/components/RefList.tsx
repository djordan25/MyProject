import { KIND_LABEL, parseRef } from '../lib/references';

export default function RefList({ refs, label = 'References' }: { refs?: string[]; label?: string }) {
  if (!refs?.length) return null;
  return (
    <div className="refs">
      <strong>{label}:</strong>
      {refs.map((r) => {
        const p = parseRef(r);
        return p ? (
          <a key={r} href={p.url} target="_blank" rel="noopener noreferrer" className={`chip ${p.kind}`} title={`Open in ${KIND_LABEL[p.kind]} source`}>
            {r}
          </a>
        ) : (
          <span key={r} className="chip">{r}</span>
        );
      })}
    </div>
  );
}
