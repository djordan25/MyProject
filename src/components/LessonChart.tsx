import { Link } from 'react-router-dom';
import { EdIcon } from 'editorial-ui';
import { getTopic } from '../content';
import type { Chart } from '../content/charts';

/** A comparison drawn from the lessons: either gaps in years as bars on one scale, or a list of what is affirmed and denied. */
export default function LessonChart({ chart, topicId }: { chart: Chart; topicId: string }) {
  return (
    <figure className="chart">
      {chart.kind === 'gap' ? (
        <>
          <ul className="gap-chart">
            {chart.rows.map((r) => {
              const from = getTopic(r.topicId);
              return (
                <li key={r.label} className={`tone-${r.tone}`}>
                  <span className="gap-label">{r.label}</span>
                  <span className="gap-track" aria-hidden>
                    <i className="range" style={{ width: `${(r.to / chart.max) * 100}%` }} />
                    <i style={{ width: `${(r.from / chart.max) * 100}%`, minWidth: r.from ? undefined : 0 }} />
                  </span>
                  <span className="gap-says mono">
                    {r.says}
                    {from && r.topicId !== topicId && <> · <Link to={`/topic/${from.id}`}>{from.title}</Link></>}
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="gap-scale mono" aria-hidden>
            {[0, 0.25, 0.5, 0.75, 1].map((f) => <span key={f}>{Math.round(chart.max * f)}</span>)}
          </div>
          <div className="gap-unit mono" aria-hidden>years after</div>
        </>
      ) : chart.kind === 'count' ? (
        <>
          <ul className="gap-chart count-chart">
            {chart.rows.map((r) => (
              <li key={r.label}>
                <span className="gap-label">{r.label}</span>
                <span className="count-track" aria-hidden>
                  {r.parts.map((part, i) => (
                    <i key={i} className={`part-${part.tone}${part.width ? ' same' : ''}`} style={{ width: `${((part.width ?? part.n) / chart.max) * 100}%` }}>{part.n}</i>
                  ))}
                </span>
                <span className="gap-says mono">{r.says}</span>
              </li>
            ))}
          </ul>
          <p className="count-key mono" aria-hidden><span className="part-ot" /> Old Testament <span className="part-nt" /> New Testament <span className="part-all" /> whole Bible</p>
        </>
      ) : (
        <div className="contrast-chart">
          {(['yes', 'no'] as const).map((v) => (
            <div key={v} className={`contrast-col ${v}`}>
              <h3><EdIcon name={v === 'yes' ? 'Check' : 'X'} size="sm" aria-hidden /> {chart[v]}</h3>
              <ul>
                {chart.rows.filter((r) => r.verdict === v).map((r) => <li key={r.label}>{r.label}</li>)}
              </ul>
            </div>
          ))}
        </div>
      )}
      <figcaption className="muted">{chart.note}</figcaption>
    </figure>
  );
}
