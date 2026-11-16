import type { Topic } from '../types';

export const truthAndRelativism: Topic = {
  id: 'truth-and-relativism',
  title: 'Is There Such a Thing as Truth?',
  icon: '◎',
  summary: '“That’s true for you” ends more conversations than any argument. How to answer relativism, and why tolerance needs truth.',
  lesson: [
    {
      heading: 'Why this comes first',
      body: [
        'Many people today do not reject Christianity because they have weighed the evidence. They assume that religious claims are not the sort of thing that can be true or false at all: “That’s true for you, but not for me.” If that is right, there is nothing to discuss.',
        'Jesus thought otherwise. He told Pilate that he came into the world “to testify to the truth” (John 18:37-38), and Pilate’s tired reply, “What is truth?”, is the mood of our own age. Christians are told to examine claims, not merely to feel them: “test all things. Hold fast to what is good” (1 Thessalonians 5:21).',
      ],
      references: ['John 18:37-38', '1 Thessalonians 5:21', 'Acts 17:11'],
    },
    {
      heading: 'What truth is',
      body: [
        'A statement is true when it matches the way things are. “There is milk in the fridge” is true if there is milk in the fridge, whatever anyone believes about it.',
        'Some things really are a matter of taste: which ice cream is best. Others are a matter of fact: which pill will cure the infection. Nobody chooses medicine by preference. The question is which kind of claim “Jesus rose from the dead” is. It is a claim about something that either happened or did not, so it is true for everyone or for no one.',
      ],
    },
    {
      heading: 'Relativism undoes itself',
      body: [
        'The slogans of relativism cannot survive being applied to themselves. You do not need to argue; just ask a question.',
        '“There is no absolute truth.” Is that absolutely true?',
        '“You can’t know anything for certain.” Are you certain of that?',
        '“It’s wrong to tell other people they’re wrong.” Isn’t that telling me I’m wrong?',
        'Ask gently and with a smile. The aim is not to trap anyone but to show that everyone, in practice, believes some things are really true, and to move the conversation on to which things.',
      ],
    },
    {
      heading: 'Tolerance, rightly understood',
      body: [
        'Tolerance used to mean treating people with respect while disagreeing with them. It assumes disagreement: nobody “tolerates” a view they share.',
        'The newer idea is that all views are equally valid and that to say otherwise is hateful. Nobody lives this way. The person who insists on it thinks you are wrong not to.',
        'Christians are called to hold truth and kindness together: “speaking the truth in love” (Ephesians 4:15), and answering “with gentleness and respect” (1 Peter 3:15). Disagreeing with someone is not hating them. Often it is the opposite: we only bother to correct what we care about.',
      ],
      references: ['Ephesians 4:15', '1 Peter 3:15'],
    },
    {
      heading: 'Are all religions the same?',
      body: [
        'They agree on some moral teaching. On the central questions they contradict one another. Is there one God, many, or none? Is Jesus God in the flesh, a prophet, or a teacher who has been misunderstood? Are we saved by grace, by our deeds, or by escaping the cycle of rebirth?',
        'These cannot all be right. They could all be wrong, but they cannot all be true. Saying they are “the same underneath” does not respect them; it tells every one of them that what it considers essential does not matter.',
        'A popular story has blind men each touching a different part of an elephant and each describing something different. The story only works because the storyteller can see the whole elephant. It is a claim to know better than all the religions, which is the very thing it accuses them of.',
      ],
    },
    {
      heading: 'Truth and humility',
      body: [
        'Claiming to know the truth is not a claim to be better than anyone. A person who has found the way out of a burning building and shouts directions is not being arrogant.',
        'The Christian claim is that we were lost and were found. That gives certainty about Christ and humility about ourselves. Jesus promised, “you will know the truth, and the truth will set you free” (John 8:32).',
      ],
      references: ['John 8:32', 'John 14:6'],
    },
  ],
  objections: [
    {
      id: 'tr-rel-1',
      objection: 'That’s true for you, but it’s not true for me.',
      response:
        'I think I know what you mean: I find it meaningful and you don’t. That’s fair. But I’m making a different kind of claim. Either Jesus rose from the dead or he didn’t. If he did, it’s true for both of us, and if he didn’t, I’m simply wrong. Would you be open to looking at whether it happened?',
      keyPoints: ['Separate “meaningful to me” from “true”.', 'The resurrection is a claim about a fact.', 'Invite them to look at the evidence.'],
      references: ['1 Corinthians 15:14'],
      followUps: [
        { reply: 'Religion is about feelings, not facts.', answer: 'Some religions may be. Christianity ties itself to an event in history and says that if it did not happen the whole thing is worthless (1 Corinthians 15:14). Feelings matter, but they follow from whether it is true.' },
      ],
    },
    {
      id: 'tr-rel-2',
      objection: 'It’s arrogant to claim that you have the truth and everyone else is wrong.',
      response:
        'It would be arrogant if I thought I had worked it out by being cleverer or better than others. I don’t. I think I was shown something I could never have found myself. And notice that you think I’m mistaken, which means you also believe some views are right and others wrong. We both do. The question is which.',
      keyPoints: ['Truth received, not achieved.', 'Everyone thinks some views are wrong.', 'Move to the real question.'],
      followUps: [
        { reply: 'I’m not saying you’re wrong. I’m saying nobody can know.', answer: 'That is a large claim too: that you know what cannot be known, for everyone. How did you come to know that? I’d rather look at the evidence together and see how far it takes us.' },
      ],
    },
    {
      id: 'tr-rel-3',
      objection: 'All religions teach basically the same thing: be a good person.',
      response:
        'They overlap on some moral teaching, and that’s worth noticing. But ask each one what the human problem is and how it is solved, and they disagree completely. Christianity is the odd one out: it says we are not good people, and that God came to rescue us because we could not save ourselves (Ephesians 2:8-9). “Be good” is exactly what it says is not enough.',
      keyPoints: ['Shared morals, opposite answers.', 'They contradict on God, Jesus and salvation.', 'The gospel is rescue, not advice.'],
      references: ['Ephesians 2:8-9', '1 Timothy 2:5'],
      followUps: [
        { reply: 'They are different paths up the same mountain.', answer: 'How would we know that, unless we could see the whole mountain from above? Each path claims to lead somewhere different: to a personal God, to the extinction of the self, to release from rebirth. And Christianity says the point is that God came down the mountain to us.' },
      ],
    },
    {
      id: 'tr-rel-4',
      objection: 'You’re only a Christian because of where you were born.',
      response:
        'Where I was born may explain how I first heard it. It can’t tell us whether it is true. If you had been born in another century you would not believe in germs, but germs would still be real. And the same reasoning applies to your view: you might hold it because of where and when you were born. So we both have to do the harder work of asking what the evidence is.',
      keyPoints: ['How a belief arose does not settle whether it is true.', 'The argument cuts both ways.', 'Many Christians today were not born into it.'],
      followUps: [
        { reply: 'Then how can anyone ever be sure?', answer: 'By testing the claims, as we do everywhere else. Christianity invites that: it points to public events and living witnesses, and commends people who checked the message against the Scriptures (Acts 17:11).' },
      ],
    },
  ],
  quiz: [
    {
      id: 'tr-rel-q1',
      question: 'What makes a statement true?',
      options: ['Most people believing it', 'It feeling right', 'It matching the way things are', 'It being useful'],
      answer: 2,
      explanation: 'Truth is what corresponds to reality, whatever anyone believes.',
    },
    {
      id: 'tr-rel-q2',
      question: 'What is the simplest reply to “There is no absolute truth”?',
      options: ['“You’re wrong.”', '“Is that absolutely true?”', '“The Bible says there is.”', '“Everyone knows there is.”'],
      answer: 1,
      explanation: 'The claim undoes itself when applied to itself.',
    },
    {
      id: 'tr-rel-q3',
      question: 'What did tolerance originally mean?',
      options: ['Agreeing with everyone', 'Treating people with respect while disagreeing', 'Having no opinions', 'Keeping religion private'],
      answer: 1,
      explanation: 'You can only tolerate what you disagree with.',
    },
    {
      id: 'tr-rel-q4',
      question: 'What is the weakness in the story of the blind men and the elephant?',
      options: ['Elephants are not religious', 'The storyteller claims to see the whole elephant', 'The men are not really blind', 'It is too old'],
      answer: 1,
      explanation: 'It claims the very superior knowledge it denies to the religions.',
    },
    {
      id: 'tr-rel-q5',
      question: 'Which verse joins truth and kindness in how Christians speak?',
      options: ['Ephesians 4:15', 'Genesis 1:1', 'Revelation 22:21', 'Psalm 23:1'],
      answer: 0,
      explanation: '“speaking the truth in love”.',
    },
  ],
  furtherReading: [
    'Paul Copan — True for You, But Not for Me',
    'Francis Beckwith & Gregory Koukl — Relativism: Feet Firmly Planted in Mid-Air',
    'Timothy Keller — The Reason for God, chapter 1',
  ],
};
