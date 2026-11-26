/**
 * Comparison charts for the lessons. Every row carries the lesson sentence it rests on, and a test checks that the
 * sentence is in that lesson word for word: a chart never says more than the lessons do.
 */
export interface GapRow {
  label: string;
  /** Years between the events and the writing: the range the lesson gives. */
  from: number;
  to: number;
  /** The figure as the lesson words it. */
  says: string;
  topicId: string;
  /** Words copied from that lesson. */
  quote: string;
  tone: 'bible' | 'quran' | 'other';
}

export interface GapChart {
  kind: 'gap';
  id: string;
  title: string;
  note: string;
  /** Lessons that show this chart. */
  topics: string[];
  max: number;
  rows: GapRow[];
}

export interface ContrastChart {
  kind: 'contrast';
  id: string;
  title: string;
  note: string;
  topics: string[];
  yes: string;
  no: string;
  /** Two columns set side by side with neither marked as right or wrong. */
  neutral?: boolean;
  rows: { label: string; verdict: 'yes' | 'no'; topicId: string; quote: string }[];
}

/** Rows that set two wordings against each other, one pair to a row. */
export interface PairsChart {
  kind: 'pairs';
  id: string;
  title: string;
  note: string;
  topics: string[];
  left: string;
  right: string;
  /** `quote` and, where the two sides are worded in separate sentences, `also` are copied from the lesson. */
  rows: { label: string; left: string; right: string; topicId: string; quote: string; also?: string }[];
}

export interface CountChart {
  kind: 'count';
  id: string;
  title: string;
  note: string;
  topics: string[];
  max: number;
  rows: {
    label: string;
    /** Parts of the bar, in books. `width` draws a part longer than its count where the lesson says the content is the same. */
    parts: { n: number; tone: 'ot' | 'nt' | 'all'; width?: number }[];
    says: string;
    topicId: string;
    /** Words copied from that lesson, for every figure in the row. */
    quote: string;
    also?: string;
  }[];
}

export type Chart = GapChart | ContrastChart | CountChart | PairsChart;

export const CHARTS: Chart[] = [
  {
    kind: 'count',
    id: 'books-by-tradition',
    title: 'How many books?',
    note: 'Each tradition by its own count. The Jewish bar is drawn as long as the Protestant Old Testament because the lesson says the content is the same and only the counting differs.',
    topics: ['canons-compared'],
    max: 81,
    rows: [
      { label: 'Jewish Bible (Tanakh)', parts: [{ n: 24, tone: 'ot', width: 39 }], says: '24 books, the same content as the Protestant 39', topicId: 'canons-compared', quote: 'The Jewish Bible has 24 books.', also: 'Its content is the same as the Protestant Old Testament.' },
      { label: 'Protestant', parts: [{ n: 39, tone: 'ot' }, { n: 27, tone: 'nt' }], says: '66 books', topicId: 'canons-compared', quote: 'Protestant Bibles have 66 books: 39 in the Old Testament and 27 in the New.' },
      { label: 'Catholic', parts: [{ n: 46, tone: 'ot' }, { n: 27, tone: 'nt' }], says: '73 books', topicId: 'canons-compared', quote: 'Catholic Bibles have 73 books: 46 in the Old Testament and 27 in the New.' },
      { label: 'Eastern Orthodox', parts: [{ n: 49, tone: 'ot' }, { n: 27, tone: 'nt' }], says: 'about 76 books', topicId: 'canons-compared', quote: 'Eastern Orthodox Bibles have about 76 books: the Orthodox Study Bible counts 49 in the Old Testament and 27 in the New.' },
      { label: 'Ethiopian Orthodox', parts: [{ n: 81, tone: 'all' }], says: '81 books by its own count', topicId: 'canons-compared', quote: 'The Ethiopian Orthodox Church counts 81 books.' },
      { label: 'Syriac Peshitta, New Testament only, as first made', parts: [{ n: 22, tone: 'nt' }], says: '22 books', topicId: 'canons-compared', quote: 'The Syriac Peshitta New Testament originally had 22 books.' },
    ],
  },
  {
    kind: 'gap',
    id: 'how-long-after',
    title: 'How long after the events?',
    note: 'The time between a life and the writings about it, as these lessons give it: the solid bar is the shortest gap, the pale bar the longest. A short gap does not prove a source true and a long one does not prove it false; it shows how much room there was for memory to fade.',
    topics: ['reliability-of-scripture', 'resurrection', 'islam-hadith-reliability', 'islam-outside-writers'],
    max: 450,
    rows: [
      { label: 'The creed Paul quotes (1 Corinthians 15)', from: 0, to: 5, says: 'within a few years', topicId: 'reliability-of-scripture', quote: '1 Corinthians 15:3-7 is widely dated to within a few years of the crucifixion', tone: 'bible' },
      { label: 'Paul’s letters', from: 20, to: 30, says: '20 to 30 years', topicId: 'reliability-of-scripture', quote: 'Paul’s letters, written within twenty to thirty years of the crucifixion', tone: 'bible' },
      { label: 'The four Gospels', from: 35, to: 65, says: 'about 35 to 65 years', topicId: 'reliability-of-scripture', quote: 'the Gospels were written within about 35-65 years', tone: 'bible' },
      { label: 'Earliest surviving biography of Muhammad (Ibn Ishaq)', from: 100, to: 135, says: 'more than a century', topicId: 'islam-outside-writers', quote: 'The earliest biography that survives was written by Ibn Ishaq more than a century after Muhammad died', tone: 'quran' },
      { label: 'Sahih al-Bukhari and Sahih Muslim', from: 200, to: 240, says: 'roughly 200 to 240 years', topicId: 'islam-hadith-reliability', quote: 'Their collections were compiled roughly 200 to 240 years after Muhammad’s death', tone: 'quran' },
      { label: 'Main surviving biographies of Alexander the Great', from: 300, to: 450, says: 'about 300 to 450 years', topicId: 'reliability-of-scripture', quote: 'our main surviving biographies of Alexander the Great, written about 300 to 450 years after his death, though from earlier accounts now lost', tone: 'other' },
    ],
  },
  {
    kind: 'contrast',
    id: 'quran-on-jesus',
    title: 'What the Quran says about Jesus',
    note: 'Common ground first: begin a conversation with what the Quran affirms.',
    topics: ['islam-understanding', 'islam-jesus-more-than-prophet'],
    yes: 'Affirms',
    no: 'Denies',
    rows: [
      { label: 'Born of a virgin', verdict: 'yes', topicId: 'islam-understanding', quote: 'The Quran affirms his virgin birth (Quran 3:47)' },
      { label: 'The Messiah, and “a word from Him”', verdict: 'yes', topicId: 'islam-understanding', quote: 'calls him the Messiah and “a word from Him” (Quran 3:45)' },
      { label: 'Worked miracles, healing and raising the dead', verdict: 'yes', topicId: 'islam-understanding', quote: 'credits him with miracles including healing and raising the dead (Quran 3:49)' },
      { label: 'The Son of God', verdict: 'no', topicId: 'islam-understanding', quote: 'the Quran denies that Jesus is the Son of God (Quran 19:88-92)' },
      { label: 'Crucified', verdict: 'no', topicId: 'islam-understanding', quote: 'denies that he was crucified (Quran 4:157)' },
      { label: 'More than a messenger', verdict: 'no', topicId: 'islam-understanding', quote: 'insists he was “but a messenger” (Quran 5:75)' },
    ],
  },
  {
    kind: 'contrast',
    id: 'trinity-is-and-is-not',
    title: 'What the Trinity is, and is not',
    note: 'Much of the Muslim objection is aimed at the second list, which Christians reject too. Agree with your friend about that before explaining the first.',
    topics: ['islam-trinity'],
    yes: 'Christians believe',
    no: 'Christians do not believe',
    rows: [
      { label: 'One God', verdict: 'yes', topicId: 'islam-trinity', quote: 'There is one God' },
      { label: 'Three distinct persons: Father, Son and Holy Spirit', verdict: 'yes', topicId: 'islam-trinity', quote: 'Within the one being of God are three distinct persons: the Father, the Son and the Holy Spirit' },
      { label: 'Each person fully God', verdict: 'yes', topicId: 'islam-trinity', quote: 'Each is fully God' },
      { label: 'One in being, three in person', verdict: 'yes', topicId: 'islam-trinity', quote: 'God is one in being (what he is) and three in person (who he is)' },
      { label: 'Three gods', verdict: 'no', topicId: 'islam-trinity', quote: 'three gods (tritheism)' },
      { label: 'Three parts of God', verdict: 'no', topicId: 'islam-trinity', quote: 'not three parts of God' },
      { label: 'One person wearing three masks', verdict: 'no', topicId: 'islam-trinity', quote: 'one person wearing three masks (modalism)' },
      { label: 'God, Jesus and Mary', verdict: 'no', topicId: 'islam-trinity', quote: 'God, Jesus and Mary (Quran 5:116)' },
    ],
  },
  {
    kind: 'contrast',
    id: 'alawites-and-alevis',
    title: 'Alawites and Alevis: two communities',
    note: 'Two separate communities, though in Turkish the one word Alevi is used for both. The Alawite teaching is secret, so that list rests on published accounts from outside, and it is uncertain how far the older teaching is still held.',
    topics: ['alevis', 'alawites'],
    yes: 'Alawites',
    no: 'Alevis',
    neutral: true,
    rows: [
      { label: 'Arabs of the Syrian coast', verdict: 'yes', topicId: 'alevis', quote: 'The Alawites are Arabs of the Syrian coast with a secret teaching' },
      { label: 'Trace their teaching to Ibn Nusayr, ninth-century Iraq', verdict: 'yes', topicId: 'alawites', quote: 'Ibn Nusayr lived in Iraq in the ninth century' },
      { label: 'Teaching passed on by initiation, to men only', verdict: 'yes', topicId: 'alawites', quote: 'It is passed on by initiation, in stages, to men only' },
      { label: 'Only men take part in the worship (by published accounts)', verdict: 'yes', topicId: 'alawites', quote: 'by published accounts only men take part in the worship' },
      { label: 'Turkish- and Kurdish-speaking people of Anatolia', verdict: 'no', topicId: 'alevis', quote: 'The Alevis are Turkish- and Kurdish-speaking people of Anatolia' },
      { label: 'Look back to Haji Bektash Veli, thirteenth-century Anatolia', verdict: 'no', topicId: 'alevis', quote: 'Alevis look back to Haji Bektash Veli, a mystic who settled in central Anatolia in the thirteenth century' },
      { label: 'Faith carried in poetry and song more than in books', verdict: 'no', topicId: 'alevis', quote: 'For centuries Alevi faith was carried in poetry and song more than in books' },
      { label: 'Men and women worship side by side', verdict: 'no', topicId: 'alevis', quote: 'Men and women worship side by side.' },
    ],
  },
  {
    kind: 'contrast',
    id: 'when-gospels-written',
    title: 'When were the gospels written?',
    note: 'These are the datings most scholars give. Of the other gospels, only Thomas has serious defenders of a first-century date, and they are a minority.',
    topics: ['other-gospels'],
    yes: 'Dated to the first century',
    no: 'Dated to the second century or later',
    neutral: true,
    rows: [
      { label: 'Matthew, Mark, Luke and John', verdict: 'yes', topicId: 'other-gospels', quote: 'Most scholars, sceptical ones included, date Matthew, Mark, Luke and John to the first century' },
      { label: 'Gospel of Thomas (as we have it)', verdict: 'no', topicId: 'other-gospels', quote: 'Most scholars date the book as we have it to the second century' },
      { label: 'Gospel of Peter', verdict: 'no', topicId: 'other-gospels', quote: 'Most scholars date the Gospel of Peter to the second century' },
      { label: 'Gospel of Judas', verdict: 'no', topicId: 'other-gospels', quote: 'Scholars think it was first written in Greek around the middle of the second century' },
      { label: 'Gospel of Mary', verdict: 'no', topicId: 'other-gospels', quote: 'Most scholars place its writing in the second century' },
      { label: 'Gospel of Philip', verdict: 'no', topicId: 'other-gospels', quote: 'it is usually dated to the late second or the third century' },
      { label: 'Infancy Gospel of Thomas', verdict: 'no', topicId: 'other-gospels', quote: 'The Infancy Gospel of Thomas, usually dated to the second century' },
      { label: 'Protoevangelium of James', verdict: 'no', topicId: 'other-gospels', quote: 'The Protoevangelium of James, from the second half of the second century' },
    ],
  },
  {
    kind: 'contrast',
    id: 'night-journey-quran-hadith',
    title: 'The Night Journey: Quran and hadith',
    note: 'A description, not a charge. Muslims read the Quran’s short references together with the hadith; the point is only to know which details come from where.',
    topics: ['islam-night-journey'],
    yes: 'In the Quran',
    no: 'Only in the hadith and the biography',
    neutral: true,
    rows: [
      { label: 'A night journey between two places of worship', verdict: 'yes', topicId: 'islam-night-journey', quote: 'a night journey between two places of worship' },
      { label: 'A vision at a heavenly tree', verdict: 'yes', topicId: 'islam-night-journey', quote: 'a vision at a heavenly tree' },
      { label: 'A “sight” that tested people’s faith', verdict: 'yes', topicId: 'islam-night-journey', quote: 'a “sight” that tested people’s faith' },
      { label: 'The winged mount', verdict: 'no', topicId: 'islam-night-journey', quote: 'Everything else comes from the hadith and the biography: the winged mount' },
      { label: 'The seven heavens', verdict: 'no', topicId: 'islam-night-journey', quote: 'the winged mount, the seven heavens' },
      { label: 'Meeting the earlier prophets', verdict: 'no', topicId: 'islam-night-journey', quote: 'the seven heavens, the prophets' },
      { label: 'The giving of the five prayers', verdict: 'no', topicId: 'islam-night-journey', quote: 'the prophets, and the giving of the prayers' },
    ],
  },
  {
    kind: 'contrast',
    id: 'parallels-older-or-not',
    title: 'Parallel stories: which can be shown to be older than the Quran?',
    note: 'Use only the first list as evidence. The second does not mean there is no parallel: older lore may lie behind some of these books, but the books themselves cannot be shown to be earlier than the Quran.',
    topics: ['islam-quran-sources'],
    yes: 'Source older than the Quran',
    no: 'Date later or disputed: do not lean on it',
    neutral: true,
    rows: [
      { label: 'Clay birds: Infancy Gospel of Thomas', verdict: 'yes', topicId: 'islam-quran-sources', quote: 'It comes from the Infancy Gospel of Thomas, a second-century collection of legends about Jesus as a boy' },
      { label: 'Mary in the temple: Protoevangelium of James', verdict: 'yes', topicId: 'islam-quran-sources', quote: 'It closely follows the Protoevangelium of James (later second century)' },
      { label: '“Whoever kills a soul” (Quran 5:32): the Mishnah', verdict: 'yes', topicId: 'islam-quran-sources', quote: 'it comes from the Mishnah (Sanhedrin 4:5, compiled about AD 200)' },
      { label: 'The palm tree: Eastern accounts of Mary’s last days', verdict: 'yes', topicId: 'islam-quran-sources', quote: 'the same palm story appears in Eastern accounts of Mary’s last days that go back to the fifth century' },
      { label: 'The palm tree in Pseudo-Matthew', verdict: 'no', topicId: 'islam-quran-sources', quote: 'Pseudo-Matthew is a Latin work probably no older than the Quran, so it cannot be the source' },
      { label: 'Cain’s raven: Pirke de-Rabbi Eliezer', verdict: 'no', topicId: 'islam-quran-sources', quote: 'Pirke de-Rabbi Eliezer, was completed after Islam began' },
      { label: 'Solomon and the hoopoe: Targum Sheni', verdict: 'no', topicId: 'islam-quran-sources', quote: 'a Jewish expansion whose date is debated (it may be later than the Quran)' },
      { label: 'Jesus speaking from the cradle: Arabic Infancy Gospel', verdict: 'no', topicId: 'islam-quran-sources', quote: 'its dating relative to the Quran is debated' },
      { label: 'Dhul-Qarnayn: Syriac Alexander Legend', verdict: 'no', topicId: 'islam-quran-sources', quote: 'a work usually dated to about AD 629-630, in Muhammad’s last years' },
    ],
  },
  {
    kind: 'contrast',
    id: 'outside-writers-which-to-use',
    title: 'Writers outside the Bible: which to use',
    note: 'Three strong witnesses are worth more than eight mixed ones. Mara bar Serapion may be mentioned if you say plainly that the reference is uncertain.',
    topics: ['ancient-writers'],
    yes: 'Lean on',
    no: 'Do not lean on',
    rows: [
      { label: 'Tacitus, Annals, about AD 116', verdict: 'yes', topicId: 'ancient-writers', quote: 'He wrote his Annals about AD 116' },
      { label: 'Josephus on James, about AD 93', verdict: 'yes', topicId: 'ancient-writers', quote: 'Nearly all scholars accept it as genuine' },
      { label: 'Pliny the Younger, about AD 112', verdict: 'yes', topicId: 'ancient-writers', quote: 'About AD 112 he wrote to the emperor Trajan' },
      { label: 'Josephus’ longer passage as it stands', verdict: 'no', topicId: 'ancient-writers', quote: 'Do not quote the paragraph as it stands as though Josephus had confessed the faith' },
      { label: 'The Babylonian Talmud', verdict: 'no', topicId: 'ancient-writers', quote: 'so it is not independent evidence' },
      { label: 'Thallus', verdict: 'no', topicId: 'ancient-writers', quote: 'Treat it as a curiosity, not as evidence' },
      { label: 'Mara bar Serapion', verdict: 'no', topicId: 'ancient-writers', quote: 'the reference is probable and no more' },
      { label: 'Letters of Pilate, Lentulus and Abgar', verdict: 'no', topicId: 'ancient-writers', quote: 'are later inventions. Never use them.' },
    ],
  },
  {
    kind: 'contrast',
    id: 'wider-books-two-views',
    title: 'The wider books: two old views',
    note: 'Both views are old and both were held by faithful Christians. Athanasius’ list is not the Protestant one, Hippo and Carthage were regional councils, the synod of 1672 was a local one, and Luther still printed the books.',
    topics: ['old-testament-apocrypha'],
    yes: 'Listed them as Scripture',
    no: 'Set them apart: to be read, but not canon',
    neutral: true,
    rows: [
      { label: 'Augustine, On Christian Doctrine', verdict: 'yes', topicId: 'old-testament-apocrypha', quote: 'he lists forty-four Old Testament books, with Tobit, Judith, the two books of Maccabees, Wisdom and Sirach among them' },
      { label: 'Councils of Hippo (393) and Carthage (397, 419)', verdict: 'yes', topicId: 'old-testament-apocrypha', quote: 'Councils of North African bishops at Hippo in 393 and at Carthage in 397 and 419 gave a list of the same kind' },
      { label: 'Council of Florence, 1442', verdict: 'yes', topicId: 'old-testament-apocrypha', quote: 'In 1442 the Council of Florence listed Tobit, Judith, Wisdom, Sirach, Baruch and Maccabees with the other books of Scripture' },
      { label: 'Council of Trent, 1546', verdict: 'yes', topicId: 'old-testament-apocrypha', quote: 'On 8 April 1546 the council named Tobit, Judith, Wisdom, Sirach, Baruch and the two books of Maccabees among the sacred books' },
      { label: 'Synod of Jerusalem, 1672', verdict: 'yes', topicId: 'old-testament-apocrypha', quote: 'A synod at Jerusalem in 1672 called Wisdom, Judith, Tobit, Maccabees and Sirach genuine parts of Scripture' },
      { label: 'Athanasius, Easter letter of 367', verdict: 'no', topicId: 'old-testament-apocrypha', quote: 'books that are not in the canon but were appointed by the fathers to be read by new believers' },
      { label: 'Jerome, about 391', verdict: 'no', topicId: 'old-testament-apocrypha', quote: 'In a preface written about 391 he said that Wisdom, Sirach, Judith and Tobit “are not in the canon”' },
      { label: 'Cardinal Ximenes, in the Spanish Bible approved in 1520', verdict: 'no', topicId: 'old-testament-apocrypha', quote: 'described them as books outside the canon which the church receives for the edification of the people' },
      { label: 'Luther’s Bible, 1534', verdict: 'no', topicId: 'old-testament-apocrypha', quote: '“are not held equal to the sacred Scriptures, and nevertheless are useful and good to read”' },
      { label: 'Westminster Confession, 1647', verdict: 'no', topicId: 'old-testament-apocrypha', quote: 'The Westminster Confession of 1647 took a harder line and called them “no part of the Canon of the Scripture”' },
    ],
  },
  {
    kind: 'contrast',
    id: 'nation-and-quran',
    title: 'The Nation of Islam and the Quran',
    note: 'Why Sunni and Shia Muslims regard the Nation’s teachings as outside Islam. The first list is from Elijah Muhammad’s own writings. Ask first what your friend himself believes: not every member holds all of it.',
    topics: ['noi-overview'],
    yes: 'The Nation of Islam teaches',
    no: 'The Quran says',
    neutral: true,
    rows: [
      { label: 'God is a man', verdict: 'yes', topicId: 'noi-overview', quote: '“God is a man and we just cannot make Him other than man”' },
      { label: 'Allah appeared in the person of W. Fard Muhammad', verdict: 'yes', topicId: 'noi-overview', quote: '“Allah (God) appeared in the Person of Master W. Fard Muhammad, July, 1930”' },
      { label: 'Elijah Muhammad is “the last Apostle”', verdict: 'yes', topicId: 'noi-overview', quote: 'his book calls the apostle raised among black Americans “the last Apostle”' },
      { label: 'Resurrection is mental, not physical', verdict: 'yes', topicId: 'noi-overview', quote: '“not in physical resurrection but mental resurrection”' },
      { label: 'White people were bred as a race of devils', verdict: 'yes', topicId: 'noi-overview', quote: 'This race was wicked by nature, a race of devils' },
      { label: 'Nothing is like Allah', verdict: 'no', topicId: 'noi-overview', quote: '“There is nothing like unto Him” (Quran 42:11)' },
      { label: 'Allah is the Ever-Living, who does not die', verdict: 'no', topicId: 'noi-overview', quote: '“the Ever-Living who does not die” (Quran 25:58)' },
      { label: 'Muhammad is the last of the prophets', verdict: 'no', topicId: 'noi-overview', quote: 'It calls Muhammad the “last of the prophets” (Quran 33:40)' },
      { label: 'A bodily resurrection', verdict: 'no', topicId: 'noi-overview', quote: 'It teaches a bodily resurrection in which Allah reassembles the bones (Quran 75:3-4)' },
      { label: 'Human colours are one of God’s signs', verdict: 'no', topicId: 'noi-overview', quote: 'it treats the variety of human colours as one of God’s signs (Quran 30:22)' },
    ],
  },
  {
    kind: 'contrast',
    id: 'archaeology-both-columns',
    title: 'What archaeology confirms, and where it asks hard questions',
    note: 'Archaeology has confirmed a great deal, raised some hard questions, and left most things untouched. Know both lists before you use the first.',
    topics: ['archaeology-and-the-bible'],
    yes: 'Confirmed by finds',
    no: 'Hard questions',
    neutral: true,
    rows: [
      { label: 'A people called Israel in Canaan by about 1208 BC', verdict: 'yes', topicId: 'archaeology-and-the-bible', quote: 'it shows a people called Israel living in Canaan by that date' },
      { label: 'The “House of David” (Tel Dan)', verdict: 'yes', topicId: 'archaeology-and-the-bible', quote: 'boasts of killing a king of Israel and a king of the “House of David”' },
      { label: 'Sennacherib and Hezekiah, 701 BC', verdict: 'yes', topicId: 'archaeology-and-the-bible', quote: 'Each side tells the story in its own way, and on the main facts they agree' },
      { label: 'Belshazzar in Babylon', verdict: 'yes', topicId: 'archaeology-and-the-bible', quote: 'They show that he was the eldest son of the last king, Nabonidus' },
      { label: 'Pontius Pilate, prefect of Judea', verdict: 'yes', topicId: 'archaeology-and-the-bible', quote: 'It carries a dedication by “Pontius Pilatus, Prefect of Judea”' },
      { label: 'Gallio, proconsul of Achaia', verdict: 'yes', topicId: 'archaeology-and-the-bible', quote: 'names Gallio as proconsul' },
      { label: 'The exodus', verdict: 'no', topicId: 'archaeology-and-the-bible', quote: 'No Egyptian text mentions the exodus, and no camp sites have been found in Sinai.' },
      { label: 'Jericho', verdict: 'no', topicId: 'archaeology-and-the-bible', quote: 'dated the destruction of its great walled city to about 1550 BC, too early for Joshua on any reckoning' },
      { label: 'Ai', verdict: 'no', topicId: 'archaeology-and-the-bible', quote: 'lay in ruins for a thousand years before the Israelites arrived' },
      { label: 'The size of David and Solomon’s kingdom', verdict: 'no', topicId: 'archaeology-and-the-bible', quote: 'Archaeologists disagree sharply about how large the kingdom of David and Solomon was.' },
    ],
  },
  {
    kind: 'pairs',
    id: 'two-printed-qurans',
    title: 'Two printed Qurans, verse by verse',
    note: 'The great majority of differences between the readings are of pronunciation and do not touch the meaning. These are among the few that change a word; none of them changes a doctrine, and Muslim scholars accept both readings.',
    topics: ['islam-quran-readings'],
    left: 'Hafs from ‘Asim',
    right: 'Nafi‘ (Warsh, Qalun) or other readers',
    rows: [
      { label: 'Quran 1:4', left: '“owner” or “master” of the Day of Judgment', right: '“king” (Nafi‘ and most of the ten readers)', topicId: 'islam-quran-readings', quote: 'Hafs reads maaliki, “owner” or “master” of the Day of Judgment, where Nafi‘ and most of the ten readers have maliki, “king”' },
      { label: 'Quran 2:125', left: 'a command: take the standing place of Abraham as a place of prayer', right: 'past tense: people took it as a place of prayer', topicId: 'islam-quran-readings', quote: 'In Nafi‘’s reading, which Warsh and Qalun transmit, the verb is in the past tense: people took it as a place of prayer', also: 'In the Hafs text of another verse God gives a command' },
      { label: 'Quran 3:146', left: 'devout men “fought” beside a prophet', right: '“was killed” (Nafi‘, Ibn Kathir and Abu ‘Amr)', topicId: 'islam-quran-readings', quote: 'Nafi‘, Ibn Kathir and Abu ‘Amr read the verb as “was killed”', also: 'In the Hafs text, devout men fought beside a prophet' },
      { label: 'Quran 21:4', left: 'a report: “The Prophet said”', right: 'a command: “Say” (most of the other readers)', topicId: 'islam-quran-readings', quote: 'Hafs opens another verse with a report, “The Prophet said” (Quran 21:4). Most of the other readers have a command, “Say”' },
      { label: 'Quran 2:184', left: 'feeding “a poor person”', right: 'the plural, poor people', topicId: 'islam-quran-readings', quote: 'while Nafi‘’s reading has the plural, poor people', also: 'Hafs speaks of “a ransom [as substitute] of feeding a poor person [each day]”' },
    ],
  },
  {
    kind: 'pairs',
    id: 'lord-and-jesus',
    title: 'Said of the LORD, said of Jesus',
    note: 'Six places where the New Testament takes words the Old Testament uses of the LORD and applies them to Jesus.',
    topics: ['islam-jesus-more-than-prophet'],
    left: 'Said of the LORD',
    right: 'Said of Jesus',
    rows: [
      { label: 'Isaiah 40:3 · Mark 1:2-3', left: '“Prepare the way for the LORD”', right: 'John the Baptist prepares the way for Jesus', topicId: 'islam-jesus-more-than-prophet', quote: '“Prepare the way for the LORD” (Isaiah 40:3) is fulfilled when John the Baptist prepares the way for Jesus (Mark 1:2-3)' },
      { label: 'Isaiah 45:23 · Philippians 2:10-11', left: '“Every knee will bow before Me”', right: 'every knee will bow at the name of Jesus', topicId: 'islam-jesus-more-than-prophet', quote: 'Paul says every knee will bow at the name of Jesus and every tongue confess that he is Lord (Philippians 2:10-11)', also: 'The LORD swears, “Every knee will bow before Me, every tongue will swear allegiance” (Isaiah 45:23)' },
      { label: 'Joel 2:32 · Romans 10:9-13', left: '“Everyone who calls on the name of the LORD will be saved”', right: 'applied to calling on Jesus as Lord', topicId: 'islam-jesus-more-than-prophet', quote: '“Everyone who calls on the name of the LORD will be saved” (Joel 2:32) is applied to calling on Jesus as Lord (Romans 10:9-13)' },
      { label: 'Isaiah 6:1-5 · John 12:41', left: 'Isaiah saw the LORD seated on his throne', right: 'Isaiah “saw Jesus’ glory”', topicId: 'islam-jesus-more-than-prophet', quote: 'John says Isaiah “saw Jesus’ glory and spoke about Him” (John 12:41)', also: 'Isaiah saw the LORD seated on his throne (Isaiah 6:1-5)' },
      { label: 'Psalm 102:25-27 · Hebrews 1:10-12', left: 'the LORD praised as the unchanging Creator', right: 'quoted as words spoken about the Son', topicId: 'islam-jesus-more-than-prophet', quote: 'The psalm that praises the LORD as the unchanging Creator (Psalm 102:25-27) is quoted as words spoken about the Son (Hebrews 1:10-12)' },
      { label: 'Isaiah 44:6 · Revelation 1:17', left: '“I am the first and I am the last”', right: '“I am the First and the Last”', topicId: 'islam-jesus-more-than-prophet', quote: 'The risen Jesus says, “I am the First and the Last” (Revelation 1:17)', also: 'The LORD says, “I am the first and I am the last” (Isaiah 44:6)' },
    ],
  },
];

export const chartsFor = (topicId: string): Chart[] => CHARTS.filter((c) => c.topics.includes(topicId));
