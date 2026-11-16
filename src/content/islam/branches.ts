import type { Topic } from '../types';

export const branchesOfIslam: Topic = {
  id: 'islam-branches',
  title: 'Sunni, Shia and Others',
  icon: '⑂',
  summary: 'Not every Muslim accepts the same sources. Find out who you are talking to before you choose your arguments.',
  lesson: [
    {
      heading: 'Ask before you argue',
      body: [
        'Much of this course argues from Sahih al-Bukhari and Sahih Muslim. That works with Sunni Muslims, who are the large majority, roughly 85 to 90 percent. It works less well with others. So ask early, and with real interest: “Which books do you follow besides the Quran?”',
        'Whatever the answer, arguments drawn from the Quran itself apply to every group below, because all of them accept the Quran.',
      ],
    },
    {
      heading: 'Sunni Muslims',
      body: [
        'Sunnis follow the Quran and the Sunnah, the example of Muhammad, as recorded in six major hadith collections. Bukhari and Muslim are the most trusted of the six. Most Sunnis follow one of four schools of law (Hanafi, Maliki, Shafi‘i and Hanbali), which differ on practice more than on belief.',
        'Every lesson in this course applies directly to Sunnis.',
      ],
    },
    {
      heading: 'Shia Muslims',
      body: [
        'Shia Muslims are roughly 10 to 15 percent of the Muslim world, and the majority in Iran and Iraq. They believe leadership after Muhammad belonged to his cousin and son-in-law Ali and to a line of Imams from his family. Most are “Twelvers”, who recognise twelve Imams.',
        'Shia Muslims have their own hadith collections and do not trust many of the narrators Sunnis rely on. “Sahih al-Bukhari says” carries little weight with them.',
        'What still applies: everything argued from the Quran. The Quran’s affirmation of the Gospel (Quran 5:47), its denial of the crucifixion (Quran 4:157), its picture of Christian belief and its internal difficulties are the same for Shia and Sunni.',
        'Notice, too, what the split shows. The two largest bodies of Muslims disagree about which reports of Muhammad’s words are genuine. That is the problem of the hadith in plain view.',
      ],
      references: ['Quran 5:47', 'Quran 4:157'],
    },
    {
      heading: 'Quran-only Muslims',
      body: [
        'A small minority, often called Quranists, reject the hadith altogether and follow the Quran alone. Arguments from Bukhari and Muslim will not move them.',
        'Use the Quran-based lessons, and ask two questions. How do you know how to pray, since the Quran does not give the details? And how do you obey the Quran’s command to obey the Messenger (Quran 3:32) without a record of what he said?',
      ],
      references: ['Quran 3:32'],
    },
    {
      heading: 'Ahmadi Muslims',
      body: [
        'The Ahmadiyya movement began in India in the late nineteenth century with Mirza Ghulam Ahmad, whom its members regard as the Promised Messiah and Mahdi. Most other Muslims consider Ahmadis to be outside Islam, and they are persecuted in several countries.',
        'Ahmadis teach that Jesus was crucified but survived, later travelling east and dying a natural death. So with an Ahmadi you are answering the “swoon” theory, which the lesson Denying the Crucifixion covers.',
      ],
    },
    {
      heading: 'Sufis, and Muslims in name',
      body: [
        'Sufism is a mystical tradition found among both Sunnis and Shia, stressing love for God and inward experience. Sufis are often glad to talk about knowing God personally. Jesus’ words are a natural place to begin: eternal life is to know the only true God and Jesus Christ whom he sent (John 17:3).',
        'Many Muslims are Muslim by family and culture and know little of the Quran or the hadith. Detailed arguments about sources may mean nothing to them. Begin with Jesus himself and with the gospel (see Sharing the Gospel with a Muslim).',
      ],
      references: ['John 17:3'],
    },
  ],
  objections: [
    {
      id: 'ib-1',
      followUps: [
        { reply: 'Our Imams explained the Quran, and they taught that the Gospel was changed.', answer: 'Then the question is whether that teaching fits the Quran’s own words. It tells the people of the Gospel to judge by it (Quran 5:47) and says none can alter Allah’s words (Quran 6:115). If a later teacher says the opposite, which do you follow: the teacher or the Quran?' },
      ],
      objection: 'I am Shia. Bukhari and Muslim are Sunni books, and I don’t accept them.',
      response:
        'That’s helpful to know, thank you. Then let’s stay with the Quran, which we can both open. It tells the people of the Gospel to judge by what Allah revealed in it (Quran 5:47), and says no one can change Allah’s words (Quran 6:115). Yet it denies what that Gospel teaches about Jesus’ death (Quran 4:157). How do you put those together?',
      keyPoints: ['Thank them and adjust.', 'Argue from the Quran alone.', 'The Quran’s affirmation of the Gospel applies to all Muslims.'],
      references: ['Quran 5:47', 'Quran 6:115', 'Quran 4:157'],
    },
    {
      id: 'ib-2',
      followUps: [
        { reply: 'Sunni and Shia still share one Quran.', answer: 'They do, and Christians share the same New Testament. That is the fair comparison. The difference lies a step further back: Muslims disagree about which accounts of their prophet’s words and deeds are genuine, and those accounts are where the prayers, the law and the story of the Quran itself come from.' },
      ],
      objection: 'Christians are split into thousands of denominations. Our divisions are nothing by comparison.',
      response:
        'Christians do differ, and I won’t pretend otherwise. But Catholics, Orthodox and Protestants read the same Gospels and confess the same thing about Jesus: that he died for our sins and rose again (1 Corinthians 15:3-4). My point about Sunni and Shia is narrower. They disagree over which records of Muhammad’s words are authentic, and Islam’s law and practice depend on those records.',
      keyPoints: ['Admit Christian divisions.', 'The same Gospels and the same gospel.', 'The Sunni–Shia dispute is about the sources themselves.'],
      references: ['1 Corinthians 15:3-4', 'Ephesians 4:4-6'],
    },
  ],
  quiz: [
    {
      id: 'ib-q1',
      question: 'What is a good first question before choosing your arguments?',
      options: ['“Why are you a Muslim?”', '“Which books do you follow besides the Quran?”', '“Have you read the hadith?”', '“Are you a good Muslim?”'],
      answer: 1,
      explanation: 'The answer tells you whether arguments from Bukhari and Muslim will carry weight.',
    },
    {
      id: 'ib-q2',
      question: 'Which arguments apply to Sunni, Shia and Quran-only Muslims alike?',
      options: ['Those from Sahih al-Bukhari', 'Those from the Quran itself', 'Those from Shia collections', 'None'],
      answer: 1,
      explanation: 'All of these groups accept the Quran.',
    },
    {
      id: 'ib-q3',
      question: 'What do Ahmadi Muslims teach about the crucifixion?',
      options: ['Jesus was never put on a cross', 'Jesus was crucified but survived', 'Jesus died and rose', 'Someone else died in his place'],
      answer: 1,
      explanation: 'A version of the swoon theory.',
    },
    {
      id: 'ib-q4',
      question: 'Roughly what share of Muslims are Sunni?',
      options: ['About half', 'About two thirds', '85 to 90 percent', 'Nearly all'],
      answer: 2,
      explanation: 'Shia Muslims are roughly 10 to 15 percent.',
    },
  ],
};
