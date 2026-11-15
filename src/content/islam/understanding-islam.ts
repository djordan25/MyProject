import type { Topic } from '../types';

export const understandingIslam: Topic = {
  id: 'islam-understanding',
  title: 'Understanding Islam',
  icon: '☪',
  summary: 'What Muslims actually believe, which sources they treat as authoritative, and how to engage with gentleness and respect.',
  lesson: [
    {
      heading: 'Why understand before you answer',
      body: [
        'You cannot refute what you have not understood. Muslims rightly object when Christians attack a caricature of Islam — just as Christians object when the Trinity is described as three gods. Represent Islam in a way a Muslim would recognise before you critique it.',
        'Remember who you are talking to: a person made in the image of God whom Christ loves, not an opponent to defeat. Our goal is to win people, not just arguments.',
      ],
      references: ['1 Peter 3:15', 'Colossians 4:5-6', '2 Timothy 2:24-26', 'Proverbs 18:13'],
    },
    {
      heading: 'The sources of authority in Islam',
      body: [
        'The Quran: believed to be the literal, uncreated word of Allah, revealed to Muhammad through the angel Gabriel (Jibril) between roughly AD 610 and 632. It has 114 surahs (chapters).',
        'The Sunnah: the example of Muhammad — what he said, did and approved — recorded in the hadith. Most of Islamic practice (how to pray, fast, etc.) comes from the hadith, not the Quran alone. The Quran itself commands obedience to the Messenger (Quran 3:32).',
        'Sunni Muslims (the large majority) regard Sahih al-Bukhari and Sahih Muslim as the two most authentic hadith collections. That is why this course leans on them first: a Sunni Muslim cannot simply dismiss them.',
        'A note on translation: Quran quotations here follow Sahih International, a translation most Muslims accept. Words in [square brackets] are the translators’ additions and are not in the Arabic. Sometimes they soften a difficulty, so notice them.',
      ],
      references: ['Quran 3:32', 'Quran 15:9'],
    },
    {
      heading: 'Other Muslim sources, and how much weight they carry',
      body: [
        'Beyond the Quran and the two Sahih collections, Muslims draw on other writings. Know what each one is, because a Muslim may accept one and brush aside another.',
        'Other hadith collections: Sunan Abi Dawud, Jami at-Tirmidhi, Sunan Ibn Majah, Sunan an-Nasa’i and Musnad Ahmad. Each hadith in them is graded by Muslim scholars as sahih (authentic), hasan (good) or da‘if (weak). When this course cites one, the popup shows its grade. A hadith graded sahih or hasan carries real weight; a weak one does not.',
        'Biography (sira): the earliest life of Muhammad was written by Ibn Ishaq, about 120 years after his death, and survives in later editions and in the history of al-Tabari. Muslims value it for the story of Muhammad’s life, but hold it to a lower standard than the hadith, and will often reject a report from it that they dislike.',
        'Commentary (tafsir): classical commentators such as al-Tabari, Ibn Kathir and the two Jalals explain the Quran verse by verse. They show how Muslims have traditionally read a verse, which answers the reply “that is only your interpretation”.',
        'Use these in order of strength: the Quran first, then Bukhari and Muslim, then other graded hadith, then commentary and biography. Say which one you are quoting.',
      ],
    },
    {
      heading: 'Core beliefs and practices',
      body: [
        'The six articles of faith come from the famous “Hadith of Gabriel”: belief in Allah, His angels, His books, His messengers, the Last Day, and divine decree (Sahih Muslim 8).',
        'The five pillars: the testimony (shahada) that there is no god but Allah and Muhammad is His messenger; the five daily prayers; almsgiving (zakat); fasting in Ramadan; and pilgrimage to Mecca (Sahih al-Bukhari 8).',
        'Tawhid — the absolute oneness of God — is the heart of Islam (Quran 112:1-4). The gravest sin is shirk: associating partners with God. This is why the deity of Christ and the Trinity sound like blasphemy to Muslims (Quran 5:72-73).',
      ],
      references: ['Sahih Muslim 8', 'Sahih al-Bukhari 8', 'Quran 112:1-4', 'Quran 5:72-73'],
    },
    {
      heading: 'What Islam teaches about Jesus',
      body: [
        'Muslims honour Jesus (Isa) as one of the greatest prophets. The Quran affirms his virgin birth (Quran 3:47), calls him the Messiah and “a word from Him” (Quran 3:45), and credits him with miracles including healing and raising the dead (Quran 3:49).',
        'But the Quran denies that Jesus is the Son of God (Quran 19:88-92), denies that he was crucified (Quran 4:157), and insists he was “but a messenger” (Quran 5:75).',
        'This gives you common ground: a Muslim already respects Jesus. Your task is to show that the Jesus of history — and even hints in the Quran itself — point to far more than a prophet.',
      ],
      references: ['Quran 3:45-49', 'Quran 4:157', 'Quran 5:75', 'Quran 19:88-92'],
    },
    {
      heading: 'Practical guidelines for conversations',
      body: [
        'Ask questions before making statements: “What do you mean by that?” and “How did you come to that conclusion?”',
        'Use their sources. A Muslim is far more likely to be persuaded by the Quran and Sahih hadith than by a Western scholar.',
        'Tell the truth plainly. Stating what Islam’s own sources say about Muhammad, and judging it morally, is not mockery or insult: it is honesty. Quote the sources and let them speak.',
        'Bring the conversation back to Jesus: who he is and what he has done. Arguments clear the way; the gospel is the destination.',
        'Pray. Conversion is the work of the Holy Spirit, not of clever arguments.',
      ],
      references: ['John 16:8', '1 Corinthians 2:1-5', 'Romans 10:14-17'],
    },
  ],
  objections: [
    {
      id: 'iu-1',
      followUps: [
        { reply: 'You only read what Islam’s critics write.', answer: 'I’m quoting the Quran and Sahih al-Bukhari, not their critics. If I have misread either, show me in the text and I will change what I say.' },
      ],
      objection: 'You Christians just attack Islam because you don’t understand it.',
      response:
        'That’s a fair challenge, and sometimes it’s true. I want to understand Islam the way you do. That’s why I try to use only the Quran and the hadith collections Sunni Muslims consider most authentic — Sahih al-Bukhari and Sahih Muslim. If I misrepresent something, please correct me. Can I ask you how you understand this passage?',
      keyPoints: ['Acknowledge the concern honestly.', 'Commit to using sources they accept.', 'Invite correction and ask questions.'],
      references: ['Proverbs 18:17', 'James 1:19'],
    },
    {
      id: 'iu-2',
      followUps: [
        { reply: 'The Quran is fully detailed. It needs nothing else.', answer: 'Then show me from the Quran alone how many daily prayers there are and what to say in them. And the Quran itself commands obedience to the Messenger (Quran 3:32). How do you obey him without knowing what he said?' },
      ],
      objection: 'We only follow the Quran; the hadith are not reliable.',
      response:
        'Some Muslims take that position, but the Quran itself repeatedly commands obedience to the Messenger as well as to Allah (Quran 3:32). Without the hadith, you couldn’t know how to perform the five daily prayers — the Quran doesn’t give the details. That’s why the vast majority of Muslims throughout history have accepted Sahih al-Bukhari and Sahih Muslim as authentic.',
      keyPoints: ['Quran commands obeying the Messenger.', 'Core practice depends on hadith.', '“Quran-only” is a small minority view.'],
      references: ['Quran 3:32', 'Sahih al-Bukhari 8'],
    },
    {
      id: 'iu-3',
      followUps: [
        { reply: 'We honour Jesus by refusing to call him God.', answer: 'Jesus said the opposite: all are to honour the Son just as they honour the Father, and “Whoever does not honor the Son does not honor the Father who sent Him” (John 5:23). To give him less than he claimed is not honour.' },
      ],
      objection: 'We Muslims love and respect Jesus more than you think.',
      response:
        'I really appreciate that — it’s something we share. The Quran calls Jesus the Messiah, a word from God, born of a virgin, a worker of miracles. I’d love to look together at who Jesus said he was in the earliest records of his life. If we both respect him, his own words should matter most to us.',
      keyPoints: ['Affirm common ground.', 'Note the Quran’s exalted titles for Jesus.', 'Move toward Jesus’ own claims.'],
      references: ['Quran 3:45', 'John 14:6'],
    },
  ],
  quiz: [
    {
      id: 'iu-q1',
      question: 'Which two hadith collections do Sunni Muslims regard as the most authentic?',
      options: ['Sunan Abu Dawud and Jami at-Tirmidhi', 'Sahih al-Bukhari and Sahih Muslim', 'Muwatta Malik and Musnad Ahmad', 'Sunan an-Nasa’i and Ibn Majah'],
      answer: 1,
      explanation: 'Bukhari and Muslim (“the two Sahihs”) carry the highest authority in Sunni Islam.',
    },
    {
      id: 'iu-q2',
      question: 'What is “shirk”?',
      options: ['Fasting during Ramadan', 'The pilgrimage to Mecca', 'Associating partners with God', 'The testimony of faith'],
      answer: 2,
      explanation: 'Shirk is the gravest sin in Islam, which is why the Trinity and deity of Christ sound blasphemous to Muslims.',
    },
    {
      id: 'iu-q3',
      question: 'Which of these does the Quran affirm about Jesus?',
      options: ['That he was crucified', 'That he is the Son of God', 'That he was born of a virgin', 'That he is God incarnate'],
      answer: 2,
      explanation: 'Quran 3:47 and 19:20 affirm the virgin birth, while denying the crucifixion (4:157) and his divine sonship (19:88-92).',
    },
    {
      id: 'iu-q4',
      question: 'Where are the six articles of faith listed?',
      options: ['Quran 1:1-7', 'The Hadith of Gabriel (Sahih Muslim 8)', 'Quran 112', 'Sahih al-Bukhari 1'],
      answer: 1,
      explanation: 'Gabriel asks Muhammad “What is iman (faith)?” and the six articles are listed.',
    },
    {
      id: 'iu-q5',
      question: 'Which passage commands Christians to answer with “gentleness and respect”?',
      options: ['1 Peter 3:15', 'Romans 3:23', 'John 3:16', 'Galatians 1:8'],
      answer: 0,
      explanation: '1 Peter 3:15 is the charter verse of Christian apologetics.',
    },
  ],
};
