import type { Topic } from '../types';

export const scientificMiracles: Topic = {
  id: 'islam-scientific-miracles',
  title: 'Scientific Miracles in the Quran?',
  icon: '🔬',
  summary: 'Embryology, the expanding universe and more. Read naturally, these verses reflect the ancient world — and the hadith make it clearer.',
  lesson: [
    {
      heading: 'The claim',
      body: [
        'Popular Muslim apologetics argues that the Quran contains scientific facts unknown in the seventh century — proof that it came from God. Common examples: embryology (Quran 23:12-14), the Big Bang (Quran 21:30), and the expanding universe (Quran 51:47).',
        'A helpful question to ask: “Did any Muslim scholar read these verses this way before modern science discovered the facts?” If the “prediction” is only recognised after the discovery, it isn’t a prediction.',
      ],
      references: ['Quran 23:12-14', 'Quran 21:30', 'Quran 51:47'],
    },
    {
      heading: 'Embryology (Quran 23:14)',
      body: [
        '“We made the sperm-drop into a clinging clot, and We made the clot into a lump [of flesh], and We made [from] the lump, bones, and We covered the bones with flesh” (Quran 23:14).',
        'The sequence says bones form first and are then clothed with flesh. In reality, muscle and skeletal tissue develop together, and the cartilage models of bones are formed alongside the surrounding tissues. The description reflects ideas common in ancient medicine rather than modern embryology.',
        'Quran 86:6-7 says man is created from a fluid “emerging from between the backbone and the ribs” — not where reproductive fluid originates.',
      ],
      references: ['Quran 23:12-14', 'Quran 86:6-7'],
    },
    {
      heading: 'Where does the sun go?',
      body: [
        'Dhul-Qarnayn travelled until “he reached the setting of the sun, he found it [as if] setting in a spring of dark mud” (Quran 18:86). Muslims respond that this is from his perspective — but the verse says he reached the setting place of the sun.',
        'The hadith settle how Muhammad understood the sun’s movement: asked where the sun goes at sunset, he said, “It goes till it prostrates itself underneath the Throne and takes the permission to rise again” (Sahih al-Bukhari 3199).',
      ],
      references: ['Quran 18:86', 'Sahih al-Bukhari 3199'],
    },
    {
      heading: 'Other hadith on the natural world',
      body: [
        '“If a house fly falls in the drink of anyone of you, he should dip it… for one of its wings has a disease and the other has the cure” (Sahih al-Bukhari 3320).',
        'Adam was created sixty cubits tall, and people have been decreasing in stature ever since (Sahih al-Bukhari 3326). Human remains from the ancient world show no such giant ancestors.',
        'Use these gently. The point is not that the Bible is a science textbook — it isn’t. The point is that a Muslim who argues that the Quran proves itself by science must accept the same scrutiny of the scientific statements in Islam’s authoritative sources.',
      ],
      references: ['Sahih al-Bukhari 3320', 'Sahih al-Bukhari 3326'],
    },
    {
      heading: 'A better foundation',
      body: [
        'Christians don’t claim the Bible proves itself by hidden science. The Bible tells us the heavens declare God’s glory (Psalm 19:1) and that creation reveals his power (Romans 1:20). Our confidence rests on God’s acts in history — above all the resurrection of Jesus (1 Corinthians 15:14-20).',
      ],
      references: ['Psalm 19:1', 'Romans 1:20', '1 Corinthians 15:14-20'],
    },
  ],
  objections: [
    {
      id: 'sm-1',
      objection: 'Quran 21:30 describes the Big Bang: the heavens and earth were joined and then separated.',
      response:
        'The verse describes heaven and earth as once joined and then separated. Many ancient creation stories describe separating sky and earth — including Genesis 1, where God separates the waters above and below. The Big Bang isn’t a separation of earth from heaven; the earth formed billions of years later. And no classical scholar read this verse as the Big Bang until after the theory was known.',
      keyPoints: ['Common ancient imagery.', 'Earth didn’t exist at the Big Bang.', 'Interpretation only after the discovery.'],
      references: ['Quran 21:30', 'Genesis 1:6-8'],
    },
    {
      id: 'sm-2',
      objection: 'Quran 18:86 is only describing what Dhul-Qarnayn saw.',
      response:
        'That’s a possible reading of the verse, and the translation adds “[as if]”. But Muhammad’s own explanation of the sun in Sahih al-Bukhari 3199 — that it travels to prostrate beneath the Throne each night — shows how he understood the sun’s movement. The sources together reflect an ancient view of the cosmos.',
      keyPoints: ['Acknowledge the perspective reading.', 'Sahih al-Bukhari 3199 reveals the worldview.', 'Consistent with ancient cosmology.'],
      references: ['Quran 18:86', 'Sahih al-Bukhari 3199'],
    },
    {
      id: 'sm-3',
      objection: 'The Bible also has scientific errors, like the earth having pillars.',
      response:
        'The Bible uses poetic and everyday language — like we still say “the sun rises”. Christians don’t claim the Bible contains hidden modern science as proof of inspiration. But Muslims who make the scientific-miracle argument are making that claim for the Quran, so the same standard must apply to it and to the Sahih hadith.',
      keyPoints: ['Phenomenological and poetic language.', 'Christians don’t make the science-miracle claim.', 'The burden is on whoever does.'],
      references: ['Psalm 19:1-6', 'Ecclesiastes 1:5'],
    },
  ],
  quiz: [
    {
      id: 'sm-q1',
      question: 'According to Sahih al-Bukhari 3199, where does the sun go at sunset?',
      options: ['Behind the earth', 'Under the Throne to prostrate', 'Into the sea', 'To the heavens'],
      answer: 1,
      explanation: 'It prostrates beneath the Throne and asks permission to rise.',
    },
    {
      id: 'sm-q2',
      question: 'Quran 23:14 states the sequence of development as…',
      options: ['Flesh, then bones', 'Bones, then covered with flesh', 'Both together', 'Blood, then skin'],
      answer: 1,
      explanation: 'Bones first, then clothed with flesh — not how development actually occurs.',
    },
    {
      id: 'sm-q3',
      question: 'How tall was Adam according to Sahih al-Bukhari 3326?',
      options: ['6 cubits', '60 cubits', '600 cubits', 'An ordinary height'],
      answer: 1,
      explanation: 'And people have been decreasing in stature since.',
    },
    {
      id: 'sm-q4',
      question: 'What is a good question to ask about any “scientific miracle”?',
      options: [
        'Is it in Arabic?',
        'Did anyone interpret it that way before the scientific discovery?',
        'Is the verse long?',
        'Was it revealed in Mecca?',
      ],
      answer: 1,
      explanation: 'A “prediction” only recognised after the fact is not a prediction.',
    },
  ],
};
