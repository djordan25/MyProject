import { useState } from 'react';
import { Link } from 'react-router-dom';
import { glossary } from '../content/glossary';
import RefText from '../components/RefText';
import { EdEmptyState, EdIcon, EdTextField } from 'editorial-ui';

export default function Glossary() {
  const [q, setQ] = useState('');
  const needle = q.trim().toLowerCase();
  const terms = glossary
    .filter((t) => !needle || `${t.term} ${t.meaning}`.toLowerCase().includes(needle))
    .sort((a, b) => a.term.localeCompare(b.term));
  return (
    <>
      <Link to="/track/islam" className="back">← Islam Specialization</Link>
      <h1>Glossary</h1>
      <p className="muted">Islamic terms in plain English. {glossary.length} entries.</p>
      <div className="search-field">
        <EdTextField label="Filter terms" visuallyHidden type="search" fullWidth value={q} onChange={(e) => setQ(e.target.value)} placeholder="Filter terms…" prefix={<EdIcon name="Search" size="sm" />} />
      </div>
      <section className="card">
        <dl className="glossary">
          {terms.map((t) => (
            <div key={t.term}>
              <dt>{t.term}</dt>
              <dd><RefText text={t.meaning} /></dd>
            </div>
          ))}
        </dl>
        {terms.length === 0 && <EdEmptyState compact icon={<EdIcon name="SearchX" size="lg" />} title="No matching terms" />}
      </section>
    </>
  );
}
