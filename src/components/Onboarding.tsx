import { EdIcon, type EdIconName } from 'editorial-ui';
import { AUDIENCES, setAudience, type Audience } from '../lib/profile';

const ICON: Record<Audience, EdIconName> = { skeptic: 'MessageCircleQuestion', muslim: 'Moon', doubts: 'CloudRain', all: 'Library' };

/** First-run question: who is the learner preparing to talk with? */
export default function Onboarding({ current, onDone }: { current: Audience | null; onDone?: () => void }) {
  return (
    <section className="card onboarding" aria-labelledby="onboarding-title">
      <div className="eyebrow">{current ? 'Change your focus' : 'Welcome'}</div>
      <h2 id="onboarding-title">Who are you preparing to talk with?</h2>
      <p className="muted">We’ll put the right track first and shape your daily practice around it. You can change this any time.</p>
      <div className="audiences">
        {AUDIENCES.map((a) => (
          <button
            key={a.id}
            type="button"
            className="audience"
            aria-pressed={current === a.id}
            onClick={() => {
              setAudience(a.id);
              onDone?.();
            }}
          >
            <EdIcon name={ICON[a.id]} size="lg" color="brand" aria-hidden />
            <strong>{a.label}</strong>
            <small>{a.detail}</small>
          </button>
        ))}
      </div>
    </section>
  );
}
