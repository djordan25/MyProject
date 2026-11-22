import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { EdChip, EdEmptyState, EdIcon, EdStatusBadge, EdTextField } from 'editorial-ui';
import { flattenFollowUps, topics } from '../content';
import QuickAnswers from '../components/QuickAnswers';
import RadioChips from '../components/RadioChips';
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
    text: [o.response, ...o.keyPoints, ...(o.references ?? []), ...flattenFollowUps(o.followUps).flatMap((f) => [f.reply, f.answer])].join(' '),
    to: `/topic/${t.id}/objections`,
  })),
  ]),
];

const SUGGESTIONS = ['resurrection', 'Trinity', 'Bukhari 4987', 'Quran 4:157', 'hallucination', 'problem of evil'];
// Status red/amber/green mean confidence in this app, so result kinds use the neutral tones.
const TONE = { Lesson: 'brand', Objection: 'neutral', Glossary: 'info' } as const;

/** Wraps each searched word in <mark>. */
function Highlight({ text, words }: { text: string; words: string[] }) {
  if (!words.length) return <>{text}</>;
  const re = new RegExp(`(${words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  return <>{text.split(re).map((part, i) => (i % 2 ? <mark key={i}>{part}</mark> : part))}</>;
}

function snippet(text: string, word: string): string {
  const i = text.toLowerCase().indexOf(word);
  if (i < 0) return text.slice(0, 140) + (text.length > 140 ? '…' : '');
  const start = Math.max(0, i - 60);
  return (start > 0 ? '…' : '') + text.slice(start, i + 100) + (i + 100 < text.length ? '…' : '');
}

/** Finds lessons and objections containing every word typed (also matches references, e.g. "Bukhari 4987"). */
export default function Search() {
  const [q, setQ] = useState('');
  // 'said': in-the-moment help that shows the closest answer; 'all': a plain search of everything.
  const [mode, setMode] = useState<'said' | 'all'>('said');
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
      <div className="search-modes">
        <RadioChips
          label="Search mode"
          value={mode}
          onChange={setMode}
          options={[{ id: 'said', label: 'They just said…' }, { id: 'all', label: 'Everything' }]}
        />
      </div>
      <div className="search-field">
        <EdTextField
          label="Search"
          visuallyHidden
          type="search"
          autoFocus
          fullWidth
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={mode === 'said' ? 'Type roughly what they said…' : 'Lessons, objections, references…'}
          prefix={<EdIcon name="Search" size="sm" />}
        />
      </div>
      {mode === 'said' ? <QuickAnswers q={q} onPick={setQ} /> : (
        <>
      {!words.length && (
        <div className="filters" aria-label="Try searching for">
          <span className="muted">Try</span>
          {SUGGESTIONS.map((t) => <EdChip key={t} kind="toggle" onClick={() => setQ(t)}>{t}</EdChip>)}
        </div>
      )}
      {words.length > 0 && (
        <p className="deck-count">{results.length} result{results.length === 1 ? '' : 's'}{results.length > 40 ? ' · showing 40' : ''}</p>
      )}
      {words.length > 0 && results.length === 0 && (
        <section className="card">
          <EdEmptyState icon={<EdIcon name="SearchX" size="xl" />} title="No matches" body="Every word must appear. Try fewer words, or a reference like “John 14:6”." />
        </section>
      )}
      {results.length > 0 && (
        <div className="list">
          {results.slice(0, 40).map((r, i) => (
            <Link key={i} to={r.to} className="list-row search-row">
              <span className="list-row-body">
                <span className="search-kind"><EdStatusBadge tone={TONE[r.kind]}>{r.kind}</EdStatusBadge><span className="mono muted">{r.topic}</span></span>
                <span className="list-row-title"><Highlight text={r.title} words={words} /></span>
                <span className="list-row-summary"><Highlight text={snippet(r.text, words[0])} words={words} /></span>
              </span>
            </Link>
          ))}
        </div>
      )}
        </>
      )}
    </>
  );
}
