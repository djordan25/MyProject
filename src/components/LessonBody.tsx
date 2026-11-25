import { Link } from 'react-router-dom';
import type { LessonSection, Topic } from '../content';
import { pieces, type Visuals } from '../lib/lessonSteps';
import ArgumentDiagram from './ArgumentDiagram';
import LessonChart from './LessonChart';
import LessonMap from './LessonMap';
import RefList from './RefList';
import RefText from './RefText';
import TimeAxis from './TimeAxis';

/**
 * One section of a lesson: its key line first, then the detail, with scripture set apart as quotation cards
 * and the lesson's pictures placed with the section that discusses them.
 */
export default function LessonBody({ topic, section, index, visuals }: { topic: Topic; section: LessonSection; index: number; visuals: Visuals }) {
  // Where the key line opens a paragraph it is shown once, as the key line, and the paragraph carries on after it.
  const key = section.keyLine;
  const body = section.body.map((para) => (key && para.startsWith(key) ? para.slice(key.length).replace(/^[\s.,;:—-]+/, '') : para)).filter(Boolean);
  return (
    <>
      {section.keyLine && <p className="key-line"><RefText text={section.keyLine} /></p>}
      {body.map((para, i) =>
        pieces(para).map((piece, j) =>
          piece.kind === 'quote' ? (
            <blockquote key={`${i}-${j}`} className="scripture">
              <p>“{piece.quote}”</p>
              <footer><RefText text={piece.cite} /></footer>
            </blockquote>
          ) : (
            <p key={`${i}-${j}`}>{piece.lead && <strong className="lead-in">{piece.lead}</strong>}<RefText text={piece.text} /></p>
          ),
        ),
      )}
      {section.argument && <ArgumentDiagram steps={section.argument} />}
      {visuals.charts.filter((c) => c.at === index).map(({ chart }) => (
        <div key={chart.id} className="lesson-visual">
          <h3>{chart.title}</h3>
          <LessonChart chart={chart} topicId={topic.id} />
        </div>
      ))}
      {visuals.map === index && (
        <div className="lesson-visual">
          <h3>Places in this lesson</h3>
          <LessonMap topic={topic} />
        </div>
      )}
      {visuals.timeline === index && (
        <div className="lesson-visual">
          <h3>Dates in this lesson</h3>
          <TimeAxis events={visuals.events} />
          <p className="muted"><Link to="/timeline">See them on the whole timeline →</Link></p>
        </div>
      )}
      <RefList refs={section.references} />
    </>
  );
}
