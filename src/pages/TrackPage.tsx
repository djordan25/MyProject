import { Link, useParams } from 'react-router-dom';
import { getTopic, getTrack } from '../content';
import TopicCard from '../components/TopicCard';
import RefText from '../components/RefText';
import NotFound from './NotFound';

export default function TrackPage() {
  const track = getTrack(useParams().trackId);
  if (!track) return <NotFound />;
  return (
    <>
      <Link to="/" className="back">← All tracks</Link>
      <h1><span aria-hidden>{track.icon}</span> {track.title}</h1>
      {track.intro && (
        <section className="card intro">
          {track.intro.map((para, i) => <p key={i}><RefText text={para} /></p>)}
        </section>
      )}
      <div className="row">
        <Link className="btn" to={`/practice?track=${track.id}`}>Practise objections from this track →</Link>
      </div>
      {track.sections.map((s, i) => (
        <section key={s.title} className="track-section">
          <h2 className="section-title">
            {track.sections.length > 1 && <span className="section-num">{i + 1}</span>}
            {s.title}
          </h2>
          <p className="muted">{s.description}</p>
          <div className="grid">
            {s.topicIds.map((id) => {
              const t = getTopic(id);
              return t ? <TopicCard key={id} topic={t} /> : null;
            })}
          </div>
        </section>
      ))}
    </>
  );
}
