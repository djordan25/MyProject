import type { Topic } from '../types';

export const resurrection: Topic = {
  id: 'resurrection',
  title: 'The Resurrection',
  icon: '☀',
  summary: 'The minimal-facts approach, and why natural explanations fall short.',
  lesson: [
    {
      heading: 'Why the resurrection matters',
      body: [
        'Christianity stands or falls on the resurrection (1 Corinthians 15:14-17). That makes it testable: if Jesus rose, his claims are vindicated.',
      ],
      references: ['1 Corinthians 15:14-17', 'Acts 17:31', 'Romans 1:4'],
    },
    {
      heading: 'The minimal facts',
      body: [
        'Gary Habermas popularised an approach using only facts that are well-evidenced and accepted by the vast majority of critical scholars, including sceptics:',
      ],
      argument: [
        'Jesus died by crucifixion.',
        'His disciples sincerely believed he rose and appeared to them.',
        'Paul, a persecutor of the church, was suddenly converted.',
        'James, Jesus’ sceptical brother, was converted.',
        'The tomb was empty (accepted by a strong majority, though not all).',
      ],
    },
    {
      heading: 'Weighing the explanations',
      body: [
        'Any theory has to explain all the facts. Natural alternatives each explain one or two at best:',
        'Hallucination: hallucinations are individual, not group experiences, and wouldn’t empty a tomb or convert hostile sceptics like Paul and James.',
        'Stolen body / conspiracy: the disciples were willing to suffer and die for the claim, and the deaths of Peter, Paul and James are well attested; people don’t die for what they know is a lie.',
        'Swoon (Jesus didn’t really die): Roman executioners were expert, and a half-dead man would not inspire belief in a glorious resurrection.',
        'Wrong tomb: the authorities could simply have produced the body.',
        'The resurrection explains all the facts — and, given that God exists, it is not ruled out in advance.',
      ],
    },
    {
      heading: 'Why the empty tomb matters',
      body: [
        'The resurrection was first preached in Jerusalem, a short walk from the tomb, within weeks of the crucifixion. If the body had still been there, the authorities could have ended the movement in an afternoon by producing it.',
        'Instead, the earliest reply on record is that the disciples stole the body (Matthew 28:12-13). That is an explanation of an empty tomb, not a denial of one.',
        'The burial itself is credible. All four Gospels say Jesus was buried by Joseph of Arimathea, “a prominent Council member” (Mark 15:43): a named member of the very council that condemned him. Christians would not have invented a favourable role for one of its members.',
      ],
      references: ['Matthew 28:12-13', 'Mark 15:43', 'Acts 2:29-32'],
    },
    {
      heading: 'What changed the disciples?',
      body: [
        'On the evening after the crucifixion the disciples were behind locked doors, afraid (John 20:19). Weeks later the same men were preaching in the temple courts, and told the council that had killed Jesus, “We must obey God rather than men” (Acts 5:29). The authorities noticed their boldness (Acts 4:13).',
        'Devout Jews began meeting to worship on the first day of the week, not the Sabbath. James, who had not believed in his brother, became a leader of the church. Paul turned from hunting Christians to planting churches.',
        'Each of them gave the same explanation: they had seen Jesus alive.',
      ],
      references: ['John 20:19', 'Acts 4:13', 'Acts 5:29', '1 Corinthians 15:7-8'],
    },
    {
      heading: 'What it means',
      body: [
        'The resurrection is evidence, but it is more than a proof. It is the beginning of the remaking of the world. Christ is “the firstfruits of those who have fallen asleep” (1 Corinthians 15:20): what happened to him will happen to all who belong to him.',
        'It means death is not the end, that the sacrifice for sin was accepted, and that Jesus is alive and can be known now. Peter calls it “a living hope through the resurrection of Jesus Christ from the dead” (1 Peter 1:3). When you make the case, do not stop at the evidence. Say what it means.',
      ],
      references: ['1 Corinthians 15:20', '1 Peter 1:3', 'Romans 4:25'],
    },
  ],
  objections: [
    {
      id: 'res-1',
      followUps: [
        { reply: 'Grief can make people see things.', answer: 'Grief visions happen to individuals. They do not happen to groups at the same time (1 Corinthians 15:5-8), they do not convince enemies like Paul, and they do not empty a tomb.' },
      ],
      objection: 'The disciples just hallucinated.',
      response:
        'Hallucinations are private experiences, like dreams — you can’t share them with a group. Yet appearances were to groups, including over 500 at once. Hallucinations also don’t explain the empty tomb, or why enemies like Paul and sceptics like James came to believe.',
      keyPoints: [
        'Group appearances (1 Cor 15:5-7).',
        'Doesn’t explain the empty tomb.',
        'Doesn’t explain Paul and James.',
      ],
    },
    {
      id: 'res-2',
      followUps: [
        { reply: 'Any natural explanation is more likely than a miracle.', answer: 'Only if you already know there is no God. If God exists, raising Jesus is well within his power, and the question becomes one of evidence. The natural explanations have each been tried, and each fails to explain the empty tomb, the appearances and the changed lives together.' },
      ],
      objection: 'Dead people don’t rise — that’s just impossible.',
      response:
        'You’re right that dead people don’t rise naturally — and the disciples knew that too. The claim isn’t that Jesus rose naturally, but that God raised him. So the question really depends on whether God exists. If he does, a resurrection isn’t impossible; it’s a matter of evidence.',
      keyPoints: [
        'Agree: no natural resurrection.',
        'Claim is that God raised Jesus.',
        'Ties back to the existence of God.',
      ],
    },
    {
      id: 'res-3',
      followUps: [
        { reply: 'Maybe the disciples were sincerely mistaken.', answer: 'Mistaken about what? They did not claim a feeling or a vision in the night. They claimed that he showed them his hands and feet, invited them to touch him, and ate in front of them (Luke 24:39-43). You can be mistaken about a doctrine you were taught. It is hard to be mistaken about that.' },
      ],
      objection: 'Lots of people die for their beliefs — that doesn’t make them true.',
      response:
        'True, but there’s a key difference. Others die for beliefs they received from someone else. The apostles were in a position to know whether they’d seen the risen Jesus. People may die for a lie they believe, but not for what they know is a lie.',
      keyPoints: [
        'Sincerity ≠ truth in general.',
        'Apostles were eyewitnesses — they would know.',
        'Rules out deliberate fabrication.',
      ],
    },
    {
      id: 'res-4',
      objection: 'The disciples stole the body and made up the story.',
      response:
        'That was the first explanation offered (Matthew 28:12-13), and it has always had the same problem: it makes the disciples deliberate frauds. They then spent the rest of their lives being beaten, imprisoned and in some cases killed for a claim they knew to be a lie, and none of them broke. Liars make poor martyrs. It also leaves Paul and James unexplained, who were not disciples and had no part in any plot.',
      keyPoints: ['It makes the disciples knowing frauds.', 'People do not suffer and die for what they know is false.', 'It does not explain Paul or James.'],
      references: ['Matthew 28:12-13', '1 Corinthians 15:7-8'],
      followUps: [
        { reply: 'Then someone else moved the body.', answer: 'Whoever moved it could have said so once the preaching began, and the authorities had every reason to find out. And a missing body explains only an empty tomb. It does not explain why so many people, including enemies, became convinced they had seen him alive.' },
      ],
    },
    {
      id: 'res-5',
      objection: 'The resurrection story is a legend that grew over time.',
      response:
        'Legends need time, and here there is none. The summary Paul quotes in 1 Corinthians 15:3-8 was handed to him within a few years of the event, and it already contains the death, the burial, the resurrection and a list of named witnesses. It was circulating while those witnesses, and plenty of hostile ones, were alive to contradict it. The Gospel accounts are also strikingly plain: none of them describes the resurrection itself.',
      keyPoints: ['The creed dates to within a few years.', 'Named witnesses were alive.', 'The accounts are restrained, not embroidered.'],
      references: ['1 Corinthians 15:3-8'],
      followUps: [
        { reply: 'Stories get exaggerated every time they are retold.', answer: 'They can, which is why the date matters. Compare the later, apocryphal gospels, where the embroidery is obvious. The earliest material is the barest: he died, he was buried, he was raised, he appeared.' },
      ],
    },
    {
      id: 'res-6',
      objection: 'The women simply went to the wrong tomb.',
      response:
        'The women had watched the burial two days earlier (Mark 15:47). The tomb belonged to a known man, Joseph of Arimathea, who could have pointed it out. And if the disciples had gone to the wrong place, the authorities needed only to walk to the right one. A wrong tomb also does nothing to explain the appearances.',
      keyPoints: ['The women saw where he was laid.', 'The owner of the tomb was known.', 'The authorities could have corrected the mistake.'],
      references: ['Mark 15:47', 'Mark 15:43'],
      followUps: [
        { reply: 'In their grief they could have been confused.', answer: 'Perhaps for a morning. But Peter and John went to check (John 20:3-8), and the question would have been settled by anyone who cared to look. The preaching went on for decades in the same city.' },
      ],
    },
  ],
  quiz: [
    {
      id: 'res-q1',
      question: 'Who is most associated with the “minimal facts” approach?',
      options: ['C.S. Lewis', 'Gary Habermas', 'Augustine', 'Ravi Zacharias'],
      answer: 1,
      explanation: 'Gary Habermas surveyed scholarly literature to identify widely-accepted facts.',
    },
    {
      id: 'res-q2',
      question: 'Which theory claims Jesus didn’t actually die on the cross?',
      options: ['Hallucination theory', 'Wrong-tomb theory', 'Swoon theory', 'Legend theory'],
      answer: 2,
      explanation: 'The swoon theory; it fails given Roman execution practices and the disciples’ response.',
    },
    {
      id: 'res-q3',
      question: 'According to 1 Corinthians 15, the risen Jesus appeared to more than how many people at once?',
      options: ['12', '70', '500', '5,000'],
      answer: 2,
      explanation: '1 Corinthians 15:6 — “more than five hundred brothers at once, most of whom are still living”.',
    },
    {
      id: 'res-q4',
      question: 'Why is James’ conversion significant?',
      options: [
        'He was a Roman official.',
        'He was Jesus’ brother and a sceptic during Jesus’ ministry.',
        'He wrote the first Gospel.',
        'He found the empty tomb.',
      ],
      answer: 1,
      explanation: 'John 7:5 says his brothers did not believe; James later led the Jerusalem church.',
    },
    {
      id: 'res-q5',
      question: 'What does the earliest opposing explanation (Matthew 28:12-13) concede?',
      options: ['That Jesus never died', 'That the tomb was empty', 'That there were no witnesses', 'That Pilate was mistaken'],
      answer: 1,
      explanation: 'Saying the disciples stole the body admits the body was gone.',
    },
    {
      id: 'res-q6',
      question: 'Who buried Jesus, according to all four Gospels?',
      options: ['Peter', 'Joseph of Arimathea, a member of the council', 'A Roman soldier', 'Nobody knows'],
      answer: 1,
      explanation: 'Mark 15:43. An unlikely detail to invent.',
    },
  ],
  furtherReading: [
    'Gary Habermas & Michael Licona — The Case for the Resurrection of Jesus',
    'N.T. Wright — The Resurrection of the Son of God',
    'Michael Licona — The Resurrection of Jesus: A New Historiographical Approach',
  ],
};
