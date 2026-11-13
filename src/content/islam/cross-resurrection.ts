import type { Topic } from '../types';

export const crossAndResurrection: Topic = {
  id: 'islam-cross-resurrection',
  title: 'The Cross and Resurrection',
  icon: '☀',
  summary: 'Foretold by the prophets, predicted by Jesus, witnessed by the apostles — the centre of the Christian message.',
  lesson: [
    {
      heading: 'Foretold by the prophets',
      body: [
        'Psalm 22, written centuries before crucifixion was invented, describes the sufferer’s cry “My God, my God, why have you forsaken me?” (Psalm 22:1), mocking crowds (22:7-8), pierced hands and feet (22:16), and garments divided by lot (22:18). Jesus quoted its first line from the cross (Mark 15:34), and the Gospels record the rest being fulfilled (John 19:23-24).',
        'Isaiah 53 describes the servant who is “pierced for our transgressions”, “led like a lamb to the slaughter”, “cut off out of the land of the living”, made “an offering for guilt”, and who afterwards “shall see his offspring; he shall prolong his days” — death followed by life (Isaiah 53:5-11).',
        'Daniel 9:26 foretold that “an anointed one shall be cut off” before the city and the sanctuary were destroyed — which happened in AD 70.',
      ],
      references: ['Psalm 22:1-18', 'Mark 15:34', 'John 19:23-24', 'Isaiah 53:3-12', 'Daniel 9:26', 'Zechariah 12:10'],
    },
    {
      heading: 'Predicted by Jesus',
      body: [
        'Jesus repeatedly told his disciples he would be killed and rise on the third day (Mark 8:31; 9:31; 10:33-34). He said he came “to give his life as a ransom for many” (Mark 10:45), and at the Last Supper explained his death as the blood of the covenant “poured out for many for the forgiveness of sins” (Matthew 26:28).',
        'If Jesus was not crucified, then the prophet Muslims honour got the central fact of his own mission wrong.',
      ],
      references: ['Mark 8:31', 'Mark 9:31', 'Mark 10:33-34', 'Mark 10:45', 'Matthew 26:28', 'Luke 24:44-47'],
    },
    {
      heading: 'Witnessed by the apostles',
      body: [
        'Paul passes on an early creed: “Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day… and that he appeared to Cephas, then to the twelve. Then he appeared to more than five hundred brothers at one time, most of whom are still alive” (1 Corinthians 15:3-6). Paul invites verification from living witnesses.',
        'The apostles preached the death and resurrection in Jerusalem itself, weeks after the event, where it could be checked (Acts 2:22-32). They suffered for this testimony (Acts 5:40-42).',
        'Remember the Quran’s claim that God supported Jesus’ disciples until they prevailed (Quran 61:14). Their message was the crucified and risen Christ.',
      ],
      references: ['1 Corinthians 15:3-8', 'Acts 2:22-32', 'Acts 5:40-42', 'Quran 61:14'],
    },
    {
      heading: 'Why it matters',
      body: [
        'The resurrection is God’s public vindication of Jesus’ claims: he “was declared to be the Son of God in power… by his resurrection from the dead” (Romans 1:4). God “has given assurance to all by raising him from the dead” (Acts 17:31).',
        'Without the cross there is no atonement; without the resurrection “your faith is futile and you are still in your sins” (1 Corinthians 15:17). That’s why the cross can’t be negotiated away in conversation with Muslims — it is the gospel.',
      ],
      references: ['Romans 1:4', 'Acts 17:31', '1 Corinthians 15:14-17'],
    },
  ],
  objections: [
    {
      id: 'cr-1',
      objection: 'Psalm 22 and Isaiah 53 are about Israel or David, not Jesus.',
      response:
        'Isaiah 53 can’t be Israel: the servant suffers “for the transgression of my people” (Isaiah 53:8) — he is distinct from the people — and he is innocent, having “done no violence” (53:9), while Isaiah describes Israel as sinful (Isaiah 1:4). As for Psalm 22, David was never pierced in hands and feet or had his clothes gambled for; those details fit the crucifixion exactly.',
      keyPoints: ['Servant suffers for “my people” — distinct from Israel.', 'Servant is innocent; Israel is not.', 'Psalm 22’s details fit no event in David’s life.'],
      references: ['Isaiah 53:8-9', 'Isaiah 1:4', 'Psalm 22:16-18'],
    },
    {
      id: 'cr-2',
      objection: 'The disciples all fled; none of them saw the crucifixion.',
      response:
        'Most fled, but not all. John, Mary the mother of Jesus and other women stood by the cross (John 19:25-27), and the women watched where he was buried (Mark 15:47). John says he is reporting as an eyewitness (John 19:35). Roman soldiers and Jerusalem crowds also saw it — it was a public execution.',
      keyPoints: ['John and the women were present.', 'Public execution.', 'Eyewitness claim in John 19:35.'],
      references: ['John 19:25-27', 'John 19:35', 'Mark 15:40-47'],
    },
    {
      id: 'cr-3',
      objection: 'The Gospels contradict each other on the resurrection details.',
      response:
        'They differ in which details they include — the number of women and angels mentioned, for example — which is typical of independent eyewitness accounts. They all agree on the core: Jesus died, was buried, the tomb was found empty by women on the first day of the week, and he appeared alive to his followers. Differences in secondary details don’t undermine the central facts.',
      keyPoints: ['Variation is a mark of independent testimony.', 'Unanimous agreement on the core.', 'Mentioning two doesn’t deny there were more.'],
      references: ['Matthew 28:1-10', 'Mark 16:1-8', 'Luke 24:1-12', 'John 20:1-18'],
    },
  ],
  quiz: [
    {
      id: 'cr-q1',
      question: 'Which psalm describes pierced hands and feet and garments divided by lot?',
      options: ['Psalm 1', 'Psalm 22', 'Psalm 23', 'Psalm 119'],
      answer: 1,
      explanation: 'Psalm 22:16-18, quoted by Jesus from the cross (Mark 15:34).',
    },
    {
      id: 'cr-q2',
      question: 'In Mark 10:45 Jesus says he came to…',
      options: ['Establish an earthly kingdom', 'Give his life as a ransom for many', 'Write a book', 'Abolish the law'],
      answer: 1,
      explanation: 'His death was his mission, not an accident.',
    },
    {
      id: 'cr-q3',
      question: 'Which passage contains the early creed listing resurrection appearances?',
      options: ['1 Corinthians 15:3-8', 'Romans 12:1-2', 'Genesis 12:1-3', 'James 1:2-4'],
      answer: 0,
      explanation: 'Including more than 500 witnesses at once.',
    },
    {
      id: 'cr-q4',
      question: 'Why can’t Isaiah 53’s servant be the nation of Israel?',
      options: [
        'Isaiah never mentions Israel.',
        'The servant suffers for “my people” and is innocent.',
        'The servant is a king of Babylon.',
        'The chapter is about the future temple.',
      ],
      answer: 1,
      explanation: 'Isaiah 53:8-9.',
    },
  ],
};
