import type { Topic } from '../types';

export const hadithReliability: Topic = {
  id: 'islam-hadith-reliability',
  title: 'Can the Hadith Be Trusted?',
  icon: '⛓',
  summary: 'Islam depends on the hadith — yet the authoritative collections were compiled two centuries after Muhammad from chains of largely oral reports, amid widespread fabrication.',
  lesson: [
    {
      heading: 'Why the hadith matter so much',
      body: [
        'The Quran rarely explains itself. Its context, the details of the five daily prayers, the story of how the Quran was collected, and almost everything known about Muhammad’s life come from the hadith. The Quran commands obedience to the Messenger (Quran 3:32) and calls him “an excellent pattern” (Quran 33:21) — and his example is known through the hadith.',
        'So the reliability of the hadith is not a side issue. Without them, Islam as practised by nearly all Muslims cannot function.',
      ],
      references: ['Quran 3:32', 'Quran 33:21'],
    },
    {
      heading: 'Two hundred years later',
      body: [
        'Muhammad died in AD 632. Al-Bukhari, compiler of Sahih al-Bukhari, died in AD 870; Muslim ibn al-Hajjaj died in AD 875. Their collections were compiled roughly 200 to 240 years after Muhammad’s death. Earlier, smaller collections existed, but the authoritative Sahih collections come from this much later period.',
        'Each hadith comes with a chain of narrators (isnad): “Narrated A: B told me that C said that he heard D…” — often six or more links of people passing a report orally across generations. Muslims rightly object to “telephone game” transmission of the Bible; here the comparison actually applies.',
        'For contrast, the New Testament documents were written within the lifetime of eyewitnesses — Paul could point to over 500 witnesses “most of whom are still alive” (1 Corinthians 15:6; see also Luke 1:1-4).',
      ],
      references: ['1 Corinthians 15:6', 'Luke 1:1-4'],
    },
    {
      heading: '“Do not write anything from me”',
      body: [
        'Muhammad said: “Do not take down anything from me, and he who took down anything from me except the Qur’an, he should efface that” (Sahih Muslim 3004).',
        'So the earliest Muslims were told not to write down his words. Some companions did keep notes — Abu Huraira said Abdullah bin Amr “used to write them” (Sahih al-Bukhari 113) — but the bulk of the hadith was passed on largely orally for generations before being gathered into the great collections.',
      ],
      references: ['Sahih Muslim 3004', 'Sahih al-Bukhari 113'],
    },
    {
      heading: 'Fabrication was a known problem',
      body: [
        'Muhammad repeatedly warned: “Whoever tells a lie against me intentionally, let him occupy his seat in Hell-fire” (Sahih al-Bukhari 107; 110). Az-Zubair said this warning was why he narrated so few hadith (Sahih al-Bukhari 107), and Anas said the same (Sahih al-Bukhari 108). The warning only makes sense if false reports were a real danger.',
        'Muslim tradition itself reports that al-Bukhari examined hundreds of thousands of reports and accepted only a small fraction. Islamic scholars openly acknowledge that fabricated hadith were produced in large numbers for political, sectarian and personal reasons.',
        'Different Muslim groups accept different hadith: Shia Muslims reject much of Bukhari and Muslim and have their own collections, while “Quran-only” Muslims reject hadith altogether. There is no agreed body of reliable reports.',
      ],
      references: ['Sahih al-Bukhari 107', 'Sahih al-Bukhari 108', 'Sahih al-Bukhari 110'],
    },
    {
      heading: 'The hadith dilemma',
      body: [
        'Either the Sahih hadith are reliable, or they are not.',
        'If they are reliable, then Muslims must accept what they report: the Quran’s fragile collection and burned variants (Sahih al-Bukhari 4986, 4987), verses that were lost (Sahih Muslim 1452), Muhammad being under a spell (Sahih al-Bukhari 5763), and his description of his own death (Sahih al-Bukhari 4428).',
        'If they are not reliable, then Islam loses the source of its prayers, its law, its account of the Quran’s preservation, and nearly everything it knows about Muhammad. The claim that the Quran was perfectly preserved itself rests on reports transmitted the same way.',
      ],
      argument: [
        'Islamic practice and the history of the Quran depend on the Sahih hadith.',
        'If the Sahih hadith are reliable, they report lost verses, burned variants, and serious problems in Muhammad’s life.',
        'If they are unreliable, Islam loses its knowledge of Muhammad, its law and the Quran’s history.',
        'Either way, Islam’s claim to a perfectly preserved and verified revelation is undermined.',
      ],
      references: ['Sahih al-Bukhari 4986', 'Sahih al-Bukhari 4987', 'Sahih Muslim 1452', 'Sahih al-Bukhari 5763', 'Sahih al-Bukhari 4428'],
    },
  ],
  objections: [
    {
      id: 'hr-1',
      objection: 'The isnad system is the most rigorous method of verification ever devised.',
      response:
        'Checking chains of narrators is a serious effort, and Muslim scholars deserve credit for it. But a chain only shows who claimed to pass a report on, not that the report is true — and a fabricator can invent a chain as easily as a saying. Muhammad himself warned about people lying in his name (Sahih al-Bukhari 107), and he told people not to write his words down (Sahih Muslim 3004). Up to two centuries of largely oral transmission, with only some early written notes, is a long time for any method to bridge.',
      keyPoints: ['Acknowledge the effort.', 'Chains can be fabricated too.', 'Up to two centuries of largely oral transmission.'],
      references: ['Sahih al-Bukhari 107', 'Sahih Muslim 3004'],
    },
    {
      id: 'hr-2',
      objection: 'You use the hadith when it suits you, but say they are unreliable. That’s inconsistent.',
      response:
        'Good question. I’m using them because you accept them as authentic — it’s an internal critique. I’m asking you to be consistent: if Bukhari is reliable, then its reports about lost verses and burned copies are reliable too. If it isn’t, then where does Islam get its knowledge of Muhammad and the Quran’s history? That’s the dilemma.',
      keyPoints: ['Internal critique: their accepted sources.', 'Consistency is the point.', 'Either horn causes problems.'],
      references: ['Sahih al-Bukhari 4987', 'Sahih Muslim 1452'],
    },
    {
      id: 'hr-3',
      objection: 'The New Testament also came from oral tradition before it was written down.',
      response:
        'Yes, but the gap is decades, not centuries, and the writers were eyewitnesses or their close associates who could be checked by living witnesses (Luke 1:1-4; 1 Corinthians 15:6). Paul’s letters were written within about 20-30 years of Jesus’ death. Bukhari’s collection came about two centuries after Muhammad.',
      keyPoints: ['Decades versus centuries.', 'Eyewitnesses still alive.', 'Paul within 20-30 years.'],
      references: ['Luke 1:1-4', '1 Corinthians 15:6', '2 Peter 1:16'],
    },
  ],
  quiz: [
    {
      id: 'hr-q1',
      question: 'Roughly how long after Muhammad’s death were Sahih al-Bukhari and Sahih Muslim compiled?',
      options: ['About 10 years', 'About 50 years', 'About 200 years', 'About 600 years'],
      answer: 2,
      explanation: 'Muhammad died in 632; Bukhari died in 870 and Muslim in 875.',
    },
    {
      id: 'hr-q2',
      question: 'What did Muhammad say about writing down his words (Sahih Muslim 3004)?',
      options: [
        'Write everything I say',
        'Do not take down anything from me except the Quran',
        'Only Aisha may write',
        'Write in Hebrew',
      ],
      answer: 1,
      explanation: 'Hadith were mainly passed on orally for generations.',
    },
    {
      id: 'hr-q3',
      question: 'Why did Az-Zubair narrate few hadith (Sahih al-Bukhari 107)?',
      options: [
        'He couldn’t remember any',
        'He feared the warning against lying about the Prophet',
        'He was forbidden by Umar',
        'He lived in Syria',
      ],
      answer: 1,
      explanation: 'Fabrication was a real concern from the start.',
    },
    {
      id: 'hr-q4',
      question: 'What is an isnad?',
      options: ['A chapter of the Quran', 'A chain of narrators', 'A prayer position', 'A pilgrimage rite'],
      answer: 1,
      explanation: '“Narrated A: B told me that C said…”.',
    },
  ],
};
