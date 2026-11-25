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
        description: 'How the Bible came to us, why its record of Jesus is reliable, and what to do with the verses translators dispute.',
        topicIds: ['reliability-of-scripture', 'how-we-got-the-bible', 'disputed-translations'],
      },
      {
        title: 'Books outside the Bible',
        description: 'Why Bibles differ in length, and the Apocrypha, the other gospels and the books at the edge: what they are, and why they are not in the Bible.',
        topicIds: ['canons-compared', 'old-testament-apocrypha', 'other-gospels', 'edges-of-the-canon'],
      },
      {
        title: 'Evidence outside the Bible',
        description: 'What ancient writers and archaeology confirm, what they cannot, and the hardest objections drawn from the same evidence.',
        topicIds: ['ancient-writers', 'archaeology-and-the-bible'],
      },
      {
        title: 'Who is Jesus?',
        description: 'His claims, the prophecies about him, his resurrection, and whether he is the only way.',
        topicIds: ['identity-of-jesus', 'fulfilled-prophecy', 'resurrection', 'jesus-only-way'],
      },
      {
        title: 'Hard questions',
        description: 'The objections people feel most deeply.',
        topicIds: ['problem-of-evil', 'hard-passages'],
      },
      {
        title: 'In conversation',
        description: 'How to listen, ask questions and bring the conversation to Jesus.',
        topicIds: ['having-the-conversation'],
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
        description: 'How the Quran was collected and standardised, the readings in print today, its internal and historical problems, the legends it borrowed, and why the hadith are on shaky ground.',
        topicIds: ['islam-quran-oral', 'islam-quran-preservation', 'islam-quran-manuscripts', 'islam-quran-readings', 'islam-quran-consistency', 'islam-quran-history', 'islam-quran-sources', 'islam-hadith-reliability'],
      },
      {
        title: 'Evidence outside Islam',
        description: 'What early writers outside Islam and archaeology show about Muhammad and the first Muslims, what they cannot show, and the Muslim replies drawn from the same evidence.',
        topicIds: ['islam-outside-writers', 'islam-archaeology'],
      },
      {
        title: 'The Night Journey',
        description: 'Muhammad’s journey by night to Jerusalem and the heavens, and the “farthest mosque”: what the sources say, which arguments are sound, and which to leave alone.',
        topicIds: ['islam-night-journey', 'islam-farthest-mosque'],
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
  {
    id: 'islam-sunni',
    parent: 'islam',
    title: 'Sunni Islam',
    icon: '📚',
    summary: 'The large majority of Muslims. What Sunnis rely on, the companions and caliphs they trust, and the Salafi and Sufi streams you will meet.',
    sections: [
      { title: 'Sunni Islam', description: 'Its authorities, its heroes and its main streams, and how to answer its distinctive claims.', topicIds: ['sunni-overview', 'sunni-companions', 'sunni-salafi-sufi'] },
    ],
  },
  {
    id: 'islam-shia',
    parent: 'islam',
    title: 'Shia Islam',
    icon: '🕌',
    summary: 'The majority in Iran and Iraq and one of the two largest communities in Lebanon. The Imams, the dispute over Muhammad’s successor, and the meaning of Karbala.',
    sections: [
      { title: 'Shia Islam', description: 'What the Shia believe, whether the Imamate stands, what the split means for Islam’s sources, and how to share the gospel.', topicIds: ['shia-overview', 'shia-imamate', 'shia-sources', 'shia-karbala-gospel'] },
    ],
  },
  {
    id: 'islam-quranist',
    parent: 'islam',
    title: 'Quran-only Muslims',
    icon: '📖',
    summary: 'Muslims who reject the hadith and follow the Quran alone. Who they are, and whether the Quran can stand without the tradition around it.',
    sections: [
      { title: 'Quran-only Islam', description: 'The movement and its arguments, and the questions it cannot answer from the Quran alone.', topicIds: ['quranist-overview', 'quranist-answering'] },
    ],
  },
  {
    id: 'islam-ahmadiyya',
    parent: 'islam',
    title: 'Ahmadiyya',
    icon: '🕊',
    summary: 'A missionary movement, strong in Britain, Germany and North America, that follows Mirza Ghulam Ahmad and teaches that Jesus survived the cross and died in Kashmir.',
    sections: [
      { title: 'The Ahmadiyya movement', description: 'Its founder and his claims, and its account of what happened to Jesus.', topicIds: ['ahmadiyya-overview', 'ahmadiyya-jesus-in-india'] },
    ],
  },
  {
    id: 'islam-noi',
    parent: 'islam',
    title: 'Nation of Islam',
    icon: '✊',
    summary: 'An American movement founded in Detroit in 1930. Its history, its teachings about God and race, and how to answer them with the gospel.',
    sections: [
      { title: 'The Nation of Islam', description: 'Where it came from, what it teaches, and how to respond.', topicIds: ['noi-overview', 'noi-answering'] },
    ],
  },
  {
    id: 'islam-druze',
    parent: 'islam',
    title: 'The Druze',
    icon: '⭐',
    summary: 'A closed community of Lebanon, Syria and Israel that grew out of Shia Islam a thousand years ago and now stands apart from it.',
    sections: [
      { title: 'The Druze', description: 'Their origins, their beliefs so far as outsiders can know them, and how to talk with a Druze friend.', topicIds: ['druze-overview'] },
    ],
  },
  {
    id: 'islam-alawi-alevi',
    parent: 'islam',
    title: 'Alawites and Alevis',
    icon: '🌙',
    summary: 'Two different communities that are often confused: the Alawites of Syria and Lebanon, and the Alevis of Turkey and its diaspora in Europe.',
    sections: [
      { title: 'Alawites and Alevis', description: 'Who each group is, what it believes, and where to begin.', topicIds: ['alawites', 'alevis'] },
    ],
  },
];
