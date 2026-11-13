import { Fragment } from 'react';
import { CITATION_REGEX, parseRef } from '../lib/references';

/** Renders text with Bible, Quran and hadith citations turned into links to the source. */
export default function RefText({ text }: { text: string }) {
  const parts = text.split(CITATION_REGEX);
  return (
    <>
      {parts.map((part, i) => {
        const ref = i % 2 === 1 ? parseRef(part) : null;
        return ref ? (
          <a key={i} href={ref.url} target="_blank" rel="noopener noreferrer" className={`cite ${ref.kind}`}>
            {part}
          </a>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        );
      })}
    </>
  );
}
