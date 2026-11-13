import type { Track } from './types';

export const tracks: Track[] = [
  {
    id: 'foundations',
    title: 'Foundations',
    icon: '✦',
    summary: 'The core case for Christianity: God’s existence, who Jesus is, the reliability of Scripture, the resurrection, and the problem of evil.',
    sections: [
      {
        title: 'Core apologetics',
        description: 'Start here if you are new to apologetics.',
        topicIds: ['existence-of-god', 'identity-of-jesus', 'reliability-of-scripture', 'resurrection', 'problem-of-evil'],
      },
    ],
  },
  {
    id: 'islam',
    title: 'Islam Specialization',
    icon: '☪',
    summary: 'An in-depth course on engaging Muslims: why Islam’s claims fail, why the arguments for it don’t hold, and why Christianity is true.',
    intro: [
      'Every reference in this specialization comes from only three sources: the Bible, the Quran, and the two hadith collections Sunni Muslims regard as most authentic — Sahih al-Bukhari and Sahih Muslim. These are sources a Muslim cannot simply dismiss. (Where a lesson discusses legends the Quran borrowed from, those works are named for identification, not cited as authorities.)',
      'Quran quotations follow the Sahih International translation; hadith numbers follow sunnah.com. Tap any citation to read it in context.',
      '“Always being prepared to make a defense… yet do it with gentleness and respect” (1 Peter 3:15). We critique ideas, never people.',
    ],
    primarySourcesOnly: true,
    sections: [
      {
        title: 'Start here',
        description: 'Understand Islam accurately before you answer it.',
        topicIds: ['islam-understanding'],
      },
      {
        title: 'Why Islam is false',
        description: 'Problems in the Quran and the life of Muhammad, from Islam’s own sources.',
        topicIds: ['islam-dilemma', 'islam-misunderstands-christianity', 'islam-crucifixion', 'islam-muhammad-tested', 'islam-muhammad-warfare'],
      },
      {
        title: 'Reliability of the Quran and hadith',
        description: 'How the Quran was collected and standardised, its internal and historical problems, the legends it borrowed, and why the hadith are on shaky ground.',
        topicIds: ['islam-quran-oral', 'islam-quran-preservation', 'islam-quran-consistency', 'islam-quran-history', 'islam-quran-sources', 'islam-hadith-reliability'],
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
    ],
  },
];
