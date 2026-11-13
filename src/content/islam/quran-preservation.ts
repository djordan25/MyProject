import type { Topic } from '../types';

export const quranPreservation: Topic = {
  id: 'islam-quran-preservation',
  title: 'Uthman’s Burning and the Lost Verses',
  icon: '🔥',
  summary: 'One official text was imposed and the rest destroyed — and Islam’s most trusted hadith describe verses that never made it in.',
  lesson: [
    {
      heading: 'The claim',
      body: [
        '“Indeed, it is We who sent down the Qur’an and indeed, We will be its guardian” (Quran 15:9). Many Muslims argue the Quran has been preserved perfectly, without a single letter changed — proof of its divine origin, while the Bible was corrupted.',
        'The goal here isn’t to mock the Quran, but to show that this claim does not match what Sahih al-Bukhari and Sahih Muslim themselves report.',
      ],
      references: ['Quran 15:9'],
    },
    {
      heading: 'Uthman standardises — and burns the rest',
      body: [
        'Under the third caliph Uthman (about 20 years after Muhammad), Muslims in different provinces were reciting the Quran differently. Hudhaifa urged him to “save this nation before they differ about the Book as Jews and the Christians did before” (Sahih al-Bukhari 4987).',
        'Uthman had a committee led by Zaid bin Thabit copy Hafsa’s manuscript, instructing three Quraishi members that where they differed with Zaid, they should write it in the dialect of Quraish (Sahih al-Bukhari 3506). He sent a copy to every province and “ordered that all the other Qur’anic materials, whether written in fragmentary manuscripts or whole copies, be burnt” (Sahih al-Bukhari 4987).',
        'You only need to burn other copies if they differ. The variant evidence was deliberately destroyed, so the “perfect preservation” of today’s text is the preservation of Uthman’s edition — not proof that it matches what Muhammad recited in every detail.',
        'Even after this, Muslims today recite the Quran in several canonical readings (qira’at), such as Hafs and Warsh, whose differences include actual words and letters, not just pronunciation.',
      ],
      references: ['Sahih al-Bukhari 4987', 'Sahih al-Bukhari 3506'],
    },
    {
      heading: 'Verses that were lost',
      body: [
        'The verse of stoning: Umar said, “Allah sent Muhammad with the truth and revealed the Book to him, and the verse of stoning was included in what was revealed.” He feared people would one day say, “We do not find the verse of stoning in Allah’s Book” (Sahih al-Bukhari 6830; Sahih Muslim 1691). It is not in the Quran today.',
        'The verse of suckling: Aisha said a verse on ten sucklings was revealed, then replaced by five, “and Allah’s Messenger died and it was before that time found in the Holy Qur’an” (Sahih Muslim 1452). It is not in the Quran today.',
        'A forgotten surah: Abu Musa al-Ash’ari said they used to recite a surah similar in length to Surat Bara’at (at-Tawba), which he had forgotten except for one line (Sahih Muslim 1050).',
        'Muhammad himself said a man’s recitation reminded him of verses “which I was caused to forget” (Sahih al-Bukhari 5038). The Quran allows for verses being abrogated or forgotten (Quran 2:106; 87:6-7).',
      ],
      references: ['Sahih al-Bukhari 6830', 'Sahih Muslim 1691', 'Sahih Muslim 1452', 'Sahih Muslim 1050', 'Sahih al-Bukhari 5038', 'Quran 2:106', 'Quran 87:6-7'],
    },
    {
      heading: 'The double standard',
      body: [
        'Muslims often say the Bible is unreliable because of textual variants. But the Bible’s variants are visible: thousands of manuscripts survive, so scholars can compare them and reconstruct the original. The Quran’s early variants were largely destroyed in an official burning.',
        'Ask your friend to apply one standard to both books. If burned variants, lost verses and multiple readings don’t disqualify the Quran, then visible variants can’t disqualify the Bible.',
      ],
      references: ['Isaiah 40:8', '1 Peter 1:24-25'],
    },
  ],
  objections: [
    {
      id: 'qp-2',
      objection: 'Those missing verses were abrogated by Allah, so nothing was lost.',
      response:
        'But Aisha says the five-sucklings verse was still being recited as part of the Quran when Muhammad died (Sahih Muslim 1452). Abrogation after his death would require a new revelation — and there were no more. Umar said the stoning verse was revealed and recited as part of the Book and that its ruling still stood (Sahih al-Bukhari 6830). If its words were removed but its ruling remains, how is that “perfect preservation”?',
      keyPoints: ['Recited at the time of Muhammad’s death (Muslim 1452).', 'No revelation after his death.', 'Ruling kept, words lost (6830).'],
      references: ['Sahih Muslim 1452', 'Sahih al-Bukhari 6830'],
    },
    {
      id: 'qp-3',
      objection: 'Uthman only standardised the Quraysh dialect; the content was the same.',
      response:
        'Then why burn the others? Hudhaifa feared Muslims would “differ about the Book as Jews and Christians did” (Sahih al-Bukhari 4987) — that’s about the text, not accents. And companions like Ibn Mas’ud recited differently and rejected surahs 113-114 as Quran (Sahih al-Bukhari 4977). I’m not saying the Quran is wildly different — I’m saying letter-perfect preservation isn’t what Bukhari and Muslim describe.',
      keyPoints: ['Burning implies meaningful differences.', 'Ibn Mas’ud differed on contents.', 'Be measured: challenge “perfect”, not “roughly preserved”.'],
      references: ['Sahih al-Bukhari 4987', 'Sahih al-Bukhari 4977'],
    },
    {
      id: 'qp-4',
      objection: 'The Bible has thousands of variants; the Quran has none.',
      response:
        'The Bible’s variants are visible because thousands of manuscripts survived and weren’t destroyed — that’s how we know what the original said. The Quran’s early variant copies were burned (Sahih al-Bukhari 4987), it was revealed in seven ways (Sahih al-Bukhari 4992), and it is still recited in several canonical readings. Apply the same standard to both books, and the Bible comes out very well.',
      keyPoints: ['Visible variants = evidence, not weakness.', 'Quran’s variants were destroyed.', 'Seven ahruf and multiple readings.'],
      references: ['Sahih al-Bukhari 4987', 'Sahih al-Bukhari 4992', 'Isaiah 40:8'],
    },
  ],
  quiz: [
    {
      id: 'qp-q1',
      question: 'What did Uthman order done with other Quranic materials?',
      options: ['Stored in Medina', 'Burned', 'Sent to Damascus', 'Memorised'],
      answer: 1,
      explanation: 'Sahih al-Bukhari 4987.',
    },
    {
      id: 'qp-q2',
      question: 'Which verse did Umar say was revealed but feared people would not find in the Book?',
      options: ['The verse of the throne', 'The verse of stoning', 'The verse of light', 'The verse of the sword'],
      answer: 1,
      explanation: 'Sahih al-Bukhari 6830 and Sahih Muslim 1691.',
    },
    {
      id: 'qp-q3',
      question: 'According to Sahih Muslim 1452, the verse on five sucklings was…',
      options: ['Never revealed', 'Still recited as Quran when Muhammad died', 'Written by Uthman', 'Found with Ibn Mas’ud'],
      answer: 1,
      explanation: 'Aisha’s report — yet it is not in today’s Quran.',
    },
    {
      id: 'qp-q4',
      question: 'Uthman told the Quraishi scribes that where they differed with Zaid, they should write in…',
      options: ['Hebrew', 'The dialect of Quraish', 'Syriac', 'Whatever dialect they preferred'],
      answer: 1,
      explanation: 'Sahih al-Bukhari 3506.',
    },
  ],
};
