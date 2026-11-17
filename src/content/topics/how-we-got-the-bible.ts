import type { Topic } from '../types';

export const howWeGotTheBible: Topic = {
  id: 'how-we-got-the-bible',
  title: 'How We Got the Bible',
  icon: '📚',
  summary: 'Who wrote it, who decided which books belong, how it was copied, and why the “lost gospels” were never part of the Bible.',
  lesson: [
    {
      heading: 'From the authors to us',
      body: [
        'The New Testament was written in the first century by apostles and their close companions. Luke says he wrote “having carefully investigated everything from the beginning” (Luke 1:3), and Peter insists, “we were eyewitnesses of His majesty” (2 Peter 1:16).',
        'Christians believe God spoke through these human authors: “All Scripture is God-breathed” (2 Timothy 3:16), and “men spoke from God as they were carried along by the Holy Spirit” (2 Peter 1:21). The Bible is fully human in its writing and fully from God in its message.',
        'The books were written on papyrus, copied by hand, and carried to churches across the Roman world. No single person or church ever controlled all the copies.',
      ],
      references: ['Luke 1:1-4', '2 Peter 1:16', '2 Timothy 3:16', '2 Peter 1:21'],
    },
    {
      heading: 'Who decided which books belong?',
      body: [
        'A popular claim says the emperor Constantine, or the Council of Nicaea in AD 325, chose the books of the Bible. This is false. Nicaea met to answer the teaching of Arius about the deity of Christ; it made no decision about which books belong in the Bible.',
        'The core of the New Testament was recognised long before. Within the New Testament itself, Peter speaks of Paul’s letters alongside “the rest of the Scriptures” (2 Peter 3:15-16), and Paul quotes a saying of Jesus found in Luke as Scripture: “The worker is worthy of his wages” (1 Timothy 5:18; see Luke 10:7).',
        'Around AD 180, Irenaeus wrote that there are four Gospels and only four: Matthew, Mark, Luke and John. A list usually dated to the late second century (the Muratorian fragment) already names most of the New Testament books. In AD 367 Athanasius listed exactly the 27 books we have today.',
        'The churches did not grant these books authority; they recognised the authority the books already had. They asked: does it come from an apostle or an apostle’s companion? Has it been used by churches everywhere from the beginning? Does it agree with the teaching handed down from the apostles?',
      ],
      references: ['2 Peter 3:15-16', '1 Timothy 5:18', 'Luke 10:7', 'Galatians 1:8'],
    },
    {
      heading: 'Copying and textual criticism',
      body: [
        'Because the books were copied by hand, copies differ in small ways: spellings, word order, a skipped line. With about 5,800 Greek manuscripts of the New Testament to compare, scholars can see where copies differ and work back to the original wording. This work is called textual criticism.',
        'Christians are open about the results. The two longest passages missing from the earliest manuscripts are the ending of Mark (Mark 16:9-20) and the story of the woman caught in adultery (John 8:1-11). Modern Bibles mark both. No Christian teaching depends on either.',
        'The abundance of copies is a strength. A text controlled by one authority could be changed without trace. A text copied freely across three continents cannot.',
      ],
      references: ['Mark 16:8', 'Isaiah 40:8'],
    },
    {
      heading: 'Translations',
      body: [
        'Mainstream modern Bibles are not translations of translations. Each is translated directly from the Hebrew, Aramaic and Greek texts.',
        'English versions differ because translators make different choices: some follow the original word order closely, others aim for natural English. Comparing two or three good translations usually shows that they agree on the meaning.',
      ],
    },
    {
      heading: 'The “lost gospels”',
      body: [
        'Books such as the Gospel of Thomas, the Gospel of Judas and the Gospel of Mary are sometimes presented as suppressed alternatives to the four Gospels. They were written in the second century or later, long after the apostles had died, by authors who borrowed famous names.',
        'They were never part of the Bible and then removed. Early Christians knew them, and rejected them because they came too late and contradicted what the apostles taught. The four Gospels are the only narrative accounts of Jesus’ life generally dated to the first century.',
      ],
      references: ['Luke 1:1-4', '2 Peter 1:16'],
    },
  ],
  objections: [
    {
      id: 'hb-1',
      objection: 'Constantine and the Council of Nicaea decided which books went into the Bible.',
      response:
        'That is a modern myth. Nicaea in AD 325 dealt with Arius’s teaching about Christ, and none of its records mention choosing books. The four Gospels and Paul’s letters were being read as Scripture across the churches more than a century before Nicaea. Irenaeus named the four Gospels around AD 180, and Peter already speaks of Paul’s letters alongside the rest of the Scriptures (2 Peter 3:15-16).',
      keyPoints: ['Nicaea was about Arius, not the canon.', 'Four Gospels named around AD 180.', 'Recognition began within the New Testament itself.'],
      references: ['2 Peter 3:15-16', '1 Timothy 5:18'],
      followUps: [
        {
          reply: 'But the church still picked the books it liked.',
          answer: 'The books were recognised because of where they came from, not because they were convenient. They include plenty that embarrasses the church’s first leaders, such as Peter denying Jesus (Mark 14:66-72).',
          followUps: [
            {
              reply: 'The winners write the history. One party won, called itself orthodox, and its books became the Bible. Other Christians, such as the Gnostics, had scriptures of their own.',
              answer: 'There were rival groups, and that much is true. But “winners” suggests power, and in the second and third centuries, when the four Gospels and Paul’s letters came to be recognised everywhere, the church had none. It was an illegal minority that was persecuted from time to time and could suppress nobody. What settled the matter was a historical question anyone could ask: which books go back to the apostles and their circle? The Gnostic books fail on their dates, not on politics. Even Marcion, who drew up the earliest rival list around AD 140, built it from an edited Luke and ten letters of Paul, books that were already in use.',
              followUps: [
                {
                  reply: 'Even so, the list was not settled until the late fourth century. For three hundred years Christians did not know what their Bible was.',
                  answer: 'They knew most of it. The four Gospels, Acts, the letters of Paul, 1 Peter and 1 John were not in serious doubt from the second century on. The books discussed for longer stood at the edge: Hebrews, James, 2 Peter, 2 and 3 John, Jude and Revelation. Eusebius, early in the fourth century, sets it all out openly in his Church History, sorting books into the acknowledged, the disputed and the spurious. That the churches took their time over the edges, and said so, is a sign of care. No Christian teaching rests on the disputed books alone.',
                  followUps: [
                    {
                      reply: 'So fallible men drew up the list. How do you know they got it right?',
                      answer: 'In principle they could have erred, and I do not claim that any council is infallible. My confidence rests on things you can check. The tests they applied were historical, and the books they recognised are the earliest we have. No excluded book has a better claim, which you can judge by reading the Gospel of Thomas or the Gospel of Peter. As a Christian I also believe that the God who gave the books saw to it that his people knew them: “My sheep listen to My voice” (John 10:27). But the list stands as history without that.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          reply: 'Constantine did order fifty Bibles from Eusebius. So he had a hand in what went into them.',
          answer: 'He did commission fifty copies of the Scriptures for the churches of his new capital, Constantinople, around AD 330. Eusebius preserves the letter in his Life of Constantine. But the letter leaves the contents to Eusebius and names no books. Eusebius had already described in his Church History which books the churches accepted and which they disputed, as a state of affairs he had inherited. The emperor paid for the copying. He chose nothing.',
        },
      ],
    },
    {
      id: 'hb-2',
      followUps: [
        {
          reply: 'The Gospel of Thomas may be as early as your Gospels.',
          answer: 'Some scholars argue that, but most date it to the second century, because it appears to know the finished Gospels and reflects later ideas. And it is a list of sayings with no account of the crucifixion or the resurrection, so even at its earliest it would not replace the accounts that have them.',
          followUps: [
            {
              reply: 'It has no cross or resurrection because it is the more original. Jesus was first remembered as a teacher of wisdom, and the dying and rising came later.',
              answer: 'The dates run the other way. The earliest Christian documents we have are Paul’s letters, from the 50s, and they are centred on the cross and the resurrection. The summary he quotes was handed to him within a few years of the events (1 Corinthians 15:3-5). No stage of Christianity that we can document comes before that message. Thomas, on the other hand, seems to know sayings in the edited form that Matthew and Luke gave them, which places it after them. Simon Gathercole and Mark Goodacre each argued this in detail in books published in 2012.',
            },
          ],
        },
        {
          reply: 'Irenaeus chose four Gospels because there are four winds and four corners of the earth. That is hardly a historical reason.',
          answer: 'He does say that, and as an argument it is weak. But read the rest. He is giving a fitting reason for something already the case, not deciding it. In the same work he gives his historical grounds: Matthew wrote among the Hebrews, Mark was Peter’s interpreter, Luke was Paul’s companion, and John the disciple wrote at Ephesus. Irenaeus had in his youth heard Polycarp, who by his account had known John. And a generation before him Justin Martyr describes the “memoirs of the apostles” being read at Sunday worship, while Justin’s pupil Tatian wove these four into a single narrative, the Diatessaron, around AD 170.',
          followUps: [
            {
              reply: 'The Gnostic gospels were buried at Nag Hammadi because the church was destroying them. That is suppression.',
              answer: 'By the late fourth century, when those books were probably buried, bishops had power and used it, and I do not defend every use of it. But by then the books had been rejected for two hundred years, in open argument, by a church that could not destroy anything. Irenaeus answers them by describing and quoting them. And read them. The Gospel of Thomas ends with Jesus saying that Mary must be made male to enter the kingdom, and in the Gospel of Judas he laughs at the disciples for giving thanks to their God over bread. These are not lost history. They are another religion using the name of Jesus.',
            },
          ],
        },
      ],
      objection: 'There were dozens of other gospels that the church suppressed.',
      response:
        'There were other writings called gospels, but they come from the second century or later, written by people who never met Jesus or the apostles. Early Christians knew about them, and discussed and rejected them openly; nothing was secretly removed. Compare them with Luke, who investigated eyewitness testimony (Luke 1:1-4), and the difference is clear.',
      keyPoints: ['Written in the second century or later.', 'Known and openly rejected, not hidden.', 'Only the four Gospels are generally dated to the first century.'],
      references: ['Luke 1:1-4', '2 Peter 1:16'],
    },
    {
      id: 'hb-3',
      followUps: [
        {
          reply: 'The King James Bible has verses that modern Bibles leave out.',
          answer: 'It does, a small number, because its translators worked from a printed Greek text based on a handful of late manuscripts. Much older manuscripts found since then do not have those verses, so modern Bibles move them to the footnotes. Nothing is hidden, and no teaching rests on any of them.',
          followUps: [
            {
              reply: 'Then for centuries Christians read verses that were not original. How do you know your Bible will not be corrected again?',
              answer: 'It may be, in small ways, and that is no scandal. Keep the scale in view. Counting the two long passages in Mark and John, the verses in question come to a few dozen out of nearly eight thousand in the New Testament. And the trend of discovery has been towards confirmation. The papyri found in the twentieth century are centuries older than anything the King James translators had, and they did not produce a different New Testament. They showed that the text in our hands is substantially the one read around AD 200.',
              followUps: [
                {
                  reply: 'Translations differ on things that matter. Isaiah 7:14 says “virgin” in some Bibles and “young woman” in others.',
                  answer: 'That is a good example of how open the differences are. The Hebrew word, almah, means a young woman of marriageable age. The old Greek translation, made by Jews before the time of Christ, used the word for virgin, and Matthew quotes it in that form: “Behold, the virgin will be with child” (Matthew 1:23). Translators choose one and usually footnote the other. But the virgin birth does not hang on how Isaiah is translated. Matthew and Luke each state directly that Mary conceived before she had been with a man (Matthew 1:18; Luke 1:34-35).',
                },
              ],
            },
          ],
        },
        {
          reply: 'Some versions are altered to fit a doctrine. The Jehovah’s Witnesses’ Bible says “the Word was a god”.',
          answer: 'It does, which is why I said mainstream translations. The New World Translation is produced by one organisation and follows its teaching, and its wording of John 1:1 is rejected by the great majority of Greek scholars, whatever their own beliefs. The safeguard is that the Greek text is public. A translation made by a committee from many churches, and open to review by scholars of none, cannot bend the text far without being caught. Compare several and the agreement is plain: “the Word was God” (John 1:1).',
        },
      ],
      objection: 'There are so many Bible versions. Which one is the real Bible?',
      response:
        'They are translations of the same Hebrew and Greek writings, in the way several English translations of one Russian novel are the same novel. Almost all differences are of style; the few that come from differences between manuscripts are footnoted and change no teaching. Pick any mainstream translation and you will find the same Jesus, the same cross and the same resurrection.',
      keyPoints: ['One text, many translations.', 'Almost all differences are of style.', 'The message is the same in all.'],
    },
    {
      id: 'hb-4',
      followUps: [
        {
          reply: 'Every religion says its book is from God.',
          answer: 'They do, so the claim alone settles nothing. The Bible invites testing in a way few books do. It ties its message to public events, above all the resurrection, and says that if Christ was not raised the faith is worthless (1 Corinthians 15:14). Examine that event and you have examined the claim.',
          followUps: [
            {
              reply: 'Quoting the Bible to prove the Bible is circular.',
              answer: 'It would be, if my argument were that the Bible is God’s word because it says so. That is not the route. I begin by treating the New Testament writings as ordinary historical sources and nothing more. Tested as other sources are tested, they lead me to conclude that Jesus died and rose. If he rose, his claims stand, and he treated the Scriptures as the word of God. So I believe the Bible because of Jesus, not the other way round. When I quoted Peter, it was to tell you what Christians claim, not to prove it.',
              followUps: [
                {
                  reply: 'Even if Jesus rose, that does not make every book of the Bible inspired. He never mentioned a New Testament.',
                  answer: 'He could not name books that were not yet written, but he provided for them. He appointed apostles as his witnesses and promised them that the Spirit “will guide you into all truth” (John 16:13) and “will remind you of everything I have told you” (John 14:26). The New Testament is the written form of that witness, from the apostles and their companions. For the Old Testament his endorsement is direct. He said that “the Scripture cannot be broken” (John 10:35), and after he rose he explained “Moses and all the Prophets” as being about himself (Luke 24:27).',
                },
              ],
            },
          ],
        },
        {
          reply: 'It reflects the ignorance and the morals of its time: slavery, a flat earth, stoning. A book from God would know better.',
          answer: 'It was written in its time, in the language of its first hearers, and Christians have never said otherwise. Some of what you list it does not teach. The Bible has no doctrine that the earth is flat. It speaks of sunrise as we do. The laws given to Israel governed an ancient nation and were not God’s last word: Jesus said that one of them, the permission to divorce, was given “because of your hardness of heart” (Matthew 19:8). The hard passages each deserve a proper look. But the same book contains what no age arrived at unaided: that every human being is made in the image of God (Genesis 1:27), and that we are to love our enemies (Matthew 5:44).',
          followUps: [
            {
              reply: 'You pick the parts you like and explain away the rest.',
              answer: 'Anyone who reads a long book has to work out how its parts fit together. The question is whether there is a principle or only a preference, and the Bible gives its own. It is one story that moves towards Christ, who said he came not to abolish the Law and the Prophets but “to fulfill them” (Matthew 5:17). Christians do not offer animal sacrifices because the New Testament says that Christ’s sacrifice was made “once for all” (Hebrews 10:10), not because we find them distasteful. And I am bound by the parts I do not like. Loving enemies and forgiving are harder to live with than the passages critics object to.',
            },
          ],
        },
      ],
      objection: 'The Bible was written by men, so it can’t be the word of God.',
      response:
        'It was written by men; Christians have always said so. The claim is that God spoke through them: “men spoke from God as they were carried along by the Holy Spirit” (2 Peter 1:21). Being written by people does not make something false. The question is whether what they wrote is true, and that can be tested: by history, by fulfilled prophecy, and above all by the resurrection of Jesus.',
      keyPoints: ['Human authors, divine source.', 'Written by men does not mean false.', 'Test it by evidence.'],
      references: ['2 Peter 1:21', '2 Timothy 3:16', '1 Thessalonians 2:13'],
    },
  ],
  quiz: [
    {
      id: 'hb-q1',
      question: 'What did the Council of Nicaea (AD 325) decide about the books of the Bible?',
      options: ['It chose the four Gospels', 'It removed several gospels', 'Nothing: it addressed the teaching of Arius', 'It wrote the New Testament'],
      answer: 2,
      explanation: 'Nicaea dealt with the deity of Christ, not the canon.',
    },
    {
      id: 'hb-q2',
      question: 'Who named the four Gospels as the only four around AD 180?',
      options: ['Constantine', 'Irenaeus', 'Athanasius', 'Augustine'],
      answer: 1,
      explanation: 'More than a century before Nicaea.',
    },
    {
      id: 'hb-q3',
      question: 'Which passages are the two longest that the earliest manuscripts lack?',
      options: ['John 3 and Romans 8', 'Mark 16:9-20 and John 8:1-11', 'Matthew 5-7 and Luke 15', 'Acts 2 and Hebrews 11'],
      answer: 1,
      explanation: 'Modern Bibles mark both, and no teaching depends on them.',
    },
    {
      id: 'hb-q4',
      question: 'Why were books like the Gospel of Thomas not included in the Bible?',
      options: [
        'They were lost until recently',
        'They were written too late and did not come from the apostles',
        'Constantine banned them',
        'They were too long',
      ],
      answer: 1,
      explanation: 'They date from the second century or later.',
    },
    {
      id: 'hb-q5',
      question: 'Who, in AD 367, listed exactly the 27 books of the New Testament we have today?',
      options: ['Athanasius', 'Constantine', 'Marcion', 'Papias'],
      answer: 0,
      explanation: 'His list recorded what the churches already used. The core had been recognised since the second century.',
    },
    {
      id: 'hb-q6',
      question: 'How does 2 Peter 3:15-16 speak of Paul’s letters?',
      options: [
        'As private letters of no lasting importance',
        'As writings to be avoided',
        'As a replacement for the Old Testament',
        'Alongside “the rest of the Scriptures”',
      ],
      answer: 3,
      explanation: 'Peter says some distort Paul’s letters “as they do the rest of the Scriptures” (2 Peter 3:15-16). Recognition began within the New Testament itself.',
    },
    {
      id: 'hb-q7',
      question: 'In 1 Timothy 5:18 Paul quotes “The worker is worthy of his wages” as Scripture. Where is that saying found?',
      options: ['Genesis', 'The Psalms', 'Luke’s Gospel, as a saying of Jesus', 'The Gospel of Thomas'],
      answer: 2,
      explanation: 'Luke 10:7. Words of Jesus recorded in a Gospel are already being cited as Scripture.',
    },
    {
      id: 'hb-q8',
      question: 'What is textual criticism?',
      options: [
        'Criticising the Bible’s teaching',
        'Comparing manuscripts to see where copies differ and to work back to the original wording',
        'Translating the Bible into modern English',
        'Deciding which books belong in the Bible',
      ],
      answer: 1,
      explanation: 'With about 5,800 Greek manuscripts of the New Testament to compare, copying slips can be identified.',
    },
    {
      id: 'hb-q9',
      question: 'Which of these was a question the early churches asked when recognising a book?',
      options: [
        'Has the emperor approved it?',
        'Is it written in Latin?',
        'Does it come from an apostle or an apostle’s companion?',
        'Is it longer than the other gospels?',
      ],
      answer: 2,
      explanation: 'They also asked whether it had been used in the churches from the beginning and whether it agreed with the apostles’ teaching.',
    },
    {
      id: 'hb-q10',
      question: 'From what are mainstream modern Bibles translated?',
      options: [
        'The King James Version',
        'The Latin Bible',
        'Earlier English translations',
        'The Hebrew, Aramaic and Greek texts directly',
      ],
      answer: 3,
      explanation: 'They are not translations of translations. Versions differ mostly in style.',
    },
    {
      id: 'hb-q11',
      question: 'Why is the large number of hand-made copies a strength and not a weakness?',
      options: [
        'A text copied freely across many regions cannot be changed everywhere without trace',
        'Hand-made copies never contain mistakes',
        'All the copies were checked by one central authority',
        'The copies are all identical',
      ],
      answer: 0,
      explanation: 'A text controlled by one authority could be altered silently. No person or church ever controlled all the copies.',
    },
    {
      id: 'hb-q12',
      question: 'How does 2 Peter 1:21 describe the way Scripture came about?',
      options: [
        'God dictated every word to passive scribes',
        'Men spoke from God as they were carried along by the Holy Spirit',
        'Wise men wrote down their best thoughts',
        'A council voted on what to write',
      ],
      answer: 1,
      explanation: '“men spoke from God as they were carried along by the Holy Spirit” (2 Peter 1:21). Human authors, divine source.',
    },
    {
      id: 'hb-q13',
      question: 'Why does the King James Bible contain a few verses that modern Bibles put in footnotes?',
      options: [
        'Modern translators removed verses they disliked',
        'The King James translators invented them',
        'Its translators worked from a few late manuscripts; much older ones found since do not have those verses',
        'The verses were banned by a council',
      ],
      answer: 2,
      explanation: 'Nothing is hidden: the verses are in the footnotes, and no teaching rests on any of them.',
    },
    {
      id: 'hb-q14',
      question: 'What is the Muratorian fragment?',
      options: [
        'A piece of the Gospel of Thomas',
        'The oldest copy of John’s Gospel',
        'A letter from Constantine',
        'A list, usually dated to the late second century, that already names most of the New Testament books',
      ],
      answer: 3,
      explanation: 'It shows that most of the New Testament was recognised well over a century before Nicaea.',
    },
    {
      id: 'hb-q15',
      question: 'Someone says, “You are using the Bible to prove the Bible.” What is the non-circular route?',
      options: [
        'Treat the New Testament as historical sources, conclude from them that Jesus rose, then accept his view of Scripture',
        'Insist that the Bible is true because it says so',
        'Avoid quoting the Bible at all',
        'Appeal to the authority of a church council',
      ],
      answer: 0,
      explanation: 'Christians believe the Bible because of Jesus, who said that “the Scripture cannot be broken” (John 10:35).',
    },
    {
      id: 'hb-q16',
      question: 'Around AD 140 Marcion drew up his own list of books. What was it made from?',
      options: [
        'The Gospel of Thomas and the Gospel of Judas',
        'An edited Luke and ten letters of Paul, books already in use among the churches',
        'The Old Testament only',
        'Books he had written himself',
      ],
      answer: 1,
      explanation: 'Even the earliest rival list was built from books the churches already read.',
    },
    {
      id: 'hb-q17',
      question: 'Which books were not in serious doubt from the second century on?',
      options: [
        'Only the book of Revelation',
        'Hebrews, James and 2 Peter',
        'The four Gospels, Acts and the letters of Paul',
        'None of them',
      ],
      answer: 2,
      explanation: 'The books discussed for longer stood at the edge, such as Hebrews, James, 2 Peter, Jude and Revelation.',
    },
    {
      id: 'hb-q18',
      question: 'Constantine ordered fifty copies of the Scriptures from Eusebius. What did his letter say about which books to include?',
      options: [
        'It listed the four Gospels and banned the rest',
        'It added several Gnostic gospels',
        'It removed the letters of Paul',
        'Nothing. It left the contents to Eusebius and named no books',
      ],
      answer: 3,
      explanation: 'The emperor paid for copying. Eusebius had already recorded which books the churches accepted.',
    },
    {
      id: 'hb-q19',
      question: 'What kind of book is the Gospel of Thomas?',
      options: [
        'A collection of sayings, with no account of the crucifixion or the resurrection',
        'A full narrative of Jesus’ life, death and resurrection',
        'A history of the early church',
        'A letter from the apostle Thomas to a church in India',
      ],
      answer: 0,
      explanation: 'Most scholars date it to the second century. Even at its earliest it could not replace the accounts that record the cross and the empty tomb.',
    },
  ],
  furtherReading: [
    'F.F. Bruce — The Canon of Scripture',
    'Michael J. Kruger — Canon Revisited',
    'Peter J. Williams — Can We Trust the Gospels?',
  ],
};
