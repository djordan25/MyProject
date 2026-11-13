import type { Topic } from '../types';

export const quranPreservation: Topic = {
  id: 'islam-quran-preservation',
  title: 'Was the Quran Perfectly Preserved?',
  icon: '📖',
  summary: 'Muslims often claim the Quran is preserved letter for letter. Their own most trusted hadith tell a different story.',
  lesson: [
    {
      heading: 'The claim',
      body: [
        '“Indeed, it is We who sent down the Qur’an and indeed, We will be its guardian” (Quran 15:9). Many Muslims argue that the Quran has been preserved perfectly, without a single letter changed — and that this proves its divine origin, while the Bible has been corrupted.',
        'Approach this carefully. The goal isn’t to mock the Quran but to show that the “perfect preservation” claim does not match what Sahih al-Bukhari and Sahih Muslim themselves report.',
      ],
      references: ['Quran 15:9'],
    },
    {
      heading: 'Collected after Muhammad’s death',
      body: [
        'The Quran was not compiled into one book in Muhammad’s lifetime. After many Quran reciters were killed at the battle of Yamama, Umar urged Abu Bakr to collect it. Zaid bin Thabit was assigned the task and said that, had they ordered him to move a mountain, it would not have been harder. He gathered it “from palm stalks, thin white stones and also from the men who knew it by heart”, and found the last verses of Surat at-Tawba with only one man (Sahih al-Bukhari 4986).',
        'Later, when copying, Zaid found a verse missing that he had heard the Prophet recite — Quran 33:23 — and found it only with Khuzaima bin Thabit (Sahih al-Bukhari 4988).',
      ],
      references: ['Sahih al-Bukhari 4986', 'Sahih al-Bukhari 4988'],
    },
    {
      heading: 'Uthman standardises — and burns the rest',
      body: [
        'Under the third caliph Uthman, Muslims were differing in their recitation so seriously that Hudhaifa urged him to “save this nation before they differ about the Book as Jews and the Christians did before”. Uthman had copies made and sent to each province, and “ordered that all the other Qur’anic materials, whether written in fragmentary manuscripts or whole copies, be burnt” (Sahih al-Bukhari 4987).',
        'You only need to burn other copies if they differ.',
      ],
      references: ['Sahih al-Bukhari 4987'],
    },
    {
      heading: 'Companions who disagreed',
      body: [
        'Ibn Mas’ud, one of four men Muhammad named as teachers of the Quran (Sahih al-Bukhari 4999), said he learned over seventy surahs directly from the Prophet (Sahih al-Bukhari 5000). Yet his companions recited Quran 92:3 differently from the standard text (Sahih al-Bukhari 4944), and Ibn Mas’ud did not count the last two surahs (113 and 114) as part of the Quran (Sahih al-Bukhari 4977).',
        'Umar said Ubai bin Ka’b was “the best of us in recitation, yet we leave some of what he recites” (Sahih al-Bukhari 5005).',
        'The Quran was also recited in seven different modes (ahruf) — so differently that Umar nearly attacked Hisham bin Hakim over his recitation of Surat al-Furqan (Sahih al-Bukhari 4992).',
      ],
      references: ['Sahih al-Bukhari 4999', 'Sahih al-Bukhari 5000', 'Sahih al-Bukhari 4944', 'Sahih al-Bukhari 4977', 'Sahih al-Bukhari 5005', 'Sahih al-Bukhari 4992'],
    },
    {
      heading: 'Verses that were lost or forgotten',
      body: [
        'Umar said the verse of stoning for adultery had been revealed in the Quran and recited, and feared people would one day say, “We do not find the verse of stoning in Allah’s Book” (Sahih al-Bukhari 6830; Sahih Muslim 1691). It is not in the Quran today.',
        'Aisha said a verse on ten sucklings, later replaced by five, was still being recited as Quran when Muhammad died (Sahih Muslim 1452). It is not in the Quran today.',
        'Abu Musa al-Ash’ari said they used to recite a surah similar in length to Surat at-Tawba (Bara’at), which he had forgotten except for one line (Sahih Muslim 1050).',
        'Muhammad himself said a man’s recitation reminded him of verses he had been caused to forget (Sahih al-Bukhari 5038). The Quran itself allows for verses to be abrogated or forgotten (Quran 2:106; 87:6-7).',
      ],
      references: ['Sahih al-Bukhari 6830', 'Sahih Muslim 1691', 'Sahih Muslim 1452', 'Sahih Muslim 1050', 'Sahih al-Bukhari 5038', 'Quran 2:106', 'Quran 87:6-7'],
    },
    {
      heading: 'The double standard',
      body: [
        'Muslims often say the Bible is unreliable because of textual variants. But the Bible’s variants are visible: thousands of manuscripts let us compare and reconstruct the original. The Quran’s early variants were largely destroyed by an official burning.',
        'The Christian case doesn’t depend on perfect copying. God’s word endures (Isaiah 40:8), and the wealth of manuscripts lets us know what the authors wrote. The question is which standard a Muslim will apply consistently.',
      ],
      references: ['Isaiah 40:8', '1 Peter 1:24-25'],
    },
  ],
  objections: [
    {
      id: 'qp-1',
      objection: 'The Quran was memorised by thousands, so it couldn’t have changed.',
      response:
        'Memorisation is impressive, but Sahih al-Bukhari 4986 says many reciters died at Yamama — that’s why the collection began. Zaid had to search for verses and found some with only one man (Sahih al-Bukhari 4986, 4988). And Muslims were differing so badly in recitation that Uthman burned other copies (Sahih al-Bukhari 4987). Memory didn’t prevent variation.',
      keyPoints: ['Reciters died — prompting collection.', 'Some verses found with one person only.', 'Recitation disputes led to burning.'],
      references: ['Sahih al-Bukhari 4986', 'Sahih al-Bukhari 4987', 'Sahih al-Bukhari 4988'],
    },
    {
      id: 'qp-2',
      objection: 'Those missing verses were abrogated by Allah, so nothing was lost.',
      response:
        'But Aisha says the five-sucklings verse was still being recited as part of the Quran when Muhammad died (Sahih Muslim 1452). Abrogation after his death would require a new revelation — and there were no more. Umar said the stoning verse had been revealed and recited as part of the Book, and that its ruling still stood (Sahih al-Bukhari 6830). If he was right, it was lost; if he was wrong, the second caliph didn’t know what was in the Quran.',
      keyPoints: ['Recited at the time of Muhammad’s death (Muslim 1452).', 'No revelation after his death.', 'Umar considered the stoning verse part of the Book.'],
      references: ['Sahih Muslim 1452', 'Sahih al-Bukhari 6830'],
    },
    {
      id: 'qp-3',
      objection: 'Uthman only standardised the Quraysh dialect; the content was the same.',
      response:
        'Then why burn the others? Hudhaifa feared Muslims would “differ about the Book as Jews and Christians did” (Sahih al-Bukhari 4987) — that’s about the text, not accents. And companions like Ibn Mas’ud recited differently and rejected surahs 113-114 as Quran (Sahih al-Bukhari 4977). I’m not saying the Quran is wildly different — I’m saying the claim of letter-perfect preservation isn’t supported by Bukhari and Muslim.',
      keyPoints: ['Burning implies meaningful differences.', 'Ibn Mas’ud differed on contents.', 'Be measured: challenge “perfect”, not “roughly preserved”.'],
      references: ['Sahih al-Bukhari 4987', 'Sahih al-Bukhari 4977', 'Sahih al-Bukhari 4944'],
    },
    {
      id: 'qp-4',
      objection: 'The Bible has thousands of variants; the Quran has none.',
      response:
        'The Bible’s variants are visible because thousands of manuscripts survived and weren’t destroyed — that’s how we know what the original said. The Quran’s early variant copies were burned (Sahih al-Bukhari 4987). And the seven modes of recitation (Sahih al-Bukhari 4992) mean the Quran was never just one fixed wording. Applying the same standard to both books, the Bible comes out very well.',
      keyPoints: ['Visible variants = evidence, not weakness.', 'Quran’s variants were destroyed.', 'Seven ahruf — multiple recitations.'],
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
      question: 'Which companion did not consider surahs 113 and 114 part of the Quran?',
      options: ['Abu Bakr', 'Ibn Mas’ud', 'Zaid bin Thabit', 'Aisha'],
      answer: 1,
      explanation: 'Sahih al-Bukhari 4977.',
    },
    {
      id: 'qp-q5',
      question: 'What event prompted Abu Bakr’s collection of the Quran?',
      options: ['The battle of Badr', 'Many reciters being killed at Yamama', 'Muhammad’s command', 'A fire in Medina'],
      answer: 1,
      explanation: 'Sahih al-Bukhari 4986.',
    },
  ],
};
