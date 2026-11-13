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
        'Besides the New Testament, early non-Christian sources mention him: Tacitus (Annals 15.44), Josephus (Antiquities 18.63; 20.200), and Pliny the Younger (Letters 10.96).',
      ],
    },
    {
      heading: 'Jesus’ claims about himself',
      body: [
        'Jesus did more than teach ethics. He forgave sins against others (Mark 2:5-7), applied the divine name to himself (“before Abraham was, I am” — John 8:58), claimed he would judge the world (Matthew 25:31-46), and accepted worship (John 20:28).',
        'Even in the earliest Gospel, Mark, his self-description as the “Son of Man” coming on the clouds (Mark 14:62, drawing on Daniel 7:13-14) led the high priest to charge him with blasphemy.',
      ],
      scriptures: ['Mark 2:5-7', 'John 8:58', 'John 10:30-33', 'Mark 14:61-64', 'Colossians 1:15-20'],
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
  ],
  objections: [
    {
      id: 'joj-1',
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
      objection: 'Jesus was a good moral teacher, but not God.',
      response:
        'That’s the one option Jesus doesn’t seem to leave open. A merely good teacher wouldn’t claim to forgive everyone’s sins or say that people’s eternal destiny depends on their response to him. If those claims are false, he isn’t a good teacher. So the real question is whether he was telling the truth.',
      keyPoints: [
        'Good teachers don’t make false divine claims.',
        'Liar, lunatic, or Lord (plus answer to “legend”).',
        'Redirect to the evidence for his claims — the resurrection.',
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
      question: 'In John 8:58 Jesus says “before Abraham was, I am.” Why is this significant?',
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
  ],
  furtherReading: [
    'Lee Strobel — The Case for Christ',
    'Richard Bauckham — Jesus and the Eyewitnesses',
    'C.S. Lewis — Mere Christianity (Book 2, ch. 3)',
  ],
};
