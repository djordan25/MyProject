import type { Topic } from '../types';

export const scienceAndFaith: Topic = {
  id: 'science-and-faith',
  title: 'Science, Miracles and Faith',
  icon: '⚛',
  summary: 'Are science and Christianity at war? What science can and cannot tell us, why miracles are not unscientific, and how to talk about Genesis.',
  lesson: [
    {
      heading: 'The myth of a war',
      body: [
        'Many people assume science and Christian faith have always been enemies. Historians of science do not tell it that way. The picture of a long “warfare” was popularised by two nineteenth-century books, and it does not fit the record.',
        'Modern science grew up in a Christian culture, and many of its founders were believers in God: Kepler, Boyle, Newton, Faraday and Maxwell among them. They expected nature to be orderly and understandable because they believed a rational God had made it, and they saw their work as studying his handiwork. “The heavens declare the glory of God” (Psalm 19:1).',
        'The verse “Great are the works of the LORD; they are pondered by all who delight in them” (Psalm 111:2) was carved over the door of the Cavendish Laboratory in Cambridge, where the electron was discovered.',
      ],
      references: ['Psalm 19:1', 'Psalm 111:2', 'Proverbs 25:2'],
    },
    {
      heading: 'Different questions',
      body: [
        'Science asks how the natural world works, and answers by measuring and testing. It is superb at that. But some questions lie outside what measuring can reach. Why is there a universe at all? Why does it follow laws we can understand? What is a human being for? What is right and wrong?',
        'Ask why the kettle is boiling. One answer is that heat is exciting the water molecules. Another is that someone wants a cup of tea. Both are true, and the second is not made false by the first. In the same way, a scientific account of how something happens does not rule out a purpose behind it.',
      ],
    },
    {
      heading: 'What science takes for granted',
      body: [
        'Science assumes things it cannot prove by experiment: that nature is orderly, that the same laws hold everywhere, and that human minds can reach the truth about it.',
        'Christianity gives a reason to expect all three. The world was made by a rational God, and we were made in his image. If instead our minds are only the by-product of a process that selects for survival, it is hard to say why we should trust them on questions far from survival, such as cosmology, or the theory of evolution itself.',
      ],
      references: ['Genesis 1:1', 'Colossians 1:16-17'],
    },
    {
      heading: 'Are miracles impossible?',
      body: [
        'The laws of nature describe what happens when nothing from outside nature intervenes. They cannot tell us whether anything ever does. If I drop an apple and you catch it, no law of physics has been broken; another agent has acted.',
        'So a miracle is not nature going wrong. It is the Author of nature acting within it. If there is no God, miracles do not happen. If there is, they are possible, and the question becomes one of evidence in each case.',
        'People in the first century were not gullible about this. They knew that virgins do not conceive and that the dead stay dead; that is exactly why the events of Jesus’ life were called signs. John wrote them down “so that you may believe that Jesus is the Christ, the Son of God” (John 20:30-31).',
      ],
      references: ['John 20:30-31', 'Acts 2:22'],
    },
    {
      heading: 'Genesis, evolution and the age of the earth',
      body: [
        'Christians who take the Bible seriously hold different views here. Some believe the earth is young and the days of Genesis were ordinary days. Some believe the earth is old and the days are long ages or a literary framework. Some believe God created through an evolutionary process.',
        'All of them affirm what Scripture is clearest about: God made everything that exists (Genesis 1:1; Hebrews 11:3), human beings are made in his image, and something has gone wrong with us that we cannot fix ourselves.',
        'Know your own view and be able to explain it. But do not let this become the barrier. A sceptic does not have to settle the age of the earth before considering whether Jesus rose from the dead. Keep the conversation on the central claim.',
      ],
      references: ['Genesis 1:1', 'Hebrews 11:3', 'Genesis 1:27'],
    },
    {
      heading: 'Is science the only way to know anything?',
      body: [
        'Some say they will believe only what science can prove. That statement is not itself something science can prove, so it fails its own test.',
        'Most of what matters to us is known in other ways: that our memories are broadly reliable, that cruelty is wrong, that another person loves us, that Caesar crossed the Rubicon. History is known by testimony and evidence, not by repeating the experiment. The case for Jesus is made in the way all history is made.',
      ],
    },
  ],
  objections: [
    {
      id: 'sf-1',
      objection: 'Science has disproved God.',
      response:
        'Which discovery do you have in mind? I ask because science studies nature, and God, if he exists, is the one who made nature. No experiment could show that there is nothing beyond the thing being measured. What science has shown is a universe with a beginning, finely balanced for life and written in mathematics, which is at least as much at home in a world made by a mind as in one that came from nothing.',
      keyPoints: ['Ask which discovery.', 'Science studies nature; God is its author.', 'A beginning and fine-tuning fit a Creator.'],
      references: ['Psalm 19:1', 'Romans 1:20'],
      followUps: [
        { reply: 'God is just a way of filling the gaps in our knowledge.', answer: 'That would be a bad argument, and it is not mine. I’m not pointing to what we can’t explain but to what we can: that the universe had a beginning, is orderly and can be understood. The more we learn of that, the more it calls for an explanation outside itself.' },
      ],
    },
    {
      id: 'sf-2',
      objection: 'Miracles are impossible because they would break the laws of nature.',
      response:
        'The laws describe how nature behaves when left to itself. They can’t tell us whether nature is ever not left to itself. If God exists, the one who wrote the laws can act within what he made, the way an author can do anything in his own story. So the real question is whether God exists and whether there is good evidence that he acted, and for the resurrection there is.',
      keyPoints: ['Laws describe; they do not forbid.', 'A miracle is an act of nature’s Author.', 'It comes down to evidence.'],
      references: ['John 20:30-31'],
      followUps: [
        { reply: 'It’s always more likely that the witnesses were wrong than that a miracle happened.', answer: 'Only if you already know that miracles almost never happen, which is the thing in question. We should weigh each case. For the resurrection we have multiple early witnesses who gained nothing by it but suffering, and no better explanation of the facts (1 Corinthians 15:3-8).' },
      ],
    },
    {
      id: 'sf-3',
      objection: 'Evolution explains life, so we don’t need a creator.',
      response:
        'Christians differ on how far evolution explains life, and you don’t need to settle that to see the limits of the argument. Evolution, at most, explains how living things changed once life, a habitable planet and the laws of chemistry were in place. It doesn’t explain where any of those came from, or why there is a universe at all. A process is not a replacement for an author.',
      keyPoints: ['Christians hold a range of views.', 'Evolution presupposes life, laws and a universe.', 'A mechanism does not rule out a maker.'],
      references: ['Genesis 1:1', 'Hebrews 11:3'],
      followUps: [
        { reply: 'Then God is not needed for anything science can describe.', answer: 'Describing how an engine works does not make the engineer unnecessary. God is not one cause among others inside the system; he is the reason there is a system, with laws that can be described at all (Colossians 1:16-17).' },
      ],
    },
    {
      id: 'sf-4',
      objection: 'I only believe what can be proven scientifically.',
      response:
        'Can that sentence be proven scientifically? It can’t, so by its own rule we shouldn’t believe it. And none of us lives that way. You believe that other people have minds, that torturing children is wrong and that the past really happened, none of which a laboratory can show. Science is one excellent way of knowing. It was never the only one.',
      keyPoints: ['The rule fails its own test.', 'We know many things without experiments.', 'History rests on testimony and evidence.'],
      followUps: [
        { reply: 'At least science can be tested. Religion is just faith.', answer: 'Christian faith is not belief without evidence. It is trust based on evidence, and its central claim can be investigated like any other event in history. Paul staked everything on whether it happened (1 Corinthians 15:14).' },
      ],
    },
    {
      id: 'sf-5',
      objection: 'The church has always held science back. Look at Galileo.',
      response:
        'Galileo’s case was real, and the church leaders of his day were wrong. But it was one dispute, tangled up with politics and personalities, and Galileo himself remained a believer to the end. Against it stand the monasteries and universities where science was nursed for centuries, and the long list of scientists who were Christians. One bad episode does not make a war.',
      keyPoints: ['Admit the church was wrong about Galileo.', 'It was one complex dispute.', 'The wider history is of support.'],
      followUps: [
        { reply: 'Most scientists today are atheists.', answer: 'Many are, and many are not; surveys differ by country and field. But what scientists happen to believe does not decide what is true, any more than the faith of Newton and Maxwell does. The question is whether the arguments hold.' },
      ],
    },
  ],
  quiz: [
    {
      id: 'sf-q1',
      question: 'Where did the idea of a long war between science and Christianity mainly come from?',
      options: ['The Bible', 'Two nineteenth-century books', 'Galileo’s writings', 'Ancient Greek philosophers'],
      answer: 1,
      explanation: 'Historians of science do not accept the “warfare” picture.',
    },
    {
      id: 'sf-q2',
      question: 'What does the boiling-kettle example show?',
      options: [
        'Science is unreliable',
        'A scientific explanation and a purpose can both be true',
        'Tea is good for thinking',
        'Only one explanation can be right',
      ],
      answer: 1,
      explanation: '“How” and “why” are different questions.',
    },
    {
      id: 'sf-q3',
      question: 'What do the laws of nature tell us about miracles?',
      options: [
        'That they are impossible',
        'Nothing about whether God ever acts; they describe nature left to itself',
        'That they happen every day',
        'That they only happened in the past',
      ],
      answer: 1,
      explanation: 'Whether God has acted is a question of evidence.',
    },
    {
      id: 'sf-q4',
      question: 'What is wrong with “I only believe what science can prove”?',
      options: ['Nothing', 'Science cannot prove that statement', 'It is too modest', 'Scientists disagree with it'],
      answer: 1,
      explanation: 'It fails its own test.',
    },
    {
      id: 'sf-q5',
      question: 'On the age of the earth and evolution, Christians who trust the Bible…',
      options: ['All hold one view', 'Hold a range of views while agreeing that God made everything', 'Reject all science', 'Avoid the subject'],
      answer: 1,
      explanation: 'Keep the conversation on the central claims about Jesus.',
    },
  ],
  furtherReading: [
    'John Lennox — Can Science Explain Everything?',
    'C.S. Lewis — Miracles',
    'Alvin Plantinga — Where the Conflict Really Lies',
    'John Polkinghorne — Quarks, Chaos and Christianity',
  ],
};
