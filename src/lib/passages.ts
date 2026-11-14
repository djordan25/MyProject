export interface Passage {
  /** Source label, e.g. "Quran · Sahih International". */
  src: string;
  /** Verses as [chapter:verse, text] pairs (Bible and Quran). */
  v?: [string, string][];
  /** Full text (hadith). */
  t?: string;
}

let cache: Promise<Record<string, Passage>> | null = null;

/** Lazily loads the bundled passage texts (a separate chunk, precached by the service worker). */
export function loadPassages(): Promise<Record<string, Passage>> {
  cache ??= import('../content/data/passages.json').then((m) => m.default as unknown as Record<string, Passage>);
  return cache;
}
