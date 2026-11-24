import { EdButton, EdChip, EdIcon } from 'editorial-ui';
import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { topics, tracks, topicsInTrack } from '../content';
import Quiz from '../components/Quiz';
import { progress, useProgress, XP } from '../lib/progress';
import { lockedTopicIds } from '../lib/path';

const LENGTHS = [10, 25, 50];

/** Random questions drawn from every topic in a track or sub-track (or from everything). */
export default function MixedQuiz() {
  const [params] = useSearchParams();
  const track = tracks.find((t) => t.id === params.get('track'));
  const parent = track?.parent ? tracks.find((t) => t.id === track.parent) : undefined;
  const [round, setRound] = useState(0);
  const [length, setLength] = useState(LENGTHS[0]);
  const p = useProgress();
  const lockedKey = [...lockedTopicIds(p)].join(',');
  // Questions come only from topics that are open on the path.
  const bank = useMemo(() => {
    const locked = new Set(lockedKey.split(','));
    return (track ? topicsInTrack(track) : topics).filter((t) => !locked.has(t.id)).flatMap((t) => t.quiz);
  }, [track, lockedKey]);

  return (
    <>
      <Link to={track ? `/track/${track.id}` : '/'} className="back">← {track ? track.title : 'Home'}</Link>
      <h1>Mixed quiz</h1>
      <p className="muted">
        Random questions from the topics you have opened in {track ? `${parent ? `${parent.title}: ` : ''}${track.title}` : 'all tracks'}, drawn from a bank of {bank.length}.
      </p>
      <div className="row">
        <span className="muted">Questions:</span>
        {LENGTHS.filter((n, i) => i === 0 || n <= bank.length).map((n) => (
          <EdChip
            key={n}
            kind="radio"
            selected={n === length}
            onSelectedChange={() => {
              setLength(n);
              setRound((r) => r + 1);
            }}
          >
            {n}
          </EdChip>
        ))}
      </div>
      <Quiz key={`${round}-${length}`} questions={bank} limit={length} onFinish={(_, correct) => progress.award(correct * XP.quizCorrect)} />
      <div className="row">
        <EdButton variant="secondary" leadingIcon={<EdIcon name="Shuffle" size="sm" />} onClick={() => setRound((r) => r + 1)}>New set of questions</EdButton>
      </div>
    </>
  );
}
