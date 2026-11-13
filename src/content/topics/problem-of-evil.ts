import type { Topic } from '../types';

export const problemOfEvil: Topic = {
  id: 'problem-of-evil',
  title: 'The Problem of Evil',
  icon: '⚖',
  summary: 'The hardest question — handled both intellectually and pastorally.',
  lesson: [
    {
      heading: 'Intellectual vs. emotional',
      body: [
        'Some people raise evil as a philosophical argument; others are hurting. Listen first. Someone grieving needs compassion before a syllogism (Romans 12:15).',
      ],
      references: ['Romans 12:15', 'John 11:35'],
    },
    {
      heading: 'The logical problem',
      body: [
        'Claim: an all-good, all-powerful God and evil are logically incompatible.',
        'The free will defence (Alvin Plantinga) shows it is possible God has morally sufficient reasons — such as creating free creatures capable of genuine love, which also makes evil possible. Most philosophers, including atheists, now agree the logical problem fails.',
      ],
    },
    {
      heading: 'The evidential problem',
      body: [
        'Claim: even if possible, the amount of evil makes God improbable.',
        'Responses: (1) we are not in a position to know God has no good reason — a finite viewpoint can’t see the whole picture (Job 38-42). (2) The other evidence for God must be weighed too. (3) Christianity teaches that this life isn’t the whole story; suffering is temporary compared to eternity (Romans 8:18).',
      ],
      references: ['Genesis 50:20', 'Romans 8:18, 28', '2 Corinthians 4:17'],
    },
    {
      heading: 'Turning the tables',
      body: [
        'To call something truly evil assumes an objective moral standard — which points back to God (see the moral argument).',
        'Christianity uniquely offers a God who enters suffering himself. At the cross, God does not explain evil from a distance; he bears it, and promises to end it (Revelation 21:4).',
      ],
      references: ['Isaiah 53:3-5', 'Hebrews 4:15', 'Revelation 21:4'],
    },
  ],
  objections: [
    {
      id: 'poe-1',
      objection: 'If God were all-good and all-powerful, he would stop all suffering.',
      response:
        'That assumes God couldn’t have any good reason for allowing suffering for a time. But if God made us free so we could truly love, then wrong choices were possible too. And Christianity says God will end suffering — he just hasn’t yet. The fact that we don’t see every reason doesn’t mean there aren’t any.',
      keyPoints: [
        'Hidden assumption: no possible good reason.',
        'Free will defence.',
        'God will end suffering (Rev 21:4).',
      ],
    },
    {
      id: 'poe-2',
      objection: 'What about natural disasters? Those aren’t caused by free will.',
      response:
        'That’s a fair point. Some respond that a stable, law-governed world — needed for free, meaningful choices — will include things like earthquakes. The Bible also describes creation as fallen and groaning (Romans 8:20-22). Ultimately, we may not know every reason, but if God exists and is good, we can trust there is one.',
      keyPoints: [
        'Stable natural laws enable meaningful action.',
        'Creation is fallen (Romans 8:20-22).',
        'Humility about our limited knowledge.',
      ],
    },
    {
      id: 'poe-3',
      objection: 'I lost someone I loved. How can you say God is good?',
      response:
        'I’m so sorry. I won’t pretend to have a neat answer for your pain. What I can say is that Jesus himself wept at his friend’s grave, even knowing he would raise him. God isn’t distant from suffering — he entered it on the cross. And he promises a day when he will wipe every tear away. I’d love to walk with you through this, if you’re open to it.',
      keyPoints: [
        'Lead with empathy, not argument.',
        'Jesus wept (John 11:35).',
        'God suffers with us and promises restoration.',
      ],
    },
  ],
  quiz: [
    {
      id: 'poe-q1',
      question: 'Who formulated the influential “free will defence”?',
      options: ['David Hume', 'Alvin Plantinga', 'Thomas Aquinas', 'Blaise Pascal'],
      answer: 1,
      explanation: 'Alvin Plantinga, in God, Freedom, and Evil (1974).',
    },
    {
      id: 'poe-q2',
      question: 'The evidential problem of evil argues that evil…',
      options: [
        'Makes God’s existence logically impossible.',
        'Makes God’s existence improbable.',
        'Proves God is evil.',
        'Is an illusion.',
      ],
      answer: 1,
      explanation: 'It is a probabilistic argument, not a claim of logical contradiction.',
    },
    {
      id: 'poe-q3',
      question: 'When someone is grieving, the best first response is usually…',
      options: [
        'Present the free will defence.',
        'Quote Romans 8:28.',
        'Listen and show compassion.',
        'Change the subject.',
      ],
      answer: 2,
      explanation: '“Weep with those who weep.” (Romans 12:15)',
    },
  ],
  furtherReading: [
    'C.S. Lewis — The Problem of Pain',
    'Timothy Keller — Walking with God through Pain and Suffering',
    'Alvin Plantinga — God, Freedom, and Evil',
  ],
};
