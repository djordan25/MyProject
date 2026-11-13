import type { Topic } from '../types';

export const reliabilityOfScripture: Topic = {
  id: 'reliability-of-scripture',
  title: 'Reliability of the New Testament',
  icon: '📜',
  summary: 'Manuscript evidence, early dating, eyewitness testimony, and archaeological confirmation.',
  lesson: [
    {
      heading: 'Two questions',
      body: [
        'Do we have what was originally written? (Transmission.) And is what was written true? (Historical reliability.) Keep the two separate in conversation.',
      ],
    },
    {
      heading: 'Manuscript evidence',
      body: [
        'There are over 5,800 Greek manuscripts of the New Testament, plus thousands in Latin and other languages. Most ancient works survive in a handful to a few hundred copies.',
        'The gap between writing and earliest surviving copy is also short: fragments such as P52 (part of John 18) are commonly dated to the first half of the second century. For many classical works the gap is many centuries.',
        'Textual variants are numerous, but the vast majority are spelling, word-order or obvious copying slips. No core Christian doctrine depends on a disputed reading.',
      ],
    },
    {
      heading: 'Early, eyewitness-based sources',
      body: [
        'Paul’s letters date from roughly AD 48-60, and he quotes even earlier creeds — 1 Corinthians 15:3-7 is widely dated to within a few years of the crucifixion.',
        'The Gospels were written within the lifetime of eyewitnesses (most scholars: c. AD 65-95). Luke explicitly says he investigated eyewitness accounts (Luke 1:1-4).',
      ],
      references: ['Luke 1:1-4', '1 Corinthians 15:3-8', '2 Peter 1:16', '1 John 1:1-3'],
    },
    {
      heading: 'Archaeology and external confirmation',
      body: [
        'Many details have been confirmed: the Pool of Bethesda with five porticoes (John 5:2), the Pilate Stone naming Pontius Pilate as prefect, the Caiaphas ossuary, and Luke’s precise titles for local officials in Acts.',
        'Archaeology cannot prove theological claims, but it shows the authors were careful about the details we can check.',
      ],
    },
  ],
  objections: [
    {
      id: 'ros-1',
      objection: 'The Bible has been translated so many times — it’s like a game of telephone.',
      response:
        'Actually, modern translations aren’t made from translations of translations. They go back to the Greek and Hebrew manuscripts directly. And unlike the telephone game, we have thousands of early copies we can compare, so scholars can reconstruct the original wording with a very high degree of confidence.',
      keyPoints: [
        'Translations come from original-language texts.',
        'Thousands of manuscripts allow cross-checking.',
        'Telephone is one line; manuscripts are many branches.',
      ],
    },
    {
      id: 'ros-2',
      objection: 'There are more textual variants than words in the New Testament.',
      response:
        'That’s true, but it’s because we have so many manuscripts — more copies means more counted differences. The overwhelming majority are spelling or word-order changes that don’t affect meaning. Only a tiny fraction are both meaningful and viable, and none overturn any central Christian belief.',
      keyPoints: [
        'Variant count reflects abundance of manuscripts.',
        'Most variants are trivial.',
        'No core doctrine rests on a disputed text.',
      ],
    },
    {
      id: 'ros-3',
      objection: 'The Gospels were written long after the events by people who weren’t there.',
      response:
        'Even on standard scholarly dating, the Gospels were written within 30-60 years — while eyewitnesses and opponents were still alive. Paul’s letters are earlier still and quote creeds that go back to the first few years after the crucifixion. Compare that to our main biographies of Alexander the Great, written about 400 years after his death.',
      keyPoints: [
        'Within the lifetime of eyewitnesses.',
        'Earlier creeds embedded in Paul.',
        'Better than most ancient biographies.',
      ],
    },
    {
      id: 'ros-4',
      objection: 'The Gospels contradict each other.',
      response:
        'They differ in detail, which is what you’d expect from independent witnesses — identical accounts would suggest collusion. Many apparent contradictions are resolved by noticing different emphases or the normal conventions of ancient biography. Importantly, the core facts — Jesus’ ministry, death, burial, and the empty tomb — are consistent across them.',
      keyPoints: [
        'Independent testimony naturally varies.',
        'Ancient biography conventions (paraphrase, arrangement).',
        'Core agreement on central events.',
      ],
    },
  ],
  quiz: [
    {
      id: 'ros-q1',
      question: 'Roughly how many Greek manuscripts of the New Testament exist?',
      options: ['About 50', 'About 600', 'Over 5,800', 'Over 100,000'],
      answer: 2,
      explanation: 'Over 5,800 Greek manuscripts, far more than any other ancient work.',
    },
    {
      id: 'ros-q2',
      question: 'Which passage contains an early creed about the death and resurrection of Jesus?',
      options: ['Romans 8:28', '1 Corinthians 15:3-7', 'Genesis 1:1', 'Psalm 23'],
      answer: 1,
      explanation: 'Paul says he “delivered… what I also received” — a creed dated very early by most scholars.',
    },
    {
      id: 'ros-q3',
      question: 'The “Pilate Stone” discovered at Caesarea confirms…',
      options: [
        'The location of Jesus’ tomb',
        'That Pontius Pilate was the prefect of Judea',
        'The date of the crucifixion',
        'The authorship of John',
      ],
      answer: 1,
      explanation: 'It names Pontius Pilate as prefect of Judea.',
    },
    {
      id: 'ros-q4',
      question: 'Which Gospel opens by describing the author’s careful investigation of eyewitness accounts?',
      options: ['Matthew', 'Mark', 'Luke', 'John'],
      answer: 2,
      explanation: 'Luke 1:1-4.',
    },
  ],
  furtherReading: [
    'F.F. Bruce — The New Testament Documents: Are They Reliable?',
    'Craig Blomberg — The Historical Reliability of the Gospels',
    'Peter J. Williams — Can We Trust the Gospels?',
  ],
};
