import type { Topic } from '../types';

export const quranSources: Topic = {
  id: 'islam-quran-sources',
  title: 'Borrowed Stories: Legends in the Quran',
  icon: '📜',
  summary: 'Many Quranic stories match apocryphal gospels and Jewish legends that circulated before Muhammad — not the eyewitness Gospels.',
  lesson: [
    {
      heading: 'The argument',
      body: [
        'If the Quran came directly from God, its stories about earlier prophets should match what actually happened — and we would not expect them to echo the folklore circulating in seventh-century Arabia.',
        'Instead, a striking number of Quranic stories appear first in non-biblical writings: later Christian legends (the “infancy gospels” and others) and Jewish commentary. These works were written long after the events, and Christians never accepted them as Scripture.',
        'Note on sources: the references below cite only the Quran, the Bible and Sahih hadith. The apocryphal works are named so you can recognise them; they are not quoted as authorities.',
      ],
    },
    {
      heading: 'Jesus and the clay birds',
      body: [
        'The Quran says Jesus made birds from clay and breathed into them, and they became birds (Quran 3:49; 5:110).',
        'This story is not in the four Gospels. It comes from the Infancy Gospel of Thomas, a second-century collection of legends about Jesus as a boy. (This is a different work from the “Gospel of Thomas”, a collection of sayings.) In that legend, the five-year-old Jesus shapes twelve sparrows from clay on the Sabbath and claps his hands to make them fly.',
        'The four Gospels say Jesus’ first sign was at Cana, as an adult (John 2:11).',
      ],
      references: ['Quran 3:49', 'Quran 5:110', 'John 2:11'],
    },
    {
      heading: 'Mary in the temple',
      body: [
        'The Quran says Mary was dedicated before birth, placed in Zechariah’s care, and miraculously provided with food in her chamber (Quran 3:35-37), and that men “cast their pens” to decide who would be responsible for her (Quran 3:44).',
        'None of this is in the Bible. It closely follows the Protoevangelium of James (mid-second century), in which Mary is raised in the temple and fed by an angel, and lots are cast with rods to choose her guardian.',
      ],
      references: ['Quran 3:35-37', 'Quran 3:44', 'Luke 1:26-38'],
    },
    {
      heading: 'The palm tree and the cradle',
      body: [
        'In the Quran, Mary gives birth beneath a palm tree, is told to shake the trunk for dates, and a stream is provided beneath her (Quran 19:22-26). Then the newborn Jesus speaks from the cradle to defend her (Quran 19:29-30; 3:46).',
        'In the Gospel of Pseudo-Matthew, a palm tree bends down to feed Mary and a spring bursts out — but during the flight to Egypt, not at the birth. Jesus speaking from the cradle appears in the Syriac infancy-gospel tradition (preserved in the Arabic Infancy Gospel).',
        'The Bible says Jesus was born in Bethlehem and laid in a manger (Luke 2:4-7).',
      ],
      references: ['Quran 19:22-26', 'Quran 19:29-30', 'Luke 2:4-7'],
    },
    {
      heading: 'Jewish legends',
      body: [
        'Cain and the raven: in the Quran, Allah sends a crow to show Cain how to bury Abel (Quran 5:31). Genesis has no raven (Genesis 4:8-12); the raven appears in later Jewish legend.',
        'The next verse is even more revealing. Quran 5:32 says, “We decreed upon the Children of Israel that whoever kills a soul… it is as if he had slain mankind entirely.” That sentence is not in the Torah — it comes from the Mishnah, a rabbinic commentary (tractate Sanhedrin), where rabbis drew it from the Cain and Abel story. The Quran presents a rabbinic comment as God’s decree.',
        'Abraham in the fire: in the Quran, Abraham smashes idols and is thrown into a fire that Allah makes cool (Quran 21:68-69). Genesis says nothing of this. It is a Jewish midrash (Genesis Rabbah), possibly arising from the name “Ur” of the Chaldeans, which resembles a word for fire (Genesis 15:7).',
        'Solomon, the hoopoe and the Queen of Sheba (Quran 27:20-44) closely follows the Targum Sheni, a later Jewish expansion of Esther — not the account in 1 Kings 10.',
        'Satan refusing to bow to Adam (Quran 2:34; 7:11-12) matches the Life of Adam and Eve, a Jewish-Christian legend, not Genesis.',
      ],
      references: ['Quran 5:31-32', 'Genesis 4:8-12', 'Quran 21:68-69', 'Genesis 15:7', 'Quran 27:20-23', '1 Kings 10:1-13', 'Quran 7:11-12'],
    },
    {
      heading: 'More Christian legends',
      body: [
        'The companions of the cave (Quran 18:9-26), young men who sleep in a cave for 309 years (Quran 18:25), is the Christian legend of the Seven Sleepers of Ephesus. The Quran even reflects disagreement over how many there were (Quran 18:22).',
        'Dhul-Qarnayn (Quran 18:83-98), who travels to where the sun sets in a muddy spring (18:86) and builds an iron-and-copper wall against Gog and Magog (18:96-97), parallels the Syriac Alexander Legend about Alexander the Great.',
      ],
      references: ['Quran 18:9-13', 'Quran 18:22', 'Quran 18:25', 'Quran 18:83-86', 'Quran 18:96-97'],
    },
    {
      heading: 'Muhammad’s contemporaries noticed',
      body: [
        'His opponents said: “Legends of the former peoples which he has written down, and they are dictated to him morning and afternoon” (Quran 25:5; 16:24). They claimed a human taught him (Quran 16:103).',
        'And Muhammad encouraged his followers to “tell others the stories of Bani Israel… for it is not sinful to do so” (Sahih al-Bukhari 3461). Jewish and Christian stories clearly circulated in his environment.',
      ],
      references: ['Quran 25:5', 'Quran 16:24', 'Quran 16:103', 'Sahih al-Bukhari 3461'],
    },
    {
      heading: 'What about the Gospel of Barnabas?',
      body: [
        'Muslims sometimes cite the “Gospel of Barnabas”, in which Jesus denies being the Messiah and foretells Muhammad. Be clear: this is not a source the Quran borrowed from — it is a much later forgery.',
        'Its earliest manuscripts are late medieval (Italian and Spanish), it contains medieval European details, and it contradicts the Quran itself: it has Jesus deny being the Messiah, while the Quran calls Jesus the Messiah (Quran 3:45). No early Christian or Muslim writer quotes it.',
        'Ask: if a Muslim rejects the four first-century Gospels as unreliable, why trust a document that surfaced over a thousand years later?',
      ],
      references: ['Quran 3:45', 'Luke 1:1-4'],
    },
  ],
  objections: [
    {
      id: 'qs-1',
      objection: 'Maybe those apocryphal books preserved true stories that Allah confirmed in the Quran.',
      response:
        'The Infancy Gospel of Thomas also has the boy Jesus cursing children so they die. Would you accept that as a true story? These works are legends written long after the events, with no link to eyewitnesses. When the Quran selects from that folklore — and even presents a rabbinic comment as God’s decree (Quran 5:32) — the natural explanation is that its author absorbed the stories around him.',
      keyPoints: ['Same sources contain absurd legends.', 'No eyewitness link.', 'Quran 5:32 quotes rabbinic commentary.'],
      references: ['Quran 5:32', 'Luke 1:1-4'],
    },
    {
      id: 'qs-2',
      objection: 'Muhammad was illiterate, so he couldn’t have read these books.',
      response:
        'He didn’t need to read them. These stories circulated orally among Jews and Christians in Arabia, and the Quran itself says his opponents accused him of being taught by a foreigner and of repeating “legends of the former peoples” (Quran 16:103; 25:5). Muhammad also told his followers to retell the stories of the Israelites (Sahih al-Bukhari 3461).',
      keyPoints: ['Oral circulation, not reading.', 'Opponents noticed (16:103; 25:5).', 'Bukhari 3461: retell Israelite stories.'],
      references: ['Quran 16:103', 'Quran 25:5', 'Sahih al-Bukhari 3461'],
    },
    {
      id: 'qs-3',
      objection: 'The Gospel of Barnabas proves Christians hid the truth about Muhammad.',
      response:
        'Its manuscripts date from the late Middle Ages, and it contradicts the Quran: it denies that Jesus is the Messiah, while the Quran calls him the Messiah (Quran 3:45). If it contradicts the Quran, a Muslim shouldn’t rely on it either.',
      keyPoints: ['Late medieval manuscripts.', 'Contradicts Quran 3:45.', 'Unreliable by Islamic standards too.'],
      references: ['Quran 3:45'],
    },
  ],
  quiz: [
    {
      id: 'qs-q1',
      question: 'Where does the story of Jesus making clay birds come from?',
      options: ['The Gospel of Luke', 'The Infancy Gospel of Thomas', 'The Book of Acts', 'The Psalms'],
      answer: 1,
      explanation: 'A second-century legend — different from the sayings “Gospel of Thomas”.',
    },
    {
      id: 'qs-q2',
      question: 'Quran 5:32 (“whoever kills a soul… as if he had slain mankind”) matches…',
      options: ['Genesis 4', 'A rabbinic commentary in the Mishnah', 'The Gospel of John', 'Psalm 23'],
      answer: 1,
      explanation: 'It is presented as God’s decree to Israel, but comes from rabbinic commentary.',
    },
    {
      id: 'qs-q3',
      question: 'Why is the Gospel of Barnabas not a reliable source?',
      options: [
        'It is too early',
        'It is a late medieval forgery that even contradicts the Quran',
        'It is written in Greek',
        'It agrees with the Bible',
      ],
      answer: 1,
      explanation: 'It denies Jesus is the Messiah; the Quran (3:45) affirms it.',
    },
    {
      id: 'qs-q4',
      question: 'The companions of the cave (Quran 18) parallel which legend?',
      options: ['The Seven Sleepers of Ephesus', 'Noah’s ark', 'Jonah and the fish', 'Daniel in the lions’ den'],
      answer: 0,
      explanation: 'A Christian legend from late antiquity.',
    },
    {
      id: 'qs-q5',
      question: 'What did Muhammad’s opponents call his recitations (Quran 25:5)?',
      options: ['Poetry of the jinn', 'Legends of the former peoples', 'Greek philosophy', 'Persian law'],
      answer: 1,
      explanation: '“Legends of the former peoples which he has written down.”',
    },
  ],
};
