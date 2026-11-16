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
    {
      heading: 'What the alternatives offer',
      body: [
        'Every view of the world has to say something about suffering, so it is fair to compare answers.',
        'If there is no God, there is no one to blame and no one to appeal to. Suffering is simply what happens in an indifferent universe, and our sense that it ought not to be so is a feeling with nothing behind it.',
        'If the law of karma is true, suffering is the fruit of a person’s own past actions, in this life or an earlier one. The sufferer is reaping what was sown.',
        'Christianity says that evil is real and is not how things were meant to be; that God is against it; that he entered it himself; and that he will end it. Of the three, only this one takes both the horror of evil and the worth of the sufferer with full seriousness.',
      ],
    },
    {
      heading: 'What God has done about it',
      body: [
        'The Christian answer to suffering is, in the end, a person and an event. God did not stay at a distance. In Jesus he took on our life, was betrayed, tortured and killed. “Surely He took on our infirmities and carried our sorrows” (Isaiah 53:4).',
        'At the cross he dealt with the evil in us: “He Himself bore our sins in His body on the tree” (1 Peter 2:24). In the resurrection he broke the power of death. And he has promised a day when “there will be no more death or mourning or crying or pain” (Revelation 21:4).',
        'This does not tell us why each particular sorrow was allowed. It tells us what the reason cannot be: it cannot be that God does not care. Paul, who suffered a great deal, concluded that “our present sufferings are not comparable to the glory that will be revealed in us” (Romans 8:18).',
      ],
      references: ['Isaiah 53:4', '1 Peter 2:24', 'Revelation 21:4', 'Romans 8:18'],
    },
    {
      heading: 'Being there',
      body: [
        'When Job’s friends first came to him, “they sat on the ground with him for seven days and seven nights, but no one spoke a word to him” (Job 2:13). It was the best thing they did. Their mistakes began when they started explaining.',
        'With someone in pain, be present, listen, weep, pray and help in practical ways. God “comforts us in all our troubles, so that we can comfort those in any trouble” (2 Corinthians 1:3-4). Arguments have their place, usually later, and usually when asked for.',
      ],
      references: ['Job 2:13', '2 Corinthians 1:3-4', 'Romans 12:15'],
    },
  ],
  objections: [
    {
      id: 'poe-1',
      followUps: [
        { reply: 'Then why doesn’t he end it now?', answer: 'Ending all evil now would mean ending us, since evil runs through every human heart. Peter says the delay is patience: God is giving people time to turn to him (2 Peter 3:9).' },
      ],
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
      followUps: [
        { reply: 'A good God would have made a world without earthquakes.', answer: 'That would be a different world, without the stable natural order that makes life, science and responsible action possible. And Scripture’s own answer is that this world is not as it will be: creation itself is waiting to be set free (Romans 8:20-22).' },
      ],
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
      followUps: [
        { reply: 'Where was God when it happened?', answer: 'I don’t know why he allowed it. I do know where he was when his own Son died: he did not look away, and he turned that death into the rescue of the world. He promises to wipe away every tear (Revelation 21:4), and he keeps his promises.' },
      ],
      objection: 'I lost someone I loved. How can you say God is good?',
      response:
        'I’m so sorry. I won’t pretend to have a neat answer for your pain. What I can say is that Jesus himself wept at his friend’s grave, even knowing he would raise him. God isn’t distant from suffering — he entered it on the cross. And he promises a day when he will wipe every tear away. I’d love to walk with you through this, if you’re open to it.',
      keyPoints: [
        'Lead with empathy, not argument.',
        'Jesus wept (John 11:35).',
        'God suffers with us and promises restoration.',
      ],
    },
    {
      id: 'poe-4',
      objection: 'Why would a good God let children suffer?',
      response:
        'I don’t know why, and I distrust anyone who says they do. What I can say is that God has not explained it from a safe distance. He became a child in a poor family under a violent king, and died in agony. I can’t tell you the reason for a particular child’s suffering. I can tell you that the God I trust has suffered himself, and has promised to wipe away every tear (Revelation 21:4).',
      keyPoints: ['Do not pretend to know the reason.', 'God entered suffering himself.', 'He has promised to end it.'],
      references: ['Revelation 21:4', 'Isaiah 53:4'],
      followUps: [
        { reply: 'A promise about the future does nothing for a child in pain now.', answer: 'It does not remove the pain, and Christians are meant to do everything they can to relieve it now. But it changes what the pain means: it is not the last word. Without that promise, the child’s suffering is simply the end of the story.' },
      ],
    },
    {
      id: 'poe-5',
      objection: 'If God knew people would do so much evil, he should not have created them.',
      response:
        'That would mean no one at all: no love, no courage, no joy, and no you or me to raise the question. God evidently judged that a world of real persons, who can love and therefore can also refuse to, and whom he would rescue at great cost to himself, was better than no world. Paul, who knew suffering well, thought the outcome would outweigh it beyond comparison (Romans 8:18).',
      keyPoints: ['No freedom, no love; no creation, no us.', 'God planned the rescue as well as the creation.', 'Romans 8:18: the glory outweighs the suffering.'],
      references: ['Romans 8:18', '1 Peter 2:24'],
      followUps: [
        { reply: 'He could have made people who always freely choose good.', answer: 'Perhaps that is what he is making. The Bible ends with people who love God freely and will never turn away, having seen for themselves what evil is and what it cost him. It may be that such people can only be made through a history like ours.' },
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
    {
      id: 'poe-q4',
      question: 'What did Job’s friends do right at first?',
      options: ['Explained his suffering', 'Sat with him in silence for seven days', 'Told him to repent', 'Left him alone'],
      answer: 1,
      explanation: 'Job 2:13. Their mistakes began when they started explaining.',
    },
    {
      id: 'poe-q5',
      question: 'What does the cross show about God and suffering?',
      options: ['That suffering is an illusion', 'That God stays at a distance', 'That God has entered suffering himself', 'That only the wicked suffer'],
      answer: 2,
      explanation: 'Isaiah 53:4; 1 Peter 2:24.',
    },
  ],
  furtherReading: [
    'C.S. Lewis — The Problem of Pain',
    'Timothy Keller — Walking with God through Pain and Suffering',
    'Alvin Plantinga — God, Freedom, and Evil',
  ],
};
