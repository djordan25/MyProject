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
        'About 5,800 Greek manuscripts of the New Testament have been catalogued, plus thousands in Latin and other languages. Most are medieval, so the raw number matters less than the early witnesses: around a hundred papyri from the second to fourth centuries, and great fourth-century codices such as Sinaiticus and Vaticanus. Most other ancient works survive in far fewer copies, usually made many centuries after their authors.',
        'The gap between writing and earliest surviving copy is also short: P52, a fragment of John 18, is usually dated to the second century. For many classical works the gap is the better part of a thousand years.',
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
    {
      heading: 'The marks of honest testimony',
      body: [
        'People who invent a story make their heroes look good. The Gospels do the opposite. The disciples are slow to understand and quick to quarrel. Peter, the leading apostle, denies Jesus three times. Jesus’ own family at one point says, “He is out of His mind” (Mark 3:21-22). The first witnesses of the empty tomb are women, whose word carried little weight in that society.',
        'The Gospels also keep sayings that are hard to explain, such as Jesus not knowing the day of his return (Mark 13:32) and his cry of abandonment on the cross (Mark 15:34). A church making up a divine Saviour would have left these out. They are there because they happened.',
      ],
      references: ['Mark 3:21-22', 'Mark 14:66-72', 'Mark 13:32', 'Mark 15:34'],
    },
    {
      heading: 'Names, places and titles',
      body: [
        'The Gospels and Acts are full of the kind of detail that is easy to get wrong from a distance: the names of villages, the layout of Jerusalem, local customs, and the exact titles of officials, which differed from city to city and changed over time.',
        'Luke dates the start of John the Baptist’s ministry by five rulers at once (Luke 3:1). He calls Gallio “proconsul of Achaia” (Acts 18:12), and an inscription found at Delphi confirms the title and dates his term to about AD 51. Even the personal names in the Gospels match the names that were most common among Jews in Palestine at that time, which differ from those common among Jews elsewhere.',
        'Writers who are careful about what we can check have earned a hearing on what we cannot.',
      ],
      references: ['Luke 3:1', 'Acts 18:12', 'Luke 1:1-4'],
    },
    {
      heading: 'Paul as an early cross-check',
      body: [
        'Even apart from the Gospels, Paul’s letters, written within twenty to thirty years of the crucifixion, confirm the outline of Jesus’ life. He was born of a woman, under the Jewish law (Galatians 4:4), and descended from David (Romans 1:3). He had a brother named James, whom Paul met (Galatians 1:19). He died, was buried and was raised, and appeared to many (1 Corinthians 15:3-8).',
        'Paul did not get this from the Gospels, which were written later. It is an independent, earlier line of evidence that agrees with them.',
      ],
      references: ['Galatians 4:4', 'Romans 1:3', 'Galatians 1:19', '1 Corinthians 15:3-8'],
    },
  ],
  objections: [
    {
      id: 'ros-1',
      followUps: [
        { reply: 'The original manuscripts are lost, so you cannot know what they said.', answer: 'We have no original of any major work of ancient literature. What we have for the New Testament is thousands of copies from many places, early enough and independent enough of one another that the original wording can be recovered with great confidence.' },
      ],
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
      followUps: [
        { reply: 'Even one changed word means we can’t trust it.', answer: 'Then no ancient book can be trusted, and no modern one either, since every printed book has misprints. What matters is whether we can tell what the original said. With thousands of copies to compare, in the vast majority of places we can, and the uncertain places are marked in the footnotes of any study Bible.' },
      ],
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
      followUps: [
        { reply: 'Thirty years is long enough for legends to grow.', answer: 'Legends grow when the eyewitnesses are gone. Thirty years after the crucifixion many of them were alive, including hostile ones. Paul points to more than five hundred witnesses, “most of whom are still living” (1 Corinthians 15:6). That is an invitation to check.' },
      ],
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
      followUps: [
        { reply: 'Show me one contradiction you can actually resolve.', answer: 'Matthew mentions one angel at the tomb, and Luke mentions two men in radiant apparel, later called angels (Matthew 28:2; Luke 24:4, 23). Mentioning one does not deny that there were two; reporters do this every day. A contradiction would be one writer saying there was only one.' },
      ],
      objection: 'The Gospels contradict each other.',
      response:
        'They differ in detail, which is what you’d expect from independent witnesses — identical accounts would suggest collusion. Many apparent contradictions are resolved by noticing different emphases or the normal conventions of ancient biography. Importantly, the core facts — Jesus’ ministry, death, burial, and the empty tomb — are consistent across them.',
      keyPoints: [
        'Independent testimony naturally varies.',
        'Ancient biography conventions (paraphrase, arrangement).',
        'Core agreement on central events.',
      ],
    },
    {
      id: 'ros-5',
      objection: 'The Gospels are anonymous. Nobody knows who wrote them.',
      response:
        'The authors do not name themselves in the text, which was normal for that kind of writing. But no copy that has a title names anyone other than Matthew, Mark, Luke or John. Papias, early in the second century, already names Mark and Matthew, and by about AD 180 Irenaeus names all four. Notice which names they are. Mark and Luke were not apostles. If the church had been inventing authors to win authority, it would have chosen Peter or James.',
      keyPoints: ['Formally anonymous, like much ancient writing.', 'The titles and early testimony are unanimous.', 'Nobody invents Mark and Luke as authors.'],
      references: ['Luke 1:1-4'],
      followUps: [
        { reply: 'Fishermen from Galilee could not write Greek books.', answer: 'Matthew was a tax collector, whose job required record-keeping; Luke was a physician; Mark is said to have written down Peter’s teaching. Using a secretary was ordinary practice, as Paul’s letters show. And thirty years of preaching in the Greek-speaking world is a long education.' },
      ],
    },
    {
      id: 'ros-6',
      objection: 'Scholars like Bart Ehrman have shown the Bible can’t be trusted.',
      response:
        'It helps to ask which claim. Ehrman is a serious scholar, and he is firm on several points that surprise people: that Jesus certainly existed, that he was crucified under Pilate, and that his followers soon believed they had seen him alive. On the text itself, he has acknowledged that the differences among manuscripts do not overturn any essential Christian belief. He does dispute who wrote the Gospels and argues that they contradict one another, and those points can be taken one at a time. His deepest disagreement with Christians is over whether a miracle can ever be accepted as history, and that is a question of philosophy, not of manuscripts.',
      keyPoints: ['Ask which specific claim.', 'Ehrman affirms Jesus’ existence and crucifixion.', 'His deepest objection, to miracles, is philosophical.'],
      followUps: [
        { reply: 'He says there are more variants than words in the New Testament.', answer: 'There are, because there are so many copies. Nearly all are differences of spelling or word order. Of the small fraction that affect meaning, the main ones are footnoted in any modern Bible, and no core Christian teaching depends on a disputed reading.' },
      ],
    },
  ],
  quiz: [
    {
      id: 'ros-q1',
      question: 'Roughly how many Greek manuscripts of the New Testament exist?',
      options: ['About 50', 'About 600', 'About 5,800', 'Over 100,000'],
      answer: 2,
      explanation: 'About 5,800 catalogued Greek manuscripts. Most are medieval, but they include early papyri and fourth-century codices.',
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
    {
      id: 'ros-q5',
      question: 'Why do embarrassing details count in favour of the Gospels?',
      options: ['They make the story longer', 'Inventors do not make their leaders look bad', 'They prove miracles', 'They were added later'],
      answer: 1,
      explanation: 'Peter’s denial and the family’s doubts are there because they happened.',
    },
    {
      id: 'ros-q6',
      question: 'What does the Gallio inscription from Delphi confirm?',
      options: ['The date of Jesus’ birth', 'Luke’s title for Gallio in Acts 18:12, and when he held it', 'The authorship of Mark', 'The location of the empty tomb'],
      answer: 1,
      explanation: 'It also helps date Paul’s time in Corinth to about AD 51.',
    },
  ],
  furtherReading: [
    'F.F. Bruce — The New Testament Documents: Are They Reliable?',
    'Craig Blomberg — The Historical Reliability of the Gospels',
    'Peter J. Williams — Can We Trust the Gospels?',
  ],
};
