import type { Passage } from './passages';
import type { Confidence } from './progress';

export type RecallMode = 'read' | 'letters' | 'recall';

/** Memory verses share the objections' rating and review maps, under this id. */
export const verseId = (ref: string) => `verse:${ref}`;

export const verseText = (p: Passage): string => (p.v ? p.v.map(([, t]) => t).join(' ') : (p.t ?? ''));

/** Well-known verses for giving an answer, grouped by theme. Every one is bundled in passages.json (checked by a test). */
export const STARTER_SETS: { title: string; refs: string[] }[] = [
  { title: 'Why we give answers', refs: ['1 Peter 3:15', 'Colossians 4:6', 'Jude 1:3', 'Acts 17:11'] },
  { title: 'God and creation', refs: ['Genesis 1:1', 'Psalm 19:1', 'Romans 1:20', 'Colossians 1:16-17'] },
  { title: 'Who Jesus is', refs: ['John 1:1', 'John 1:14', 'John 8:58', 'John 10:30', 'John 14:9', 'John 20:28', 'Colossians 2:9', 'Hebrews 1:3', 'Titus 2:13'] },
  { title: 'The cross and the resurrection', refs: ['Isaiah 53:5', '1 Corinthians 15:3-4', '1 Corinthians 15:14', 'Romans 4:25', 'Luke 24:39', 'John 11:25', 'Acts 2:32'] },
  { title: 'The gospel', refs: ['John 3:16', 'Romans 3:23', 'Romans 5:8', 'Romans 6:23', 'Ephesians 2:8-9', 'Romans 10:9'] },
  { title: 'The only way', refs: ['John 14:6', 'Acts 4:12', '1 Timothy 2:5'] },
  { title: 'Scripture', refs: ['2 Timothy 3:16', 'Luke 24:27', '2 Peter 1:16'] },
];

/** Keeps each word's first letter and all punctuation; the rest of the word becomes underscores. */
export function firstLetters(text: string): string {
  return text.replace(/[\p{L}\p{N}][\p{L}\p{N}'’]*/gu, (w) => w[0] + '_'.repeat(w.length - 1));
}

const norm = (w: string) => w.toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');

export interface Recall {
  /** The verse's words in order; `hit` is false for words the learner missed. */
  words: { text: string; hit: boolean }[];
  correct: number;
  total: number;
}

/** Compares a typed attempt with the verse word by word (longest common subsequence), ignoring case and punctuation. */
export function compareRecall(typed: string, actual: string): Recall {
  const words = actual.split(/\s+/).filter(Boolean);
  const a = words.map(norm);
  const t = typed.split(/\s+/).map(norm).filter(Boolean);
  const n = a.length;
  const m = t.length;
  const dp = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = a[i] && a[i] === t[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  const hit: boolean[] = new Array(n).fill(false);
  for (let i = 0, j = 0; i < n && j < m; ) {
    if (a[i] && a[i] === t[j]) {
      hit[i] = true;
      i++;
      j++;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) i++;
    else j++;
  }
  return {
    // A token that is only punctuation (a dash) is never counted as missed.
    words: words.map((text, k) => ({ text, hit: hit[k] || !a[k] })),
    correct: hit.filter(Boolean).length,
    total: a.filter(Boolean).length,
  };
}

/** A confidence level to suggest from a typed attempt. */
export function suggestFromRecall(correct: number, total: number): Confidence {
  const share = total ? correct / total : 0;
  return share >= 0.95 ? 'solid' : share >= 0.7 ? 'shaky' : 'again';
}
