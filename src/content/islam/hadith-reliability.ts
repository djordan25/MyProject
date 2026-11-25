import type { Topic } from '../types';

export const hadithReliability: Topic = {
  id: 'islam-hadith-reliability',
  title: 'Can the Hadith Be Trusted?',
  icon: '⛓',
  summary: 'Islam depends on the hadith, yet the authoritative collections were compiled two centuries after Muhammad. What that means, and how to use it without undermining your own argument.',
  lesson: [
    {
      heading: 'Why the hadith matter so much',
      keyLine: 'So the reliability of the hadith is not a side issue.',
      body: [
        'The Quran rarely explains itself. Its context, the details of the five daily prayers, the story of how the Quran was collected, and almost everything known about Muhammad’s life come from the hadith. The Quran commands obedience to the Messenger (Quran 3:32) and calls him “an excellent pattern” (Quran 33:21) — and his example is known through the hadith.',
        'So the reliability of the hadith is not a side issue. Without them, Islam as practised by nearly all Muslims cannot function.',
      ],
      references: ['Quran 3:32', 'Quran 33:21'],
    },
    {
      heading: 'Two hundred years later',
      keyLine: 'Their collections were compiled roughly 200 to 240 years after Muhammad’s death.',
      body: [
        'Muhammad died in AD 632. Al-Bukhari, compiler of Sahih al-Bukhari, died in AD 870; Muslim ibn al-Hajjaj died in AD 875. Their collections were compiled roughly 200 to 240 years after Muhammad’s death. Earlier collections existed, such as Malik’s Muwatta (before 796) and the eleven-volume Musannaf of Abd al-Razzaq (before 826), but the authoritative Sahih collections come from this later period.',
        'Each hadith comes with a chain of narrators (isnad): “Narrated A: B told me that C said that he heard D…” — usually several links of people passing a report on across generations. Muslims rightly object to “telephone game” transmission of the Bible; here the comparison actually applies.',
        'For contrast, Paul’s letters and, on the usual dating, the Gospels were written within the lifetime of eyewitnesses — Paul could point to over 500 witnesses “most of whom are still living” (1 Corinthians 15:6; see also Luke 1:1-4).',
      ],
      references: ['1 Corinthians 15:6', 'Luke 1:1-4'],
    },
    {
      heading: '“Do not write anything from me”',
      keyLine: 'So, on this report, the earliest Muslims were told not to write down his words, though other reports have him allow it.',
      body: [
        'Muhammad said: “Do not take down anything from me, and he who took down anything from me except the Qur’an, he should efface that” (Sahih Muslim 3004).',
        'So, on this report, the earliest Muslims were told not to write down his words, though other reports have him allow it. Some companions did keep notes — Abu Huraira said Abdullah bin Amr “used to write them” (Sahih al-Bukhari 113) — but most hadith were passed on by word of mouth, with private notes as aids, until writing on a large scale began about a century after Muhammad.',
      ],
      references: ['Sahih Muslim 3004', 'Sahih al-Bukhari 113'],
    },
    {
      heading: 'Fabrication was a known problem',
      keyLine: 'Islamic scholars openly acknowledge that fabricated hadith were produced in large numbers for political, sectarian and personal reasons.',
      body: [
        'Muhammad repeatedly warned: “Whoever tells a lie against me intentionally, then (surely) let him occupy his seat in Hell-fire” (Sahih al-Bukhari 108; see also 107 and 110). Az-Zubair said this warning was why he narrated so few hadith (Sahih al-Bukhari 107), and Anas said the same (Sahih al-Bukhari 108). The warning only makes sense if false reports were a real danger.',
        'Muslim tradition itself reports that al-Bukhari chose his Sahih from a pool of some 600,000 narrations. That figure counts each chain as a separate narration, and he did not claim that everything he left out was false. Islamic scholars openly acknowledge that fabricated hadith were produced in large numbers for political, sectarian and personal reasons.',
        'Different Muslim groups accept different hadith: Shia Muslims reject much of Bukhari and Muslim and have their own collections, while the small modern “Quran-only” movement rejects hadith altogether. No single body of reports is accepted by all Muslims.',
      ],
      references: ['Sahih al-Bukhari 107', 'Sahih al-Bukhari 108', 'Sahih al-Bukhari 110'],
    },
    {
      heading: 'The hadith dilemma',
      keyLine: 'Either way, Islam’s claim to a perfectly preserved and verified revelation is undermined.',
      body: [
        'Either the Sahih hadith are reliable, or they are not.',
        'If they are reliable, then Muslims must accept what they report: the Quran’s fragile collection and burned variants (Sahih al-Bukhari 4986, 4987), verses that were lost (Sahih Muslim 1452), Muhammad being under a spell (Sahih al-Bukhari 5763), and his description of his own death (Sahih al-Bukhari 4428).',
        'If they are not reliable, then Islam loses the source of its prayers, its law, its account of the Quran’s preservation, and nearly everything it knows about Muhammad. The claim that the Quran was perfectly preserved itself rests on reports transmitted the same way.',
      ],
      argument: [
        'Islamic practice and the history of the Quran depend on the Sahih hadith.',
        'If the Sahih hadith are reliable, they report lost verses, burned variants, and serious problems in Muhammad’s life.',
        'If they are unreliable, Islam loses its knowledge of Muhammad, its law and the Quran’s history.',
        'Either way, Islam’s claim to a perfectly preserved and verified revelation is undermined.',
      ],
      references: ['Sahih al-Bukhari 4986', 'Sahih al-Bukhari 4987', 'Sahih Muslim 1452', 'Sahih al-Bukhari 5763', 'Sahih al-Bukhari 4428'],
    },
    {
      heading: 'How to use this, and how not to',
      keyLine: 'In most conversations, lead with the internal critique.',
      body: [
        'Christians answer Islam in two ways. The internal critique takes Islam’s sources at face value: “Your own most authentic books say this.” The historical critique asks whether those sources are reliable at all. Both are legitimate, but they pull in opposite directions, so don’t mix them carelessly.',
        'If you tell a Muslim the hadith are unreliable and then quote Sahih al-Bukhari to prove that verses were lost, you hand them an easy exit: “You said yourself the hadith can’t be trusted.”',
        'In most conversations, lead with the internal critique. Sunni Muslims accept Sahih al-Bukhari and Sahih Muslim as authentic, so hold them to what those books say.',
        'Keep the material in this lesson for two situations. First, when a Muslim claims that Islam’s sources are historically certain while the Bible’s are not: ask for one standard applied to both. Second, when a Muslim dismisses a Sahih hadith as “weak” to escape a problem: ask what is left of Islam’s history, law and prayer without Bukhari and Muslim.',
      ],
    },
  ],
  objections: [
    {
      id: 'hr-1',
      followUps: [
        { reply: 'Christians have nothing like the isnad.', answer: 'Christians have something better than chains of names recorded two centuries later: documents written within the lifetime of the eyewitnesses (Luke 1:1-4), while many of those witnesses could still be questioned (1 Corinthians 15:6).',
          followUps: [
            {
              reply: 'Luke was not an eyewitness and does not name who told him. By the standards of hadith science that is a broken chain. We would grade it weak.',
              answer: 'Luke says his material was handed down by “the initial eyewitnesses and servants of the word” and that he investigated everything carefully (Luke 1:1-4). The first-person passages of Acts place him with Paul, and with James in Jerusalem (Acts 21:17-18). John’s Gospel claims direct testimony (John 19:35; 21:24). A historian asks how close a source stands to the events. An account written within one lifetime, while witnesses could contradict it, stands closer than a list of six names written down two hundred years later.',
              followUps: [
                {
                  reply: 'But our scholars examined the character and memory of every narrator in every chain. No other civilisation has done anything like it.',
                  answer: 'It is a remarkable body of work, and I respect it. But the critics graded a narrator mainly by comparing his reports with those of his fellow students, often long after he was dead, and they frequently disagreed with one another. The method can test whether a chain hangs together. It cannot test whether the first link told the truth, and a careful forger supplies good names. Shia scholars use the same kind of method, trust different narrators, and arrive at a different body of hadith. The method depends on whom you already trust.',
                  followUps: [
                    {
                      reply: 'The essentials do not depend on single chains. They are mutawatir, passed on by so many people in every generation that agreement on a lie is impossible.',
                      answer: 'Mass transmission is strong evidence, and I grant it for things like the fact of the five daily prayers. But Muslim scholars themselves class only a small number of hadith as mutawatir. Ibn al-Salah, whose handbook on hadith became the standard one, wrote that examples are hard to find, and the fullest later list, by al-Kattani, has about three hundred. The great majority, including most of the legal detail and most of the Prophet’s biography, are reports from one or a few narrators. So the appeal to mass transmission protects very little of what is in Bukhari and Muslim.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          reply: 'Western academics no longer accept the old scepticism. Harald Motzki showed that hadith can be traced back to the first Islamic century.',
          answer: 'Motzki did argue against the most sceptical scholars, and he should be heard. What he argued is that some reports can be traced to teachers active late in the first Islamic century. That is earlier than the sceptics allowed. It still leaves a generation between those teachers and Muhammad, though Motzki held that some reports can be shown to go back further, and it covers particular reports, not the collections as a whole. It does not turn Sahih al-Bukhari into eyewitness testimony.',
        },
      ],
      objection: 'The isnad system is the most rigorous method of verification ever devised.',
      response:
        'Checking chains of narrators is a serious effort, and Muslim scholars deserve credit for it. But a chain only shows who claimed to pass a report on, not that the report is true — and a fabricator can invent a chain as easily as a saying. Muhammad himself warned about people lying in his name (Sahih al-Bukhari 107), and he told people not to write his words down (Sahih Muslim 3004). About a century of largely oral transmission before writing on a large scale, and two centuries before the Sahih collections, is a long time for any method to bridge.',
      keyPoints: ['Acknowledge the effort.', 'Chains can be fabricated too.', 'A century largely oral, two before the Sahih collections.'],
      references: ['Sahih al-Bukhari 107', 'Sahih Muslim 3004'],
    },
    {
      id: 'hr-2',
      followUps: [
        { reply: 'Then choose: are the hadith reliable or not?', answer: 'That is your choice to make, because they are your sources. If they are reliable, Islam must accept what they say about how the Quran was collected (Sahih al-Bukhari 4987). If they are not, Islam has lost its record of that history. I only ask you to follow one answer consistently.',
          followUps: [
            {
              reply: 'No, tell me what you believe. If you think the hadith are unreliable, you have no right to quote them at all.',
              answer: 'My own view is that they are a mixed source: written down late, but containing early material. Historians have a rule for sources like that. A report that embarrasses the people who preserved it is more likely to be true, because nobody had a reason to invent it. No Muslim would make up a story of verses lost from the Quran (Sahih Muslim 1452) or of a prophet under a spell (Sahih al-Bukhari 5763). So the reports I quote are the ones that have the best claim to be genuine, even for a sceptic.',
              followUps: [
                {
                  reply: 'Those reports were planted by hypocrites and enemies of Islam to discredit the Prophet.',
                  answer: 'Then they fooled al-Bukhari and Muslim, whose whole work was to keep such reports out, and the scholars who have endorsed both books for a thousand years. The bewitching is in both collections (Sahih al-Bukhari 5763; Sahih Muslim 2189). If forgers could get that past the two most careful compilers in Islam, no hadith in those books is safe. That is the second horn of the dilemma.',
                  followUps: [
                    {
                      reply: 'Then I will stand on the Quran alone. It is enough, and it does not depend on al-Bukhari.',
                      answer: 'The Quran tells you to obey the Messenger and to take what he gives you (Quran 4:59; 59:7), but it does not record his rulings. It commands prayer without saying how many times a day or in what form. And the account of how the Quran itself was gathered after his death and standardised under Uthman comes from the hadith (Sahih al-Bukhari 4986, 4987). Without them you do not know how the book reached you.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          reply: 'You lift hadith out of context. Our scholars wrote volumes explaining these reports, and you have not read them.',
          answer: 'That is a fair caution, so let us read the whole report together and see whether the context changes it. I give you the number so you can check. Take Aisha’s report that a verse about five sucklings was still being recited as part of the Quran when Muhammad died (Sahih Muslim 1452). The scholars explain it by saying its recitation was abrogated shortly before he died, so that some had not yet heard. That is an explanation of why the verse is missing. It is not a denial that it is missing.',
          followUps: [
            {
              reply: 'Abrogation is taught by the Quran itself (Quran 2:106). An abrogated verse is not a lost verse.',
              answer: 'Quran 2:106 says Allah replaces what he abrogates with something better or similar. But Aisha says this verse was still being recited when the Prophet died. After his death no revelation could come to abrogate anything. So either it was abrogated by someone other than Allah, or it dropped out. I am only following what Aisha says in Sahih Muslim.',
            },
          ],
        },
      ],
      objection: 'You use the hadith when it suits you, but say they are unreliable. That’s inconsistent.',
      response:
        'Good question. I’m using them because you accept them as authentic — it’s an internal critique. I’m asking you to be consistent: if Bukhari is reliable, then its reports about lost verses and burned copies are reliable too. If it isn’t, then where does Islam get its knowledge of Muhammad and the Quran’s history? That’s the dilemma.',
      keyPoints: ['Internal critique: their accepted sources.', 'Consistency is the point.', 'Either horn causes problems.'],
      references: ['Sahih al-Bukhari 4987', 'Sahih Muslim 1452'],
    },
    {
      id: 'hr-3',
      followUps: [
        { reply: 'Your Gospels are anonymous. At least the hadith name their narrators.', answer: 'A chain of names can be invented as easily as a saying, which is why Muslim scholars built a whole discipline to sift out forgeries. No surviving copy of the Gospels that has a title names anyone but Matthew, Mark, Luke or John. And Luke tells us how he worked: from those who were eyewitnesses from the beginning (Luke 1:1-4).',
          followUps: [
            {
              reply: 'The titles were added later. Scholars like Bart Ehrman say the Gospels were written thirty-five to sixty-five years after Jesus by unknown Greek-speaking Christians.',
              answer: 'Take Ehrman’s dates: Mark about AD 70, John about AD 95. That is still within the lifetime of people who knew Jesus, against two centuries for al-Bukhari. The names are also not what a forger would choose. Mark and Luke were not apostles, and no copy and almost no early writer gives any Gospel a different author. Papias, a bishop writing early in the second century, already reports that Mark wrote down Peter’s teaching. The historian Eusebius quotes him.',
              followUps: [
                {
                  reply: 'Your oldest complete New Testament manuscripts are from the fourth century, three hundred years after Jesus. That gap is bigger than ours.',
                  answer: 'Those are two different gaps. The hadith problem is the gap between the events and the first writing of the collections we rely on, about two hundred years. The Gospels were written within decades. Copies are a separate question, and there the evidence is early: a fragment of John, known as P52, is usually dated to the second century, and substantial papyri of the Gospels survive from the early third century. The fourth-century books are only the oldest complete Bibles.',
                  followUps: [
                    {
                      reply: 'Decades are still enough time for a story to grow. Forty years of preaching can turn a prophet into a god.',
                      answer: 'Then look at the earliest layer we have. Paul wrote 1 Corinthians about AD 55 and quotes a summary he had himself been taught: that Christ died for our sins, was buried, was raised on the third day and appeared to Cephas and the Twelve (1 Corinthians 15:3-5). He had met Cephas and James in Jerusalem a few years after the crucifixion (Galatians 1:18-19). The death and resurrection of Jesus are in the oldest material, not the latest. There was no stage at which the story lacked them.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          reply: 'The Arabs were an oral people with extraordinary memories. They could carry a report word for word across generations.',
          answer: 'Trained memory is real, and it counts just as much for the first-century Jewish disciples, who learned their teacher’s words by heart. But the hadith themselves show memory failing. Muhammad said a man’s recitation had reminded him of verses “which I was caused to forget” (Sahih al-Bukhari 5038). And if memory had been enough, there would have been no flood of false reports for the scholars to sift, and no need for a science of hadith at all.',
        },
      ],
      objection: 'The New Testament also came from oral tradition before it was written down.',
      response:
        'Yes, but the gap is decades, not centuries, and the writers were eyewitnesses or their close associates who could be checked by living witnesses (Luke 1:1-4; 1 Corinthians 15:6). Paul’s letters were written within about 20-30 years of Jesus’ death. Bukhari’s collection came about two centuries after Muhammad.',
      keyPoints: ['Decades versus centuries.', 'Eyewitnesses still alive.', 'Paul within 20-30 years.'],
      references: ['Luke 1:1-4', '1 Corinthians 15:6', '2 Peter 1:16'],
    },
    {
      id: 'hr-4',
      followUps: [
        { reply: 'Scholars have criticised some hadith even in Bukhari.', answer: 'A small number, on technical grounds, and other scholars answered them. The reports of how the Quran was collected are accepted across Sunni scholarship (Sahih al-Bukhari 4986, 4987). Set those aside and you lose the standard account of how the Quran became a book.',
          followUps: [
            {
              reply: 'A sound chain is not the only test. Scholars also examine the content. A report that contradicts the Quran or sound reason is rejected, however good its chain.',
              answer: 'That principle exists, but look at what it does. It makes your present judgment the test of what Muhammad said, when the hadith were supposed to tell you what he said. And who decides what contradicts the Quran? The classical Sunni scholars knew the Quran by heart, and they accepted the report of the spell (Sahih al-Bukhari 5763) and of Aisha’s age at marriage (Sahih al-Bukhari 5134). They saw no contradiction. The Mutazilites did reject the spell report, but Sunni scholarship as a whole did not follow them, and the objection to Aisha’s age arrived only with modern discomfort, not with new evidence.',
              followUps: [
                {
                  reply: 'Not only modern Muslims. Some scholars in every age have questioned particular reports in the Sahih collections.',
                  answer: 'Some have, and they were always a minority. Count the cost of joining them. The reports you want to drop have the same grade of chain as the reports that teach you the prayer, such as “Pray as you have seen me praying” (Sahih al-Bukhari 631). If a sound chain is not enough for the one, it is not enough for the other. You are left choosing by preference, and a religion chosen by preference is no longer received from a prophet.',
                },
              ],
            },
          ],
        },
        {
          reply: 'Grading hadith is a science for qualified scholars. A Christian has no standing to tell Muslims which reports to accept.',
          answer: 'I agree, and I am not grading anything. I am quoting the grade your scholars gave. Al-Bukhari and Muslim judged these reports sound, and Sunni scholarship has stood by that judgment for a thousand years. When you call one of them weak because of what it says, you are the one overruling the qualified scholars.',
        },
      ],
      objection: 'That hadith is weak. I don’t accept it.',
      response:
        'It is in Sahih al-Bukhari (or Sahih Muslim), which Sunni scholars have treated for about a thousand years as the most authentic books after the Quran. If a Sahih hadith can be set aside whenever it is uncomfortable, by what standard do we keep the ones that teach how to pray, or the ones that tell us how the Quran was collected (Sahih al-Bukhari 4986, 4987)? I’m only asking for consistency.',
      keyPoints: ['Sahih means authenticated by Islam’s own scholars.', 'Rejecting them selectively is arbitrary.', 'Islam’s practice and history rest on the same books.'],
      references: ['Sahih al-Bukhari 4986', 'Sahih al-Bukhari 4987', 'Sahih al-Bukhari 8'],
    },
  ],
  quiz: [
    {
      id: 'hr-q1',
      question: 'Roughly how long after Muhammad’s death were Sahih al-Bukhari and Sahih Muslim compiled?',
      options: ['About 10 years', 'About 50 years', 'About 200 years', 'About 600 years'],
      answer: 2,
      explanation: 'Muhammad died in 632; Bukhari died in 870 and Muslim in 875.',
    },
    {
      id: 'hr-q2',
      question: 'What did Muhammad say about writing down his words (Sahih Muslim 3004)?',
      options: [
        'Write everything I say',
        'Do not take down anything from me except the Quran',
        'Only Aisha may write',
        'Write in Hebrew',
      ],
      answer: 1,
      explanation: 'Hadith were mainly passed on orally for generations.',
    },
    {
      id: 'hr-q3',
      question: 'Why did Az-Zubair narrate few hadith (Sahih al-Bukhari 107)?',
      options: [
        'He couldn’t remember any',
        'He feared the warning against lying about the Prophet',
        'He was forbidden by Umar',
        'He lived in Syria',
      ],
      answer: 1,
      explanation: 'Fabrication was a real concern from the start.',
    },
    {
      id: 'hr-q4',
      question: 'What is an isnad?',
      options: ['A chapter of the Quran', 'A chain of narrators', 'A prayer position', 'A pilgrimage rite'],
      answer: 1,
      explanation: '“Narrated A: B told me that C said…”.',
    },
    {
      id: 'hr-q5',
      question: 'What does a chain of narrators (isnad) actually establish?',
      options: [
        'That the report is true',
        'That every Muslim group accepts the report',
        'That the report was written down in Muhammad’s lifetime',
        'Who is said to have passed the report on',
      ],
      answer: 3,
      explanation: 'A chain shows who claimed to transmit a saying. It cannot show that the first link told the truth, and a chain can be invented as easily as a saying.',
    },
    {
      id: 'hr-q6',
      question: 'What is an “internal critique” of Islam?',
      options: [
        'Arguing that all Islamic sources are forgeries',
        'Comparing the Quran with modern science',
        'Holding Muslims to what their own accepted sources say',
        'Criticising Islam from the Bible alone',
      ],
      answer: 2,
      explanation: 'Sunni Muslims accept Sahih al-Bukhari and Sahih Muslim as authentic, so you ask them to accept what those books report.',
    },
    {
      id: 'hr-q7',
      question: 'Why is it a mistake to say “the hadith are unreliable” and then quote Sahih al-Bukhari to prove that verses were lost?',
      options: [
        'Because Bukhari never mentions the Quran',
        'Because Christians are forbidden to read the hadith',
        'Because the Muslim can answer that you have just said the hadith cannot be trusted',
        'Because the hadith are older than the Quran',
      ],
      answer: 2,
      explanation: 'The internal critique and the historical critique pull in opposite directions, so do not mix them carelessly.',
    },
    {
      id: 'hr-q8',
      question: 'According to Abu Huraira, which companion “used to write” hadith (Sahih al-Bukhari 113)?',
      options: ['Abdullah bin Amr', 'Az-Zubair', 'Anas bin Malik', 'Zaid bin Thabit'],
      answer: 0,
      explanation: 'Some early notes existed, but most hadith were passed on by word of mouth for generations.',
    },
    {
      id: 'hr-q9',
      question: 'If the Sahih hadith are unreliable, what does Islam lose?',
      options: [
        'Only a few stories about Muhammad’s childhood',
        'The Arabic language of the Quran',
        'Nothing, because the Quran explains everything in detail',
        'The details of prayer and law, the life of Muhammad, and the account of how the Quran was collected',
      ],
      answer: 3,
      explanation: 'The collection of the Quran under Abu Bakr and Uthman is known from hadith (Sahih al-Bukhari 4986, 4987).',
    },
    {
      id: 'hr-q10',
      question: 'A Muslim says of a report in Sahih al-Bukhari, “That hadith is weak.” What is the best reply?',
      options: [
        'Ask by what standard the uncomfortable Sahih reports are dropped while the ones about prayer are kept',
        'Agree, and move on to another subject',
        'Say that every hadith is a forgery',
        'Say that only Shia Muslims call hadith weak',
      ],
      answer: 0,
      explanation: 'Sunni scholarship treats these books as the most authentic after the Quran. Dropping reports because of what they say is choosing by preference.',
    },
    {
      id: 'hr-q11',
      question: 'Which passage says that most of more than five hundred witnesses of the risen Jesus were still alive when Paul wrote?',
      options: ['Luke 1:1-4', 'John 21:24', '2 Peter 1:16', '1 Corinthians 15:6'],
      answer: 3,
      explanation: 'Paul’s readers could still question the witnesses (1 Corinthians 15:6).',
    },
    {
      id: 'hr-q12',
      question: 'How does Luke describe the sources of his Gospel (Luke 1:1-4)?',
      options: [
        'A vision he received in a cave',
        'A long chain of narrators stretching over two centuries',
        'What was handed down by eyewitnesses, which he investigated carefully',
        'An older book he found in the temple',
      ],
      answer: 2,
      explanation: 'He wrote while eyewitnesses were alive, so that the reader might “know the certainty” of what he had been taught (Luke 1:4).',
    },
    {
      id: 'hr-q13',
      question: 'Which commands in the Quran make the hadith necessary for Muslims?',
      options: [
        'The commands to obey the Messenger and follow his pattern',
        'The commands to fast in Ramadan',
        'The commands to read the Torah and the Gospel',
        'The commands to write down every revelation',
      ],
      answer: 0,
      explanation: 'Quran 3:32 and Quran 33:21. His rulings and example are known through the hadith, not from the Quran itself.',
    },
    {
      id: 'hr-q14',
      question: 'A Muslim says the embarrassing hadith were planted by enemies of Islam. Why does that not help?',
      options: [
        'Because no enemy of Islam ever knew Arabic',
        'Because the reports are in the Quran as well',
        'Because al-Bukhari lived before Muhammad',
        'Because if forgeries got past al-Bukhari and Muslim, nothing in their collections is safe',
      ],
      answer: 3,
      explanation: 'The report that Muhammad was bewitched is in both collections (Sahih al-Bukhari 5763; Sahih Muslim 2189).',
    },
    {
      id: 'hr-q15',
      question: 'What does mutawatir mean, and how much of the hadith does it cover?',
      options: [
        'Passed on by so many people that collusion is ruled out; scholars class only a small number of hadith this way',
        'Written down by Muhammad himself; it covers all of Sahih al-Bukhari',
        'Narrated by Aisha alone; it covers about half of the hadith',
        'Rejected by all scholars; it covers the fabricated hadith',
      ],
      answer: 0,
      explanation: 'Most hadith, including most legal detail and biography, come through one or a few narrators.',
    },
    {
      id: 'hr-q16',
      question: 'Why do historians give extra weight to reports that embarrass the community that preserved them?',
      options: [
        'Because embarrassing reports are always the oldest',
        'Because they are always written by enemies',
        'Because nobody had a reason to invent them',
        'Because they have the longest chains of narrators',
      ],
      answer: 2,
      explanation: 'No Muslim would make up a report that part of the Quran was lost (Sahih Muslim 1452), so such reports have a strong claim to be genuine.',
    },
    {
      id: 'hr-q17',
      question: 'A Muslim points out that the oldest complete New Testament manuscripts are from the fourth century. What distinction answers this?',
      options: [
        'The gap between events and first writing is different from the gap between writing and surviving copies',
        'Manuscripts do not matter for any ancient book',
        'The fourth-century manuscripts were written by the apostles',
        'The hadith have no manuscripts at all',
      ],
      answer: 0,
      explanation: 'The Gospels were written within decades, and papyrus copies survive from the second and third centuries. The Sahih collections were compiled about two centuries after Muhammad.',
    },
  ],
};
