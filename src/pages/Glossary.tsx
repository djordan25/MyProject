import { useState } from 'react';
import { Link } from 'react-router-dom';
import { glossary } from '../content/glossary';
import RefText from '../components/RefText';

export default function Glossary() {
  const [q, setQ] = useState('');
  const needle = q.trim().toLowerCase();
  const terms = glossary.filter((t) => !needle || `${t.term} ${t.meaning}`.toLowerCase().includes(needle));
  return (
    <>
      <Link to="/track/islam" className="back">← Islam Specialization</Link>
      <h1>Glossary</h1>
      <input className="search-input" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Filter terms…" aria-label="Filter terms" />
      <section className="card">
        <dl className="glossary">
          {terms.map((t) => (
            <div key={t.term}>
              <dt>{t.term}</dt>
              <dd><RefText text={t.meaning} /></dd>
            </div>
          ))}
        </dl>
        {terms.length === 0 && <p className="muted">No matching terms.</p>}
      </section>
    </>
  );
}
