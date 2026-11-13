import type { Topic } from '../types';

export const atonementObjections: Topic = {
  id: 'islam-atonement',
  title: 'Answering: “No One Can Bear Another’s Sins”',
  icon: '⚓',
  summary: 'Islam rejects substitutionary atonement. The Bible — and even a Quranic story — show why substitution is just and necessary.',
  lesson: [
    {
      heading: 'The Muslim objection',
      body: [
        '“No bearer of burdens will bear the burden of another” (Quran 6:164; 53:38). Muslims argue that it would be unjust for Jesus to die for others’ sins, and that God can simply forgive the repentant.',
        'Muslims sometimes cite Ezekiel 18:20: “The son shall not suffer for the iniquity of the father.”',
      ],
      references: ['Quran 6:164', 'Quran 53:38', 'Ezekiel 18:20'],
    },
    {
      heading: 'Sacrifice runs through the whole Bible',
      body: [
        'From the beginning, God taught that sin brings death and that forgiveness comes through a substitute: the Passover lamb (Exodus 12:13), the sacrifices of the law — “it is the blood that makes atonement for the life” (Leviticus 17:11), and the Day of Atonement (Leviticus 16).',
        '“Without the shedding of blood there is no forgiveness of sins” (Hebrews 9:22). Those animal sacrifices pointed forward to the one perfect sacrifice (Hebrews 10:1-14).',
        'Isaiah 53 explicitly describes a substitute: “he was pierced for our transgressions… the LORD has laid on him the iniquity of us all… he bore the sin of many” (Isaiah 53:5-6, 12).',
        'John the Baptist introduced Jesus as “the Lamb of God, who takes away the sin of the world” (John 1:29).',
      ],
      references: ['Exodus 12:13', 'Leviticus 17:11', 'Leviticus 16:21-22', 'Hebrews 9:22', 'Hebrews 10:1-14', 'Isaiah 53:5-12', 'John 1:29'],
    },
    {
      heading: 'A sacrifice in the Quran',
      body: [
        'The Quran tells of Abraham preparing to sacrifice his son, and then says: “We ransomed him with a great sacrifice” (Quran 37:107). Muslims commemorate this every year at Eid al-Adha.',
        'So the Quran itself contains the idea of a life ransomed by a substitute sacrifice. Ask: what made it a “great” sacrifice? Genesis 22 tells the same story, and there Abraham says, “God will provide for himself the lamb” (Genesis 22:8). Christ is that Lamb.',
      ],
      references: ['Quran 37:101-107', 'Genesis 22:1-14', 'John 1:29'],
    },
  ],
  objections: [
    {
      id: 'ao-1',
      objection: 'Ezekiel 18:20 says no one bears another’s sin — the Bible contradicts the atonement.',
      response:
        'Ezekiel 18 is about people being punished for their parents’ sins against their will — the Israelites were blaming their ancestors for their own judgment. It isn’t about a willing substitute. Jesus wasn’t forced; he laid down his life voluntarily (John 10:18). The same Prophets that contain Ezekiel 18 also contain Isaiah 53, where the servant bears the sin of many.',
      keyPoints: ['Context: involuntary inherited punishment.', 'Jesus was a willing substitute.', 'Isaiah 53 explicitly teaches substitution.'],
      references: ['Ezekiel 18:1-4', 'Ezekiel 18:20', 'John 10:17-18', 'Isaiah 53:12'],
    },
    {
      id: 'ao-2',
      objection: 'It’s unjust to punish an innocent man for the guilty.',
      response:
        'It would be unjust to force punishment on an unwilling third party. But at the cross, the judge himself — God the Son — voluntarily takes the penalty. Imagine a judge who sentences a guilty man justly, then steps down and pays the fine himself. That’s both justice and love (Romans 3:26; 5:8). The Quran itself tells of a son ransomed by a sacrifice (Quran 37:107).',
      keyPoints: ['Voluntary substitution, not forced.', 'The judge pays the penalty himself.', 'Quran 37:107 — ransom.'],
      references: ['Romans 3:25-26', 'Romans 5:8', 'Quran 37:107', '2 Corinthians 5:21'],
    },
    {
      id: 'ao-3',
      objection: 'God can forgive anyone he wants. He doesn’t need a sacrifice.',
      response:
        'God is not just merciful but perfectly just and holy (Habakkuk 1:13). A judge who waived every penalty wouldn’t be good. Throughout the Bible God provides forgiveness through sacrifice (Leviticus 17:11; Hebrews 9:22). The cross shows that God takes sin seriously and takes sinners seriously — he pays the price himself.',
      keyPoints: ['Justice and holiness matter.', 'Forgiveness through sacrifice is God’s pattern.', 'The cross shows the cost of sin and the depth of love.'],
      references: ['Habakkuk 1:13', 'Leviticus 17:11', 'Hebrews 9:22', '1 John 4:10'],
    },
    {
      id: 'ao-4',
      objection: 'If Jesus is God, then God died — but God can’t die.',
      response:
        'Death in the Bible means separation — of soul from body — not ceasing to exist. Jesus died in his human nature: his body died while he himself continued to exist (Luke 23:46). The divine nature didn’t cease to exist. Because the person who died is God the Son, his sacrifice has infinite worth (Acts 20:28).',
      keyPoints: ['Death = separation, not annihilation.', 'He died in his human nature.', 'Infinite worth because of who he is.'],
      references: ['Luke 23:46', 'Acts 20:28', '1 Peter 3:18'],
    },
  ],
  quiz: [
    {
      id: 'ao-q1',
      question: 'Which Quran verse describes a ransom by a great sacrifice?',
      options: ['Quran 37:107', 'Quran 6:164', 'Quran 4:157', 'Quran 1:7'],
      answer: 0,
      explanation: 'Abraham’s son was ransomed with a great sacrifice.',
    },
    {
      id: 'ao-q2',
      question: 'Ezekiel 18:20 is about…',
      options: [
        'Voluntary substitution',
        'People being punished involuntarily for their parents’ sins',
        'The Day of Atonement',
        'The Messiah',
      ],
      answer: 1,
      explanation: 'Not a denial of a willing substitute.',
    },
    {
      id: 'ao-q3',
      question: 'Which verse says “it is the blood that makes atonement for the life”?',
      options: ['Leviticus 17:11', 'Deuteronomy 6:4', 'Psalm 51:10', 'Proverbs 1:7'],
      answer: 0,
      explanation: 'The sacrificial system points to Christ.',
    },
    {
      id: 'ao-q4',
      question: 'Who called Jesus “the Lamb of God, who takes away the sin of the world”?',
      options: ['Peter', 'John the Baptist', 'Paul', 'Pilate'],
      answer: 1,
      explanation: 'John 1:29.',
    },
  ],
};
