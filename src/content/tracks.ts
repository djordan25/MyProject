import type { Track } from './types';

export const tracks: Track[] = [
  {
    id: 'foundations',
    title: 'Foundations',
    icon: '✦',
    summary: 'The core case for Christianity: truth, God’s existence, science, the Bible, who Jesus is, the resurrection, and the hard questions people ask.',
    sections: [
      {
        title: 'Starting points',
        description: 'Whether truth can be known at all.',
        topicIds: ['truth-and-relativism'],
      },
      {
        title: 'Does God exist?',
        description: 'The case for a Creator, and whether science counts against it.',
        topicIds: ['existence-of-god', 'science-and-faith'],
      },
      {
        title: 'Can we trust the Bible?',
        description: 'How the Bible came to us and why its record of Jesus is reliable.',
        topicIds: ['reliability-of-scripture', 'how-we-got-the-bible'],
      },
      {
        title: 'Who is Jesus?',
        description: 'His claims, the prophecies about him, and his resurrection.',
        topicIds: ['identity-of-jesus', 'fulfilled-prophecy', 'resurrection'],
      },
      {
        title: 'Hard questions',
        description: 'The objections people feel most deeply.',
        topicIds: ['problem-of-evil'],
      },
    ],
  },
  {
    id: 'islam',
    title: 'Islam Specialization',
    icon: '☪',
    summary: 'An in-depth course on engaging Muslims: why Islam’s claims fail, why the arguments for it don’t hold, and why Christianity is true.',
    intro: [
      'The backbone of this specialization is three sources: the Bible, the Quran, and the two hadith collections Sunni Muslims regard as most authentic, Sahih al-Bukhari and Sahih Muslim. These are sources a Muslim cannot simply dismiss. Some lessons also draw on other hadith collections (with their grading shown), classical Muslim commentaries and biographies, and manuscript scholarship. Each is named for what it is, so you know how much weight it carries.',
      'Quran quotations follow the Sahih International translation, and words in [brackets] are the translators’ additions. Hadith numbers follow sunnah.com. Bible quotations follow the Berean Standard Bible. Tap any citation to read the passage.',
      '“Always be prepared to give a defense… But respond with gentleness and respect” (1 Peter 3:15). We critique ideas, never people.',
    ],
    sections: [
      {
        title: 'Start here',
        description: 'Understand Islam accurately before you answer it.',
        topicIds: ['islam-understanding', 'islam-branches'],
      },
      {
        title: 'Why Islam is false',
        description: 'Problems in the Quran and the life of Muhammad, from Islam’s own sources.',
        topicIds: ['islam-dilemma', 'islam-misunderstands-christianity', 'islam-crucifixion', 'islam-muhammad-tested', 'islam-muhammad-warfare'],
      },
      {
        title: 'Reliability of the Quran and hadith',
        description: 'How the Quran was collected and standardised, its internal and historical problems, the legends it borrowed, and why the hadith are on shaky ground.',
        topicIds: ['islam-quran-oral', 'islam-quran-preservation', 'islam-quran-manuscripts', 'islam-quran-consistency', 'islam-quran-history', 'islam-quran-sources', 'islam-hadith-reliability'],
      },
      {
        title: 'Answering the arguments for Islam',
        description: 'The most common proofs offered for Islam — and why they fail.',
        topicIds: ['islam-muhammad-in-bible', 'islam-quran-challenge', 'islam-scientific-miracles'],
      },
      {
        title: 'Why Christianity is true',
        description: 'The positive case: who Jesus is, the cross and resurrection, and the gospel of grace.',
        topicIds: ['islam-jesus-more-than-prophet', 'islam-cross-resurrection', 'islam-gospel-of-grace'],
      },
      {
        title: 'Answering objections to Christianity',
        description: 'The most common Muslim objections — the Trinity, Jesus’ deity, the atonement, and the Bible’s reliability.',
        topicIds: ['islam-trinity', 'islam-deity-objections', 'islam-atonement', 'islam-bible-corruption'],
      },
      {
        title: 'Sharing the gospel',
        description: 'Where every conversation should lead: the message itself, and what it costs a Muslim to believe it.',
        topicIds: ['islam-sharing-the-gospel'],
      },
    ],
  },
];
