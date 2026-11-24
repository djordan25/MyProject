import { useEffect, useState } from 'react';
import { useGainEvent } from '../lib/progress';

/** A brief "+5 points" notice whenever points are earned, and the new level's name when one is reached. */
export default function XpToast() {
  const event = useGainEvent();
  const [shown, setShown] = useState<typeof event>(null);
  useEffect(() => {
    if (!event) return;
    setShown(event);
    const t = setTimeout(() => setShown(null), event.levelUp ? 3200 : 1600);
    return () => clearTimeout(t);
  }, [event]);
  return (
    <div className="xp-toast-wrap" role="status" aria-live="polite">
      {shown && (
        <div key={shown.at} className={`xp-toast${shown.levelUp ? ' level' : ''}`}>
          +{shown.xp} points{shown.levelUp ? ` · Level up: ${shown.levelUp}` : ''}
        </div>
      )}
    </div>
  );
}
