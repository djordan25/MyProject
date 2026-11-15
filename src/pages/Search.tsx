import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { topics } from '../content';
import { glossary } from '../content/glossary';

interface Entry {
  kind: 'Lesson' | 'Objection' | 'Glossary';
  topic: string;
  title: string;
  text: string;
  to: string;
}

const index: Entry[] = [
  ...glossary.map((g) => ({ kind: 'Glossary' as const, topic: 'Islamic terms', title: g.term, text: g.meaning, to: '/glossary' })),
  ...topics.flatMap((t) => [
  ...t.lesson.map((s) => ({
    kind: 'Lesson' as const,
    topic: t.title,
    title: s.heading,
    text: [...s.body, ...(s.argument ?? []), ...(s.references ?? [])].join(' '),
    to: `/topic/${t.id}`,
  })),
  ...t.objections.map((o) => ({
    kind: 'Objection' as const,
    topic: t.title,
    title: o.objection,
    text: [o.response, ...o.keyPoints, ...(o.references ?? []), ...(o.followUps ?? []).flatMap((f) => [f.reply, f.answer])].join(' '),
    to: `/topic/${t.id}/objections`,
  })),
  ]),
];

function snippet(text: string, word: string): string {
  const i = text.toLowerCase().indexOf(word);
  if (i < 0) return text.slice(0, 140) + (text.length > 140 ? '…' : '');
  const start = Math.max(0, i - 60);
  return (start > 0 ? '…' : '') + text.slice(start, i + 100) + (i + 100 < text.length ? '…' : '');
}

/** Finds lessons and objections containing every word typed (also matches references, e.g. "Bukhari 4987"). */
export default function Search() {
  const [q, setQ] = useState('');
  const words = q.toLowerCase().split(/\s+/).filter((w) => w.length >= 2);
  const results = useMemo(() => {
    if (!words.length) return [];
    return index.filter((e) => {
      const hay = `${e.title} ${e.text}`.toLowerCase();
      return words.every((w) => hay.includes(w));
    });
  }, [q]);

  return (
    <>
      <h1>Search</h1>
      <input
        className="search-input"
        type="search"
        autoFocus
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search lessons, objections and references…"
        aria-label="Search"
      />
      {words.length > 0 && <p className="muted">{results.length} result{results.length === 1 ? '' : 's'}</p>}
      {results.slice(0, 40).map((r, i) => (
        <Link key={i} to={r.to} className="card search-result">
          <div className="eyebrow">{r.kind} · {r.topic}</div>
          <strong>{r.title}</strong>
          <small className="muted">{snippet(r.text, words[0])}</small>
        </Link>
      ))}
    </>
  );
}
