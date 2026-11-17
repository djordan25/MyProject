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
        {
          reply: 'Religious people have always judged me.',
          answer: 'I’m sorry. That should not have happened, and it is the opposite of how Jesus treated people. He was known as a friend of those the religious looked down on. I’d like to be that kind of friend to you, whatever you decide about what I believe.',
          followUps: [
            {
              reply: 'That’s kind. But underneath you think I’m going to hell, don’t you?',
              answer: 'I think every one of us needs forgiving, and I include myself first. I am not looking down on you from anywhere. Jesus said, “It is not the healthy who need a doctor, but the sick” (Luke 5:31-32), and I am one of the sick. I would sooner tell you honestly what I believe than pretend I believe nothing.',
              followUps: [
                {
                  reply: 'So I’m a project. You’re being nice to me so that you can convert me.',
                  answer: 'No. I am your friend whether or not you ever agree with me, and you are welcome to test that. I won’t hide that I would love you to know Jesus, because he is the best thing I have, and it would be strange to keep that from a friend. But there are no conditions and no deadline.',
                },
              ],
            },
          ],
        },
        {
          reply: 'It just doesn’t interest me. I’m happy as I am.',
          answer: 'Fair enough, and I’m glad you are happy. Can I leave one question with you? You don’t need to answer it now. If it turned out to be true, would you want to know?',
          followUps: [
            {
              reply: 'I suppose I would. But nobody can know that sort of thing.',
              answer: 'That is the right question to ask. Christianity does not ask you to trust a feeling. It points to a person and to things that happened in public, which can be looked into. If you ever want to look, the simplest way is to read one of the Gospels. Mark can be read in an evening, and I would gladly read it with you.',
            },
          ],
        },
        {
          reply: 'Faith is private. People should keep their beliefs to themselves.',
          answer: 'I understand, and I won’t raise it again unless you do. I only talk about it for the reason anyone talks about what matters most to them. If it ever comes up from your side, I will be glad to listen.',
        },
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
        {
          reply: 'Paul said he did not use persuasive words of wisdom.',
          answer: 'He was refusing to rely on showy rhetoric, not on reasons: the same Paul reasoned in the synagogues and argued his case before governors and a king (Acts 26:28-29). He wanted faith to rest on God’s power, and one way God’s power works is through the truth plainly explained.',
          followUps: [
            {
              reply: 'Romans 1 says people already know there is a God and suppress the truth. Their problem is moral, not intellectual. Nobody rejects Christ for lack of evidence, so more evidence will not help.',
              answer: 'I agree that the root is the heart (Romans 1:18-21), and that is why we pray. But the man who wrote Romans 1 spent three months in one synagogue “arguing persuasively about the kingdom of God” (Acts 19:8-9). An intellectual objection is often where a heart takes shelter, and taking the shelter away is a kindness. Reasons also steady believers. Luke wrote his Gospel so that Theophilus would “know the certainty” of what he had been taught (Luke 1:3-4).',
              followUps: [
                {
                  reply: 'I have never seen anyone argued into faith. People come through friendship, or a crisis, or reading the Bible.',
                  answer: 'Mostly they do, and very few come by argument alone. But very few come with no question answered along the way. Friendship wins a hearing, a good reason removes an excuse, and the Spirit gives life. C. S. Lewis called two Christian friends, Tolkien and Dyson, the immediate human causes of his conversion, after a long night of talk with them. It was friendship and reasons together.',
                },
              ],
            },
          ],
        },
        {
          reply: 'The gospel does not need defending. You do not defend a lion. You let it out of its cage.',
          answer: 'The gospel does have its own power (Romans 1:16), and no argument replaces it. But answering a question is not defending the lion. It is opening the cage, by clearing away what stops a person from hearing. Scripture tells us to do both: to “contend earnestly for the faith” (Jude 1:3), and Paul speaks of his “defense and confirmation of the gospel” (Philippians 1:7).',
        },
        {
          reply: 'Apologetics makes people proud and quarrelsome. Look at how Christians argue online.',
          answer: 'Some of it is ugly, and it breaks the second half of the command, which is to answer “with gentleness and respect” (1 Peter 3:15). The danger is real: “Knowledge puffs up, but love builds up” (1 Corinthians 8:1). But the cure for doing something badly is to do it well, not to stop. That is why the verse begins with the heart.',
        },
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
        {
          reply: 'I’m afraid I’ll make things worse.',
          answer: 'God is not limited by your nerves. He has always worked through ordinary people who were willing. Pray, be kind, tell the truth as well as you can, and leave the result with him (1 Corinthians 3:6).',
          followUps: [
            {
              reply: 'But what if I lose the argument, and they go away more sure than ever that they are right?',
              answer: 'Then you have lost an argument. You have not lost a person. People rarely remember who won. They remember how they were treated. If you were honest and kind when you were stuck, they saw something of Christ, and you can come back next week with a better answer.',
              followUps: [
                {
                  reply: 'What if their question shakes my own faith?',
                  answer: 'Then take it seriously and do not hide it. John the Baptist, in prison, sent to ask Jesus, “Are You the One who was to come, or should we look for someone else?” (Matthew 11:2-5). Jesus did not rebuke him; he sent back evidence. Take your question to God, to Scripture and to an older Christian. The faith has been examined by able critics for two thousand years, so yours has almost certainly been asked and answered before.',
                },
              ],
            },
          ],
        },
        {
          reply: 'I’m not clever enough for this. I should leave it to people who have studied.',
          answer: 'The council in Jerusalem saw that Peter and John were “unschooled, ordinary men”, and what they noticed was that these men had been with Jesus (Acts 4:13). You do not need to know everything. You need to know him and to know a few things well. The man born blind had one argument: “I was blind, but now I see!” (John 9:25).',
        },
        {
          reply: 'I don’t even know how to begin. Whenever I try to bring it up, it feels forced.',
          answer: 'Then don’t force it. Ask people about themselves, listen, and pray for an opening, as Paul asked his friends to pray for him (Colossians 4:3-4). Openings come: a death, a news story, a question about your weekend. Give one honest sentence, such as “I was at church, and it matters a great deal to me”, and then ask whether they have any background in faith. If they do not take it up, leave it there.',
        },
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
    {
      id: 'hc-q6',
      question: 'What does Proverbs 18:13 call answering a matter before you have heard it?',
      options: ['Wisdom and courage', 'Zeal for the truth', 'Folly and disgrace', 'A gift of the Spirit'],
      answer: 2,
      explanation: '“He who answers a matter before he hears it—this is folly and disgrace to him” (Proverbs 18:13). Listen first.',
    },
    {
      id: 'hc-q7',
      question: 'What does the question “What do you mean by that?” achieve?',
      options: [
        'It makes a vague objection specific',
        'It shows the other person that they are foolish',
        'It gives you time to leave',
        'It proves that the objection is false',
      ],
      answer: 0,
      explanation: 'Most people’s objections are not the ones in the books. Find out what this person actually thinks.',
    },
    {
      id: 'hc-q8',
      question: 'Someone says, “Religion causes wars.” What does the lesson suggest may lie behind a remark like that?',
      options: [
        'A detailed knowledge of military history',
        'A wish to become a Christian',
        'Nothing at all',
        'A personal hurt, such as a harsh father, a church that failed them, or a grief',
      ],
      answer: 3,
      explanation: 'Often the stated objection is not the real one. You will only find out by being “quick to listen, slow to speak” (James 1:19).',
    },
    {
      id: 'hc-q9',
      question: 'According to 2 Timothy 2:24-25, how must the Lord’s servant deal with those who oppose him?',
      options: [
        'Avoid them completely',
        'Without quarrelling, with kindness, reproving them gently',
        'By defeating them in public debate',
        'By agreeing with them to keep the peace',
      ],
      answer: 1,
      explanation: 'He “must not be quarrelsome, but must be kind to everyone” and “must gently reprove those who oppose him” (2 Timothy 2:24-25). Kind and clear are not opposites.',
    },
    {
      id: 'hc-q10',
      question: 'What is the aim of apologetics, according to the lesson?',
      options: [
        'To win the argument',
        'To show how much you know',
        'To remove obstacles so that a person can consider Jesus',
        'To avoid having to mention the gospel',
      ],
      answer: 2,
      explanation: 'Paul reasoned from the Scriptures with Jesus as the destination (Acts 17:2-3).',
    },
    {
      id: 'hc-q11',
      question: 'According to 1 Corinthians 13:1-2, what is the best argument worth without love?',
      options: [
        'It is still enough to convince anyone',
        'It is worth half as much',
        'It is better left unspoken',
        'It is only a ringing gong or a clanging cymbal',
      ],
      answer: 3,
      explanation: '“If I… have not love, I am only a ringing gong or a clanging cymbal” (1 Corinthians 13:1-2).',
    },
    {
      id: 'hc-q12',
      question: 'A fellow Christian says, “Paul refused to use persuasive words, so we should not use arguments.” What was Paul refusing?',
      options: [
        'To rely on showy rhetoric, while he went on reasoning and giving evidence',
        'To speak to educated people',
        'To give any reasons for the faith',
        'To answer questions from unbelievers',
      ],
      answer: 0,
      explanation: 'He wanted faith to rest on God’s power (1 Corinthians 2:4-5), and the same Paul argued his case before a king (Acts 26:28-29).',
    },
    {
      id: 'hc-q13',
      question: 'A friend says, “I don’t want to talk about religion.” What does the model response do?',
      options: [
        'Presses on with the argument anyway',
        'Respects the refusal, leaves the door open, and asks one gentle question',
        'Ends the friendship',
        'Warns them at once about judgment',
      ],
      answer: 1,
      explanation: '“Let your speech always be gracious, seasoned with salt” (Colossians 4:5-6).',
    },
    {
      id: 'hc-q14',
      question: 'How did Jesus often reply when he was challenged?',
      options: ['With silence', 'With a miracle', 'With a question of his own', 'By walking away'],
      answer: 2,
      explanation: '“I will also ask you a question” (Luke 20:3-4). Questions keep a conversation friendly and make people examine what they have assumed.',
    },
    {
      id: 'hc-q15',
      question: 'Which of these is the gospel in brief, as the lesson gives it?',
      options: [
        'Be a good person and God will accept you',
        'All religions lead to God in the end',
        'Go to church and keep the commandments',
        'God made us and we turned from him; we cannot repair that; Jesus died for our sins and rose; he offers forgiveness and new life to all who turn and trust him',
      ],
      answer: 3,
      explanation: 'Be ready to say it in a minute (1 Corinthians 15:3-4), and keep asking how to get from the present topic to Jesus.',
    },
    {
      id: 'hc-q16',
      question: 'Paul wrote, “I planted the seed and Apollos watered it, but God made it grow.” What does that mean for your conversations?',
      options: [
        'You are responsible for the result',
        'The result belongs to God, so be faithful and leave it with him',
        'Only church leaders should speak about the faith',
        'One conversation ought to be enough',
      ],
      answer: 1,
      explanation: '1 Corinthians 3:6. You plant, and someone else may water.',
    },
    {
      id: 'hc-q17',
      question: 'What does Proverbs 15:1 say turns away wrath?',
      options: ['A gentle answer', 'A clever answer', 'A long answer', 'A loud answer'],
      answer: 0,
      explanation: '“A gentle answer turns away wrath, but a harsh word stirs up anger” (Proverbs 15:1). The person in front of you is not the enemy.',
    },
    {
      id: 'hc-q18',
      question: 'The other person makes a fair point about wrongs done by the church. What should you do?',
      options: [
        'Deny that it happened',
        'Change the subject quickly',
        'Admit it plainly, because honesty in small things commends the truth',
        'Say that those people were never real Christians and move on',
      ],
      answer: 2,
      explanation: 'Concede what is true. If the church has done wrong, say so.',
    },
    {
      id: 'hc-q19',
      question: 'What did the council in Jerusalem notice about Peter and John (Acts 4:13)?',
      options: [
        'That they were trained rabbis',
        'That they were wealthy and well connected',
        'That they refused to answer questions',
        'That they were unschooled, ordinary men who had been with Jesus',
      ],
      answer: 3,
      explanation: 'Acts 4:13. You do not need to be an expert to be a witness.',
    },
    {
      id: 'hc-q20',
      question: 'When John the Baptist sent from prison to ask whether Jesus was really the one, how did Jesus respond?',
      options: [
        'He pointed to the evidence of what he was doing',
        'He rebuked John for doubting',
        'He refused to answer',
        'He told John’s disciples to stop following John',
      ],
      answer: 0,
      explanation: 'Matthew 11:2-5. Honest doubt can be brought to Jesus, and “have mercy on those who doubt” (Jude 1:22).',
    },
  ],
  furtherReading: [
    'Gregory Koukl — Tactics: A Game Plan for Discussing Your Christian Convictions',
    'Rebecca Manley Pippert — Out of the Saltshaker',
    'Randy Newman — Questioning Evangelism',
  ],
};
