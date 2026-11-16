import type { Topic } from '../types';

export const havingTheConversation: Topic = {
  id: 'having-the-conversation',
  title: 'Having the Conversation',
  icon: '💬',
  summary: 'Knowing the arguments is half of it. How to listen, ask good questions, stay calm, and bring the conversation to Jesus.',
  lesson: [
    {
      heading: 'What apologetics is for',
      body: [
        'The charter verse has three parts: “in your hearts sanctify Christ as Lord. Always be prepared to give a defense to everyone who asks you the reason for the hope that is in you. But respond with gentleness and respect” (1 Peter 3:15). First the heart, then the answer, then the manner.',
        'The aim is not to win. It is to remove obstacles so that a person can consider Jesus. Paul “reasoned with them from the Scriptures, explaining and proving that the Christ had to suffer and rise from the dead” (Acts 17:2-3): reasoning, with Jesus as the destination.',
        'And love comes first. Without it, the best argument is only “a ringing gong or a clanging cymbal” (1 Corinthians 13:1-2).',
      ],
      references: ['1 Peter 3:15', 'Acts 17:2-3', '1 Corinthians 13:1-2'],
    },
    {
      heading: 'Listen first',
      body: [
        '“He who answers a matter before he hears it—this is folly and disgrace to him” (Proverbs 18:13). Most people’s objections are not the ones in the books. Find out what this person actually thinks, and why.',
        'Be “quick to listen, slow to speak, and slow to anger” (James 1:19). Often the stated objection is not the real one. Behind “religion causes wars” may be a harsh father, a church that failed them, or a grief. You will only find that out by listening.',
      ],
      references: ['Proverbs 18:13', 'James 1:19'],
    },
    {
      heading: 'Ask questions',
      body: [
        'Jesus asked questions constantly: “Who do you say I am?” (Mark 8:27-29). When challenged, he often replied, “I will also ask you a question” (Luke 20:3-4). Questions keep a conversation friendly, show respect, and make people examine what they have assumed.',
        'Three questions do most of the work. “What do you mean by that?” makes a vague objection specific. “How did you come to that conclusion?” asks for reasons and gently hands over the burden of proof: you do not have to refute a claim no one has supported. “Have you ever considered…?” introduces your point as something to think about, not a lecture.',
        'You are never obliged to have an answer on the spot. “That’s a good question. Let me think about it and come back to you” is honest, and it earns trust.',
      ],
      references: ['Mark 8:27-29', 'Luke 20:3-4'],
    },
    {
      heading: 'Stay calm and kind',
      body: [
        '“A gentle answer turns away wrath, but a harsh word stirs up anger” (Proverbs 15:1). If you feel yourself getting heated, slow down. The person in front of you is not the enemy.',
        'Paul’s instruction is precise: the Lord’s servant “must not be quarrelsome, but must be kind to everyone, able to teach, and forbearing. He must gently reprove those who oppose him, in the hope that God may grant them repentance” (2 Timothy 2:24-25). Being kind and being clear are not opposites. You can say hard things plainly and still say them kindly.',
        'Concede what is true. If the church has done wrong, say so. If you do not know, say so. If they make a good point, tell them. Nothing commends the truth like honesty about small things.',
      ],
      references: ['Proverbs 15:1', '2 Timothy 2:24-25', 'Jude 1:22'],
    },
    {
      heading: 'Start where they are',
      body: [
        'In Athens, Paul did not begin with Moses. He began with what he had seen in their own city: “I even found an altar with this inscription: TO AN UNKNOWN GOD. Therefore what you worship as something unknown, I now proclaim to you” (Acts 17:22-23). With Jews he began from the Scriptures; with pagans, from creation and their own poets.',
        'Find the point of contact: a sense that the world is not as it should be, a longing for justice, the wonder of a new child, a fear of death. Begin there and walk towards Jesus.',
      ],
      references: ['Acts 17:22-23', '1 Corinthians 9:22'],
    },
    {
      heading: 'Get to the gospel',
      body: [
        'It is possible to spend an hour on the age of the earth and never mention Jesus. Keep asking yourself how to get from here to him.',
        'Be ready to say the gospel in a minute: God made us and we have turned from him; we cannot repair that ourselves; God came in Jesus, who died for our sins and rose again; and he offers forgiveness and new life to anyone who turns and trusts him.',
        'Then ask something: “What do you make of Jesus?” or “Would you read one of the Gospels with me?” You plant; someone else may water. The result belongs to God, whose power, not our cleverness, is what faith rests on (1 Corinthians 2:4-5).',
      ],
      references: ['1 Corinthians 15:3-4', '1 Corinthians 2:4-5', '1 Corinthians 3:6'],
    },
  ],
  objections: [
    {
      id: 'hc-1',
      objection: 'I don’t want to talk about religion.',
      response:
        'That’s completely fine, and thank you for telling me. I’m not going to push. If you ever do want to talk, about anything at all, I’d be glad to. Can I ask, though, just so I understand: is it that the subject doesn’t interest you, or have you had a bad experience of it?',
      keyPoints: ['Respect the refusal.', 'Leave the door open.', 'One gentle question may show what lies behind it.'],
      references: ['Colossians 4:5-6'],
      followUps: [
        { reply: 'Religious people have always judged me.', answer: 'I’m sorry. That should not have happened, and it is the opposite of how Jesus treated people. He was known as a friend of those the religious looked down on. I’d like to be that kind of friend to you, whatever you decide about what I believe.' },
      ],
    },
    {
      id: 'hc-2',
      objection: 'You can’t argue someone into the kingdom of God, so apologetics is a waste of time.',
      response:
        'It’s true that no one is argued into faith; God has to open a person’s heart. But he uses means, and reasons are one of them. The apostles reasoned, explained and gave evidence wherever they went (Acts 17:2-3), and we are told to be ready with an answer (1 Peter 3:15). Arguments do not create faith, but they clear away the things that stop people from considering it.',
      keyPoints: ['God opens hearts; he uses means.', 'The apostles reasoned and gave evidence.', 'Arguments remove obstacles.'],
      references: ['Acts 17:2-3', '1 Peter 3:15', '1 Corinthians 2:4-5'],
      followUps: [
        { reply: 'Paul said he did not use persuasive words of wisdom.', answer: 'He was refusing to rely on showy rhetoric, not on reasons: the same Paul reasoned in every synagogue and argued his case before governors (Acts 26:28-29). He wanted faith to rest on God’s power, and one way God’s power works is through the truth plainly explained.' },
      ],
    },
    {
      id: 'hc-3',
      objection: 'What if they ask something I can’t answer?',
      response:
        'Then say so. “I don’t know, but I’ll find out” is one of the most persuasive things a Christian can say, because it shows you care more about truth than about winning. Nobody has every answer. You are a witness, not the judge, the jury and the defence. Go and look it up, and come back to the person. The second conversation is usually better than the first.',
      keyPoints: ['Admit it honestly.', 'Find out and come back.', 'You are a witness, not the whole court.'],
      references: ['1 Peter 3:15', 'Matthew 10:19-20'],
      followUps: [
        { reply: 'I’m afraid I’ll make things worse.', answer: 'God is not limited by your nerves. He has always worked through ordinary people who were willing. Pray, be kind, tell the truth as well as you can, and leave the result with him (1 Corinthians 3:6).' },
      ],
    },
  ],
  quiz: [
    {
      id: 'hc-q1',
      question: 'What are the three parts of 1 Peter 3:15?',
      options: [
        'Argue, win, celebrate',
        'Honour Christ in your heart, be ready with an answer, respond with gentleness and respect',
        'Study, debate, publish',
        'Listen, agree, move on',
      ],
      answer: 1,
      explanation: 'The heart, the answer and the manner.',
    },
    {
      id: 'hc-q2',
      question: 'What does the question “How did you come to that conclusion?” do?',
      options: ['Insults the other person', 'Asks for their reasons, so you are not refuting a bare assertion', 'Ends the conversation', 'Changes the subject'],
      answer: 1,
      explanation: 'Whoever makes a claim should give reasons for it.',
    },
    {
      id: 'hc-q3',
      question: 'How did Paul begin with the Athenians?',
      options: ['With the law of Moses', 'With their own altar to an unknown god', 'With a miracle', 'By rebuking their idols'],
      answer: 1,
      explanation: 'Acts 17:22-23. Start where people are.',
    },
    {
      id: 'hc-q4',
      question: 'What should you do when you do not know the answer?',
      options: ['Guess', 'Change the subject', 'Say so, find out, and come back', 'End the friendship'],
      answer: 2,
      explanation: 'Honesty earns trust.',
    },
    {
      id: 'hc-q5',
      question: 'Where should every such conversation be heading?',
      options: ['To proving you are right', 'To Jesus and the gospel', 'To the age of the earth', 'To church history'],
      answer: 1,
      explanation: 'Arguments clear the ground; the gospel is the goal.',
    },
  ],
  furtherReading: [
    'Gregory Koukl — Tactics: A Game Plan for Discussing Your Christian Convictions',
    'Rebecca Manley Pippert — Out of the Saltshaker',
    'Randy Newman — Questioning Evangelism',
  ],
};
