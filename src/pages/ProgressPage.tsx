import { topics, topLevelTracks, subtracksOf, ownTopics } from '../content';
import { Link } from 'react-router-dom';
import { EdButton, EdIcon, EdStat, EdStatGrid } from 'editorial-ui';
import { daysPractised, objectionScore, progress, topicSealed, useProgress } from '../lib/progress';
import TopicIcon from '../components/TopicIcon';
import TopicRow from '../components/TopicRow';
import { trackCompletion } from '../lib/trackProgress';
import ProgressBar from '../components/ProgressBar';

export default function ProgressPage() {
  const p = useProgress();
  const totalObjections = topics.reduce((n, t) => n + t.objections.length, 0);
  const mastered = topics.flatMap((t) => t.objections).filter((o) => objectionScore(p, o.id) === 1).length;
  const sealed = topics.filter((t) => topicSealed(p, t.id, t.objections.map((o) => o.id))).length;
  const lessons = topics.filter((t) => p.lessonsRead[t.id]).length;

  return (
    <>
      <div className="page-head">
        <h1>Your progress</h1>
        <EdButton asChild variant="secondary">
          <Link to="/journal"><EdIcon name="NotebookPen" size="sm" /> Conversations{p.conversations.length ? ` · ${p.conversations.length}` : ''}</Link>
        </EdButton>
      </div>
      <div className="stats">
        <EdStatGrid columns={4}>
          <EdStat label="Lessons read" value={`${lessons}/${topics.length}`} />
          <EdStat label="Objections solid" value={`${mastered}/${totalObjections}`} tone={mastered ? 'success' : 'neutral'} />
          <EdStat label="Topics sealed" value={`${sealed}/${topics.length}`} />
          <EdStat label="Days this week" value={`${daysPractised(p)}/7`} />
        </EdStatGrid>
      </div>
      {topLevelTracks.flatMap((t) => [t, ...subtracksOf(t)]).map((track) => {
        const pct = Math.round(trackCompletion(p, track) * 100);
        return (
          <section key={track.id}>
            <div className="progress-head">
              <h2><TopicIcon glyph={track.icon} size="sm" />{track.title}</h2>
              <span className="mono muted">{pct}% ready</span>
            </div>
            <ProgressBar value={pct / 100} label={`${track.title} readiness`} />
            <div className="spacer" />
            <div className="list">
              {ownTopics(track).map((t) => <TopicRow key={t.id} topic={t} summary={false} />)}
            </div>
          </section>
        );
      })}
      <p className="muted">Progress is saved on this device only. Download a backup to keep it safe or move it to another device.</p>
      <div className="row">
        <EdButton
          variant="secondary"
          leadingIcon={<EdIcon name="Download" size="sm" />}
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
        </EdButton>
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
        <EdButton variant="ghost" onClick={() => confirm('Reset all progress?') && progress.reset()}>Reset progress</EdButton>
      </div>
    </>
  );
}
