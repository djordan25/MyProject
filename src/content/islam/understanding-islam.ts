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
        'Biography (sira): the earliest surviving full biography of Muhammad was written by Ibn Ishaq, about 120 years after his death, and survives in later editions and in the history of al-Tabari. Muslims value it for the story of Muhammad’s life, but hold it to a lower standard than the hadith, and will often reject a report from it that they dislike.',
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
        {
          reply: 'You only read what Islam’s critics write.',
          answer: 'I’m quoting the Quran and Sahih al-Bukhari, not their critics. If I have misread either, show me in the text and I will change what I say.',
          followUps: [
            {
              reply: 'You read them in English. The Quran can only be understood in Arabic, and with the scholars to explain it.',
              answer: 'I use Sahih International, a translation made by Muslims, and I check the classical commentators such as Ibn Kathir. The Quran says it was made “easy for remembrance” (Quran 54:17) and that Muhammad was sent to all mankind (Quran 34:28). Most Muslims are not Arabs and meet the Quran in translation too. If the translation misleads at a particular verse, show me where and I will look again.',
              followUps: [
                {
                  reply: 'A translation still gives you verses without their context. You need to know when and why each verse was revealed.',
                  answer: 'I agree that context matters, and I ask the same of anyone who quotes the Bible. So let’s read the whole passage together, and you tell me the occasion as your scholars give it. If the meaning changes, I will say so. If it does not, the difficulty is still there and deserves an answer.',
                },
              ],
            },
          ],
        },
        {
          reply: 'You are not seeking the truth. You only want to convert me.',
          answer: 'I do hope you will come to know Christ, and I won’t hide that. You hope I will become a Muslim, and the Quran tells you to invite people to the way of your Lord (Quran 16:125). Wanting to persuade someone is not dishonest. What matters is whether what each of us says is true, so let’s test it (1 Thessalonians 5:21).',
          followUps: [
            {
              reply: 'Then would you become a Muslim if I showed you that Islam is true?',
              answer: 'Yes. My faith rests on a claim that can be tested. Paul says that if Christ has not been raised, “your faith is futile; you are still in your sins” (1 Corinthians 15:17). If Jesus did not die and rise, I should not be a Christian. So I ask you the same: if the evidence shows that he did, would you follow him?',
            },
          ],
        },
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
        {
          reply: 'The Quran is fully detailed. It needs nothing else.',
          answer: 'Then show me from the Quran alone how many daily prayers there are and what to say in them. And the Quran itself commands obedience to the Messenger (Quran 3:32). How do you obey him without knowing what he said?',
          followUps: [
            {
              reply: 'The prayer was handed down by the practice of the whole community, generation after generation. That is not hadith.',
              answer: 'Then you already accept guidance from outside the Quran, carried by the community. That is what the hadith claim to be. The Quran itself points to instruction it does not contain: it speaks of the direction of prayer “which you used to face” (Quran 2:143), yet no verse of the Quran commands that first direction. Muhammad was giving binding instruction that is not in the book.',
              followUps: [
                {
                  reply: 'To obey the Messenger is to obey the message he delivered, which is the Quran. His only duty was to deliver it.',
                  answer: 'The Quran asks for more than that. It says they do not truly believe until they make Muhammad judge of their disputes and accept his decisions without resistance (Quran 4:65). It calls him “an excellent pattern” (Quran 33:21) and says he was sent to make clear to the people what was sent down to them (Quran 16:44). Decisions, a pattern of life and explanations are not the text of the Quran. Without some record of them, those verses cannot be obeyed today.',
                },
              ],
            },
          ],
        },
        {
          reply: 'Bukhari collected his hadith more than two hundred years after the Prophet. Why should anyone trust that?',
          answer: 'That is a serious point, and I am not asking you to trust Bukhari. I quote him because most Muslims do. But see what you lose if the hadith go. The account of how the Quran was gathered after Muhammad’s death, and how Uthman made the standard copies and burned the rest, comes from the same collections (Sahih al-Bukhari 4986, 4987). So does nearly everything known about Muhammad’s life. The Quran mentions him by name only four times (Quran 3:144; 33:40; 47:2; 48:29).',
          followUps: [
            {
              reply: 'Allah promised to guard the Quran himself (Quran 15:9). I do not need the hadith to know it was preserved.',
              answer: 'That promise stands inside the book whose preservation is in question, so it cannot be the evidence for it. A historical claim needs historical support, and for the Quran that support is the tradition you have set aside. The Gospels, by comparison, were written while eyewitnesses were still alive, and Luke says he drew on those eyewitnesses and investigated everything carefully (Luke 1:1-4).',
            },
          ],
        },
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
        {
          reply: 'We honour Jesus by refusing to call him God.',
          answer: 'Jesus said the opposite: all are to honour the Son just as they honour the Father, and “Whoever does not honor the Son does not honor the Father who sent Him” (John 5:23). To give him less than he claimed is not honour.',
          followUps: [
            {
              reply: 'That is John, the last Gospel to be written. In Mark, the earliest, Jesus never claims to be God.',
              answer: 'Look at what he does and says in Mark. He forgives a man’s sins, and the scribes object, “Who can forgive sins but God alone?” (Mark 2:5-7). He calls himself Lord of the Sabbath (Mark 2:28). At his trial he says he will be seen sitting at the right hand of Power and coming with the clouds of heaven, and the high priest calls it blasphemy (Mark 14:61-64). A prophet is not condemned for blasphemy for claiming to be a prophet.',
              followUps: [
                {
                  reply: 'In the same Gospel he says, “Why do you call me good? No one is good except God alone.” And he prays to God. God does not pray.',
                  answer: 'He does not say, “I am not good.” He asks the man why he uses the word, and then tells him to sell everything he owns and “come, follow Me” (Mark 10:21), the kind of allegiance owed to God. He prays because the Son truly became man: he “emptied Himself, taking the form of a servant” (Philippians 2:6-8). A real man prays. The lesson Answering: “Jesus Never Claimed to Be God” takes these verses one by one.',
                },
              ],
            },
          ],
        },
        {
          reply: 'The Quran honours Jesus more than you do. It defends his mother from slander, and it does not leave him to die in shame on a cross.',
          answer: 'I am glad the Quran defends the virgin birth. But to honour a man is to take him at his word, and Jesus said he must be killed and rise again (Mark 8:31) and that he came “to give His life as a ransom for many” (Mark 10:45). He spoke of his death as the hour when he would be glorified (John 12:23-24). To say it never happened does not rescue his honour. It removes the thing he said he came to do.',
          followUps: [
            {
              reply: 'When Jesus returns he will break the cross and rule as a Muslim. That will show whose Jesus is the real one.',
              answer: 'That is from the hadith: the son of Mary will descend as a just ruler and break the cross (Sahih al-Bukhari 2222). Notice what Islam grants here. Jesus is alive now, and he, not Muhammad, is the one who comes back at the end to rule. The Bible says the same and gives the reason: God will judge the world by the man he has appointed, and he has given proof of this “by raising Him from the dead” (Acts 17:31). Why is it Jesus who returns?',
            },
          ],
        },
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
    {
      id: 'iu-q6',
      question: 'What is the Sunnah?',
      options: ['The Arabic text of the Quran', 'The example of Muhammad: what he said, did and approved', 'The consensus of the four schools of law', 'A commentary on the Quran'],
      answer: 1,
      explanation: 'The Sunnah is recorded in the hadith, and most of Islamic practice comes from it. The Quran commands obedience to the Messenger (Quran 3:32).',
    },
    {
      id: 'iu-q7',
      question: 'In the Sahih International translation, what do words in [square brackets] show?',
      options: ['Words Muhammad spoke himself', 'Verses that were later abrogated', 'Words the translators added, which are not in the Arabic', 'Words taken from the hadith'],
      answer: 2,
      explanation: 'The brackets mark the translators’ additions. Sometimes they soften a difficulty, so notice them.',
    },
    {
      id: 'iu-q8',
      question: 'A hadith in Sunan Abi Dawud is graded da‘if. What does that mean?',
      options: ['It is weak and carries little weight', 'It is authentic', 'It is found in both Sahih collections', 'It was narrated by a wife of Muhammad'],
      answer: 0,
      explanation: 'Muslim scholars grade hadith as sahih (authentic), hasan (good) or da‘if (weak). Do not build an argument on a weak report.',
    },
    {
      id: 'iu-q9',
      question: 'Who wrote the earliest surviving full biography of Muhammad?',
      options: ['Al-Bukhari', 'Ibn Kathir', 'Al-Tabari', 'Ibn Ishaq'],
      answer: 3,
      explanation: 'Ibn Ishaq wrote about 120 years after Muhammad’s death. His work survives in later editions and in the history of al-Tabari.',
    },
    {
      id: 'iu-q10',
      question: 'What is a tafsir?',
      options: ['A collection of Muhammad’s sayings', 'A biography of Muhammad', 'A verse-by-verse commentary on the Quran', 'A school of Islamic law'],
      answer: 2,
      explanation: 'Commentators such as al-Tabari, Ibn Kathir and the two Jalals show how Muslims have traditionally read a verse.',
    },
    {
      id: 'iu-q11',
      question: 'Why is it useful to quote a classical commentator such as Ibn Kathir?',
      options: [
        'Muslims treat the commentators as equal to the Quran',
        'It answers the reply “that is only your interpretation”',
        'The commentators were Christians',
        'Commentaries are older than the Quran',
      ],
      answer: 1,
      explanation: 'A classical commentary shows how Muslims themselves have traditionally understood the verse.',
    },
    {
      id: 'iu-q12',
      question: 'In what order of strength should you use Muslim sources?',
      options: [
        'Biography, then commentary, then hadith, then the Quran',
        'Bukhari and Muslim, then the Quran, then biography',
        'The Quran, then Bukhari and Muslim, then other graded hadith, then commentary and biography',
        'Commentary, then the Quran, then other graded hadith',
      ],
      answer: 2,
      explanation: 'Start with what carries most weight for a Muslim, and say which source you are quoting.',
    },
    {
      id: 'iu-q13',
      question: 'What does tawhid mean?',
      options: ['The absolute oneness of God', 'The pilgrimage to Mecca', 'The example of Muhammad', 'The Day of Judgement'],
      answer: 0,
      explanation: 'Tawhid is the heart of Islam (Quran 112:1-4). Its opposite is shirk, associating partners with God.',
    },
    {
      id: 'iu-q14',
      question: 'Which of these is not one of the five pillars of Islam?',
      options: ['Fasting in Ramadan', 'Almsgiving (zakat)', 'Pilgrimage to Mecca', 'Belief in the angels'],
      answer: 3,
      explanation: 'Belief in the angels is one of the six articles of faith (Sahih Muslim 8). The five pillars are the testimony, prayer, almsgiving, fasting and pilgrimage (Sahih al-Bukhari 8).',
    },
    {
      id: 'iu-q15',
      question: 'Which verse says the Messiah, son of Mary, “was not but a messenger”?',
      options: ['Quran 3:45', 'Quran 5:75', 'Quran 4:157', 'Quran 112:3'],
      answer: 1,
      explanation: 'The verse adds that he and his mother “both used to eat food” (Quran 5:75). Elsewhere the Quran gives him the titles Messiah and “a word from Him” (Quran 3:45).',
    },
    {
      id: 'iu-q16',
      question: 'A Muslim says, “I follow the Quran alone, not the hadith.” Which question presses the point best?',
      options: [
        '“Why do you not read the Bible instead?”',
        '“How do you obey the Messenger, as Quran 3:32 commands, with no record of what he said?”',
        '“Who was the first caliph?”',
        '“Why are there four schools of law?”',
      ],
      answer: 1,
      explanation: 'The Quran commands obedience to the Messenger and does not give the details of the daily prayers. Both depend on a record outside the Quran.',
    },
    {
      id: 'iu-q17',
      question: 'A Muslim says, “We honour Jesus by refusing to call him God.” Which saying of Jesus answers this directly?',
      options: ['John 5:23', 'Mark 1:35', 'Proverbs 18:13', 'Colossians 4:5-6'],
      answer: 0,
      explanation: '“Whoever does not honor the Son does not honor the Father who sent Him” (John 5:23). To give him less than he claimed is not honour.',
    },
    {
      id: 'iu-q18',
      question: 'In Mark 14:61-64, why does the high priest accuse Jesus of blasphemy?',
      options: [
        'Jesus refused to answer any question',
        'Jesus said the temple would be destroyed',
        'Jesus said he would sit at the right hand of Power and come with the clouds of heaven',
        'Jesus healed a man on the Sabbath',
      ],
      answer: 2,
      explanation: 'Even in the earliest Gospel, Jesus claims a place no mere prophet could claim (Mark 14:61-64).',
    },
    {
      id: 'iu-q19',
      question: 'According to the lesson, who brings about conversion?',
      options: ['The person with the best argument', 'The Muslim’s family', 'The local church leader', 'The Holy Spirit'],
      answer: 3,
      explanation: 'The Spirit convicts the world of sin (John 16:8). Arguments clear the way; the gospel is the destination.',
    },
    {
      id: 'iu-q20',
      question: 'The hadith say the son of Mary will descend and break the cross (Sahih al-Bukhari 2222). What does this concede that is useful in conversation?',
      options: [
        'That Jesus is alive now and is the one who returns at the end',
        'That Muhammad will return with him',
        'That the Gospels are the word of God',
        'That Jesus was crucified',
      ],
      answer: 0,
      explanation: 'Islam itself has Jesus, not Muhammad, coming back. The Bible says God will judge the world by the man he raised from the dead (Acts 17:31).',
    },
  ],
};
