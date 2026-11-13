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
      scriptures: ['1 Corinthians 15:14-17', 'Acts 17:31', 'Romans 1:4'],
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
        'Stolen body / conspiracy: the disciples suffered and many died for the claim; people don’t die for what they know is a lie.',
        'Swoon (Jesus didn’t really die): Roman executioners were expert, and a half-dead man would not inspire belief in a glorious resurrection.',
        'Wrong tomb: the authorities could simply have produced the body.',
        'The resurrection explains all the facts — and, given that God exists, it is not ruled out in advance.',
      ],
    },
  ],
  objections: [
    {
      id: 'res-1',
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
      objection: 'Lots of people die for their beliefs — that doesn’t make them true.',
      response:
        'True, but there’s a key difference. Others die for beliefs they received from someone else. The apostles were in a position to know whether they’d seen the risen Jesus. People may die for a lie they believe, but not for what they know is a lie.',
      keyPoints: [
        'Sincerity ≠ truth in general.',
        'Apostles were eyewitnesses — they would know.',
        'Rules out deliberate fabrication.',
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
      explanation: '1 Corinthians 15:6 — “more than five hundred brothers at one time, most of whom are still alive”.',
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
  ],
  furtherReading: [
    'Gary Habermas & Michael Licona — The Case for the Resurrection of Jesus',
    'N.T. Wright — The Resurrection of the Son of God',
    'Michael Licona — The Resurrection of Jesus: A New Historiographical Approach',
  ],
};
