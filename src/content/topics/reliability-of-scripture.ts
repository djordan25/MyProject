import type { Topic } from '../types';

export const reliabilityOfScripture: Topic = {
  id: 'reliability-of-scripture',
  title: 'Reliability of the New Testament',
  icon: '📜',
  summary: 'Manuscript evidence, early dating, eyewitness testimony, and archaeological confirmation.',
  lesson: [
    {
      heading: 'Two questions',
      body: [
        'Do we have what was originally written? (Transmission.) And is what was written true? (Historical reliability.) Keep the two separate in conversation.',
      ],
    },
    {
      heading: 'Manuscript evidence',
      body: [
        'About 5,300 Greek manuscripts of the New Testament survive (the official list has some 5,800 entries, but some are duplicates or lost), plus thousands in Latin and other languages. Most are medieval, so the raw number matters less than the early witnesses: around a hundred papyri from the second to fourth centuries, and great fourth-century codices such as Sinaiticus and Vaticanus. Most other ancient works survive in far fewer copies, usually made many centuries after their authors.',
        'The gap between writing and earliest surviving copy is also short: P52, a fragment of John 18, is usually dated to the second century. For many classical works the gap is the better part of a thousand years.',
        'Textual variants are numerous, but the vast majority are spelling, word-order or obvious copying slips. No core Christian doctrine depends on a disputed reading.',
      ],
    },
    {
      heading: 'Early, eyewitness-based sources',
      body: [
        'Paul’s letters date from roughly AD 48-60, and he quotes even earlier creeds — 1 Corinthians 15:3-7 is widely dated to within a few years of the crucifixion.',
        'The Gospels were written within the lifetime of eyewitnesses (most scholars: c. AD 65-95). Luke explicitly says he investigated eyewitness accounts (Luke 1:1-4).',
      ],
      references: ['Luke 1:1-4', '1 Corinthians 15:3-8', '2 Peter 1:16', '1 John 1:1-3'],
    },
    {
      heading: 'Archaeology and external confirmation',
      body: [
        'Many details have been confirmed: the Pool of Bethesda with five porticoes (John 5:2), the Pilate Stone naming Pontius Pilate as prefect, an ossuary that many scholars (not all) assign to Caiaphas, and Luke’s precise titles for local officials in Acts.',
        'Archaeology cannot prove theological claims, but it shows the authors were careful about the details we can check.',
      ],
    },
    {
      heading: 'The marks of honest testimony',
      body: [
        'People who invent a story make their heroes look good. The Gospels do the opposite. The disciples are slow to understand and quick to quarrel. Peter, the leading apostle, denies Jesus three times. Jesus’ own family at one point says, “He is out of His mind” (Mark 3:21-22). The first witnesses of the empty tomb are women, whose word carried little weight in that society.',
        'The Gospels also keep sayings that are hard to explain, such as Jesus not knowing the day of his return (Mark 13:32) and his cry of abandonment on the cross (Mark 15:34). A church making up a divine Saviour would have left these out. They are there because they happened.',
      ],
      references: ['Mark 3:21-22', 'Mark 14:66-72', 'Mark 13:32', 'Mark 15:34'],
    },
    {
      heading: 'Names, places and titles',
      body: [
        'The Gospels and Acts are full of the kind of detail that is easy to get wrong from a distance: the names of villages, the layout of Jerusalem, local customs, and the exact titles of officials, which differed from city to city and changed over time.',
        'Luke dates the start of John the Baptist’s ministry by five rulers at once (Luke 3:1). He calls Gallio “proconsul of Achaia” (Acts 18:12), and an inscription found at Delphi confirms the title and dates his term to about AD 51. Even the personal names in the Gospels match the names that were most common among Jews in Palestine at that time, which differ from those common among Jews elsewhere.',
        'Writers who are careful about what we can check have earned a hearing on what we cannot.',
      ],
      references: ['Luke 3:1', 'Acts 18:12', 'Luke 1:1-4'],
    },
    {
      heading: 'Paul as an early cross-check',
      body: [
        'Even apart from the Gospels, Paul’s letters, written within twenty to thirty years of the crucifixion, confirm the outline of Jesus’ life. He was born of a woman, under the Jewish law (Galatians 4:4), and descended from David (Romans 1:3). He had a brother named James, whom Paul met (Galatians 1:19). He died, was buried and was raised, and appeared to many (1 Corinthians 15:3-8).',
        'Paul did not get this from the Gospels, which were written later. It is an independent, earlier line of evidence that agrees with them.',
      ],
      references: ['Galatians 4:4', 'Romans 1:3', 'Galatians 1:19', '1 Corinthians 15:3-8'],
    },
  ],
  objections: [
    {
      id: 'ros-1',
      followUps: [
        {
          reply: 'The original manuscripts are lost, so you cannot know what they said.',
          answer: 'We have no original of any major work of ancient literature. What we have for the New Testament is thousands of copies from many places, early enough and independent enough of one another that the original wording can be recovered with great confidence.',
          followUps: [
            {
              reply: 'Your earliest substantial copies come from a century or more after the originals. The changes could have been made in that gap, before any copy that survives.',
              answer: 'The gap is real. For most books the earliest substantial copies are papyri usually dated between the late second and the third century, such as P46 for Paul’s letters and P66 and P75 for the Gospels. But a change made in the gap would have had to reach every copy, when copies were already spread from Rome to Egypt to Syria and nobody controlled them. What we find instead is lines of copying from different regions that agree closely. Writers inside the gap also quote the New Testament: Clement of Rome in the 90s, Ignatius and Polycarp early in the second century, and Irenaeus at length around AD 180.',
              followUps: [
                {
                  reply: 'The earliest scribes were amateurs, and Ehrman says that is when copying was at its wildest and most changes were made.',
                  answer: 'He does say that, and there is truth in it. Early copyists were less trained than later ones, and most variants arose early. But careless copying leaves evidence, which is differences between copies. A slip in one line of copying is absent from the others, and that is how it is caught. Nor was all early copying careless. P75, usually dated to the third century (a few scholars now say the fourth), agrees very closely with the fourth-century Codex Vaticanus, which suggests that at least one early stream was copied with great care.',
                },
              ],
            },
          ],
        },
        {
          reply: 'Even if the Greek is sound, every translation is an interpretation. You are reading the translators’ opinions.',
          answer: 'Every translation involves judgment, and that is true. It is why it matters that there are many of them, made by committees drawn from different churches, and open to checking by scholars who belong to none. Where a sentence could go two ways, good translations give the other in a footnote. Anyone can learn Greek, or use an interlinear text, and see for himself. The differences between the major versions are small and public.',
        },
      ],
      objection: 'The Bible has been translated so many times — it’s like a game of telephone.',
      response:
        'Actually, modern translations aren’t made from translations of translations. They go back to the Greek and Hebrew manuscripts directly. And unlike the telephone game, we have thousands of copies we can compare, some of them very early, so scholars can reconstruct the original wording with a very high degree of confidence.',
      keyPoints: [
        'Translations come from original-language texts.',
        'Thousands of manuscripts allow cross-checking.',
        'Telephone is one line; manuscripts are many branches.',
      ],
    },
    {
      id: 'ros-2',
      followUps: [
        {
          reply: 'Even one changed word means we can’t trust it.',
          answer: 'Then no ancient book can be trusted, and no modern one either, since every printed book has misprints. What matters is whether we can tell what the original said. With thousands of copies to compare, in the vast majority of places we can, and the uncertain places are marked in the footnotes of any study Bible.',
          followUps: [
            {
              reply: 'Some changes are not trivial. The Trinity verse in 1 John was added, and so were the ending of Mark and the story of the woman caught in adultery.',
              answer: 'You are right about all three, and it was Christian scholars who identified them. The words about “the Father, the Word, and the Holy Spirit” that older Bibles print in 1 John 5:7 are absent from the early Greek manuscripts and came in from the Latin tradition, and modern Bibles leave them out. Mark 16:9-20 and John 8:1-11 are bracketed or footnoted. That we can name these passages shows the method works: additions can be detected. And nothing rests on them. The Trinity is taught in Matthew 28:19 and John 1:1, and the resurrection is announced in Mark 16:6, which every copy has.',
              followUps: [
                {
                  reply: 'Scribes also changed verses on purpose, to make Jesus look more divine. That is Ehrman’s “orthodox corruption of Scripture”.',
                  answer: 'Ehrman argued that in a book of that title in 1993, and some of his examples are probably right: scribes did now and then adjust a verse towards what they believed. But he can identify an alteration only because the earlier reading survives in other manuscripts. So the evidence of tampering is also the evidence that the original was not lost. And the alterations are few and local. The plainest statements that Jesus is God are not among the doubtful places: “the Word was God” (John 1:1) and “My Lord and my God!” (John 20:28) stand in the text without serious dispute.',
                  followUps: [
                    {
                      reply: 'You only know about the changes that left a trace. There could be early changes that every surviving copy shares.',
                      answer: 'In principle there could, and no historian can prove otherwise. But such a change would have to be made before the copies spread, which means within the first decades, while the authors or those who knew them were alive. That is no longer a theory about careless scribes. It is a theory about a different original, and it has no evidence. Scholars do sometimes suspect that every surviving copy is wrong at some point and propose a guess, and the standard editions of the Greek New Testament adopt almost none of those guesses.',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      objection: 'There are more textual variants than words in the New Testament.',
      response:
        'That’s true, but it’s because we have so many manuscripts — more copies means more counted differences. The overwhelming majority are spelling differences, word-order changes or plain slips that don’t affect meaning. Only a tiny fraction are both meaningful and viable, and none overturn any central Christian belief.',
      keyPoints: [
        'Variant count reflects abundance of manuscripts.',
        'Most variants are trivial.',
        'No core doctrine rests on a disputed text.',
      ],
    },
    {
      id: 'ros-3',
      followUps: [
        {
          reply: 'Thirty years is long enough for legends to grow.',
          answer: 'Legends grow when the eyewitnesses are gone. Thirty years after the crucifixion many of them were alive, including hostile ones. Paul points to more than five hundred witnesses, “most of whom are still living” (1 Corinthians 15:6). That is an invitation to check.',
          followUps: [
            {
              reply: 'Before anything was written, the stories were passed on by word of mouth for decades. Memory is unreliable, and oral stories change with every telling.',
              answer: 'Casual memory is unreliable. This was not casual. It was teaching, repeated in public in communities, in a culture that prized learning a teacher’s words by heart. Much of what Jesus said is in forms made to be remembered: parables, short sayings, balanced lines. The eyewitnesses were present in the churches for decades as a living check. And Paul uses the regular terms for handing on a fixed tradition: “what I received I passed on to you” (1 Corinthians 15:3).',
              followUps: [
                {
                  reply: 'The Gospels were written in Greek, in other countries, by educated authors. The eyewitnesses were Aramaic-speaking peasants in Galilee. That is a long way apart.',
                  answer: 'It is a shorter way than it looks. Palestine used more than one language, and the church in Jerusalem had Greek-speaking members from its first years (Acts 6:1). The eyewitnesses travelled, and Paul spent fifteen days with Peter in Jerusalem and met James (Galatians 1:18-19). The Gospels keep some of Jesus’ words in Aramaic, such as “Talitha koum!” (Mark 5:41). And they get the local names, places and customs of Palestine right, which a writer guessing from abroad would not.',
                  followUps: [
                    {
                      reply: 'Sincere eyewitnesses still get things wrong. Psychologists have shown that memory distorts within days, let alone decades.',
                      answer: 'It does, mostly in the details at the edge: the time of day, the number of people, the order of events. The Gospels differ in details of that kind. The same research finds that people tend to keep the gist of events that were unusual, important to them and often retold. Whether your teacher was executed, and whether you ate with him afterwards, is not a detail at the edge. Nor were these memories left alone for forty years. The summary in 1 Corinthians 15:3-7 had been fixed and handed on within a few years.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          reply: 'Most scholars date the Gospels after AD 70. So their authors never met Jesus.',
          answer: 'Most scholars do date Matthew, Luke and John after 70 and Mark close to it, and I am content to argue on those dates. AD 70 is forty years after the crucifixion, when a disciple who had been twenty-five would be sixty-five. Mark is reported by Papias to have been Peter’s interpreter, and Luke says his material was “handed down to us by the initial eyewitnesses” (Luke 1:2). A minority of scholars also argue for earlier dates. Acts ends with Paul alive in Rome in the early 60s (Acts 28:30-31) and says nothing of his death, of Nero’s persecution or of the fall of Jerusalem. If Acts was written then, Luke’s Gospel is earlier, and Mark earlier still.',
        },
      ],
      objection: 'The Gospels were written long after the events by people who weren’t there.',
      response:
        'Even on standard scholarly dating, the Gospels were written within about 35-65 years — while eyewitnesses and opponents were still alive. Paul’s letters are earlier still and quote creeds that go back to the first few years after the crucifixion. Compare that to our main surviving biographies of Alexander the Great, written about 400 years after his death, though from earlier accounts now lost.',
      keyPoints: [
        'Within the lifetime of eyewitnesses.',
        'Earlier creeds embedded in Paul.',
        'Closer to the events than many ancient biographies.',
      ],
    },
    {
      id: 'ros-4',
      followUps: [
        {
          reply: 'Show me one contradiction you can actually resolve.',
          answer: 'Matthew mentions one angel at the tomb, and Luke mentions two men in radiant apparel, later called angels (Matthew 28:2; Luke 24:4, 23). Mentioning one does not deny that there were two; reporters do this every day. A contradiction would be one writer saying there was only one.',
          followUps: [
            {
              reply: 'That one is easy. Try a hard one. In Mark the last supper is the Passover meal and Jesus dies the next day. In John he dies before the Passover is eaten.',
              answer: 'That is the one scholars argue about most, and there is no single agreed solution. All four Gospels agree that he ate a last supper with his disciples and was crucified on the Friday of Passover week. The difficulty comes mainly from two verses in John: the priests wanted to stay clean so as to “eat the Passover” (John 18:28), and the day is called “the day of Preparation for the Passover” (John 19:14). But “Preparation” was the ordinary word for Friday, as in Mark 15:42, and the name Passover was used of the whole seven-day feast and its meals (Luke 22:1). Others think two calendars were in use. On any view the question is about the dating of a meal, not about whether he died.',
              followUps: [
                {
                  reply: 'Harmonising like that is special pleading. You would not accept it from someone defending another holy book.',
                  answer: 'The test should be the same for every text, and I accept it for mine. Is the proposed reading one the words can naturally bear, and would we allow it for any two ancient sources? Historians do this constantly. Polybius and Livy describe Hannibal’s route over the Alps differently, and nobody concludes that he never crossed. What I must not do is claim to know more than I do, so where I cannot see how two details fit I will say so. My confidence that Jesus died and rose does not depend on solving every puzzle; it rests on independent sources agreeing about the main events.',
                  followUps: [
                    {
                      reply: 'Then you admit the Bible may contain errors. So it is not the word of God.',
                      answer: 'I have admitted that I cannot resolve every difficulty, which is a different thing. An unsolved puzzle is not a proven error, and some old puzzles have been solved by new evidence. John’s pool “with five covered colonnades” (John 5:2) was doubted by some critics until it was dug up in Jerusalem. But keep two questions apart. You do not need to believe the Bible is without error to see that the Gospels are good historical sources for the death and resurrection of Jesus, so start there. If he rose, his own view of Scripture carries weight, and he said that “the Scripture cannot be broken” (John 10:35).',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          reply: 'Matthew and Luke copied from Mark, often word for word. So they are not independent witnesses.',
          answer: 'Most scholars think Matthew and Luke used Mark, and Luke says openly that he knew earlier accounts (Luke 1:1-3). So where they follow Mark I do not count them as three witnesses. But several independent lines remain: Mark, the material Matthew and Luke share that is not in Mark, the material found only in Matthew or only in Luke, John, and Paul’s letters, which are earlier than all of them. The crucifixion, the burial and the appearances are attested across those lines. And when a writer who has sources of his own chooses to follow Mark closely, that tells us what he thought of Mark.',
        },
      ],
      objection: 'The Gospels contradict each other.',
      response:
        'They differ in detail, which is what you’d expect from independent witnesses — identical accounts would suggest collusion. Many apparent contradictions are resolved by noticing different emphases or the normal conventions of ancient biography. Importantly, the core facts — Jesus’ ministry, death, burial, and the empty tomb — are consistent across them.',
      keyPoints: [
        'Independent testimony naturally varies.',
        'Ancient biography conventions (paraphrase, arrangement).',
        'Core agreement on central events.',
      ],
    },
    {
      id: 'ros-5',
      objection: 'The Gospels are anonymous. Nobody knows who wrote them.',
      response:
        'The authors do not name themselves in the text, which was normal for that kind of writing. But no copy that has a title names anyone other than Matthew, Mark, Luke or John. Papias, early in the second century, already names Mark and Matthew, and by about AD 180 Irenaeus names all four. Notice which names they are. Mark and Luke were not apostles. If the church had been inventing authors to win authority, it would have chosen Peter or James.',
      keyPoints: ['Formally anonymous, like much ancient writing.', 'The titles and early testimony are all but unanimous.', 'Nobody invents Mark and Luke as authors.'],
      references: ['Luke 1:1-4'],
      followUps: [
        {
          reply: 'Fishermen from Galilee could not write Greek books.',
          answer: 'Matthew was a tax collector, whose job required record-keeping; Luke was a physician; Mark is said to have written down Peter’s teaching. Using a secretary was ordinary practice, as Paul’s letters show. And thirty years of preaching in the Greek-speaking world is a long education.',
          followUps: [
            {
              reply: 'Acts itself calls Peter and John unschooled. Literacy in Roman Palestine was only a few per cent.',
              answer: 'Acts says the council saw that they were “unschooled, ordinary men” (Acts 4:13). Many commentators take that to mean they had no training as teachers of the law, though others read it as illiterate. Some scholars do estimate that only a few per cent could write, though the figures are disputed. In any case an ancient author often did not hold the pen. Paul dictated Romans: “I, Tertius, who wrote down this letter, greet you in the Lord” (Romans 16:22). And nobody claims that Peter wrote a Gospel; the early report is that Mark wrote down what Peter taught.',
            },
          ],
        },
        {
          reply: 'The titles were added in the second century. For decades the Gospels circulated with no names on them.',
          answer: 'That is a common view, and it cannot be disproved, since no copy survives from the first century. But think what it predicts. If four nameless books had circulated for decades across the empire and were named later, we should expect different churches to have guessed different authors. That is what happened with Hebrews, which really is anonymous: Paul, Barnabas, Luke and Clement were all suggested. For the Gospels every titled manuscript and almost every early writer gives the same four names. The historian Martin Hengel argued that the titles must go back to the time the Gospels first circulated, because a church that owned more than one needed a way to tell them apart.',
          followUps: [
            {
              reply: 'Papias is a weak witness. Eusebius thought little of his intelligence, and the Matthew he describes wrote sayings in Hebrew, which is not our Greek Gospel.',
              answer: 'Both points are fair. Eusebius did call Papias a man of very limited understanding, though his complaint was about Papias’s views on the thousand-year reign of Christ, and he still quoted him as a source. And what Papias says about Matthew, that he compiled the sayings in the Hebrew language, is a puzzle on which scholars disagree. So I would not rest the case on Papias alone. His value is his date: he wrote early in the second century, passing on what he had heard from an older teacher, which puts the names Mark and Matthew within living memory of the apostles.',
            },
          ],
        },
      ],
    },
    {
      id: 'ros-6',
      objection: 'Scholars like Bart Ehrman have shown the Bible can’t be trusted.',
      response:
        'It helps to ask which claim. Ehrman is a serious scholar, and he is firm on several points that surprise people: that Jesus certainly existed, that he was crucified under Pilate, and that his followers soon believed they had seen him alive. On the text itself, he has acknowledged that the differences among manuscripts do not overturn any essential Christian belief. He does dispute who wrote the Gospels and argues that they contradict one another, and those points can be taken one at a time. His deepest disagreement with Christians is over whether a miracle can ever be accepted as history, and that is a question of philosophy, not of manuscripts.',
      keyPoints: ['Ask which specific claim.', 'Ehrman affirms Jesus’ existence and crucifixion.', 'His deepest objection, to miracles, is philosophical.'],
      followUps: [
        {
          reply: 'He says there are more variants than words in the New Testament.',
          answer: 'There are, because there are so many copies. Most are differences of spelling or word order, or plain slips. Of the small fraction that affect meaning, the main ones are footnoted in any modern Bible, and no core Christian teaching depends on a disputed reading.',
          followUps: [
            {
              reply: 'He also says we have no originals, only copies of copies made centuries later. So talk of “the original text” is guesswork.',
              answer: 'That we have no originals is true of every ancient book. “Centuries later” is true of most of the manuscripts but not of the earliest, which come from within a century or two. What matters is whether the copies allow us to work back, and textual critics, Ehrman among them, spend their careers doing that. His own teacher, Bruce Metzger, the leading textual critic of his generation, judged that they do, and remained a Christian all his life.',
              followUps: [
                {
                  reply: 'His larger point is about authorship. He argues that books such as 2 Peter and the letters to Timothy and Titus were not written by the men they name.',
                  answer: 'He argues that in Forged (2011). The Gospels name no author in their text, so even on his view they are not forgeries. For letters such as 2 Peter and those to Timothy and Titus, most critical scholars do doubt the authorship, mainly from style and vocabulary, and others answer that a different secretary, subject and date account for the differences. That debate is open. But the case for the death and resurrection of Jesus does not use those books. It rests on letters that Ehrman accepts as Paul’s own, Romans, 1 Corinthians and Galatians among them, and on the Gospels read as historical sources.',
                  followUps: [
                    {
                      reply: 'And he says a historian can never conclude that a miracle happened, because a miracle is by definition the least probable explanation.',
                      answer: 'That is the philosophical point underneath the rest, and it settles the question before looking. A miracle is the least probable explanation only if there is no God, or if God would never do such a thing. If God exists, how likely it is that he raised Jesus depends on the evidence and the setting. Ehrman himself grants that some of the disciples sincerely believed they had seen Jesus alive after his death. A historian can report that, and then anyone may ask what explains it best. To refuse to ask is a rule of method, not a discovery.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          reply: 'Ehrman was an evangelical who studied the evidence and lost his faith. That should tell you something.',
          answer: 'It tells me he is sincere, and I respect that. But by his own account it was not the manuscripts that ended his faith but the problem of suffering, which he wrote about in God’s Problem (2008). And people travel the other way over the same evidence. Bruce Metzger knew the manuscripts as well as anyone living and died a believer. A person’s life story cannot settle the matter in either direction. The arguments have to.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'ros-q1',
      question: 'Roughly how many Greek manuscripts of the New Testament exist?',
      options: ['About 50', 'About 600', 'About 5,300', 'Over 100,000'],
      answer: 2,
      explanation: 'About 5,300, from a catalogue of some 5,800 entries. Most are medieval, but they include early papyri and fourth-century codices.',
    },
    {
      id: 'ros-q2',
      question: 'Which passage contains an early creed about the death and resurrection of Jesus?',
      options: ['Romans 8:28', '1 Corinthians 15:3-7', 'Genesis 1:1', 'Psalm 23'],
      answer: 1,
      explanation: 'Paul says he “delivered… what I also received” — a creed dated very early by most scholars.',
    },
    {
      id: 'ros-q3',
      question: 'The “Pilate Stone” discovered at Caesarea confirms…',
      options: [
        'The location of Jesus’ tomb',
        'That Pontius Pilate was the prefect of Judea',
        'The date of the crucifixion',
        'The authorship of John',
      ],
      answer: 1,
      explanation: 'It names Pontius Pilate as prefect of Judea.',
    },
    {
      id: 'ros-q4',
      question: 'Which Gospel opens by describing the author’s careful investigation of eyewitness accounts?',
      options: ['Matthew', 'Mark', 'Luke', 'John'],
      answer: 2,
      explanation: 'Luke 1:1-4.',
    },
    {
      id: 'ros-q5',
      question: 'Why do embarrassing details count in favour of the Gospels?',
      options: ['They make the story longer', 'Inventors do not make their leaders look bad', 'They prove miracles', 'They were added later'],
      answer: 1,
      explanation: 'Peter’s denial and the family’s doubts are there because they happened.',
    },
    {
      id: 'ros-q6',
      question: 'What does the Gallio inscription from Delphi confirm?',
      options: ['The date of Jesus’ birth', 'Luke’s title for Gallio in Acts 18:12, and when he held it', 'The authorship of Mark', 'The location of the empty tomb'],
      answer: 1,
      explanation: 'It also helps date Paul’s time in Corinth to about AD 51.',
    },
    {
      id: 'ros-q7',
      question: 'Which two questions about the New Testament should be kept apart in conversation?',
      options: [
        'Whether we have what was originally written, and whether what was written is true',
        'Whether it is long, and whether it is old',
        'Whether it was written in Greek, and whether it was written in Latin',
        'Whether Catholics accept it, and whether Protestants do',
      ],
      answer: 0,
      explanation: 'The first is about transmission and the second about historical reliability. Different evidence answers each.',
    },
    {
      id: 'ros-q8',
      question: 'What is P52?',
      options: [
        'A complete fourth-century Bible',
        'A Roman inscription naming Pilate',
        'A papyrus fragment of John 18, usually dated to the second century',
        'The oldest copy of Paul’s letters',
      ],
      answer: 2,
      explanation: 'On that dating the gap between the writing of John and our earliest surviving copy is a century or less.',
    },
    {
      id: 'ros-q9',
      question: 'Why are there so many textual variants in the New Testament?',
      options: [
        'Because the church kept rewriting it',
        'Because it was translated many times',
        'Because the originals were written in several languages',
        'Because there are so many manuscripts to compare, and most differences are of spelling or word order',
      ],
      answer: 3,
      explanation: 'More copies means more counted differences. Only a small fraction affect meaning, and no core doctrine rests on a disputed reading.',
    },
    {
      id: 'ros-q10',
      question: 'Why is the “game of telephone” a poor picture of how the New Testament reached us?',
      options: [
        'Telephones had not been invented',
        'Telephone is a single line of whispers, while the manuscripts are many branches that can be compared with one another',
        'The New Testament was passed on only by word of mouth',
        'Nobody copied the New Testament until the Middle Ages',
      ],
      answer: 1,
      explanation: 'A slip in one line of copying is absent from the others, which is how it is caught. And translations are made from the Greek, not from other translations.',
    },
    {
      id: 'ros-q11',
      question: 'How does the gap between the events and the Gospels compare with our main biographies of Alexander the Great?',
      options: [
        'The Gospels were written about 35 to 65 years after the events; the main biographies of Alexander about 400 years after his death',
        'Both were written within a year of the events',
        'The biographies of Alexander are much closer to the events',
        'The Gospels were written about 400 years after Jesus',
      ],
      answer: 0,
      explanation: 'Even on standard scholarly dating the Gospels fall within the lifetime of eyewitnesses.',
    },
    {
      id: 'ros-q12',
      question: 'Why does it count for the traditional authors that two of the Gospels are attributed to Mark and Luke?',
      options: [
        'They were the most famous apostles',
        'They were Roman officials',
        'Neither was an apostle, so nobody inventing authors to win authority would have chosen them',
        'They signed their names in the first verse',
      ],
      answer: 2,
      explanation: 'A church making up authors would have chosen Peter or James. The titles and the early testimony give the same four names.',
    },
    {
      id: 'ros-q13',
      question: 'Which of these facts about Jesus does Paul confirm, independently of the Gospels?',
      options: [
        'That he was born in Bethlehem and visited Egypt',
        'That he had a brother named James, whom Paul met',
        'That he turned water into wine',
        'That he was tried before Herod',
      ],
      answer: 1,
      explanation: 'Galatians 1:19. Paul also says Jesus was born of a woman, descended from David, died, was buried and was raised.',
    },
    {
      id: 'ros-q14',
      question: 'Matthew mentions one angel at the tomb and Luke mentions two. Why is that not a contradiction?',
      options: [
        'Because Luke was mistaken',
        'Because angels cannot be counted',
        'Because one of the passages was added later',
        'Because mentioning one does not deny there were two; a contradiction would need one writer to say there was only one',
      ],
      answer: 3,
      explanation: 'Matthew 28:2 and Luke 24:4. Independent accounts select different details.',
    },
    {
      id: 'ros-q15',
      question: 'Which of these does the sceptical scholar Bart Ehrman affirm?',
      options: [
        'That the Gospels are free of contradictions',
        'That Jesus rose from the dead',
        'That Jesus existed and was crucified under Pontius Pilate',
        'That the traditional authors wrote all four Gospels',
      ],
      answer: 2,
      explanation: 'He disputes authorship and argues for contradictions, but is firm that Jesus existed and was crucified. His deepest objection, to miracles, is philosophical.',
    },
    {
      id: 'ros-q16',
      question: 'When Paul listed the witnesses to the risen Jesus, what did he add about the five hundred?',
      options: [
        'That most of them were still living',
        'That their names had been forgotten',
        'That they had all died',
        'That they were not to be questioned',
      ],
      answer: 0,
      explanation: '“most of whom are still living” (1 Corinthians 15:6). That is an invitation to check.',
    },
    {
      id: 'ros-q17',
      question: 'Older Bibles print extra words about the Father, the Word and the Holy Spirit in 1 John 5:7. What is the right thing to say about them?',
      options: [
        'They are in all the earliest Greek manuscripts',
        'They are absent from the early Greek manuscripts, modern Bibles omit them, and the Trinity does not depend on them',
        'They were removed by sceptics',
        'They are the only place the Bible teaches the Trinity',
      ],
      answer: 1,
      explanation: 'That scholars can identify such additions shows the method works. The Trinity is taught in Matthew 28:19 and John 1:1.',
    },
    {
      id: 'ros-q18',
      question: 'What does Romans 16:22 show about how ancient letters were written?',
      options: [
        'That Paul could not read',
        'That Romans was written by Peter',
        'That letters were always anonymous',
        'That an author could dictate to a secretary, here named Tertius',
      ],
      answer: 3,
      explanation: '“I, Tertius, who wrote down this letter, greet you in the Lord” (Romans 16:22). Authorship did not require holding the pen.',
    },
    {
      id: 'ros-q19',
      question: 'The letter to the Hebrews is truly anonymous. What happened as a result, and why does it matter for the Gospels?',
      options: [
        'Nobody ever read it',
        'It was left out of the Bible',
        'Different authors were suggested for it, while for the Gospels the early sources give the same four names',
        'It was attributed to Matthew',
      ],
      answer: 2,
      explanation: 'Paul, Barnabas, Luke and Clement were all proposed for Hebrews. Had the Gospels circulated nameless for decades we should expect the same variety.',
    },
    {
      id: 'ros-q20',
      question: 'Ehrman argues that scribes sometimes altered verses to favour orthodox belief. Why does that not show the original text is lost?',
      options: [
        'Because scribes never altered anything',
        'Because an alteration can only be identified when the earlier reading survives in other manuscripts',
        'Because the altered verses are the ones Christians rely on',
        'Because Ehrman later withdrew the claim',
      ],
      answer: 1,
      explanation: 'The evidence of tampering is also the evidence that the original wording was not lost.',
    },
  ],
  furtherReading: [
    'F.F. Bruce — The New Testament Documents: Are They Reliable?',
    'Craig Blomberg — The Historical Reliability of the Gospels',
    'Peter J. Williams — Can We Trust the Gospels?',
  ],
};
