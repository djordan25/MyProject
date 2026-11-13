import type { Topic } from '../types';

export const crucifixionDenial: Topic = {
  id: 'islam-crucifixion',
  title: 'Denying the Crucifixion',
  icon: '✝',
  summary: 'One verse, written six centuries later, against every first-century witness — and its own theological problems.',
  lesson: [
    {
      heading: 'What the Quran claims',
      body: [
        '“They did not kill him, nor did they crucify him; but [another] was made to resemble him to them… Rather, Allah raised him to Himself” (Quran 4:157-158).',
        'This single verse is the Quran’s only explicit statement on the matter. It was recited in Medina in the 620s — roughly 600 years after the event and hundreds of miles from Jerusalem.',
      ],
      references: ['Quran 4:157-158'],
    },
    {
      heading: 'The crucifixion was predicted and proclaimed',
      body: [
        'The Old Testament foretold a suffering, pierced, dying servant (Psalm 22:16-18; Isaiah 53:5-12; Zechariah 12:10).',
        'Jesus repeatedly predicted his own death and resurrection (Mark 8:31; 9:31; 10:33-34). If he was not crucified, Jesus was a false prophet on this point.',
        'Every New Testament source — the four Gospels, Acts, Paul, Peter, Hebrews, Revelation — affirms his death. Paul passes on a creed he had “received”, that “Christ died for our sins” (1 Corinthians 15:3).',
        'The crucifixion is the center of the Christian message, not a detail (1 Corinthians 2:2; Galatians 6:14).',
      ],
      references: ['Psalm 22:16-18', 'Isaiah 53:5-12', 'Mark 8:31', 'Mark 10:33-34', '1 Corinthians 15:3-4', '1 Corinthians 2:2'],
    },
    {
      heading: 'The Quran’s own problems',
      body: [
        'Divine deception: if God made someone else look like Jesus, then God deceived Jesus’ mother, his disciples and the watching crowd. That deception produced the entire Christian faith. Quran 3:54 says “Allah is the best of planners.” Would a God of truth found a worldwide false religion by trickery?',
        'The disciples: the Quran praises Jesus’ disciples as true believers whom Allah supported until “they became dominant” (Quran 61:14; 3:52-55). Yet those very disciples proclaimed the death and resurrection of Jesus (Acts 2:23-24, 32). If God supported them, he supported their message.',
        'Quran 19:33: Jesus says “peace is on me the day I was born and the day I will die and the day I am raised alive.” The order — birth, death, raised alive — fits the Christian account naturally.',
        'Quran 3:55 uses the word mutawaffika (“I will take you”), the same root used for God taking souls at death (Quran 39:42).',
      ],
      references: ['Quran 3:54-55', 'Quran 61:14', 'Quran 19:33', 'Quran 39:42', 'Acts 2:23-24'],
    },
  ],
  objections: [
    {
      id: 'cd-1',
      objection: 'God would never allow his righteous prophet to be humiliated on a cross.',
      response:
        'That sounds reverent, but the Quran itself says Israel killed prophets (Quran 2:87). God’s ways are not our ways. The cross wasn’t defeat — it was God’s plan to defeat sin and death. Jesus said, “No one takes my life from me, but I lay it down of my own accord” (John 10:18). Then God vindicated him by raising him from the dead.',
      keyPoints: ['Quran 2:87: prophets were killed.', 'The cross was voluntary (John 10:18).', 'The resurrection is God’s vindication.'],
      references: ['Quran 2:87', 'John 10:17-18', 'Isaiah 53:10', 'Acts 2:23-24'],
    },
    {
      id: 'cd-2',
      objection: 'Someone else — maybe Judas — was made to look like Jesus and crucified instead.',
      response:
        'Think about what that means. God would have deceived Mary, the apostles and everyone present, and then let the deception spread into the world’s largest religion for 600 years before correcting it. And the substitute presumably let himself be crucified without ever saying, “I’m not Jesus!” Every eyewitness source says it was Jesus. One verse written six centuries later can’t overturn that.',
      keyPoints: ['Makes God the author of Christianity’s “error”.', 'No first-century source supports it.', 'Substitute theory appears nowhere in the Quran by name.'],
      references: ['Quran 4:157', 'Quran 3:54', 'John 19:25-27', 'John 19:35'],
    },
    {
      id: 'cd-3',
      objection: 'Jesus prayed to be saved from death, and God answers prayers — so he wasn’t crucified.',
      response:
        'In Gethsemane Jesus prayed, “Not my will, but yours, be done” (Luke 22:42). He submitted to the Father’s will. Hebrews 5:7 says he was heard — he was saved out of death, by resurrection, not from dying. In fact, right after his arrest he said, “Shall I not drink the cup that the Father has given me?” (John 18:11).',
      keyPoints: ['His prayer was submission: “not my will”.', 'Saved out of death through resurrection.', 'John 18:11 — he accepted the cup.'],
      references: ['Luke 22:42', 'Hebrews 5:7', 'John 18:11'],
    },
    {
      id: 'cd-4',
      objection: 'Jesus only swooned on the cross and was revived (Ahmadi view).',
      response:
        'Roman soldiers were professional executioners who confirmed death; a spear was thrust into Jesus’ side (John 19:33-34). A half-dead, badly wounded man could not have convinced his disciples that he had conquered death. And mainstream Sunni Islam rejects this view anyway, since Quran 4:157 says he was not crucified at all.',
      keyPoints: ['Executioners confirmed death.', 'Spear wound (John 19:34).', 'Rejected by mainstream Islam too.'],
      references: ['John 19:33-34', 'Mark 15:44-45'],
    },
  ],
  quiz: [
    {
      id: 'cd-q1',
      question: 'Which Quran verse denies the crucifixion?',
      options: ['Quran 2:255', 'Quran 4:157', 'Quran 19:33', 'Quran 112:1'],
      answer: 1,
      explanation: '“They did not kill him, nor did they crucify him; but [another] was made to resemble him to them.”',
    },
    {
      id: 'cd-q2',
      question: 'Quran 19:33 lists which sequence for Jesus?',
      options: ['Born, raised alive, then dies', 'Born, dies, raised alive', 'Born and taken up without dying', 'Born, crucified, buried'],
      answer: 1,
      explanation: '“The day I was born and the day I will die and the day I am raised alive.”',
    },
    {
      id: 'cd-q3',
      question: 'According to Quran 61:14, what happened to Jesus’ disciples?',
      options: ['They abandoned Jesus.', 'They corrupted the Gospel.', 'Allah supported them and they became dominant.', 'They became Jews again.'],
      answer: 2,
      explanation: 'Yet those same disciples preached Christ crucified and risen.',
    },
    {
      id: 'cd-q4',
      question: 'Which passages contain Jesus predicting his own death?',
      options: ['Mark 8:31; 9:31; 10:33-34', 'Genesis 1:1-3', 'Psalm 23', 'Proverbs 3:5-6'],
      answer: 0,
      explanation: 'If he was not crucified, his own predictions failed.',
    },
  ],
};
