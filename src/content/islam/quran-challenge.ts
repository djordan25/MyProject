import type { Topic } from '../types';

export const quranChallenge: Topic = {
  id: 'islam-quran-challenge',
  title: 'The Quran’s Literary Challenge & Prophecy',
  icon: '✒',
  summary: '“Produce a surah like it” and the prophecy of Rome’s victory are offered as proof. Neither establishes divine origin.',
  lesson: [
    {
      heading: 'The challenge',
      body: [
        'The Quran challenges doubters: “produce a surah the like thereof” (Quran 2:23); “bring forth a surah like it” (Quran 10:38); even if mankind and jinn joined together, they could not produce its like (Quran 17:88). Many Muslims see the Quran’s unmatched eloquence (i’jaz) as the miracle proving Islam.',
      ],
      references: ['Quran 2:23-24', 'Quran 10:38', 'Quran 17:88'],
    },
    {
      heading: 'Why the challenge proves nothing',
      body: [
        'No criteria: what counts as “like it”? Rhyme? Length? Rhetoric? Without objective criteria, the challenge can never be met, because the judge — a believing Muslim — decides. A test that cannot fail is not a test.',
        'Uniqueness is not divinity: every great author is unique. No one can produce another Shakespeare play “like it”. That shows genius, not revelation.',
        'Eloquence is not truth: a beautifully written statement can still be false. The real test is whether the Quran’s claims are true — about Jesus, about the Bible, about history.',
        'The hadith show recitation differed in seven modes (Sahih al-Bukhari 4992), and some verses were lost (see Quran Preservation). Which form is the inimitable one?',
      ],
      references: ['Sahih al-Bukhari 4992'],
    },
    {
      heading: 'The “no contradictions” claim',
      body: [
        'Quran 4:82 says that if it were from other than Allah, “they would have found within it much contradiction.” But the Quran contains abrogation — later verses replacing earlier ones (Quran 2:106; 16:101). When opponents noticed verses changing, they called Muhammad an inventor (Quran 16:101).',
        'The Quran’s own internal tension on the earlier scriptures — affirming them (Quran 5:47) while contradicting them — is a further example (see The Islamic Dilemma).',
      ],
      references: ['Quran 4:82', 'Quran 2:106', 'Quran 16:101', 'Quran 5:47'],
    },
    {
      heading: 'The prophecy of the Byzantines (Quran 30:2-4)',
      body: [
        '“The Byzantines have been defeated in the nearest land. But they, after their defeat, will overcome within three to nine years” (Quran 30:2-4). Muslims point to Byzantium’s later victory over Persia as fulfilment.',
        'This is a general prediction about an ongoing war between two superpowers that had traded victories for centuries. Predicting that one side would recover is not the kind of specific, unlikely prophecy that requires God.',
        'Compare biblical prophecy: specific details given centuries in advance — the Messiah’s birthplace (Micah 5:2), his pierced hands and feet and divided garments (Psalm 22:16-18), his death for sins and burial with the rich (Isaiah 53:5-9).',
      ],
      references: ['Quran 30:2-4', 'Micah 5:2', 'Psalm 22:16-18', 'Isaiah 53:5-9'],
    },
  ],
  objections: [
    {
      id: 'qc-1',
      objection: 'No one in 1,400 years has met the Quran’s challenge.',
      response:
        'Who decides whether it’s been met? If the judge is a Muslim who already believes it can’t be done, it never will be. Every great work of literature is “unmatched” in some sense — that shows genius, not divine origin. The more important question is whether the Quran’s content is true. If it denies that Jesus died on the cross — something every first-century source affirms — its beauty doesn’t make it right.',
      keyPoints: ['No objective criteria.', 'Uniqueness ≠ divinity.', 'Truth matters more than style.'],
      references: ['Quran 2:23', 'Quran 4:157', '1 Corinthians 15:3-4'],
    },
    {
      id: 'qc-2',
      objection: 'Muhammad was illiterate (unlettered), so he could never have produced such a book himself.',
      response:
        'Many great poets and storytellers in oral cultures were illiterate — Arabia had a rich tradition of oral poetry. The Quran was recited, not written, by Muhammad, and his opponents even accused him of being taught by someone (Quran 16:103). Literacy isn’t required for powerful speech, so it doesn’t prove a divine source.',
      keyPoints: ['Oral culture of poetry.', 'The Quran was recited, not written by him.', 'Opponents suggested human sources (16:103).'],
      references: ['Quran 7:157', 'Quran 16:103'],
    },
    {
      id: 'qc-3',
      objection: 'The Byzantine prophecy was fulfilled precisely; how could Muhammad know?',
      response:
        'The Byzantines and Persians had been at war for generations, swinging back and forth. A prediction that the defeated side would recover is a reasonable guess, not a miracle. Compare the Bible, which foretold where the Messiah would be born and how he would die, centuries in advance (Micah 5:2; Isaiah 53).',
      keyPoints: ['Two powers trading victories.', 'General, not specific.', 'Compare specific messianic prophecy.'],
      references: ['Quran 30:2-4', 'Micah 5:2', 'Isaiah 53:5-9'],
    },
  ],
  quiz: [
    {
      id: 'qc-q1',
      question: 'Which verse claims mankind and jinn together could not produce the like of the Quran?',
      options: ['Quran 17:88', 'Quran 1:1', 'Quran 30:2', 'Quran 112:4'],
      answer: 0,
      explanation: 'See also Quran 2:23 and 10:38.',
    },
    {
      id: 'qc-q2',
      question: 'What is the biggest weakness of the literary challenge?',
      options: ['It is too easy', 'It has no objective criteria for success', 'It is not in the Quran', 'It only applies to Arabs'],
      answer: 1,
      explanation: 'A test that cannot fail is not a test.',
    },
    {
      id: 'qc-q3',
      question: 'Which verses describe later revelations replacing earlier ones?',
      options: ['Quran 2:106 and 16:101', 'Quran 1:1 and 1:2', 'Quran 112:1 and 112:2', 'Quran 4:157 and 4:158'],
      answer: 0,
      explanation: 'Abrogation sits uneasily with the claim of no contradictions (Quran 4:82).',
    },
    {
      id: 'qc-q4',
      question: 'Which biblical prophecy names the Messiah’s birthplace?',
      options: ['Micah 5:2', 'Isaiah 40:8', 'Psalm 1:1', 'Genesis 1:1'],
      answer: 0,
      explanation: 'Bethlehem, foretold centuries in advance.',
    },
  ],
};
