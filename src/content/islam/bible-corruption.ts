import type { Topic } from '../types';

export const bibleCorruption: Topic = {
  id: 'islam-bible-corruption',
  title: 'Answering: “The Bible Has Been Corrupted”',
  icon: '🛡',
  summary: 'The most common Muslim objection to Christianity — answered from the Bible, the Quran and the hadith.',
  lesson: [
    {
      heading: 'Why the claim exists',
      body: [
        'Because the Bible contradicts the Quran on Jesus’ deity and crucifixion, Muslims conclude the Bible must have been changed (tahrif). Ask a gentle question first: “When was it corrupted, by whom, and how do you know?”',
        'If before Muhammad, the Quran wouldn’t affirm the scriptures in Christian hands (Quran 5:47, 5:68, 10:94). If after Muhammad, we have complete manuscripts from centuries before him that say the same thing. (See The Islamic Dilemma.)',
      ],
      references: ['Quran 5:47', 'Quran 5:68', 'Quran 10:94'],
    },
    {
      heading: 'God preserves his word',
      body: [
        '“The grass withers, the flower fades, but the word of our God will stand forever” (Isaiah 40:8). “Heaven and earth will pass away, but my words will not pass away” (Matthew 24:35).',
        'The Quran agrees no one can change Allah’s words (Quran 6:115; 18:27). If God couldn’t protect the Torah and Gospel, why trust him to protect the Quran?',
      ],
      references: ['Isaiah 40:8', 'Matthew 24:35', '1 Peter 1:24-25', 'Quran 6:115', 'Quran 18:27'],
    },
    {
      heading: 'Paul and the apostles',
      body: [
        'Many Muslims claim Paul corrupted Jesus’ message. But Paul visited Peter and James in Jerusalem (Galatians 1:18-19), and the apostles gave him “the right hand of fellowship” (Galatians 2:9). Peter calls Paul “our beloved brother” and places his letters alongside “the other Scriptures” (2 Peter 3:15-16).',
        'Paul says the gospel of Christ’s death and resurrection is what all the apostles preached: “Whether then it was I or they, so we preach and so you believed” (1 Corinthians 15:11).',
      ],
      references: ['Galatians 1:18-19', 'Galatians 2:9', '2 Peter 3:15-16', '1 Corinthians 15:3-11'],
    },
  ],
  objections: [
    {
      id: 'bc-1',
      objection: 'Jeremiah 8:8 admits “the lying pen of the scribes” corrupted the law.',
      response:
        'Read the context. Jeremiah is rebuking teachers who claimed to be wise because they had the law, while rejecting God’s word (Jeremiah 8:8-9). He’s condemning false teaching and handling of the law — and Jeremiah himself goes on quoting and appealing to the law. Muslims also don’t argue that the Torah of Jeremiah’s day was corrupt, since the Quran affirms the Torah centuries later (Quran 5:43).',
      keyPoints: ['Context: false teachers, not textual rewriting.', 'Jeremiah keeps appealing to the law.', 'The Quran affirms the Torah later (5:43).'],
      references: ['Jeremiah 8:8-9', 'Quran 5:43'],
    },
    {
      id: 'bc-2',
      objection: 'Quran 2:79 condemns those who write the book with their own hands — that’s the Bible.',
      response:
        'The verse condemns people who write something and falsely claim it’s from God. That describes a forgery by some people, not the genuine Torah — which the Quran elsewhere tells Jews to judge by (Quran 5:43).',
      keyPoints: ['A forgery by some, not the real Torah.', 'The Quran still affirms the Torah (5:43).', 'No mention of changing all copies.'],
      references: ['Quran 2:79', 'Quran 5:43'],
    },
    {
      id: 'bc-3',
      objection: 'Paul hijacked Jesus’ religion and invented Christianity.',
      response:
        'The original apostles — Peter, James and John — accepted Paul and his message (Galatians 2:9), and Peter called his letters Scripture (2 Peter 3:15-16). The death and resurrection of Jesus is found in the Gospels and in the preaching of Peter (Acts 2), not just in Paul. And remember the Quran says Jesus’ disciples were true believers whom God made victorious (Quran 61:14).',
      keyPoints: ['Apostles endorsed Paul.', 'Peter preached the same gospel (Acts 2).', 'Quran 61:14 on the disciples.'],
      references: ['Galatians 2:9', '2 Peter 3:15-16', 'Acts 2:22-36', 'Quran 61:14'],
    },
    {
      id: 'bc-4',
      objection: 'There are four Gospels, but the Quran speaks of one Injil. Which is the real one?',
      response:
        'There is one gospel — the good news about Jesus — told in four accounts, as four witnesses describe one event. The New Testament itself speaks of “the gospel” in the singular (Mark 1:1; 1 Corinthians 15:1). The Christians the Quran addressed (Quran 5:47) were reading those very four accounts.',
      keyPoints: ['One message, four accounts.', '“The gospel” is singular in the NT.', 'The Quran addressed readers of these four.'],
      references: ['Mark 1:1', '1 Corinthians 15:1-4', 'Quran 5:47'],
    },
    {
      id: 'bc-5',
      objection: 'Mark 16:9-20 and John 7:53-8:11 aren’t in the earliest manuscripts. The Bible was added to!',
      response:
        'Yes — and every modern Bible tells you so in a footnote. We know these passages are later because we have so many early manuscripts to compare. That’s the strength of the evidence, not a weakness. No Christian doctrine depends on those passages. Compare: the Quran’s variant copies were burned (Sahih al-Bukhari 4987), so we can’t compare them in the same way.',
      keyPoints: ['Concede honestly; Bibles footnote them.', 'Known through abundant manuscripts.', 'No doctrine depends on them.'],
      references: ['Mark 16:8', 'Sahih al-Bukhari 4987'],
    },
    {
      id: 'bc-6',
      objection: 'Muhammad told us not to believe or disbelieve the People of the Book (Sahih al-Bukhari 4485).',
      response:
        'That hadith is about Jews explaining the Torah in Arabic — commentary Muslims couldn’t verify — not a verdict that the scripture itself was corrupt. And the Quran is more direct: it tells Christians to judge by the Gospel (Quran 5:47) and Muhammad to ask those who read the earlier scripture (Quran 10:94). The Quran outranks a hadith.',
      keyPoints: ['Context: Arabic explanations of Hebrew text.', 'Not a verdict of corruption.', 'Quran 5:47 and 10:94 affirm the text.'],
      references: ['Sahih al-Bukhari 4485', 'Quran 5:47', 'Quran 10:94'],
    },
  ],
  quiz: [
    {
      id: 'bc-q1',
      question: 'Which verse shows Peter accepting Paul’s letters as Scripture?',
      options: ['2 Peter 3:15-16', 'Acts 1:8', 'Romans 1:1', 'Jude 3'],
      answer: 0,
      explanation: 'Peter calls Paul “our beloved brother”.',
    },
    {
      id: 'bc-q2',
      question: 'What is the context of Jeremiah 8:8?',
      options: ['Textual corruption of all manuscripts', 'False teachers mishandling the law', 'The Gospel of John', 'The Quran'],
      answer: 1,
      explanation: 'A rebuke of false teaching, not a confession of textual corruption.',
    },
    {
      id: 'bc-q3',
      question: 'How should you respond to the claim that Mark 16:9-20 was added later?',
      options: [
        'Deny it',
        'Agree, note Bibles footnote it, and explain no doctrine depends on it',
        'Say the Quran has the same',
        'Change the subject',
      ],
      answer: 1,
      explanation: 'Honesty and context.',
    },
    {
      id: 'bc-q4',
      question: 'According to 1 Corinthians 15:11, Paul preached…',
      options: ['A different gospel from the apostles', 'The same message as the other apostles', 'Only to Jews', 'A new law'],
      answer: 1,
      explanation: '“Whether then it was I or they, so we preach.”',
    },
  ],
};
