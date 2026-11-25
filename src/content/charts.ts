/**
 * Comparison charts for the lessons. Every row carries the lesson sentence it rests on, and a test checks that the
 * sentence is in that lesson word for word: a chart never says more than the lessons do.
 */
export interface GapRow {
  label: string;
  /** Years between the events and the writing: the range the lesson gives. */
  from: number;
  to: number;
  /** The figure as the lesson words it. */
  says: string;
  topicId: string;
  /** Words copied from that lesson. */
  quote: string;
  tone: 'bible' | 'quran' | 'other';
}

export interface GapChart {
  kind: 'gap';
  id: string;
  title: string;
  note: string;
  /** Lessons that show this chart. */
  topics: string[];
  max: number;
  rows: GapRow[];
}

export interface ContrastChart {
  kind: 'contrast';
  id: string;
  title: string;
  note: string;
  topics: string[];
  yes: string;
  no: string;
  rows: { label: string; verdict: 'yes' | 'no'; topicId: string; quote: string }[];
}

export interface CountChart {
  kind: 'count';
  id: string;
  title: string;
  note: string;
  topics: string[];
  max: number;
  rows: {
    label: string;
    /** Parts of the bar, in books. `width` draws a part longer than its count where the lesson says the content is the same. */
    parts: { n: number; tone: 'ot' | 'nt' | 'all'; width?: number }[];
    says: string;
    topicId: string;
    /** Words copied from that lesson, for every figure in the row. */
    quote: string;
    also?: string;
  }[];
}

export type Chart = GapChart | ContrastChart | CountChart;

export const CHARTS: Chart[] = [
  {
    kind: 'count',
    id: 'books-by-tradition',
    title: 'How many books?',
    note: 'Each tradition by its own count. The Jewish bar is drawn as long as the Protestant Old Testament because the lesson says the content is the same and only the counting differs.',
    topics: ['canons-compared'],
    max: 81,
    rows: [
      { label: 'Jewish Bible (Tanakh)', parts: [{ n: 24, tone: 'ot', width: 39 }], says: '24 books, the same content as the Protestant 39', topicId: 'canons-compared', quote: 'The Jewish Bible has 24 books.', also: 'Its content is the same as the Protestant Old Testament.' },
      { label: 'Protestant', parts: [{ n: 39, tone: 'ot' }, { n: 27, tone: 'nt' }], says: '66 books', topicId: 'canons-compared', quote: 'Protestant Bibles have 66 books: 39 in the Old Testament and 27 in the New.' },
      { label: 'Catholic', parts: [{ n: 46, tone: 'ot' }, { n: 27, tone: 'nt' }], says: '73 books', topicId: 'canons-compared', quote: 'Catholic Bibles have 73 books: 46 in the Old Testament and 27 in the New.' },
      { label: 'Eastern Orthodox', parts: [{ n: 49, tone: 'ot' }, { n: 27, tone: 'nt' }], says: 'about 76 books', topicId: 'canons-compared', quote: 'Eastern Orthodox Bibles have about 76 books: the Orthodox Study Bible counts 49 in the Old Testament and 27 in the New.' },
      { label: 'Ethiopian Orthodox', parts: [{ n: 81, tone: 'all' }], says: '81 books by its own count', topicId: 'canons-compared', quote: 'The Ethiopian Orthodox Church counts 81 books.' },
      { label: 'Syriac Peshitta, New Testament only, as first made', parts: [{ n: 22, tone: 'nt' }], says: '22 books', topicId: 'canons-compared', quote: 'The Syriac Peshitta New Testament originally had 22 books.' },
    ],
  },
  {
    kind: 'gap',
    id: 'how-long-after',
    title: 'How long after the events?',
    note: 'The time between a life and the writings about it, as these lessons give it: the solid bar is the shortest gap, the pale bar the longest. A short gap does not prove a source true and a long one does not prove it false; it shows how much room there was for memory to fade.',
    topics: ['reliability-of-scripture', 'resurrection', 'islam-hadith-reliability', 'islam-outside-writers'],
    max: 400,
    rows: [
      { label: 'The creed Paul quotes (1 Corinthians 15)', from: 0, to: 5, says: 'within a few years', topicId: 'reliability-of-scripture', quote: '1 Corinthians 15:3-7 is widely dated to within a few years of the crucifixion', tone: 'bible' },
      { label: 'Paul’s letters', from: 20, to: 30, says: '20 to 30 years', topicId: 'reliability-of-scripture', quote: 'Paul’s letters, written within twenty to thirty years of the crucifixion', tone: 'bible' },
      { label: 'The four Gospels', from: 35, to: 65, says: 'about 35 to 65 years', topicId: 'reliability-of-scripture', quote: 'the Gospels were written within about 35-65 years', tone: 'bible' },
      { label: 'Earliest surviving biography of Muhammad (Ibn Ishaq)', from: 100, to: 135, says: 'more than a century', topicId: 'islam-outside-writers', quote: 'The earliest biography that survives was written by Ibn Ishaq more than a century after Muhammad died', tone: 'quran' },
      { label: 'Sahih al-Bukhari and Sahih Muslim', from: 200, to: 240, says: 'roughly 200 to 240 years', topicId: 'islam-hadith-reliability', quote: 'Their collections were compiled roughly 200 to 240 years after Muhammad’s death', tone: 'quran' },
      { label: 'Main surviving biographies of Alexander the Great', from: 390, to: 400, says: 'about 400 years', topicId: 'reliability-of-scripture', quote: 'our main surviving biographies of Alexander the Great, written about 400 years after his death, though from earlier accounts now lost', tone: 'other' },
    ],
  },
  {
    kind: 'contrast',
    id: 'quran-on-jesus',
    title: 'What the Quran says about Jesus',
    note: 'Common ground first: begin a conversation with what the Quran affirms.',
    topics: ['islam-understanding', 'islam-jesus-more-than-prophet'],
    yes: 'Affirms',
    no: 'Denies',
    rows: [
      { label: 'Born of a virgin', verdict: 'yes', topicId: 'islam-understanding', quote: 'The Quran affirms his virgin birth (Quran 3:47)' },
      { label: 'The Messiah, and “a word from Him”', verdict: 'yes', topicId: 'islam-understanding', quote: 'calls him the Messiah and “a word from Him” (Quran 3:45)' },
      { label: 'Worked miracles, healing and raising the dead', verdict: 'yes', topicId: 'islam-understanding', quote: 'credits him with miracles including healing and raising the dead (Quran 3:49)' },
      { label: 'The Son of God', verdict: 'no', topicId: 'islam-understanding', quote: 'the Quran denies that Jesus is the Son of God (Quran 19:88-92)' },
      { label: 'Crucified', verdict: 'no', topicId: 'islam-understanding', quote: 'denies that he was crucified (Quran 4:157)' },
      { label: 'More than a messenger', verdict: 'no', topicId: 'islam-understanding', quote: 'insists he was “but a messenger” (Quran 5:75)' },
    ],
  },
];

export const chartsFor = (topicId: string): Chart[] => CHARTS.filter((c) => c.topics.includes(topicId));
