import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { topics, tracks, topicsInTrack } from '../content';
import { shuffle } from '../lib/shuffle';
import Quiz from '../components/Quiz';

const LENGTH = 10;

/** Ten random questions drawn from every topic in a track (or from all tracks). */
export default function MixedQuiz() {
  const [params] = useSearchParams();
  const track = tracks.find((t) => t.id === params.get('track'));
  const [round, setRound] = useState(0);
  const questions = useMemo(
    () => shuffle((track ? topicsInTrack(track) : topics).flatMap((t) => t.quiz)).slice(0, LENGTH),
    [track, round],
  );

  return (
    <>
      <Link to={track ? `/track/${track.id}` : '/'} className="back">← {track ? track.title : 'Home'}</Link>
      <h1>Mixed quiz</h1>
      <p className="muted">
        {LENGTH} random questions from {track ? track.title : 'all tracks'}.
      </p>
      <Quiz key={round} questions={questions} onFinish={() => {}} />
      <div className="row">
        <button className="btn" onClick={() => setRound((r) => r + 1)}>New set of questions</button>
      </div>
    </>
  );
}
