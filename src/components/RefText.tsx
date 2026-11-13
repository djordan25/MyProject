import { parseRef, segmentCitations } from '../lib/references';
import { useOpenPassage } from './PassagePopup';

/** Renders text with Bible, Quran and hadith citations as buttons that open the passage popup. */
export default function RefText({ text }: { text: string }) {
  const open = useOpenPassage();
  return (
    <>
      {segmentCitations(text).map((seg, i) =>
        seg.ref ? (
          <button
            key={i}
            type="button"
            className={`cite ${parseRef(seg.ref)?.kind ?? ''}`}
            title={seg.ref}
            onClick={(e) => open(seg.ref!, e.currentTarget)}
          >
            {seg.text}
          </button>
        ) : (
          <span key={i}>{seg.text}</span>
        ),
      )}
    </>
  );
}
