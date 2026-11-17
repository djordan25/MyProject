import type { Topic } from '../types';

export const quranManuscripts: Topic = {
  id: 'islam-quran-manuscripts',
  title: 'What the Manuscripts Show',
  icon: '🔎',
  summary: 'Early Quran manuscripts, an erased under-text from Yemen, and the printed editions Muslims use today. The evidence does not support “identical, letter for letter”.',
  lesson: [
    {
      heading: 'Why look at manuscripts?',
      body: [
        'The earlier lessons argued from the hadith. This one looks at physical evidence: the oldest surviving copies of the Quran, studied by Western and Muslim scholars alike. This lesson relies on published scholarship, listed under Further reading, not on the Quran or hadith, so present it as what researchers report.',
        'Be measured. The Quran’s text has been stable since early in Islam’s history, and the differences discussed here are small beside the whole. The claim being tested is the popular one: that every Quran, in every age, is identical to the last letter.',
      ],
    },
    {
      heading: 'The Sana‘a palimpsest',
      body: [
        'In 1972, workers restoring the Great Mosque of Sana‘a in Yemen found a store of very old Quran fragments. One of them is a palimpsest: a parchment whose first writing was scraped off and written over. The upper writing is the standard Quran. The erased lower writing, which can still be read with imaging, is also Quran, and it is among the oldest Quran texts known, from the seventh century.',
        'The lower text is not the standard text. It differs in words and phrases, sometimes has extra or missing words, and arranges some surahs in a different order. The scholars who published it, Behnam Sadeghi and Mohsen Goudarzi, concluded that it belongs to a different line of text from the one Uthman standardised. A minority of its variants match readings Muslim tradition attributes to Ibn Mas‘ud and Ubayy ibn Ka‘b, but it is the codex of neither: they call it a separate companion codex. Elisabeth Puin, who studied it independently, also judges it a non-Uthmanic Quran. Asma Hilali disagrees: she reads far fewer variants and thinks the lower text was something like a scribe’s exercise, a view Nicolai Sinai has argued does not fit the manuscript.',
        'So the manuscript shows in ink what the hadith describe: more than one form of the Quran existed in the first decades. Why this copy was erased is not known. The parchment may have been worn or damaged, or the text may have become obsolete once the standard one was imposed (compare Sahih al-Bukhari 4987, where other copies are burnt).',
      ],
      references: ['Sahih al-Bukhari 4987'],
    },
    {
      heading: 'Is there a copy from Uthman’s own hand?',
      body: [
        'Famous manuscripts in Istanbul (the Topkapi codex) and Tashkent (the Samarkand codex) are traditionally said to be Uthman’s own copies. Scholars who have examined them date them after Uthman’s death: the Topkapi codex to the late seventh or the first half of the eighth century, and the Samarkand codex to the eighth or ninth. The Muslim scholar Tayyar Altıkulaç, who published the Topkapi manuscript, himself concluded that it is not one of the copies Uthman sent out.',
        'The Birmingham leaves made headlines in 2015 when their parchment was radiocarbon dated to between about AD 568 and 645. They are two leaves, with parts of three surahs, and their text is close to the standard one. That shows the standard text is early. It cannot show that the whole Quran was copied without change, and a radiocarbon date tells when the animal died, not when the ink was applied.',
        'No complete Quran survives from the lifetime of Muhammad or of Uthman.',
      ],
    },
    {
      heading: 'Corrections in the early copies',
      body: [
        'Early Quran manuscripts were corrected by later hands: words erased and rewritten, letters inserted, text added in the margin. The researcher Daniel Brubaker has documented a great many of these. Often the change brings a manuscript into line with what later became the standard wording.',
        'Some corrections are ordinary slips being fixed, as in any hand-copied book. Brubaker argues that the pattern shows a text still being brought into uniformity after Uthman’s time.',
      ],
    },
    {
      heading: 'Which Quran is printed today?',
      body: [
        'Most Qurans printed today follow one reading, called Hafs from ‘Asim. It had already spread widely under the Ottomans, and an edition printed in Cairo in 1924 gave it the standard printed form now used almost everywhere. The editors of that edition worked from the traditional literature on the readings, not from the oldest manuscripts.',
        'Other readings are still in use, above all Warsh from Nafi‘ in North and West Africa. Muslim scholars accept ten readings as valid, each handed down in two transmissions. Seven were selected in the tenth century by the scholar Ibn Mujahid, about three hundred years after Muhammad, and three more, already taught for centuries, were given the same standing through the work of Ibn al-Jazari (d. 1429).',
        'The readings differ in vowels, in letters and sometimes in meaning. In Quran 1:4, Hafs reads maaliki, “owner” or “master” of the Day of Judgment, and Warsh reads maliki, “king”. English translations often blur the difference. In Quran 2:125, Hafs has a command to take the station of Abraham as a place of prayer, and Warsh has a statement that people took it. In Quran 3:146, Hafs says many devout men “fought” alongside a prophet, and Warsh reads “was killed”, of the prophet or of the men with him.',
        'Muslims hold that every accepted reading was revealed. Grant that for the sake of argument: it still means there is not one Quran text but several, and that the printed form in most people’s hands was fixed in the twentieth century.',
      ],
      references: ['Quran 1:4', 'Quran 2:125', 'Quran 3:146', 'Sahih al-Bukhari 4992'],
    },
    {
      heading: 'How to use this',
      body: [
        'Do not overclaim. You are not arguing that the Quran is wildly corrupt. You are showing that it has a human history of variants, editing and standardisation, like other ancient books.',
        'Then ask for one standard. Muslims are taught that variants disqualify the Bible. If erased texts, corrected manuscripts and multiple readings do not disqualify the Quran, the Bible’s openly documented variants cannot disqualify it either (see Uthman’s Burning and the Lost Verses).',
        'Some Muslim scholars now say openly that the simple account given to ordinary believers leaves out much of this history. Your Muslim friend may never have heard it. Share it as information, with the sources, and give them time.',
      ],
    },
  ],
  objections: [
    {
      id: 'mq-1',
      objection: 'The Birmingham manuscript proves the Quran has not changed since the time of Muhammad.',
      response:
        'It shows that the standard text of a few passages is very early, and that is worth acknowledging. But it is two leaves out of a whole book, and the dating is of the parchment, not the writing. From the same early period we also have the erased lower text from Sana‘a, which is a different form of the Quran. Early evidence cuts both ways.',
      keyPoints: ['Two leaves, parts of three surahs.', 'The date is of the parchment.', 'Sana‘a’s lower text is just as early and different.'],
      followUps: [
        { reply: 'Two leaves that match exactly are still strong evidence.', answer: 'They are evidence for those passages. The claim Muslims make is about every word of every surah, and for that you would need the whole book, in many early copies, all agreeing. What we actually have includes a copy that disagrees and was erased.' },
      ],
    },
    {
      id: 'mq-2',
      objection: 'The lower text at Sana‘a is just a student’s practice copy full of mistakes.',
      response:
        'One scholar, Asma Hilali, has suggested something like that. Others who studied it, including Sadeghi and Goudarzi, argue that it is a distinct form of the text, and that some of its differences match readings Muslim tradition itself attributes to companions of Muhammad. Either way, someone erased it and wrote the standard text over the top, which fits Bukhari’s report that Uthman ordered other copies burnt (Sahih al-Bukhari 4987).',
      keyPoints: ['Scholars disagree; say so.', 'Sadeghi and Goudarzi: some variants match companion readings.', 'It was erased and replaced.'],
      references: ['Sahih al-Bukhari 4987'],
      followUps: [
        { reply: 'Parchment was costly, so scribes reused it. That proves nothing.', answer: 'Reuse was common, yes. What matters is what was underneath: not a letter or a contract, but a Quran with different wording. A community with one fixed text does not produce that.' },
      ],
    },
    {
      id: 'mq-3',
      objection: 'All the readings were revealed by Gabriel. They are a mercy, and they enrich the meaning.',
      response:
        'That is what Muslims believe, and the hadith do speak of seven ways of reciting (Sahih al-Bukhari 4992). But notice what follows. If Hafs and Warsh are both revelation, then the Quran is not one text identical to the letter; it is a family of texts. And the list of accepted readings was drawn up by scholars centuries after Muhammad. That is a human process of selection, the very thing Muslims say disqualifies the Bible.',
      keyPoints: ['Several accepted texts, not one.', 'Selected by scholars centuries later.', 'Apply the same standard to the Bible.'],
      references: ['Sahih al-Bukhari 4992', 'Quran 3:146'],
      followUps: [
        { reply: 'The differences never change the meaning.', answer: 'Sometimes they do. In Quran 3:146 one reading speaks of fighting and the other of being killed. Those are different events. The difference is small beside the whole book, but it is a difference in what the text says.' },
      ],
    },
  ],
  quiz: [
    {
      id: 'mq-q1',
      question: 'What is a palimpsest?',
      options: ['A decorated title page', 'A parchment whose first writing was erased and written over', 'A commentary in the margin', 'A copy made for a caliph'],
      answer: 1,
      explanation: 'At Sana‘a, the erased lower writing is a Quran text that differs from the standard one.',
    },
    {
      id: 'mq-q2',
      question: 'What does the Birmingham manuscript consist of?',
      options: ['A complete Quran', 'Two leaves with parts of three surahs', 'Half of the Quran', 'A copy signed by Uthman'],
      answer: 1,
      explanation: 'Its parchment is very early, but it is a small fragment.',
    },
    {
      id: 'mq-q3',
      question: 'Which reading do most printed Qurans follow today?',
      options: ['Warsh, in a form fixed by Uthman', 'Hafs, in the printed form fixed by the Cairo edition of 1924', 'Ibn Mas‘ud’s, since the seventh century', 'All ten at once'],
      answer: 1,
      explanation: 'Warsh remains in use in North and West Africa.',
    },
    {
      id: 'mq-q4',
      question: 'In Quran 3:146, how do the Hafs and Warsh readings differ?',
      options: ['Only in pronunciation', '“Fought” versus “was killed”', 'One omits the verse', 'They are identical'],
      answer: 1,
      explanation: 'A difference of meaning, not just of sound.',
    },
    {
      id: 'mq-q5',
      question: 'What is the right way to use this evidence?',
      options: [
        'Claim the Quran is completely corrupt',
        'Show it has a human history of variants, and ask for one standard for both books',
        'Avoid mentioning Muslim scholars',
        'Say the Bible has no variants',
      ],
      answer: 1,
      explanation: 'Be measured: challenge “identical to the letter”, not the text’s general stability.',
    },
  ],
  furtherReading: [
    'Behnam Sadeghi & Mohsen Goudarzi — “Ṣan‘ā’ 1 and the Origins of the Qur’ān”, Der Islam 87 (2012)',
    'Asma Hilali — The Sanaa Palimpsest (2017)',
    'Daniel A. Brubaker — Corrections in Early Qur’ān Manuscripts: Twenty Examples (2019)',
    'François Déroche — Qur’ans of the Umayyads (2014)',
    'Shady Hekmat Nasser — The Transmission of the Variant Readings of the Qur’ān (2013)',
    'Keith E. Small — Textual Criticism and Qur’ān Manuscripts (2011)',
    'Behnam Sadeghi & Uwe Bergmann — “The Codex of a Companion of the Prophet and the Qur’ān of the Prophet”, Arabica 57 (2010)',
    'Nicolai Sinai — “Beyond the Cairo Edition: On the Study of Early Quranic Codices”, Journal of the American Oriental Society 140 (2020)',
    'Tayyar Altıkulaç — Al-Muṣḥaf al-Sharīf Attributed to ‘Uthmān bin ‘Affān: The Copy at the Topkapı Palace Museum (IRCICA, 2007)',
    'Marijn van Putten — Quranic Arabic: From its Hijazi Origins to its Classical Reading Traditions (Brill, 2022)',
    'Hythem Sidky — review of Brubaker’s Corrections in Early Qur’ān Manuscripts, Al-‘Uṣūr al-Wusṭā 27 (2019)',
    'University of Birmingham, Cadbury Research Library — “The Birmingham Qur’an: FAQs”',
  ],
};
