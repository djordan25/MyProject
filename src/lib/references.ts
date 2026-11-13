import bibleCounts from '../content/data/bible-verse-counts.json';

export type RefKind = 'bible' | 'quran' | 'bukhari' | 'muslim';

export interface ParsedRef {
  kind: RefKind;
  url: string;
  /** For validation: chapter/surah and verse range, or hadith number. */
  book?: string;
  chapter?: number;
  verses?: [number, number];
  number?: number;
}

/** Display name → key in bible-verse-counts.json (KJV naming). */
const BOOK_ALIASES: Record<string, string> = {
  Psalm: 'Psalms',
  'Song of Songs': "Solomon's Song",
  'Song of Solomon': "Solomon's Song",
};

export const BIBLE_BOOKS: string[] = [
  ...Object.keys(bibleCounts as Record<string, number[]>).filter((b) => b !== "Solomon's Song"),
  ...Object.keys(BOOK_ALIASES),
];

export const canonicalBook = (book: string) => BOOK_ALIASES[book] ?? book;

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const bookPattern = [...BIBLE_BOOKS].sort((a, b) => b.length - a.length).map(escape).join('|');

/** Matches a single citation inside running text. */
export const CITATION_REGEX = new RegExp(
  `(Quran \\d{1,3}:\\d{1,3}(?:-\\d{1,3})?|Sahih al-Bukhari \\d{1,4}|Sahih Muslim \\d{1,4}|(?:${bookPattern}) \\d{1,3}:\\d{1,3}(?:-\\d{1,3})?)(?![:\\d])`,
  'g',
);

export function parseRef(ref: string): ParsedRef | null {
  let m = ref.match(/^Quran (\d+):(\d+)(?:-(\d+))?$/);
  if (m) {
    const [s, a, b] = [Number(m[1]), Number(m[2]), Number(m[3] ?? m[2])];
    return { kind: 'quran', url: `https://quran.com/${s}/${a === b ? a : `${a}-${b}`}`, chapter: s, verses: [a, b] };
  }
  m = ref.match(/^Sahih al-Bukhari (\d+)$/);
  if (m) return { kind: 'bukhari', url: `https://sunnah.com/bukhari:${m[1]}`, number: Number(m[1]) };
  m = ref.match(/^Sahih Muslim (\d+)$/);
  if (m) return { kind: 'muslim', url: `https://sunnah.com/muslim:${m[1]}`, number: Number(m[1]) };
  m = ref.match(new RegExp(`^(${bookPattern}) (\\d+):(\\d+)(?:-(\\d+))?(?:, ?\\d+(?:-\\d+)?)*$`));
  if (m) {
    return {
      kind: 'bible',
      url: `https://www.biblegateway.com/passage/?search=${encodeURIComponent(ref)}&version=ESV`,
      book: canonicalBook(m[1]),
      chapter: Number(m[2]),
      verses: [Number(m[3]), Number(m[4] ?? m[3])],
    };
  }
  return null;
}

export const KIND_LABEL: Record<RefKind, string> = {
  bible: 'Bible',
  quran: 'Quran',
  bukhari: 'Hadith',
  muslim: 'Hadith',
};

export interface Segment {
  text: string;
  /** Full citation when this segment is a reference (shorthand like "25:32" is expanded to "Quran 25:32"). */
  ref?: string;
}

const CONTINUATION = /^(\s*[;,]\s*(?:see\s+)?)(\d{1,3}:\d{1,3}(?:-\d{1,3})?|\d{1,4}(?:-\d{1,3})?)(?![\d:])/;

/**
 * Splits text into plain segments and citations, including shorthand follow-ons such as
 * "Quran 47:19; 40:55", "Sahih al-Bukhari 4986, 4988" or "Mark 8:31; 9:31" / "John 1:1, 14".
 */
export function segmentCitations(text: string): Segment[] {
  const out: Segment[] = [];
  const parts = text.split(CITATION_REGEX);
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 1) {
      out.push({ text: parts[i], ref: parts[i] });
      continue;
    }
    let rest = parts[i];
    const prev = i > 0 ? parseRef(parts[i - 1]) : null;
    const prevText = i > 0 ? parts[i - 1] : '';
    let chapter = prev?.chapter;
    let m: RegExpMatchArray | null;
    while (prev && (m = rest.match(CONTINUATION))) {
      const tok = m[2];
      let ref: string | null = null;
      if (prev.kind === 'quran' && tok.includes(':')) ref = `Quran ${tok}`;
      else if ((prev.kind === 'bukhari' || prev.kind === 'muslim') && /^\d+$/.test(tok)) ref = prevText.replace(/\d+$/, tok);
      else if (prev.kind === 'bible') {
        const book = prevText.replace(/ \d+:.*$/, '');
        ref = tok.includes(':') ? `${book} ${tok}` : `${book} ${chapter}:${tok}`;
      }
      if (!ref || !parseRef(ref)) break;
      out.push({ text: m[1] }, { text: tok, ref });
      if (tok.includes(':')) chapter = Number(tok.split(':')[0]);
      rest = rest.slice(m[0].length);
    }
    if (rest) out.push({ text: rest });
  }
  return out;
}
