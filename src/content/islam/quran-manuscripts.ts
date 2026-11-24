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
        'Famous manuscripts in Istanbul (the Topkapi codex) and Tashkent (the Samarkand codex) are traditionally said to be Uthman’s own copies. Scholars who have examined them date them after Uthman’s death: the Topkapi codex to the late seventh or the eighth century, and the Samarkand codex to the eighth or ninth. The Muslim scholar Tayyar Altıkulaç, who published the Topkapi manuscript, himself concluded that it is not one of the copies Uthman sent out.',
        'The Birmingham leaves made headlines in 2015 when their parchment was radiocarbon dated to between about AD 568 and 645. They are two leaves, with parts of three surahs, and their text is close to the standard one. That shows the standard text is early. It cannot show that the whole Quran was copied without change, and a radiocarbon date tells when the animal died, not when the ink was applied.',
        'No complete Quran survives from the lifetime of Muhammad or of Uthman.',
      ],
    },
    {
      heading: 'Corrections in the early copies',
      body: [
        'Early Quran manuscripts were corrected by later hands: words erased and rewritten, letters inserted, text added in the margin. The researcher Daniel Brubaker has documented a great many of these. Often the change brings a manuscript into line with the standard wording.',
        'Many corrections are ordinary slips being fixed, as in any hand-copied book. Brubaker argues that the pattern shows a text still being brought into uniformity after Uthman’s time. His reviewer Hythem Sidky calls that unproven and finds most of the examples best explained as simple copying errors.',
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
        'Specialists such as Yasin Dutton note that the state of the text before Uthman is less well known to most Muslims. Your Muslim friend may never have heard it. Share it as information, with the sources, and give them time.',
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
        { reply: 'Two leaves that match exactly are still strong evidence.', answer: 'They are evidence for those passages. The claim Muslims make is about every word of every surah, and for that you would need the whole book, in many early copies, all agreeing. What we actually have includes a copy that disagrees and was erased.',
          followUps: [
            {
              reply: 'It is not only Birmingham. Every early manuscript we have carries the same text, and Western scholars such as Marijn van Putten have shown that they all go back to a single written original, which can only be Uthman’s.',
              answer: 'I accept that finding. Van Putten argues from shared oddities of spelling that the early manuscripts of the standard type descend from one written archetype, and that agrees with what Bukhari says Uthman did (Sahih al-Bukhari 4987). But see what it establishes: that Uthman’s edition was copied with great care. The question is whether that edition held everything Muhammad recited, in the same words, and copies of an edition cannot tell you what was left out of it.',
              followUps: [
                {
                  reply: 'The Birmingham parchment may be older than Uthman’s project. So the standard text was already there before him, perhaps in the Prophet’s own lifetime.',
                  answer: 'The University of Birmingham says the test dates the death of the animal, and that there is no reliable way to date the ink. But take the early date. No one says Uthman’s committee composed the text; Bukhari says they copied sheets already kept by Hafsa (Sahih al-Bukhari 4987). Leaves that agree with the standard show that those passages were stable. And the university describes their script as having few dots and no vowel marks, so they cannot show which of the accepted readings a reciter would have given them.',
                },
              ],
            },
          ],
        },
        {
          reply: 'No New Testament manuscript comes anywhere near that. Your earliest scrap of a Gospel was written a century after Jesus.',
          answer: 'In years, the Quran’s earliest fragments stand closer to its beginning than ours do, and I grant it: the earliest piece of John’s Gospel is usually dated to the second century. But years are not the only measure. The New Testament books were written by several hands, sent to many cities and copied by anyone who wanted them, so no ruler was ever able to call the copies in and issue one text. An early copy of a controlled text shows what the authority issued. Many early copies of an uncontrolled text can be checked against each other.',
        },
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
        { reply: 'Parchment was costly, so scribes reused it. That proves nothing.', answer: 'Reuse was common, yes. What matters is what was underneath: not a letter or a contract, but a Quran with different wording. A community with one fixed text does not produce that.',
          followUps: [
            {
              reply: 'Muslims have always known that companions had their own codices. The lower text is one of them, within the seven ahruf the Prophet allowed. And Sadeghi himself concludes that Uthman’s text is the most faithful to what the Prophet recited.',
              answer: 'That is a fair account of Sadeghi, and I am glad to have it on the table. He and Uwe Bergmann argue that the lower text, the standard text and Ibn Mas‘ud’s all descend from one original going back to Muhammad, and that the standard text reproduces it most accurately. Notice what kind of argument that is. It is textual criticism: comparing lines of text that differ in their words and judging which is nearest the original. “The best of three” is a long way from “never differed by a letter”.',
              followUps: [
                {
                  reply: 'Then there is nothing new here. The Prophet authorised the variants, and the companions later united on one text. That is our own tradition.',
                  answer: 'Then that is what should be taught. Many Muslims are told that no copy of the Quran has ever differed from another by a dot, and this parchment shows otherwise. “Authorised” is a belief about the variants; what the manuscript itself shows is that the wording differed and that the differing copy was scraped clean. When Muslims find the same thing in a Bible manuscript, they call it corruption. I am asking for one word for both.',
                },
              ],
            },
          ],
        },
        {
          reply: 'Asma Hilali edited the manuscript herself. She found a note in it telling the reader how to recite, which fits a classroom exercise, not a finished codex.',
          answer: 'Hilali’s edition deserves weight, and the scholars do disagree. Sadeghi and Goudarzi read the same leaves as the remains of a codex, and they report that its surahs run in an order unlike the standard one and nearer to the orders recorded for Ibn Mas‘ud and Ubayy. But take Hilali’s view. Then a learner in Islam’s first century was writing out Quran passages in wording that is not the standard wording. That is still evidence of a text not yet uniform.',
        },
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
        { reply: 'The differences never change the meaning.', answer: 'Sometimes they do. In Quran 3:146 one reading speaks of fighting and the other of being killed. Those are different events. The difference is small beside the whole book, but it is a difference in what the text says.',
          followUps: [
            {
              reply: 'Both meanings are true. Some prophets fought and some were killed. The readings complete each other, and that is part of the richness of the Quran.',
              answer: 'Both may be true as history. But a verse with one fixed wording says one of them, and the claim I am testing is that the wording is fixed. Other pairs are harder to call two sides of one truth. In Quran 21:4 the Hafs reading has “said”, a report of the Prophet’s words, where the Warsh text printed in Medina has “Say”, a command to him. In Quran 2:184 Hafs speaks of feeding “a poor person” and Warsh of poor people, in the plural, in a verse that lays down a legal duty.',
              followUps: [
                {
                  reply: 'Your Bibles differ far more. The King James Version has verses that modern versions leave out.',
                  answer: 'They do differ at those places, and modern Bibles say so in their footnotes. Christians do not claim that the wording of the King James came down from heaven. We say we have a text with known variants, which scholars weigh in the open. If Muslims said the same of the readings, I would have no argument left. It is the stronger claim, one Quran identical to the letter everywhere, that the readings do not allow.',
                },
              ],
            },
          ],
        },
        {
          reply: 'Nobody selected the readings. Each was handed down from the Prophet by so many people in every generation that error is impossible. Ibn Mujahid only recorded what was already known.',
          answer: 'That is the usual teaching, but it is not the whole history. Yasin Dutton, a specialist in the readings, writes that the seven were Ibn Mujahid’s choice, and that other scholars counted eight, ten, or more. Ibn al-Jazari later admitted three that had been left out, which shows the list was a judgment. Marijn van Putten, citing Shady Nasser’s study, notes that the belief in mass transmission of the readings arose some time after the readers had been canonised. And each reading is in fact traced through named men, such as Hafs from ‘Asim.',
          followUps: [
            {
              reply: 'Even so, the scholars accepted only readings that agree with Uthman’s script, have a sound chain and are good Arabic. That is rigorous preservation.',
              answer: 'Those are the usual three tests, and they are careful ones. Look at what they are, though. Agreement with a written skeleton, a sound chain of named men and correct grammar are tests a scholar applies when he has to choose between readings. Christians apply tests of the same kind to New Testament manuscripts. I respect the work, and only ask that it be called what it is: scholars sifting variants, not a single text that never needed sifting.',
            },
          ],
        },
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
    {
      id: 'mq-q6',
      question: 'Where and when was the Sana‘a palimpsest found?',
      options: [
        'In a cave near Mecca in 1947',
        'In the Great Mosque of Sana‘a in Yemen in 1972',
        'In the Topkapi Palace in Istanbul in 1924',
        'In a university library in Birmingham in 2015',
      ],
      answer: 1,
      explanation: 'Workers restoring the mosque found a store of very old Quran fragments. One of them had an erased Quran text under the visible one.',
    },
    {
      id: 'mq-q7',
      question: 'What did Sadeghi and Goudarzi conclude about the erased lower text at Sana‘a?',
      options: [
        'It is identical to the standard text',
        'It is not a Quran text at all',
        'It belongs to a different line of text from the one Uthman standardised',
        'It was written by Uthman’s own committee',
      ],
      answer: 2,
      explanation: 'They call it a distinct companion codex. Other scholars, such as Asma Hilali, read it differently, and you should say so.',
    },
    {
      id: 'mq-q8',
      question: 'What have scholars concluded about the Topkapi and Samarkand codices?',
      options: [
        'They are the copies Uthman sent out',
        'They are modern forgeries',
        'They contain a text unlike today’s Quran',
        'They were made after Uthman’s death',
      ],
      answer: 3,
      explanation: 'The Muslim scholar Tayyar Altıkulaç, who published the Topkapi manuscript, concluded that it is not one of Uthman’s copies.',
    },
    {
      id: 'mq-q9',
      question: 'What does the radiocarbon date of the Birmingham leaves measure?',
      options: [
        'When the animal whose skin became the parchment died',
        'When the ink was put on the page',
        'When the surahs were first recited',
        'When the leaves were bound into a book',
      ],
      answer: 0,
      explanation: 'The University of Birmingham gives the range as 568 to 645 for the parchment, and says the inks have not been dated.',
    },
    {
      id: 'mq-q10',
      question: 'What has Daniel Brubaker documented in early Quran manuscripts?',
      options: [
        'Whole surahs missing from every copy',
        'Greek translations written in the margins',
        'Corrections by later hands, often bringing the text into line with the standard wording',
        'Signatures of the companions',
      ],
      answer: 2,
      explanation: 'Many are ordinary slips being fixed. Brubaker argues that the pattern shows a text still being brought into uniformity; reviewers such as Hythem Sidky call that unproven.',
    },
    {
      id: 'mq-q11',
      question: 'Who first gathered seven readings of the Quran as a set, and when?',
      options: [
        'Uthman, in the seventh century',
        'Ibn Mujahid, in the tenth century',
        'Zaid bin Thabit, under Abu Bakr',
        'The editors of the Cairo edition, in 1924',
      ],
      answer: 1,
      explanation: 'That was about three hundred years after Muhammad. Ibn al-Jazari (d. 1429) later gave three more the same standing.',
    },
    {
      id: 'mq-q12',
      question: 'Where is the Warsh reading mainly used today?',
      options: ['Turkey and the Balkans', 'Indonesia and Malaysia', 'Iran and Iraq', 'North and West Africa'],
      answer: 3,
      explanation: 'Most of the rest of the Muslim world uses Hafs.',
    },
    {
      id: 'mq-q13',
      question: 'How do the Hafs and Warsh readings differ in Quran 1:4?',
      options: [
        '“Owner” or “master” against “king”',
        '“Day” against “night”',
        '“Judgment” against “mercy”',
        'Warsh leaves the verse out',
      ],
      answer: 0,
      explanation: 'Hafs reads maaliki and Warsh reads maliki. English translations often blur the difference.',
    },
    {
      id: 'mq-q14',
      question: 'How many readings of the Quran do Muslim scholars accept as valid?',
      options: [
        'One only',
        'Seven, each in a single transmission',
        'Ten, each handed down in two transmissions',
        'As many as there were companions',
      ],
      answer: 2,
      explanation: 'Hafs from ‘Asim and Warsh from Nafi‘ are two of those transmissions.',
    },
    {
      id: 'mq-q15',
      question: 'Is there a complete Quran that survives from the lifetime of Muhammad or of Uthman?',
      options: [
        'Yes, the Topkapi codex in Istanbul',
        'Yes, the Samarkand codex in Tashkent',
        'Yes, the Birmingham manuscript',
        'No, none is known',
      ],
      answer: 3,
      explanation: 'The two famous codices are dated after Uthman, and the Birmingham manuscript is two leaves.',
    },
    {
      id: 'mq-q16',
      question: 'How do the Hafs and Warsh readings differ in Quran 2:125?',
      options: [
        'One names Abraham and the other Ishmael',
        'One is a command to take the station of Abraham as a place of prayer, and the other a statement that people took it',
        'One places the House in Mecca and the other in Jerusalem',
        'One has the verse and the other omits it',
      ],
      answer: 1,
      explanation: 'A command and a report are not the same sentence, though the two can be harmonised.',
    },
    {
      id: 'mq-q17',
      question: 'What did the editors of the 1924 Cairo edition work from?',
      options: [
        'The oldest surviving manuscripts',
        'A copy written by Uthman',
        'The traditional literature on the readings',
        'The lower text of the Sana‘a palimpsest',
      ],
      answer: 2,
      explanation: 'The edition gave the Hafs reading the standard printed form now used almost everywhere.',
    },
    {
      id: 'mq-q18',
      question: 'A Muslim points out that the early manuscripts all go back to one written archetype. What does that show?',
      options: [
        'That Uthman’s edition was carefully copied, which no one disputes',
        'That no other form of the Quran ever existed',
        'That the report of Uthman’s burning is false',
        'That the Quran was written down in Muhammad’s lifetime',
      ],
      answer: 0,
      explanation: 'It fits Sahih al-Bukhari 4987. Copies of an edition cannot show what the edition left out.',
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
    'Yasin Dutton — “Orality, Literacy and the ‘Seven Aḥruf’ Ḥadīth”, Journal of Islamic Studies 23 (2012)',
    'University of Birmingham, Cadbury Research Library — “The Birmingham Qur’an: FAQs”',
  ],
};
