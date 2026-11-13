import type { Topic } from '../types';

export const quranOral: Topic = {
  id: 'islam-quran-oral',
  title: 'From Recitation to Book',
  icon: '🗣',
  summary: 'The Quran began as oral recitation and was only collected into a book after Muhammad died — after many of its reciters had been killed.',
  lesson: [
    {
      heading: 'Revealed piece by piece, recited from memory',
      body: [
        'Muslims believe the Quran was revealed to Muhammad in portions over about 23 years (Quran 17:106; 25:32). It was recited aloud and memorised; Muhammad was even told not to hurry his tongue while receiving it (Quran 75:16-19).',
        'Some passages were written on whatever was at hand, but there was no complete, bound Quran when Muhammad died in AD 632. Zaid bin Thabit later gathered it “from palm stalks, thin white stones and also from the men who knew it by heart” (Sahih al-Bukhari 4986).',
        'The Quran says, “upon Us is its collection” (Quran 75:17). Yet the hadith show the actual collection was a human effort, carried out after the Prophet’s death, under pressure, from scattered materials and fallible memories.',
      ],
      references: ['Quran 17:106', 'Quran 25:32', 'Quran 75:16-19', 'Sahih al-Bukhari 4986'],
    },
    {
      heading: 'The battle of Yamama: reciters killed',
      body: [
        'Shortly after Muhammad’s death, many of the Qurra’ — the men who had memorised the Quran — were killed fighting at Yamama. Umar came to Abu Bakr alarmed: casualties were heavy among the reciters, and he feared “that a large part of the Qur’an may be lost” unless it was collected (Sahih al-Bukhari 4986).',
        'Notice what this admits: the Quran’s survival depended on living memorisers, and when they died, its loss was a real danger in the minds of the leading companions.',
        'Abu Bakr hesitated — “How can you do something which Allah’s Messenger did not do?” Zaid said that moving a mountain would have been easier than this task (Sahih al-Bukhari 4986).',
      ],
      references: ['Sahih al-Bukhari 4986'],
    },
    {
      heading: 'Verses found with only one man',
      body: [
        'Zaid found the last verses of Surat at-Tawba with only one person, Abu Khuzaima al-Ansari, “and I did not find it with anybody other than him” (Sahih al-Bukhari 4986).',
        'Later, when copying the manuscripts, Zaid missed a verse of Surat al-Ahzab (Quran 33:23) that he used to hear the Prophet recite, and found it only with Khuzaima bin Thabit (Sahih al-Bukhari 4988).',
        'If the Quran was mass-memorised by thousands, why could some verses be found with only one man?',
      ],
      references: ['Sahih al-Bukhari 4986', 'Sahih al-Bukhari 4988', 'Quran 33:23'],
    },
    {
      heading: 'Seven ways of reciting',
      body: [
        'Muhammad said Gabriel recited the Quran to him in one way, and he kept asking for more until it was recited “in seven different ways” (Sahih al-Bukhari 4991; 3219).',
        'This produced real disputes. Umar heard Hisham bin Hakim reciting Surat al-Furqan differently from how he had learned it, nearly attacked him in prayer, and dragged him to Muhammad — who said both versions were revealed (Sahih al-Bukhari 4992).',
        'So from the beginning, the Quran existed in multiple oral forms. That is very different from the popular claim of a single text preserved identically from the start.',
      ],
      references: ['Sahih al-Bukhari 4991', 'Sahih al-Bukhari 3219', 'Sahih al-Bukhari 4992'],
    },
    {
      heading: 'Is it a “telephone game”?',
      body: [
        'Muslims often accuse the Bible of being like a game of telephone. Be fair: communal recitation is more stable than one person whispering to the next, because many people check each other.',
        'But the hadith show that communal memory did not prevent disagreement. Leading reciters had different contents and wordings: Ibn Mas’ud recited Quran 92:3 differently (Sahih al-Bukhari 4944) and did not count the last two surahs as Quran (Sahih al-Bukhari 4977); Umar admitted “we leave some of what [Ubai] recites” (Sahih al-Bukhari 5005). The dispute became so serious that Uthman ordered all other copies burned (see the next topic).',
        'By contrast, the New Testament was written down within the lifetime of eyewitnesses (Luke 1:1-4; 1 John 1:1-3), and copied so widely that no one could control or destroy the variant copies.',
      ],
      references: ['Sahih al-Bukhari 4944', 'Sahih al-Bukhari 4977', 'Sahih al-Bukhari 5005', 'Luke 1:1-4', '1 John 1:1-3'],
    },
  ],
  objections: [
    {
      id: 'qo-1',
      objection: 'The whole Quran was memorised by thousands of companions, so nothing could be lost.',
      response:
        'If that were true, Umar wouldn’t have feared that a large part of the Quran might be lost when the reciters died at Yamama, and Zaid wouldn’t have found some verses with only one man (Sahih al-Bukhari 4986, 4988). Those are reports in Bukhari, the most trusted hadith collection. They show the Quran’s preservation was fragile, not guaranteed.',
      keyPoints: ['Umar feared loss after Yamama.', 'Verses found with one man only.', 'Source: Sahih al-Bukhari, not critics.'],
      references: ['Sahih al-Bukhari 4986', 'Sahih al-Bukhari 4988'],
    },
    {
      id: 'qo-2',
      objection: 'The Quran was written down during Muhammad’s life, so it never depended on memory alone.',
      response:
        'Some parts were written, but on scattered materials — palm stalks and stones — and not gathered into one book. Abu Bakr himself asked how he could do something the Messenger never did (Sahih al-Bukhari 4986). The collection only happened after the reciters started dying.',
      keyPoints: ['Fragments, not a book.', 'Abu Bakr: the Prophet never collected it.', 'Collection was a reaction to loss.'],
      references: ['Sahih al-Bukhari 4986'],
    },
    {
      id: 'qo-3',
      objection: 'The seven ahruf are just different dialects; the meaning is identical.',
      response:
        'Even if every difference were minor, it still means there was no single wording from the start — which is exactly what “perfectly preserved” usually claims. And the differences were serious enough that Umar nearly attacked another Muslim over them (Sahih al-Bukhari 4992) and that Uthman later destroyed competing copies (Sahih al-Bukhari 4987).',
      keyPoints: ['Multiple wordings from the beginning.', 'Disputes were serious (4992).', 'Led to Uthman’s burning (4987).'],
      references: ['Sahih al-Bukhari 4992', 'Sahih al-Bukhari 4987'],
    },
  ],
  quiz: [
    {
      id: 'qo-q1',
      question: 'What prompted the first collection of the Quran?',
      options: ['A dream of Abu Bakr', 'Many reciters being killed at Yamama', 'A command in the Quran', 'Christian pressure'],
      answer: 1,
      explanation: 'Sahih al-Bukhari 4986: Umar feared a large part of the Quran would be lost.',
    },
    {
      id: 'qo-q2',
      question: 'With whom did Zaid find the last verses of Surat at-Tawba?',
      options: ['With all the companions', 'With only one man, Abu Khuzaima', 'In Aisha’s house', 'On the Kaaba wall'],
      answer: 1,
      explanation: '“I did not find it with anybody other than him” (Sahih al-Bukhari 4986).',
    },
    {
      id: 'qo-q3',
      question: 'In how many different ways was the Quran recited, according to Sahih al-Bukhari 4991?',
      options: ['One', 'Three', 'Seven', 'Ten'],
      answer: 2,
      explanation: 'The seven ahruf.',
    },
    {
      id: 'qo-q4',
      question: 'What did Abu Bakr say when asked to collect the Quran?',
      options: [
        '“It is already collected.”',
        '“How can you do something which Allah’s Messenger did not do?”',
        '“Ask the Christians.”',
        '“Only Aisha may do it.”',
      ],
      answer: 1,
      explanation: 'Sahih al-Bukhari 4986.',
    },
  ],
};
