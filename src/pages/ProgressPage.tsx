import { Link } from 'react-router-dom';
import { topics, topLevelTracks, subtracksOf, ownTopics } from '../content';
import { daysPractised, objectionScore, progress, topicCompletion, topicSealed, useProgress } from '../lib/progress';
import ReadinessRing from '../components/ReadinessRing';
import Seal from '../components/Seal';
import { trackCompletion } from '../lib/trackProgress';
import ProgressBar from '../components/ProgressBar';

export default function ProgressPage() {
  const p = useProgress();
  const totalObjections = topics.reduce((n, t) => n + t.objections.length, 0);
  const mastered = topics.flatMap((t) => t.objections).filter((o) => p.drills[o.id] === 'got').length;
  const sealed = topics.filter((t) => topicSealed(p, t.id, t.objections.map((o) => o.id))).length;
  const lessons = topics.filter((t) => p.lessonsRead[t.id]).length;
  const quizzes = topics.filter((t) => p.quizBest[t.id] !== undefined).length;

  return (
    <>
      <h1>Your progress</h1>
      <div className="stats">
        <div className="card stat"><span className="big">{lessons}/{topics.length}</span>lessons read</div>
        <div className="card stat"><span className="big">{mastered}/{totalObjections}</span>objections solid</div>
        <div className="card stat"><span className="big">{quizzes}/{topics.length}</span>quizzes taken</div>
        <div className="card stat"><span className="big">{sealed}/{topics.length}</span>topics sealed</div>
        <div className="card stat"><span className="big">{daysPractised(p)}/7</span>days practised this week</div>
      </div>
      {topLevelTracks.flatMap((t) => [t, ...subtracksOf(t)]).map((track) => (
        <section key={track.id} className="track-section">
          <h2 className="section-title">{track.icon} {track.title}{subtracksOf(track).length ? ' (with sub-tracks)' : ''}</h2>
          <ProgressBar value={trackCompletion(p, track)} label={`${track.title} progress`} />
          <div className="spacer" />
          {ownTopics(track).map((t) => {
            const done = topicCompletion(p, t.id, t.objections.map((o) => o.id));
            const best = p.quizBest[t.id];
            return (
              <Link to={`/topic/${t.id}`} key={t.id} className="card progress-row">
                {topicSealed(p, t.id, t.objections.map((o) => o.id))
                  ? <Seal size={44} label={`${t.title}: complete`} />
                  : <ReadinessRing value={done} label={t.title} size={48} />}
                <span className="progress-row-body">
                  <strong>{t.icon} {t.title}</strong>
                  <small className="muted">
                    Lesson {p.lessonsRead[t.id] ? '✓' : '—'} · Quiz best {best === undefined ? '—' : `${Math.round(best * 100)}%`} ·{' '}
                    {t.objections.filter((o) => objectionScore(p, o.id) === 1).length}/{t.objections.length} solid
                  </small>
                </span>
              </Link>
            );
          })}
        </section>
      ))}
      <p className="muted">Progress is saved on this device only. Download a backup to keep it safe or move it to another device.</p>
      <div className="row">
        <button
          className="btn"
          onClick={() => {
            const url = URL.createObjectURL(new Blob([progress.exportJson()], { type: 'application/json' }));
            const a = document.createElement('a');
            a.href = url;
            a.download = 'apologetics-progress.json';
            a.click();
            URL.revokeObjectURL(url);
          }}
        >
          Download backup
        </button>
        <label className="btn">
          Restore from backup
          <input
            type="file"
            accept="application/json,.json"
            hidden
            onChange={async (e) => {
              const file = e.target.files?.[0];
              e.target.value = '';
              if (!file) return;
              if (!confirm('Replace the progress on this device with the backup?')) return;
              if (!progress.importJson(await file.text())) alert('That file is not a valid progress backup.');
            }}
          />
        </label>
        <button className="btn" onClick={() => confirm('Reset all progress?') && progress.reset()}>Reset progress</button>
      </div>
    </>
  );
}
