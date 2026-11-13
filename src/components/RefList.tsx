import { parseRef } from '../lib/references';
import { useOpenPassage } from './PassagePopup';

export default function RefList({ refs, label = 'References' }: { refs?: string[]; label?: string }) {
  const open = useOpenPassage();
  if (!refs?.length) return null;
  return (
    <div className="refs">
      <strong>{label}:</strong>
      {refs.map((r) => {
        const p = parseRef(r);
        return p ? (
          <button key={r} type="button" className={`chip ${p.kind}`} onClick={(e) => open(r, e.currentTarget)}>
            {r}
          </button>
        ) : (
          <span key={r} className="chip">{r}</span>
        );
      })}
    </div>
  );
}
