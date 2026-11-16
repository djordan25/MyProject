import type { Topic } from '../types';

export const identityOfJesus: Topic = {
  id: 'identity-of-jesus',
  title: 'Who Is Jesus?',
  icon: '✝',
  summary: 'Jesus’ historical existence, his claims to divinity, and why “just a good teacher” is not an option.',
  lesson: [
    {
      heading: 'Jesus of history',
      body: [
        'Virtually all historians — Christian or not — agree that Jesus of Nazareth existed, was baptised by John, gathered disciples, and was crucified under Pontius Pilate.',
        'Besides the New Testament, early non-Christian sources mention him: Tacitus (Annals 15.44), Josephus (Antiquities 18.63; 20.200), and Pliny the Younger (Letters 10.96). Josephus’ first passage shows signs of later Christian editing, but most scholars accept an authentic core that mentions Jesus’ execution under Pilate.',
      ],
    },
    {
      heading: 'Jesus’ claims about himself',
      body: [
        'Jesus did more than teach ethics. He forgave sins against others (Mark 2:5-7), applied the divine name to himself (“before Abraham was born, I am” — John 8:58), claimed he would judge the world (Matthew 25:31-46), and accepted worship (John 20:28).',
        'Even in the earliest Gospel, Mark, his self-description as the “Son of Man” coming on the clouds (Mark 14:62, drawing on Daniel 7:13-14) led the high priest to charge him with blasphemy.',
      ],
      references: ['Mark 2:5-7', 'John 8:58', 'John 10:30-33', 'Mark 14:61-64', 'Colossians 1:15-20'],
    },
    {
      heading: 'The trilemma',
      body: [
        'C.S. Lewis argued that someone who made Jesus’ claims cannot simply be a great moral teacher. Either he knew the claims were false (a liar), believed them falsely (a lunatic), or they were true (Lord).',
        'A frequent fourth option is “legend” — the claims were added later. That is answered by the early dating of the sources and the presence of high Christology in the earliest material, such as Paul’s letters (e.g. Philippians 2:6-11, written within about 25 years).',
      ],
      argument: [
        'Jesus claimed to be divine.',
        'Either the claim was a deliberate lie, a sincere delusion, or the truth.',
        'His character and teaching rule out liar or lunatic.',
        'Therefore, Jesus is Lord.',
      ],
    },
    {
      heading: 'The first Christians worshipped him',
      body: [
        'The idea that Jesus was made divine centuries later runs into the earliest Christian writings we have. Paul’s letters were written within about twenty to thirty years of the crucifixion, and they quote hymns and confessions that are older still.',
        'One of them takes Israel’s daily confession that there is one God and places Jesus inside it: “for us there is but one God, the Father, from whom all things came… And there is but one Lord, Jesus Christ, through whom all things came” (1 Corinthians 8:6). Another says that Jesus existed in the form of God and that every knee will bow to him (Philippians 2:6-11), which is how Isaiah speaks of the LORD alone.',
        'Paul even preserves a prayer to Jesus in Aramaic, the language of the first believers in Jerusalem: Maranatha, “Come, O Lord!” (1 Corinthians 16:22). And a Roman governor, Pliny, reported to the emperor around AD 112 that Christians met before dawn to sing a hymn to Christ as to a god.',
        'These were Jews, raised to worship one God only. Something drove them to worship Jesus within a few years of his death.',
      ],
      references: ['1 Corinthians 8:6', 'Philippians 2:6-11', '1 Corinthians 16:22'],
    },
    {
      heading: 'What his opponents said',
      body: [
        'Jesus’ enemies did not say that he did nothing remarkable. They said he did it by an evil power: “By the prince of the demons He drives out demons” (Mark 3:21-22).',
        'They did not charge him with teaching ethics. The charge before the Jewish council was blasphemy (Mark 14:61-64), and the charge nailed above him by the Romans read “THE KING OF THE JEWS” (Mark 15:26).',
        'Any account of Jesus has to explain why he was executed. A teacher of kindness and tolerance threatens no one. A man who speaks and acts as though he stands in God’s place gets crucified.',
      ],
      references: ['Mark 3:21-22', 'Mark 14:61-64', 'Mark 15:26'],
    },
  ],
  objections: [
    {
      id: 'joj-1',
      followUps: [
        { reply: 'John’s Gospel is late. The earliest Jesus made no such claims.', answer: 'The claims are in Mark, the earliest Gospel: he forgives sins on his own authority (Mark 2:5-7), and tells the high priest he will sit at the right hand of God and come with the clouds of heaven (Mark 14:62). And Paul, writing before any Gospel, already says he existed in the form of God (Philippians 2:6).' },
      ],
      objection: 'Jesus never actually claimed to be God — that was invented later.',
      response:
        'Even if you only look at the earliest material, Jesus does things only God can do: he forgives sins committed against other people, he claims authority to judge everyone, and he describes himself with the divine Son of Man imagery from Daniel 7. His opponents understood the claim — that’s why they charged him with blasphemy. And Paul, writing in the 50s AD, already quotes hymns that worship Jesus as God.',
      keyPoints: [
        'Implicit claims: forgiving sins, judging the world.',
        'Explicit claims: “I am”, Son of Man (Mark 14:62).',
        'Early high Christology in Paul (Philippians 2).',
      ],
    },
    {
      id: 'joj-2',
      followUps: [
        { reply: 'All the sources are Christian, so they are biased.', answer: 'Tacitus and Josephus were not Christians, and both mention him. And having a point of view does not make a source false: nearly everything we know of ancient history comes from writers who cared about their subject. Historians test their sources; they do not discard them for having convictions.' },
      ],
      objection: 'Jesus probably never even existed.',
      response:
        'That view is rejected by nearly every historian in the field, including sceptics like Bart Ehrman, who wrote a book defending Jesus’ existence. We have multiple independent sources within decades of his life, plus Roman and Jewish writers who mention him. By the standards of ancient history, Jesus is very well attested.',
      keyPoints: [
        'Scholarly consensus, including sceptics.',
        'Multiple early independent sources.',
        'Non-Christian references: Tacitus, Josephus.',
      ],
    },
    {
      id: 'joj-3',
      followUps: [
        { reply: 'Maybe his followers exaggerated what he said.', answer: 'The claims are in the earliest sources, written while eyewitnesses were alive, and they are the reason he was condemned: the charge was blasphemy (Mark 14:61-64). Nobody crucifies a harmless teacher of ethics.' },
      ],
      objection: 'Jesus was a good moral teacher, but not God.',
      response:
        'That’s the one option Jesus doesn’t seem to leave open. A merely good teacher wouldn’t claim to forgive everyone’s sins or say that people’s eternal destiny depends on their response to him. If those claims are false, he isn’t a good teacher. So the real question is whether he was telling the truth.',
      keyPoints: [
        'Good teachers don’t make false divine claims.',
        'Liar, lunatic, or Lord (plus answer to “legend”).',
        'Redirect to the evidence for his claims — the resurrection.',
      ],
    },
    {
      id: 'joj-4',
      objection: 'The story of Jesus was copied from pagan myths like Horus and Mithras.',
      response:
        'This claim is popular online and almost unknown among historians. Read the myths themselves and the parallels fall away: Horus is not born of a virgin or crucified, and Mithras is born from a rock; most of what we know about the worship of Mithras comes from after the New Testament was written. Jesus, by contrast, is a Jew in first-century Palestine, among people who despised pagan myths, and his story is tied to named officials and datable events (Luke 3:1).',
      keyPoints: ['The claimed parallels are not in the myths.', 'First-century Jews rejected pagan religion.', 'Jesus is anchored in datable history.'],
      references: ['Luke 3:1', '1 Corinthians 15:3-8'],
      followUps: [
        { reply: 'Dying and rising gods were everywhere in the ancient world.', answer: 'What you find are seasonal figures tied to the cycle of crops, set in a timeless past. That is very different from a man executed under a named governor and seen alive afterwards by named witnesses, many of whom could still be questioned (1 Corinthians 15:3-8).' },
      ],
    },
    {
      id: 'joj-5',
      objection: 'Jesus was only declared to be God at the Council of Nicaea, three hundred years later.',
      response:
        'Nicaea was called because a teacher named Arius had begun to deny what the churches already confessed. The New Testament calls Jesus God (John 1:1; 20:28), Paul’s early letters place him alongside the Father as the one Lord through whom all things were made (1 Corinthians 8:6), and a Roman governor two centuries before Nicaea reported Christians singing to Christ as to a god. The council put an old belief into careful words. It did not create it.',
      keyPoints: ['Nicaea answered Arius; it did not invent the belief.', 'The New Testament already calls Jesus God.', 'Worship of Jesus is attested from the start.'],
      references: ['John 1:1', 'John 20:28', '1 Corinthians 8:6'],
      followUps: [
        { reply: 'The emperor Constantine forced the bishops to agree.', answer: 'Constantine wanted unity and called the council, but the bishops were not his creatures: many of them bore the scars of persecution under earlier emperors. All but a handful sided against Arius because his teaching was the novelty.' },
      ],
    },
  ],
  quiz: [
    {
      id: 'joj-q1',
      question: 'Which Roman historian mentions “Christus” being executed under Pontius Pilate?',
      options: ['Pliny the Elder', 'Tacitus', 'Suetonius', 'Livy'],
      answer: 1,
      explanation: 'Tacitus, Annals 15.44 (c. AD 116).',
    },
    {
      id: 'joj-q2',
      question: 'In John 8:58 Jesus says “before Abraham was born, I am.” Why is this significant?',
      options: [
        'It shows he was older than Abraham’s descendants.',
        'It echoes the divine name revealed in Exodus 3:14.',
        'It claims he was a prophet.',
        'It is a reference to the temple.',
      ],
      answer: 1,
      explanation: 'The hearers picked up stones to stone him, recognising a claim to the divine name.',
    },
    {
      id: 'joj-q3',
      question: 'The common “fourth option” added to Lewis’s trilemma is…',
      options: ['Legend', 'Lawyer', 'Liberator', 'Logic'],
      answer: 0,
      explanation: 'The “legend” option is answered by the early sources and early worship of Jesus.',
    },
    {
      id: 'joj-q4',
      question: 'What does 1 Corinthians 8:6 do with Israel’s confession of one God?',
      options: ['Rejects it', 'Places Jesus inside it as the one Lord through whom all things came', 'Applies it to Moses', 'Says nothing about Jesus'],
      answer: 1,
      explanation: 'Written within about twenty-five years of the crucifixion.',
    },
    {
      id: 'joj-q5',
      question: 'What charge did the Jewish council bring against Jesus?',
      options: ['Theft', 'Blasphemy', 'Teaching ethics', 'Tax evasion'],
      answer: 1,
      explanation: 'Mark 14:61-64. A harmless teacher is not crucified.',
    },
  ],
  furtherReading: [
    'Lee Strobel — The Case for Christ',
    'Richard Bauckham — Jesus and the Eyewitnesses',
    'C.S. Lewis — Mere Christianity (Book 2, ch. 3)',
  ],
};
