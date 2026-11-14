import type { Topic } from '../types';

export const quranHistory: Topic = {
  id: 'islam-quran-history',
  title: 'Historical Errors in the Quran',
  icon: '🏛',
  summary: 'External consistency: people in the wrong century, beliefs no one held, and promises the earlier scriptures never made.',
  lesson: [
    {
      heading: 'Why external consistency matters',
      body: [
        'If the Quran is the word of the all-knowing God, it should not misplace people in history or misreport what others believed. These are not matters of faith but of checkable fact.',
      ],
    },
    {
      heading: 'Haman in Pharaoh’s court',
      body: [
        'The Quran has Pharaoh command “Haman” to build a tower so he can look at the God of Moses (Quran 28:38; 40:36-37).',
        'In the Bible, Haman is an official of the Persian king Ahasuerus (Esther 3:1) — roughly a thousand years after Moses, in a different empire. And a tower to reach the heavens recalls the tower of Babel (Genesis 11:4).',
        'Some Muslims point to an Egyptian name that sounds similar. But no evidence shows a Haman as Pharaoh’s chief minister building a tower to reach God. The simplest explanation is that biblical stories were blended together.',
      ],
      references: ['Quran 28:38', 'Quran 40:36-37', 'Esther 3:1', 'Genesis 11:4'],
    },
    {
      heading: 'The Samaritan at Mount Sinai',
      body: [
        'In the Quran, the golden calf incident involves “the Samiri” — the Samaritan — who led Israel astray while Moses was away (Quran 20:85; 20:95-97).',
        'But the city of Samaria was founded by King Omri centuries after Moses (1 Kings 16:24), and Samaritans as a people came later still. A Samaritan at Sinai is an anachronism. (In Exodus 32, it is Aaron who makes the calf.)',
      ],
      references: ['Quran 20:85', 'Quran 20:95-97', '1 Kings 16:24', 'Exodus 32:1-4'],
    },
    {
      heading: 'Mary, sister of Aaron',
      body: [
        'As covered in The Quran Misunderstands Christianity, the Quran calls Mary the mother of Jesus “sister of Aaron” (Quran 19:28) and “daughter of Imran” (Quran 66:12) — the family of Moses’ sister Miriam, about 1,400 years earlier (Numbers 26:59). Christians raised this problem in Muhammad’s own day (Sahih Muslim 2135).',
      ],
      references: ['Quran 19:28', 'Quran 66:12', 'Numbers 26:59', 'Sahih Muslim 2135'],
    },
    {
      heading: 'Beliefs no one held',
      body: [
        '“The Jews say, ‘Ezra is the son of Allah’” (Quran 9:30). No Jewish source records any Jewish group holding this belief. The Jewish scriptures present Ezra as a scribe and priest (Ezra 7:6, 11), and Judaism has always rejected any human as God’s son in that sense.',
        'Likewise the Quran pictures Christians worshipping Jesus and his mother as two gods besides Allah (Quran 5:116) — a belief no Christian church has taught.',
      ],
      references: ['Quran 9:30', 'Ezra 7:6', 'Ezra 7:11', 'Quran 5:116'],
    },
    {
      heading: 'Abraham and Ishmael in Mecca',
      body: [
        'The Quran says Abraham and Ishmael raised the foundations of “the House” (Quran 2:127), which Muslims identify as the Kaaba in Mecca.',
        'Genesis places Abraham in Canaan (Genesis 13:12) and Ishmael in the wilderness of Paran in the Sinai region (Genesis 21:21). There is no historical record of Abraham in Mecca before Islam claimed it.',
      ],
      references: ['Quran 2:127', 'Genesis 13:12', 'Genesis 21:21'],
    },
    {
      heading: 'A promise the Gospel never made',
      body: [
        'Quran 9:111 says Allah has purchased the believers’ lives in exchange for Paradise: “They fight in the cause of Allah, so they kill and are killed. [It is] a true promise [binding] upon Him in the Torah and the Gospel and the Qur’an.”',
        'The Gospel contains no such promise. Jesus told Peter to put away his sword (Matthew 26:52) and taught, “Love your enemies” (Matthew 5:44). Paradise is promised to those who trust in Christ, not to those who kill for him (John 3:16; Luke 23:42-43).',
      ],
      references: ['Quran 9:111', 'Matthew 26:52', 'Matthew 5:43-44', 'Luke 23:42-43'],
    },
    {
      heading: 'Shooting stars as missiles',
      body: [
        'The Quran says the stars of the nearest heaven are made into things “thrown at the devils” to stop them eavesdropping on the angels (Quran 67:5; 37:6-10).',
        'Shooting stars are small rocks burning up in our atmosphere; stars are distant suns. The description fits the ancient world’s picture of the sky, not reality.',
      ],
      references: ['Quran 67:5', 'Quran 37:6-10'],
    },
  ],
  objections: [
    {
      id: 'qh-1',
      objection: 'Haman was an Egyptian title; Egyptian inscriptions mention a “Haman”.',
      response:
        'That claim is disputed, and even if a similar-sounding name existed, it doesn’t give us a Haman as Pharaoh’s chief minister building a tower to see God. Meanwhile we have a well-known Haman in Esther 3:1 and a famous tower in Genesis 11:4. The parallels point to blended biblical stories rather than independent revelation.',
      keyPoints: ['Similar sounds ≠ the same person.', 'Esther 3:1 and Genesis 11:4.', 'Blending explains it best.'],
      references: ['Quran 28:38', 'Esther 3:1', 'Genesis 11:4'],
    },
    {
      id: 'qh-2',
      objection: 'Samiri is just a personal name, not “Samaritan”.',
      response:
        'Some Muslim scholars suggest that, but “the Samiri” has the form of a name of origin — “the one from Samaria”. Even if it were a personal name, the Bible says Aaron made the calf (Exodus 32:1-4), and the Quran nowhere mentions that.',
      keyPoints: ['“The Samiri” describes origin.', 'Samaria came centuries later.', 'Exodus 32: Aaron made the calf.'],
      references: ['Quran 20:85', '1 Kings 16:24', 'Exodus 32:1-4'],
    },
    {
      id: 'qh-3',
      objection: 'Maybe some small Jewish sect in Arabia called Ezra the son of God.',
      response:
        'Quran 9:30 doesn’t say “some Jews”; it says “the Jews say”, side by side with “the Christians say the Messiah is the son of Allah” — presented as the standard belief of each community. No Jewish source records Jews believing this, before or after Muhammad.',
      keyPoints: ['The verse speaks generally.', 'Paired with mainstream Christian belief.', 'No historical evidence.'],
      references: ['Quran 9:30', 'Ezra 7:6'],
    },
  ],
  quiz: [
    {
      id: 'qh-q1',
      question: 'In the Bible, Haman serves which king?',
      options: ['Pharaoh of Egypt', 'Ahasuerus of Persia', 'David of Israel', 'Nebuchadnezzar of Babylon'],
      answer: 1,
      explanation: 'Esther 3:1 — about a thousand years after Moses.',
    },
    {
      id: 'qh-q2',
      question: 'When was the city of Samaria founded?',
      options: ['Before Abraham', 'In Moses’ time', 'Centuries after Moses, by King Omri', 'After Jesus'],
      answer: 2,
      explanation: '1 Kings 16:24.',
    },
    {
      id: 'qh-q3',
      question: 'Quran 9:111 claims a promise of Paradise for those who kill and are killed is found in…',
      options: ['Only the Quran', 'The Torah, the Gospel and the Quran', 'The Psalms', 'The hadith'],
      answer: 1,
      explanation: 'The Gospel contains no such promise (Matthew 26:52; 5:44).',
    },
    {
      id: 'qh-q4',
      question: 'Which belief does Quran 9:30 attribute to the Jews?',
      options: ['That Moses is God', 'That Ezra is the son of Allah', 'That Abraham is divine', 'That there are three gods'],
      answer: 1,
      explanation: 'No known Jewish group believed this.',
    },
  ],
};
