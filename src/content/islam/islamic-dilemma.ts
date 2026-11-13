import type { Topic } from '../types';

export const islamicDilemma: Topic = {
  id: 'islam-dilemma',
  title: 'The Islamic Dilemma',
  icon: '⚔',
  summary: 'The Quran affirms the Torah and Gospel in the hands of Jews and Christians — but contradicts them. Either way, the Quran is in trouble.',
  lesson: [
    {
      heading: 'What the Quran says about the earlier scriptures',
      body: [
        'The Quran repeatedly affirms the Torah (Tawrat) and the Gospel (Injil) as revelations from God: “He revealed the Torah and the Gospel” (Quran 3:3). It says the Gospel contains “guidance and light” (Quran 5:46).',
        'Crucially, it treats these scriptures as available and authoritative in Muhammad’s own day. “Let the People of the Gospel judge by what Allah has revealed therein” (Quran 5:47). Jews are asked why they come to Muhammad for judgment “while they have the Torah, in which is the judgement of Allah” (Quran 5:43).',
        'It even tells Christians and Jews they are “standing on nothing” unless they uphold the Torah and the Gospel (Quran 5:68), and tells Muhammad, if in doubt, to “ask those who have been reading the Scripture before you” (Quran 10:94).',
        'And the Quran insists that no one can change God’s words (Quran 6:34, 6:115, 10:64, 18:27).',
      ],
      references: ['Quran 3:3', 'Quran 5:43-48', 'Quran 5:68', 'Quran 10:94', 'Quran 6:115', 'Quran 18:27'],
    },
    {
      heading: 'The dilemma',
      body: [
        'The Bible that Christians possessed in the seventh century is the same Bible we have today; complete Greek manuscripts of the whole Bible written centuries before Muhammad still exist. And that Bible teaches that Jesus is the divine Son of God who died on the cross for sins and rose again (John 1:1-14; 1 Corinthians 15:3-4).',
        'So either the Torah and Gospel in Christian hands were reliable in Muhammad’s day, or they were not.',
        'If they were reliable, Islam is false — because the Quran contradicts them on the most central points (the crucifixion, Jesus’ deity, salvation).',
        'If they were not reliable, Islam is false — because the Quran tells Christians to judge by a Gospel they supposedly don’t have, and tells Muhammad to check his revelation against corrupted books, and claims no one can change God’s words.',
      ],
      argument: [
        'The Quran affirms that the Torah and Gospel possessed by Jews and Christians in Muhammad’s day were God’s inspired and authoritative word.',
        'Either those scriptures were preserved, or they were corrupted.',
        'If preserved, the Quran is false, because it contradicts them on Jesus’ death, deity and resurrection.',
        'If corrupted, the Quran is false, because it affirms them as reliable and says God’s words cannot be changed.',
        'Therefore, either way, the Quran is not the word of God.',
      ],
      references: ['John 1:1-14', '1 Corinthians 15:3-4', 'Isaiah 40:8', 'Matthew 24:35'],
    },
    {
      heading: 'Common escape routes',
      body: [
        '“The Injil was a book given to Jesus, not the four Gospels.” But the Quran addresses “the People of the Gospel” living in Muhammad’s day and tells them to judge by what is in it (Quran 5:47). Those people used the four Gospels. There is no other Injil they could have consulted.',
        '“The Quran says they distorted the words.” Read those verses closely. Quran 2:75, 4:46 and 5:13 speak of some Jews distorting words — twisting meaning or speech (“twisting their tongues”, Quran 4:46) — not rewriting every copy of the text. Quran 2:79 condemns some who write a book with their own hands and pass it off as from God — that describes a forgery, not the corruption of the genuine Torah everyone could still consult.',
        'Note also: Sahih al-Bukhari 7363 records Ibn Abbas saying the People of the Book changed their scripture. But that is a companion’s opinion, not the Quran — and it collides with the Quran’s own statements that no one can change God’s words and that Christians should judge by their Gospel.',
      ],
      references: ['Quran 2:75', 'Quran 2:79', 'Quran 4:46', 'Quran 5:13', 'Sahih al-Bukhari 7363'],
    },
  ],
  objections: [
    {
      id: 'id-1',
      objection: 'The Injil the Quran mentions was the original revelation given to Jesus, which is now lost.',
      response:
        'If it was lost before Muhammad, why does the Quran command Christians in Muhammad’s day to judge by what God revealed in it (Quran 5:47)? Why tell them they’re standing on nothing until they uphold it (Quran 5:68)? You can’t judge by a book that doesn’t exist. The only Gospel the Christians of Arabia had was the one we have now.',
      keyPoints: ['Quran 5:47 assumes Christians possess the Gospel.', 'Quran 5:68 commands them to uphold it.', 'No other “Injil” existed in the seventh century.'],
      references: ['Quran 5:47', 'Quran 5:68'],
    },
    {
      id: 'id-2',
      objection: 'The Bible was corrupted after Muhammad’s time.',
      response:
        'That’s historically impossible. We have complete manuscripts of the Bible copied centuries before Muhammad was born, and thousands of New Testament manuscripts spread across the world. They teach the same things about Jesus’ death and deity. And if the Bible was reliable in Muhammad’s day, then the Quran is contradicting reliable scripture.',
      keyPoints: ['Pre-Islamic manuscripts match today’s Bible.', 'Global spread made coordinated corruption impossible.', 'Either way, the dilemma stands.'],
      references: ['Isaiah 40:8', 'Matthew 24:35'],
    },
    {
      id: 'id-3',
      objection: 'The Quran says the Jews “distort words from their places” (tahrif).',
      response:
        'Look at the context of Quran 4:46: it describes them “twisting their tongues” — misusing words in speech. Quran 2:75 says they distorted the meaning after understanding it. That’s misinterpretation, not rewriting the text. Meanwhile the same Quran says no one can change God’s words (Quran 6:115) and tells the Jews the Torah they have contains God’s judgment (Quran 5:43).',
      keyPoints: ['Tahrif verses describe twisting meaning or speech.', 'They target some Jews, not every manuscript.', 'Quran 5:43 affirms the Torah they possessed.'],
      references: ['Quran 4:46', 'Quran 2:75', 'Quran 5:43', 'Quran 6:115'],
    },
    {
      id: 'id-4',
      objection: 'The Quran is the criterion over earlier books (Quran 5:48), so we judge the Bible by the Quran.',
      response:
        'The same verse says the Quran was sent “confirming that which preceded it of the Scripture”. You can’t confirm a book while it is corrupt. And the Quran also tells Muhammad to check with those who read the earlier scripture when in doubt (Quran 10:94). The logic runs the other way: if the Quran confirms the Bible, then the Bible can test the Quran.',
      keyPoints: ['5:48 also says the Quran confirms the earlier scripture.', '10:94 sends Muhammad to the earlier scripture.', 'Confirmation implies the Bible was reliable.'],
      references: ['Quran 5:48', 'Quran 10:94'],
    },
  ],
  quiz: [
    {
      id: 'id-q1',
      question: 'Which verse tells the “People of the Gospel” to judge by what Allah revealed in it?',
      options: ['Quran 2:256', 'Quran 5:47', 'Quran 112:1', 'Quran 4:157'],
      answer: 1,
      explanation: 'Quran 5:47 assumes Christians in Muhammad’s day possessed the Gospel.',
    },
    {
      id: 'id-q2',
      question: 'Quran 10:94 tells Muhammad, if in doubt, to…',
      options: ['Pray for guidance', 'Ask those who have been reading the Scripture before him', 'Consult the angels', 'Ignore the doubt'],
      answer: 1,
      explanation: 'He is sent to the Jews and Christians who read the earlier scriptures.',
    },
    {
      id: 'id-q3',
      question: 'Which verses say no one can change the words of Allah?',
      options: ['Quran 6:115 and 18:27', 'Quran 2:255 and 3:7', 'Quran 9:5 and 9:29', 'Quran 1:1 and 1:7'],
      answer: 0,
      explanation: 'Also Quran 6:34 and 10:64.',
    },
    {
      id: 'id-q4',
      question: 'What does Quran 4:46 actually describe some Jews doing?',
      options: ['Burning every copy of the Torah', 'Twisting words with their tongues', 'Writing a new Gospel', 'Removing the name of Muhammad'],
      answer: 1,
      explanation: 'It describes verbal distortion, not textual corruption of all manuscripts.',
    },
    {
      id: 'id-q5',
      question: 'The conclusion of the Islamic Dilemma is that…',
      options: [
        'The Bible is corrupt.',
        'Whether the Bible was preserved or corrupted, the Quran contradicts itself or the truth.',
        'Christians and Muslims believe the same thing.',
        'The Quran never mentions the Bible.',
      ],
      answer: 1,
      explanation: 'Both horns of the dilemma lead to the Quran being wrong.',
    },
  ],
};
