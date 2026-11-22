import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { EdButton, EdChip, EdEmptyState, EdIcon, EdIconButton, EdTextField } from 'editorial-ui';
import { topics } from '../content';
import { localDate, progress, useProgress } from '../lib/progress';
import { quickAnswers } from '../lib/quickAnswer';

const BY_ID = new Map(topics.flatMap((t) => t.objections.map((o) => [o.id, { line: o.objection, topicId: t.id, topicTitle: t.title }] as const)));
const clip = (s: string) => (s.length > 48 ? `${s.slice(0, 48).replace(/\s+\S*$/, '')}…` : s);

/** A private log of real conversations: who, what came up, how it went, and what to do next. */
export default function Journal() {
  const p = useProgress();
  const entries = p.conversations;
  const [open, setOpen] = useState(false);
  const [who, setWho] = useState('');
  const [date, setDate] = useState(() => localDate(Date.now()));
  const [notes, setNotes] = useState('');
  const [next, setNext] = useState('');
  const [said, setSaid] = useState('');
  const [tagged, setTagged] = useState<string[]>([]);
  const matches = useMemo(() => quickAnswers(said, 4).filter((m) => !tagged.includes(m.objectionId)), [said, tagged]);
  const showForm = open || entries.length === 0;
  const empty = !who.trim() && !notes.trim() && !next.trim() && !tagged.length;

  const save = () => {
    progress.addConversation({ date, who: who.trim(), notes: notes.trim(), next: next.trim(), objectionIds: tagged });
    setWho('');
    setNotes('');
    setNext('');
    setSaid('');
    setTagged([]);
    setOpen(false);
  };

  return (
    <>
      <Link to="/progress" className="back">← Progress</Link>
      <div className="page-head">
        <h1>Conversations</h1>
        {!showForm && (
          <EdButton variant="primary" leadingIcon={<EdIcon name="Plus" size="sm" />} onClick={() => setOpen(true)}>Log a conversation</EdButton>
        )}
      </div>
      <p className="muted">
        After a real conversation, note who it was with and what came up. Objections you tag become due for review, so the
        next practice session works on what you actually faced. Entries stay on this device and in your progress backup.
      </p>

      {showForm && (
        <section className="card journal-form" aria-label="Log a conversation">
          <div className="journal-two">
            <EdTextField label="Who with" fullWidth value={who} onChange={(e) => setWho(e.target.value)} placeholder="A first name or initials is enough" />
            <EdTextField label="When" type="date" fullWidth value={date} max={localDate(Date.now())} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div>
            <EdTextField
              label="What came up"
              hint="Type roughly what they said, then tap the closest objection to tag it."
              fullWidth
              value={said}
              onChange={(e) => setSaid(e.target.value)}
              placeholder="e.g. the Bible has been changed"
            />
            {matches.length > 0 && (
              <div className="journal-matches">
                {matches.map((m) => (
                  <button
                    key={`${m.objectionId}-${m.line}`}
                    type="button"
                    onClick={() => {
                      setTagged([...tagged, m.objectionId]);
                      setSaid('');
                    }}
                  >
                    <span>“{BY_ID.get(m.objectionId)?.line ?? m.line}”</span>
                    <span className="list-row-meta">{m.topicTitle}</span>
                  </button>
                ))}
              </div>
            )}
            {tagged.length > 0 && (
              <div className="format-toggle journal-tags" aria-label="Tagged objections">
                {tagged.map((id) => (
                  <EdChip key={id} kind="input" onRemove={() => setTagged(tagged.filter((x) => x !== id))} removeLabel="Remove">
                    {clip(BY_ID.get(id)?.line ?? id)}
                  </EdChip>
                ))}
              </div>
            )}
          </div>
          <EdTextField label="Notes" hint="How it went, and what you would say differently." multiline minRows={3} fullWidth value={notes} onChange={(e) => setNotes(e.target.value)} />
          <EdTextField label="Next step" fullWidth value={next} onChange={(e) => setNext(e.target.value)} placeholder="Something to send, ask, or pray for" />
          <div className="row end">
            {entries.length > 0 && <EdButton variant="ghost" onClick={() => setOpen(false)}>Cancel</EdButton>}
            <EdButton variant="primary" disabled={empty} onClick={save}>Save conversation</EdButton>
          </div>
        </section>
      )}

      {entries.length === 0 ? (
        <EdEmptyState compact icon={<EdIcon name="NotebookPen" size="lg" />} title="No conversations logged yet" body="Your first entry will appear here." />
      ) : (
        entries.map((c) => (
          <article key={c.id} className="card journal-entry">
            <div className="journal-head">
              <div>
                <span className="eyebrow">{new Date(`${c.date}T12:00:00`).toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}</span>
                <h3>{c.who || 'A conversation'}</h3>
              </div>
              <EdIconButton
                aria-label="Delete this entry"
                icon={<EdIcon name="Trash2" size="sm" />}
                onClick={() => confirm('Delete this entry?') && progress.removeConversation(c.id)}
              />
            </div>
            {c.objectionIds.length > 0 && (
              <>
                <span className="eyebrow">What came up</span>
                <ul>
                  {c.objectionIds.map((id) => {
                    const o = BY_ID.get(id);
                    return o ? (
                      <li key={id}>
                        <Link to={`/topic/${o.topicId}/objections`}>“{o.line}”</Link> <span className="muted">· {o.topicTitle}</span>
                      </li>
                    ) : null;
                  })}
                </ul>
              </>
            )}
            {c.notes && <p>{c.notes}</p>}
            {c.next && <p><strong>Next step:</strong> {c.next}</p>}
            {c.objectionIds.length > 0 && (
              <div className="row end">
                <EdButton asChild variant="secondary" size="sm">
                  <Link to={`/practice?ids=${c.objectionIds.join(',')}`}>Practise these <EdIcon name="ArrowRight" size="xs" /></Link>
                </EdButton>
              </div>
            )}
          </article>
        ))
      )}
    </>
  );
}
