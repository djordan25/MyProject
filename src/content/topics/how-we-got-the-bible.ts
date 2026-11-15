import type { Topic } from '../types';

export const howWeGotTheBible: Topic = {
  id: 'how-we-got-the-bible',
  title: 'How We Got the Bible',
  icon: '📚',
  summary: 'Who wrote it, who decided which books belong, how it was copied, and why the “lost gospels” were never part of the Bible.',
  lesson: [
    {
      heading: 'From the authors to us',
      body: [
        'The New Testament was written in the first century by apostles and their close companions. Luke says he wrote “having carefully investigated everything from the beginning” (Luke 1:3), and Peter insists, “we were eyewitnesses of His majesty” (2 Peter 1:16).',
        'Christians believe God spoke through these human authors: “All Scripture is God-breathed” (2 Timothy 3:16), and “men spoke from God as they were carried along by the Holy Spirit” (2 Peter 1:21). The Bible is fully human in its writing and fully from God in its message.',
        'The books were written on papyrus, copied by hand, and carried to churches across the Roman world. No single person or church ever controlled all the copies.',
      ],
      references: ['Luke 1:1-4', '2 Peter 1:16', '2 Timothy 3:16', '2 Peter 1:21'],
    },
    {
      heading: 'Who decided which books belong?',
      body: [
        'A popular claim says the emperor Constantine, or the Council of Nicaea in AD 325, chose the books of the Bible. This is false. Nicaea met to answer the teaching of Arius about the deity of Christ; it made no decision about which books belong in the Bible.',
        'The core of the New Testament was recognised long before. Within the New Testament itself, Peter speaks of Paul’s letters alongside “the rest of the Scriptures” (2 Peter 3:15-16), and Paul quotes a saying of Jesus found in Luke as Scripture: “The worker is worthy of his wages” (1 Timothy 5:18; see Luke 10:7).',
        'Around AD 180, Irenaeus wrote that there are four Gospels and only four: Matthew, Mark, Luke and John. A list usually dated to the late second century (the Muratorian fragment) already names most of the New Testament books. In AD 367 Athanasius listed exactly the 27 books we have today.',
        'The churches did not grant these books authority; they recognised the authority the books already had. They asked: does it come from an apostle or an apostle’s companion? Has it been used by churches everywhere from the beginning? Does it agree with the teaching handed down from the apostles?',
      ],
      references: ['2 Peter 3:15-16', '1 Timothy 5:18', 'Luke 10:7', 'Galatians 1:8'],
    },
    {
      heading: 'Copying and textual criticism',
      body: [
        'Because the books were copied by hand, copies differ in small ways: spellings, word order, a skipped line. With about 5,800 Greek manuscripts of the New Testament to compare, scholars can see where copies differ and work back to the original wording. This work is called textual criticism.',
        'Christians are open about the results. The two longest passages missing from the earliest manuscripts are the ending of Mark (Mark 16:9-20) and the story of the woman caught in adultery (John 8:1-11). Modern Bibles mark both. No Christian teaching depends on either.',
        'The abundance of copies is a strength. A text controlled by one authority could be changed without trace. A text copied freely across three continents cannot.',
      ],
      references: ['Mark 16:8', 'Isaiah 40:8'],
    },
    {
      heading: 'Translations',
      body: [
        'Mainstream modern Bibles are not translations of translations. Each is translated directly from the Hebrew, Aramaic and Greek texts.',
        'English versions differ because translators make different choices: some follow the original word order closely, others aim for natural English. Comparing two or three good translations usually shows that they agree on the meaning.',
      ],
    },
    {
      heading: 'The “lost gospels”',
      body: [
        'Books such as the Gospel of Thomas, the Gospel of Judas and the Gospel of Mary are sometimes presented as suppressed alternatives to the four Gospels. They were written in the second century or later, long after the apostles had died, by authors who borrowed famous names.',
        'They were never part of the Bible and then removed. Early Christians knew them, and rejected them because they came too late and contradicted what the apostles taught. The four Gospels are the only narrative accounts of Jesus’ life generally dated to the first century.',
      ],
      references: ['Luke 1:1-4', '2 Peter 1:16'],
    },
  ],
  objections: [
    {
      id: 'hb-1',
      objection: 'Constantine and the Council of Nicaea decided which books went into the Bible.',
      response:
        'That is a modern myth. Nicaea in AD 325 dealt with Arius’s teaching about Christ, and none of its records mention choosing books. The four Gospels and Paul’s letters were being read as Scripture across the churches more than a century before Nicaea. Irenaeus named the four Gospels around AD 180, and Peter already speaks of Paul’s letters alongside the rest of the Scriptures (2 Peter 3:15-16).',
      keyPoints: ['Nicaea was about Arius, not the canon.', 'Four Gospels named around AD 180.', 'Recognition began within the New Testament itself.'],
      references: ['2 Peter 3:15-16', '1 Timothy 5:18'],
      followUps: [
        { reply: 'But the church still picked the books it liked.', answer: 'The books were recognised because of where they came from, not because they were convenient. They include plenty that embarrasses the church’s first leaders, such as Peter denying Jesus (Mark 14:66-72).' },
      ],
    },
    {
      id: 'hb-2',
      objection: 'There were dozens of other gospels that the church suppressed.',
      response:
        'There were other writings called gospels, but they come from the second century or later, written by people who never met Jesus or the apostles. Early Christians knew about them, and discussed and rejected them openly; nothing was secretly removed. Compare them with Luke, who investigated eyewitness testimony (Luke 1:1-4), and the difference is clear.',
      keyPoints: ['Written in the second century or later.', 'Known and openly rejected, not hidden.', 'Only the four Gospels are generally dated to the first century.'],
      references: ['Luke 1:1-4', '2 Peter 1:16'],
    },
    {
      id: 'hb-3',
      objection: 'There are so many Bible versions. Which one is the real Bible?',
      response:
        'They are translations of the same Hebrew and Greek writings, in the way several English translations of one Russian novel are the same novel. Almost all differences are of style; the few that come from differences between manuscripts are footnoted and change no teaching. Pick any mainstream translation and you will find the same Jesus, the same cross and the same resurrection.',
      keyPoints: ['One text, many translations.', 'Almost all differences are of style.', 'The message is the same in all.'],
    },
    {
      id: 'hb-4',
      objection: 'The Bible was written by men, so it can’t be the word of God.',
      response:
        'It was written by men; Christians have always said so. The claim is that God spoke through them: “men spoke from God as they were carried along by the Holy Spirit” (2 Peter 1:21). Being written by people does not make something false. The question is whether what they wrote is true, and that can be tested: by history, by fulfilled prophecy, and above all by the resurrection of Jesus.',
      keyPoints: ['Human authors, divine source.', 'Written by men does not mean false.', 'Test it by evidence.'],
      references: ['2 Peter 1:21', '2 Timothy 3:16', '1 Thessalonians 2:13'],
    },
  ],
  quiz: [
    {
      id: 'hb-q1',
      question: 'What did the Council of Nicaea (AD 325) decide about the books of the Bible?',
      options: ['It chose the four Gospels', 'It removed several gospels', 'Nothing: it addressed the teaching of Arius', 'It wrote the New Testament'],
      answer: 2,
      explanation: 'Nicaea dealt with the deity of Christ, not the canon.',
    },
    {
      id: 'hb-q2',
      question: 'Who named the four Gospels as the only four around AD 180?',
      options: ['Constantine', 'Irenaeus', 'Athanasius', 'Augustine'],
      answer: 1,
      explanation: 'More than a century before Nicaea.',
    },
    {
      id: 'hb-q3',
      question: 'Which passages are the two longest that the earliest manuscripts lack?',
      options: ['John 3 and Romans 8', 'Mark 16:9-20 and John 8:1-11', 'Matthew 5-7 and Luke 15', 'Acts 2 and Hebrews 11'],
      answer: 1,
      explanation: 'Modern Bibles mark both, and no teaching depends on them.',
    },
    {
      id: 'hb-q4',
      question: 'Why were books like the Gospel of Thomas not included in the Bible?',
      options: [
        'They were lost until recently',
        'They were written too late and did not come from the apostles',
        'Constantine banned them',
        'They were too long',
      ],
      answer: 1,
      explanation: 'They date from the second century or later.',
    },
  ],
  furtherReading: [
    'F.F. Bruce — The Canon of Scripture',
    'Michael J. Kruger — Canon Revisited',
    'Peter J. Williams — Can We Trust the Gospels?',
  ],
};
