/**
 * Material for two games, drawn from the lessons: nothing here says more than the lesson it points to.
 *
 * "Sound or weak?" asks the learner to judge an argument a Christian might be tempted to use.
 * "Timeline" asks the learner to put sources and events in order.
 */

export type Verdict = 'sound' | 'overstated' | 'avoid';

export const VERDICTS: { id: Verdict; label: string; meaning: string }[] = [
  { id: 'sound', label: 'Use it', meaning: 'Accurate as stated. The lesson teaches it.' },
  { id: 'overstated', label: 'Overstated', meaning: 'There is something true in it, but it claims too much as stated.' },
  { id: 'avoid', label: 'Leave alone', meaning: 'The lesson says not to use this argument.' },
];

export interface Argument {
  id: string;
  /** The topic whose lesson settles it. */
  topicId: string;
  /** The argument, as someone might put it. */
  claim: string;
  verdict: Verdict;
  /** One or two sentences: why, and what to say instead. */
  why: string;
}

export const ARGUMENTS: Argument[] = [
  // Ancient writers outside the Bible
  { id: 'arg-tacitus', topicId: 'ancient-writers', verdict: 'sound', claim: 'Tacitus, a Roman historian who despised Christians, records that Christ was executed under Pontius Pilate.', why: 'He says so in his Annals, written about AD 116. A hostile writer had no reason to invent it.' },
  { id: 'arg-pliny', topicId: 'ancient-writers', verdict: 'sound', claim: 'About AD 112 a Roman governor reported that Christians sang hymns to Christ “as to a god”.', why: 'Pliny the Younger wrote this to the emperor Trajan after questioning former Christians.' },
  { id: 'arg-historians-resurrection', topicId: 'ancient-writers', verdict: 'overstated', claim: 'Roman and Jewish historians prove that Jesus rose from the dead.', why: 'They confirm the outline: that he lived, was executed under Pilate and was soon worshipped. They do not prove the resurrection.' },
  { id: 'arg-testimonium', topicId: 'ancient-writers', verdict: 'avoid', claim: 'Josephus, a Jewish historian, wrote of Jesus, “He was the Christ.”', why: 'Most scholars think Christian copyists touched up that paragraph. Use his short mention of James, “the brother of Jesus, who was called Christ”.' },
  { id: 'arg-thallus', topicId: 'ancient-writers', verdict: 'avoid', claim: 'Thallus, a first-century pagan, confirms the darkness at the crucifixion.', why: 'His work is lost. The remark reaches us third-hand, through a Christian writer preserved by a much later chronicler.' },

  // Archaeology and the Bible
  { id: 'arg-proves-bible', topicId: 'archaeology-and-the-bible', verdict: 'overstated', claim: 'Archaeology proves the Bible.', why: 'It has confirmed a great deal, raised some hard questions, and left most things untouched.' },
  { id: 'arg-tel-dan', topicId: 'archaeology-and-the-bible', verdict: 'sound', claim: 'An inscription found at Tel Dan refers to the “House of David”.', why: 'That is how most scholars read it, and it comes from outside the Bible.' },
  { id: 'arg-pilate-stone', topicId: 'archaeology-and-the-bible', verdict: 'sound', claim: 'A stone found at Caesarea in 1961 names Pontius Pilate as prefect of Judea.', why: 'It was dug up by professional archaeologists and published.' },
  { id: 'arg-chariot-wheels', topicId: 'archaeology-and-the-bible', verdict: 'avoid', claim: 'Chariot wheels from Pharaoh’s army have been found in the Red Sea.', why: 'The claim comes from amateur explorers, not from published excavations.' },
  { id: 'arg-jericho', topicId: 'archaeology-and-the-bible', verdict: 'avoid', claim: 'The fallen walls of Jericho prove Joshua’s conquest.', why: 'Most archaeologists date that destruction too early for Joshua. The lesson calls it an open question and says not to use Jericho as a proof.' },
  { id: 'arg-exodus-confirmed', topicId: 'archaeology-and-the-bible', verdict: 'overstated', claim: 'Archaeology has confirmed the exodus.', why: 'No Egyptian text mentions it and no camp sites have been found in Sinai. The firm confirmations begin with the time of Israel’s kings.' },
  { id: 'arg-merneptah', topicId: 'archaeology-and-the-bible', verdict: 'sound', claim: 'An Egyptian monument of about 1208 BC is the earliest mention of Israel outside the Bible.', why: 'It is the victory monument of Pharaoh Merneptah, found at Thebes in 1896.' },

  // The Quran's text and sources
  { id: 'arg-quran-changed', topicId: 'islam-quran-manuscripts', verdict: 'overstated', claim: 'The early manuscripts show that the Quran has been changed beyond recognition.', why: 'Its text has been stable since early in Islam’s history. The evidence only tells against “identical to the last letter”.' },
  { id: 'arg-sanaa', topicId: 'islam-quran-manuscripts', verdict: 'sound', claim: 'The erased lower text of the Sana‘a palimpsest differs from the standard Quran in words and phrases.', why: 'The scholars who published it concluded that it belongs to a different line of text from the one Uthman standardised.' },
  { id: 'arg-clay-birds', topicId: 'islam-quran-sources', verdict: 'sound', claim: 'The story of the boy Jesus making birds of clay is found in a book of legends older than the Quran.', why: 'It comes from the Infancy Gospel of Thomas, a second-century collection of legends.' },
  { id: 'arg-hadith-both-ways', topicId: 'islam-hadith-reliability', verdict: 'avoid', claim: 'The hadith are worthless, and al-Bukhari himself proves that verses of the Quran were lost.', why: 'You cannot call the hadith unreliable and then rest your case on one. Argue from inside Islam’s own sources or not at all.' },
  { id: 'arg-satanic-verses', topicId: 'islam-muhammad-tested', verdict: 'overstated', claim: 'The “Satanic verses” are an established fact that Muslim scholars accept.', why: 'Early Muslim historians report the story, but most Muslim scholars reject it. Present it as what those sources report, not as agreed fact.' },

  // Early writers outside Islam
  { id: 'arg-never-existed', topicId: 'islam-outside-writers', verdict: 'avoid', claim: 'Muhammad never existed. The Arabs invented him later.', why: 'A Syriac chronicler names him about 640, within ten years of his death. Very few historians doubt that he lived.' },
  { id: 'arg-thomas-presbyter', topicId: 'islam-outside-writers', verdict: 'sound', claim: 'A Christian chronicler names Muhammad within about ten years of his death.', why: 'Thomas the Presbyter, about 640, records a battle between the Romans and “the Arabs of Muhammad”.' },
  { id: 'arg-alive-634', topicId: 'islam-outside-writers', verdict: 'overstated', claim: 'Early Christian writers prove that Muhammad was still alive when Palestine was invaded in 634.', why: 'Several seem to assume it, but most historians keep the traditional date of his death, 632. Do not build on it.' },
  { id: 'arg-biography-late', topicId: 'islam-outside-writers', verdict: 'sound', claim: 'The earliest surviving biography of Muhammad was written more than a century after he died.', why: 'Ibn Ishaq died in 767, and his book survives mainly in the edition of Ibn Hisham, who died about 833.' },
  { id: 'arg-quran-late', topicId: 'islam-outside-writers', verdict: 'avoid', claim: 'The Quran was put together about two hundred years after Muhammad.', why: 'Leaves of the Quran have been dated by radiocarbon to the seventh century, which rules that out.' },
  { id: 'arg-no-escape', topicId: 'islam-outside-writers', verdict: 'sound', claim: 'No surviving writer of the first century, friend or enemy, says that Jesus escaped the cross.', why: 'Paul and the four Gospels report the crucifixion, and Tacitus records the execution under Pilate.' },

  // Archaeology and the origins of Islam
  { id: 'arg-petra', topicId: 'islam-archaeology', verdict: 'avoid', claim: 'The first mosques face Petra, so Islam really began there.', why: 'Specialists have not accepted it. Early mosques were lined up by the sun and the cardinal directions, not by calculation.' },
  { id: 'arg-mecca-absent', topicId: 'islam-archaeology', verdict: 'avoid', claim: 'Mecca did not exist in Muhammad’s time.', why: 'The Quran names it, and the Quran is early. What can be questioned is the picture of Mecca as a great centre of trade.' },
  { id: 'arg-silence-invented', topicId: 'islam-archaeology', verdict: 'avoid', claim: 'No coin or inscription calls Muhammad God’s messenger for sixty years, so he was made up afterwards.', why: 'The silence is real, but outside writers name him by about 640. It shows only that the public form of Islam took shape over time.' },
  { id: 'arg-mecca-unmentioned', topicId: 'islam-archaeology', verdict: 'overstated', claim: 'No writer outside Arabia mentions Mecca before Islam.', why: 'None clearly does. But Ptolemy’s “Macoraba” is still identified with Mecca by many historians, so say “clearly”.' },
  { id: 'arg-arabia-monotheist', topicId: 'islam-archaeology', verdict: 'sound', claim: 'Inscriptions show Jewish and Christian belief in Arabia long before Muhammad.', why: 'In Yemen the inscriptions to the old gods stop about AD 380, and God is soon called “the Merciful”.' },
  { id: 'arg-abraha-disproves', topicId: 'islam-archaeology', verdict: 'overstated', claim: 'Abraha’s inscription disproves the Quran’s story of the elephant.', why: 'It records a campaign in 552 and does not mention Mecca. It cannot confirm the story, and it cannot disprove it either.' },
  { id: 'arg-dome', topicId: 'islam-archaeology', verdict: 'sound', claim: 'Islam’s first great monument, the Dome of the Rock, declares that God has no son.', why: 'Much of its inscription, dated 691–2, is addressed to Christians and denies that Jesus is the Son of God.' },

  // The Night Journey
  { id: 'arg-ascent-impossible', topicId: 'islam-night-journey', verdict: 'avoid', claim: 'Nobody can be taken up to heaven, so the Night Journey is impossible.', why: 'Christians believe that Elijah was taken up and that Jesus ascended. The question is evidence, not possibility.' },
  { id: 'arg-no-witness', topicId: 'islam-night-journey', verdict: 'sound', claim: 'Nobody witnessed the Night Journey, so it cannot be a reason to believe that Muhammad was a prophet.', why: 'It is believed on his word. The ascension of Jesus, by contrast, was watched by the apostles.' },
  { id: 'arg-arda-viraf', topicId: 'islam-night-journey', verdict: 'avoid', claim: 'The Night Journey was copied from the Persian book of Arda Viraf.', why: 'That book, in the form we have it, was written down after the rise of Islam, so it cannot be shown to be a source.' },
  { id: 'arg-aisha-dream', topicId: 'islam-night-journey', verdict: 'overstated', claim: 'Aisha was there that night, and she said it was only a dream.', why: 'She was not yet married to Muhammad. The earliest biography quotes her as saying his body stayed where it was, and sets that beside the other view.' },
  { id: 'arg-ascent-stories', topicId: 'islam-night-journey', verdict: 'sound', claim: 'Stories of a holy man led up through seven heavens were told before Islam.', why: 'The Ascension of Isaiah, a Christian work of about the second century, is one. This shows the form was known, not that any book was copied.' },

  // The Farthest Mosque
  { id: 'arg-mosque-not-built', topicId: 'islam-farthest-mosque', verdict: 'avoid', claim: 'The al-Aqsa Mosque was built long after Muhammad died, so the Quran’s “farthest mosque” is a mistake.', why: 'The Arabic word means a place of prostration, not a building. The mosque was named after the verse.' },
  { id: 'arg-jerusalem-unnamed', topicId: 'islam-farthest-mosque', verdict: 'sound', claim: 'The Quran never names Jerusalem.', why: 'That the “farthest mosque” is in Jerusalem comes from the hadith and the commentators.' },
  { id: 'arg-forty-years', topicId: 'islam-farthest-mosque', verdict: 'sound', claim: 'A hadith in al-Bukhari puts forty years between the building of the Sacred Mosque and of al-Aqsa.', why: 'The Quran credits the Kaaba to Abraham, and the temple was Solomon’s, about a thousand years later. Muslim scholars answer that it means earlier foundations.' },
  { id: 'arg-heavenly-agreed', topicId: 'islam-farthest-mosque', verdict: 'overstated', claim: 'Historians agree that the “farthest mosque” first meant a sanctuary in heaven.', why: 'Many Western scholars have argued it, but others disagree, and the earliest surviving Muslim commentaries read it as Jerusalem.' },
];

export interface TimelineEvent {
  id: string;
  topicId: string;
  /** What happened or was written. */
  label: string;
  /** Year for ordering: negative for BC. */
  year: number;
  /** The date as the lesson gives it. */
  when: string;
}

export const TIMELINE: TimelineEvent[] = [
  { id: 'tl-merneptah', topicId: 'archaeology-and-the-bible', year: -1208, when: 'about 1208 BC', label: 'Pharaoh Merneptah’s monument names Israel' },
  { id: 'tl-mesha', topicId: 'archaeology-and-the-bible', year: -840, when: 'about 840 to 830 BC', label: 'Mesha, king of Moab, sets up his monument' },
  { id: 'tl-sennacherib', topicId: 'archaeology-and-the-bible', year: -701, when: '701 BC', label: 'Sennacherib of Assyria invades Judah' },
  { id: 'tl-ration', topicId: 'archaeology-and-the-bible', year: -591, when: 'about 591 BC', label: 'Babylonian ration tablets list Jehoiachin, king of Judah' },
  { id: 'tl-paul', topicId: 'ancient-writers', year: 50, when: 'about AD 50', label: 'Paul writes of meeting James, the Lord’s brother' },
  { id: 'tl-temple', topicId: 'fulfilled-prophecy', year: 70, when: 'AD 70', label: 'Rome destroys Jerusalem and its temple' },
  { id: 'tl-josephus', topicId: 'ancient-writers', year: 93, when: 'about AD 93', label: 'Josephus writes his Antiquities of the Jews' },
  { id: 'tl-pliny', topicId: 'ancient-writers', year: 112, when: 'about AD 112', label: 'Pliny writes to the emperor Trajan about the Christians' },
  { id: 'tl-tacitus', topicId: 'ancient-writers', year: 116, when: 'about AD 116', label: 'Tacitus writes his Annals' },
  { id: 'tl-nicaea', topicId: 'identity-of-jesus', year: 325, when: 'AD 325', label: 'The Council of Nicaea meets' },
  { id: 'tl-himyar', topicId: 'islam-archaeology', year: 380, when: 'about AD 380', label: 'Inscriptions to the old gods stop in Himyar, in Yemen' },
  { id: 'tl-abraha', topicId: 'islam-archaeology', year: 552, when: 'AD 552', label: 'Abraha records a campaign into central Arabia' },
  { id: 'tl-persians', topicId: 'islam-farthest-mosque', year: 614, when: 'AD 614', label: 'The Persians capture Jerusalem' },
  { id: 'tl-hijra', topicId: 'islam-archaeology', year: 622, when: 'AD 622', label: 'Muhammad’s migration to Medina, from which Muslims count their years' },
  { id: 'tl-muhammad-death', topicId: 'islam-outside-writers', year: 632, when: 'AD 632, on the traditional date', label: 'Muhammad dies' },
  { id: 'tl-thomas', topicId: 'islam-outside-writers', year: 640, when: 'about AD 640', label: 'Thomas the Presbyter writes of “the Arabs of Muhammad”' },
  { id: 'tl-uthman', topicId: 'sunni-companions', year: 656, when: 'AD 656', label: 'The caliph Uthman is killed in Medina' },
  { id: 'tl-arculf', topicId: 'islam-farthest-mosque', year: 680, when: 'around AD 680', label: 'The pilgrim Arculf sees the Arabs’ house of prayer in Jerusalem' },
  { id: 'tl-dome', topicId: 'islam-archaeology', year: 691, when: 'AD 691–2', label: 'The Dome of the Rock is built' },
  { id: 'tl-ibn-ishaq', topicId: 'islam-outside-writers', year: 767, when: 'AD 767', label: 'Ibn Ishaq, Muhammad’s first biographer, dies' },
  { id: 'tl-ibn-hisham', topicId: 'islam-outside-writers', year: 833, when: 'about AD 833', label: 'Ibn Hisham, editor of the biography, dies' },
  { id: 'tl-bukhari', topicId: 'islam-hadith-reliability', year: 870, when: 'AD 870', label: 'Al-Bukhari, compiler of the hadith, dies' },
  { id: 'tl-merneptah-found', topicId: 'archaeology-and-the-bible', year: 1896, when: '1896', label: 'Merneptah’s monument is found at Thebes' },
  { id: 'tl-cairo', topicId: 'islam-quran-manuscripts', year: 1924, when: '1924', label: 'The Cairo edition of the Quran is printed' },
  { id: 'tl-pilate-found', topicId: 'archaeology-and-the-bible', year: 1961, when: '1961', label: 'The Pilate stone is found at Caesarea' },
  { id: 'tl-sanaa', topicId: 'islam-quran-manuscripts', year: 1972, when: '1972', label: 'Old Quran fragments are found in the Great Mosque of Sana‘a' },
  { id: 'tl-tel-dan', topicId: 'archaeology-and-the-bible', year: 1993, when: '1993 and 1994', label: 'Fragments of the Tel Dan monument are found' },
];
