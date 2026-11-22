import { flattenFollowUps, topics } from '../content';

/** Something a person might say, with the answer the lessons give to it. */
export interface SaidLine {
  line: string;
  answer: string;
  kind: 'objection' | 'reply';
  keyPoints?: string[];
  references?: string[];
  topicId: string;
  topicTitle: string;
  /** The objection itself, or the objection a follow-up reply belongs to. */
  objectionId: string;
}

const STOP = new Set(
  ('the a an and or but is are was were be been to of in it its that this these those you your i we they he she for on with as at by ' +
    'not no do does did just so if have has had what how why can could would should there their from about all any my me our us than ' +
    'then them his her him who which will one only like dont isnt arent doesnt didnt cant im youre thats its really very').split(' '),
);

/** Everyday words people use for the words the lessons use. Applied to both sides before matching. */
const SAME: Record<string, string> = {
  made: 'cause', make: 'cause', makes: 'cause', created: 'cause', create: 'cause', creates: 'cause', creator: 'cause',
  koran: 'quran', changed: 'corrupted', altered: 'corrupted', tampered: 'corrupted', edited: 'corrupted',
  pain: 'suffering', suffer: 'suffering', myth: 'legend', myths: 'legend', fairytale: 'legend',
};

/** Lower-cased content words, cut to five letters so "hallucinated" and "hallucination" meet. */
export function terms(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[’']/g, '')
    .split(/[^\p{L}\p{N}]+/u)
    .filter((w) => w.length > 1 && !STOP.has(w))
    .map((w) => SAME[w] ?? w)
    .map((w) => (w.length > 5 ? w.slice(0, 5) : w));
}

interface Indexed extends SaidLine {
  inLine: Set<string>;
  inAnswer: Set<string>;
  inTitle: Set<string>;
}

let index: { lines: Indexed[]; idf: Map<string, number> } | null = null;

function build() {
  const lines: Indexed[] = topics.flatMap((t) => {
    const inTitle = new Set(terms(t.title));
    return t.objections.flatMap((o) => [
      {
        line: o.objection, answer: o.response, kind: 'objection' as const, keyPoints: o.keyPoints, references: o.references, objectionId: o.id,
        topicId: t.id, topicTitle: t.title, inLine: new Set(terms(o.objection)), inAnswer: new Set(terms(`${o.response} ${o.keyPoints.join(' ')}`)), inTitle,
      },
      ...flattenFollowUps(o.followUps).map((f) => ({
        line: f.reply, answer: f.answer, kind: 'reply' as const, objectionId: o.id,
        topicId: t.id, topicTitle: t.title, inLine: new Set(terms(f.reply)), inAnswer: new Set(terms(f.answer)), inTitle,
      })),
    ]);
  });
  const df = new Map<string, number>();
  for (const l of lines) for (const w of l.inLine) df.set(w, (df.get(w) ?? 0) + 1);
  const idf = new Map([...df].map(([w, n]) => [w, Math.log(1 + lines.length / n)]));
  return { lines, idf };
}

/**
 * The lines closest to what someone said, best first. A word found in the line itself counts three times
 * a word found only in its answer, and a word in the topic title one and a half times; rarer words count more.
 * Opening objections are preferred a little over follow-up replies.
 */
export function quickAnswers(said: string, limit = 5): SaidLine[] {
  index ??= build();
  const { lines, idf } = index;
  const q = [...new Set(terms(said))];
  if (!q.length) return [];
  const rare = Math.log(1 + lines.length);
  return lines
    .map((l) => {
      let score = 0;
      let inLine = 0;
      for (const w of q) {
        if (l.inLine.has(w)) {
          score += 3 * (idf.get(w) ?? rare);
          inLine++;
        } else if (l.inTitle.has(w)) score += 1.5 * (idf.get(w) ?? rare * 0.5);
        else if (l.inAnswer.has(w)) score += idf.get(w) ?? rare * 0.5;
      }
      // Prefer lines that are mostly covered by what was said, not long lines that happen to share a word.
      const cover = inLine / Math.max(l.inLine.size, 1);
      return { l, inLine, score: score * (0.6 + 0.4 * cover) * (l.kind === 'objection' ? 1 : 0.85) };
    })
    .filter((r) => r.inLine > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ l }) => ({ line: l.line, answer: l.answer, kind: l.kind, keyPoints: l.keyPoints, references: l.references, topicId: l.topicId, topicTitle: l.topicTitle, objectionId: l.objectionId }));
}

/** Example lines for the empty state. A test checks each finds an answer. */
export const SAID_EXAMPLES = [
  'The disciples hallucinated',
  'That’s true for you, not for me',
  'The Bible has been corrupted',
  'Why does God allow suffering?',
  'Jesus never claimed to be God',
];
