import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { EdButton, EdChip, EdDisclosure, EdEmptyState, EdIcon } from 'editorial-ui';
import { quickAnswers, SAID_EXAMPLES, type SaidLine } from '../lib/quickAnswer';
import RefList from './RefList';
import RefText from './RefText';

function AnswerBody({ r }: { r: SaidLine }) {
  return (
    <>
      <span className="eyebrow">A strong answer</span>
      <p className="reading"><RefText text={r.answer} /></p>
      {r.keyPoints && (
        <>
          <span className="eyebrow">Key points</span>
          <ul className="quick-points">
            {r.keyPoints.map((k) => <li key={k}><RefText text={k} /></li>)}
          </ul>
        </>
      )}
      <RefList refs={r.references} />
      <div className="row end">
        <EdButton asChild variant="secondary" size="sm">
          <Link to={`/topic/${r.topicId}/objections`}>Practise this topic <EdIcon name="ArrowRight" size="xs" /></Link>
        </EdButton>
      </div>
    </>
  );
}

/** In-the-moment help: type roughly what someone said and read the closest answer straight away. */
export default function QuickAnswers({ q, onPick }: { q: string; onPick: (text: string) => void }) {
  const results = useMemo(() => quickAnswers(q), [q]);

  if (!q.trim()) {
    return (
      <div className="filters" aria-label="Examples">
        <span className="muted">Try</span>
        {SAID_EXAMPLES.map((t) => <EdChip key={t} kind="toggle" onClick={() => onPick(t)}>{t}</EdChip>)}
      </div>
    );
  }
  if (!results.length) {
    return (
      <section className="card">
        <EdEmptyState icon={<EdIcon name="SearchX" size="xl" />} title="Nothing close to that" body="Try their main point in a few plain words." />
      </section>
    );
  }
  const [best, ...rest] = results;
  return (
    <>
      <article className="card" aria-live="polite">
        <div className="eyebrow">{best.topicTitle} · {best.kind === 'objection' ? 'Objection' : 'Follow-up reply'}</div>
        <blockquote className="objection">“{best.line}”</blockquote>
        <AnswerBody r={best} />
      </article>
      {rest.length > 0 && (
        <>
          <span className="eyebrow">Or did they mean</span>
          <div className="card rounds quick-more">
            {rest.map((r) => (
              <EdDisclosure
                key={`${r.topicId}-${r.line}`}
                label={<span className="round-label"><span className="round-num">{r.topicTitle}</span><span>“{r.line}”</span></span>}
              >
                <AnswerBody r={r} />
              </EdDisclosure>
            ))}
          </div>
        </>
      )}
    </>
  );
}
