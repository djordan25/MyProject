import type { Topic } from '../types';

export const scienceAndFaith: Topic = {
  id: 'science-and-faith',
  title: 'Science, Miracles and Faith',
  icon: '⚛',
  summary: 'Are science and Christianity at war? What science can and cannot tell us, why miracles are not unscientific, and how to talk about Genesis.',
  lesson: [
    {
      heading: 'The myth of a war',
      body: [
        'Many people assume science and Christian faith have always been enemies. Historians of science do not tell it that way. The picture of a long “warfare” was popularised by two nineteenth-century books, and it does not fit the record.',
        'Modern science grew up in a Christian culture, and many of its founders were believers in God: Kepler, Boyle, Newton, Faraday and Maxwell among them. They expected nature to be orderly and understandable because they believed a rational God had made it, and they saw their work as studying his handiwork. “The heavens declare the glory of God” (Psalm 19:1).',
        'The verse “Great are the works of the LORD; they are pondered by all who delight in them” (Psalm 111:2) was carved, in Latin, on the doors of the Cavendish Laboratory in Cambridge, where the electron was discovered.',
      ],
      references: ['Psalm 19:1', 'Psalm 111:2', 'Proverbs 25:2'],
    },
    {
      heading: 'Different questions',
      body: [
        'Science asks how the natural world works, and answers by measuring and testing. It is superb at that. But some questions lie outside what measuring can reach. Why is there a universe at all? Why does it follow laws we can understand? What is a human being for? What is right and wrong?',
        'Ask why the kettle is boiling. One answer is that heat is exciting the water molecules. Another is that someone wants a cup of tea. Both are true, and the second is not made false by the first. In the same way, a scientific account of how something happens does not rule out a purpose behind it.',
      ],
    },
    {
      heading: 'What science takes for granted',
      body: [
        'Science assumes things it cannot prove by experiment: that nature is orderly, that the same laws hold everywhere, and that human minds can reach the truth about it.',
        'Christianity gives a reason to expect all three. The world was made by a rational God, and we were made in his image. If instead our minds are only the by-product of a process that selects for survival, it is hard to say why we should trust them on questions far from survival, such as cosmology, or the theory of evolution itself.',
      ],
      references: ['Genesis 1:1', 'Colossians 1:16-17'],
    },
    {
      heading: 'Are miracles impossible?',
      body: [
        'The laws of nature describe what happens when nothing from outside nature intervenes. They cannot tell us whether anything ever does. If I drop an apple and you catch it, no law of physics has been broken; another agent has acted.',
        'So a miracle is not nature going wrong. It is the Author of nature acting within it. If there is no God, miracles do not happen. If there is, they are possible, and the question becomes one of evidence in each case.',
        'People in the first century were not gullible about this. They knew that virgins do not conceive and that the dead stay dead; that is exactly why the events of Jesus’ life were called signs. John wrote them down “so that you may believe that Jesus is the Christ, the Son of God” (John 20:30-31).',
      ],
      references: ['John 20:30-31', 'Acts 2:22'],
    },
    {
      heading: 'Genesis, evolution and the age of the earth',
      body: [
        'Christians who take the Bible seriously hold different views here. Some believe the earth is young and the days of Genesis were ordinary days. Some believe the earth is old and the days are long ages or a literary framework. Some believe God created through an evolutionary process.',
        'All of them affirm what Scripture is clearest about: God made everything that exists (Genesis 1:1; Hebrews 11:3), human beings are made in his image, and something has gone wrong with us that we cannot fix ourselves.',
        'Know your own view and be able to explain it. But do not let this become the barrier. A sceptic does not have to settle the age of the earth before considering whether Jesus rose from the dead. Keep the conversation on the central claim.',
      ],
      references: ['Genesis 1:1', 'Hebrews 11:3', 'Genesis 1:27'],
    },
    {
      heading: 'Is science the only way to know anything?',
      body: [
        'Some say they will believe only what science can prove. That statement is not itself something science can prove, so it fails its own test.',
        'Most of what matters to us is known in other ways: that our memories are broadly reliable, that cruelty is wrong, that another person loves us, that Caesar crossed the Rubicon. History is known by testimony and evidence, not by repeating the experiment. The case for Jesus is made in the way all history is made.',
      ],
    },
  ],
  objections: [
    {
      id: 'sf-1',
      objection: 'Science has disproved God.',
      response:
        'Which discovery do you have in mind? I ask because science studies nature, and God, if he exists, is the one who made nature. No experiment could show that there is nothing beyond the thing being measured. What science has found is a universe that appears to have had a beginning, looks finely balanced for life and is written in mathematics, which is at least as much at home in a world made by a mind as in one that came from nothing.',
      keyPoints: ['Ask which discovery.', 'Science studies nature; God is its author.', 'A beginning and fine-tuning fit a Creator.'],
      references: ['Psalm 19:1', 'Romans 1:20'],
      followUps: [
        {
          reply: 'God is just a way of filling the gaps in our knowledge.',
          answer: 'That would be a bad argument, and it is not mine. I’m not pointing to what we can’t explain but to what we can: that the universe, as far as we can tell, had a beginning, is orderly and can be understood. The more we learn of that, the more it calls for an explanation outside itself.',
          followUps: [
            {
              reply: 'It is still a gap. “We do not yet know what caused the Big Bang, therefore God” is god-of-the-gaps reasoning.',
              answer: 'A gap argument runs: we do not know, therefore God. Mine runs: here is what the evidence indicates, and here is the kind of cause it requires. Whatever brought space, time and matter into being cannot itself be made of space, time and matter. That follows from the thing being explained, however much more physics we learn. A future theory will describe more of nature. It cannot be the cause of nature without standing outside it.',
              followUps: [
                {
                  reply: 'Thunder, disease and the orbits of the planets were all once put down to God. Natural explanations have won every time. Why bet against that record?',
                  answer: 'That record is of natural causes for events inside nature, and I expect it to continue. Christians helped to build it, because they believed God made an orderly world. The Bible does not set God against ordinary causes. It says that he “makes the grass grow for the livestock” (Psalm 104:14), and nobody took that to mean grass has no natural causes. But the record says nothing about a different kind of question: why there is a nature with laws at all. Explaining every move in a game does not explain why there is a game.',
                },
              ],
            },
          ],
        },
        {
          reply: 'Neuroscience shows that the mind is just the brain and that religious experience is brain activity. There is no soul, and no one there to meet.',
          answer: 'Every experience we have involves brain activity. Seeing a tree does, and trees are real. Finding the brain state that goes with an experience tells us how it is experienced, not whether its object is there. And “the mind is just the brain” goes beyond the data. Neuroscience finds which brain states go with which conscious states. Why any physical process should be accompanied by experience at all is what the philosopher David Chalmers named the hard problem of consciousness, and it has not been solved.',
          followUps: [
            {
              reply: 'Psychology and evolution explain why people believe in God. We see agents everywhere and we want a father. So the belief is an illusion.',
              answer: 'Explaining how a belief arises does not show that it is false. Evolution also inclines us to believe in other minds and in solid objects, and we do not call those illusions. The argument also runs both ways: one could say that people disbelieve because they want no one to answer to. And if God made us to know him, a natural bent towards belief is what we should expect to find. Scripture says he “has also set eternity in the hearts of men” (Ecclesiastes 3:11).',
            },
          ],
        },
      ],
    },
    {
      id: 'sf-2',
      objection: 'Miracles are impossible because they would break the laws of nature.',
      response:
        'The laws describe how nature behaves when left to itself. They can’t tell us whether nature is ever not left to itself. If God exists, the one who wrote the laws can act within what he made, the way an author can do anything in his own story. So the real question is whether God exists and whether there is good evidence that he acted, and for the resurrection there is.',
      keyPoints: ['Laws describe; they do not forbid.', 'A miracle is an act of nature’s Author.', 'It comes down to evidence.'],
      references: ['John 20:30-31'],
      followUps: [
        {
          reply: 'It’s always more likely that the witnesses were wrong than that a miracle happened.',
          answer: 'Only if you already know that miracles almost never happen, which is the thing in question. We should weigh each case. For the resurrection we have multiple early witnesses who gained nothing by it but suffering, and no better explanation of the facts (1 Corinthians 15:3-8).',
          followUps: [
            {
              reply: 'The uniform experience of mankind is that dead men stay dead. Against that, a handful of ancient reports weighs nothing.',
              answer: 'That is David Hume’s argument, and it counts the wrong thing. Nobody claims that dead people rise in the ordinary course of nature. Experience tells us what nature does when left to itself, and Christians agree with it. The claim is that God raised this one man, and the countless dead who stayed dead do not bear on that. Besides, we can only call the experience against miracles uniform if we already know that every report of one is false. C.S. Lewis argued in Miracles that this is arguing in a circle, though Hume’s defenders dispute that reading.',
              followUps: [
                {
                  reply: 'Then you must accept every religion’s miracle stories. Why believe yours and reject the rest?',
                  answer: 'I do not have to accept them all or reject them all. I can weigh each one as I would any report: how early the source is, whether there are several named witnesses, what they gained, and whether there is a simpler explanation. Many miracle stories are late, rest on one source, or serve the teller. The resurrection is reported in a creed that scholars such as James Dunn date to within a few years, naming witnesses who suffered for saying it (1 Corinthians 15:3-8). And a Christian is not obliged to hold that nothing beyond nature has ever happened anywhere else.',
                  followUps: [
                    {
                      reply: 'People in the ancient world saw miracles everywhere. They were credulous, and their reports cannot count for much.',
                      answer: 'They knew how nature ordinarily runs. Joseph “resolved to divorce her quietly” (Matthew 1:19) because he knew where babies come from. Thomas said that unless he touched the wounds, “I will never believe” (John 20:25). When Paul preached the resurrection in Athens, “some began to mock him” (Acts 17:32). Disbelief was the first reaction then, as it is now. These reports come from people who took some convincing.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          reply: 'If God can step in at any moment, science becomes impossible. No experiment could be trusted.',
          answer: 'That would follow only if miracles were frequent and random. The Christian claim is the reverse: God upholds a regular order, and acts in exceptional ways rarely and for a purpose, as signs. A miracle can only be recognised as one against a background of regularity. That is why belief in miracles never hindered the pioneers of science. Boyle, Faraday and Maxwell all believed that Christ rose from the dead, and all expected their experiments to give the same result twice.',
          followUps: [
            {
              reply: 'Then show me one now. Why did miracles stop when cameras arrived?',
              answer: 'Christians do not say they stopped. Reports of healing come from churches all over the world, and each should be weighed as carefully as any other report; the New Testament scholar Craig Keener gathered a great many in his two-volume Miracles (2011). But miracles in the Bible are not constant either. They gather around a few turning points: Moses, Elijah, Jesus and his apostles. And Jesus said that more signs are not what an unwilling person lacks: “they will not be persuaded even if someone rises from the dead” (Luke 16:31). The sign he offered was his own resurrection (Matthew 12:39-40).',
            },
          ],
        },
      ],
    },
    {
      id: 'sf-3',
      objection: 'Evolution explains life, so we don’t need a creator.',
      response:
        'Christians differ on how far evolution explains life, and you don’t need to settle that to see the limits of the argument. Evolution, at most, explains how living things changed once life, a habitable planet and the laws of chemistry were in place. It doesn’t explain where any of those came from, or why there is a universe at all. A process is not a replacement for an author.',
      keyPoints: ['Christians hold a range of views.', 'Evolution presupposes life, laws and a universe.', 'A mechanism does not rule out a maker.'],
      references: ['Genesis 1:1', 'Hebrews 11:3'],
      followUps: [
        {
          reply: 'Then God is not needed for anything science can describe.',
          answer: 'Describing how an engine works does not make the engineer unnecessary. God is not one cause among others inside the system; he is the reason there is a system, with laws that can be described at all (Colossians 1:16-17).',
          followUps: [
            {
              reply: 'The comparison assumes what you need to prove. Engines do not build themselves, but evolution shows that living things do. An unguided process needs no one behind it.',
              answer: 'Science can show that a process needs no further physical cause. It cannot show that the process has no purpose behind it. That is a philosophical addition to the theory, not one of its findings. When biologists call mutations random they mean that mutations do not arise because the organism needs them. They do not mean, and could not show, that nobody intended the outcome. The Bible speaks of God ruling events that are chance from where we stand: “The lot is cast into the lap, but its every decision is from the LORD” (Proverbs 16:33).',
              followUps: [
                {
                  reply: 'A God who creates through millions of years of death, waste and extinction is not the good God you describe.',
                  answer: 'That is a real difficulty, and Christians answer it in different ways. Those who hold to a young earth deny that there was any such history of death before human sin. Those who accept an old earth point out that Scripture ties human death to human sin (Romans 5:12), and speaks of God feeding the lions their prey without embarrassment (Psalm 104:21). I do not think that settles every question. But notice that this is the problem of suffering, not a scientific finding against God. The Christian answer to suffering is in the end the cross, and the promise that creation itself “will be set free from its bondage to decay” (Romans 8:20-21).',
                },
              ],
            },
          ],
        },
        {
          reply: 'Evolution shows that Genesis is false. If the first chapters are wrong, why trust the rest?',
          answer: 'That assumes Genesis 1 must be read as a scientific report of six ordinary days, and that every other reading is a retreat forced on Christians by Darwin. It is not. Augustine, early in the fifth century, argued in The Literal Meaning of Genesis that the days were not ordinary days at all, and he warned Christians against making confident claims about nature that would bring Scripture into ridicule. Christians disagreed about the days long before modern science. What Genesis plainly teaches no discovery has touched: one God made everything, made it good, and made us in his image.',
          followUps: [
            {
              reply: 'Genetics shows there was never a single first couple. No Adam means no fall, and no fall means no need of a saviour.',
              answer: 'Christians are working on that question, and there is more than one answer on the table. Some dispute the genetic argument. Others accept it and point out that it concerns our genes, not our family tree: the biologist S. Joshua Swamidass has argued in The Genealogical Adam and Eve (2019) that one couple living some six thousand years ago could be ancestors of everyone alive by the time of Christ, without contradicting the genetic evidence. But the need for a saviour does not wait on genetics. That “all have sinned” (Romans 3:23) is the Christian doctrine anyone can check, beginning with himself.',
            },
          ],
        },
      ],
    },
    {
      id: 'sf-4',
      objection: 'I only believe what can be proven scientifically.',
      response:
        'Can that sentence be proven scientifically? It can’t, so by its own rule we shouldn’t believe it. And none of us lives that way. You believe that other people have minds, that torturing children is wrong and that the past really happened, none of which a laboratory can show. Science is one excellent way of knowing. It was never the only one.',
      keyPoints: ['The rule fails its own test.', 'We know many things without experiments.', 'History rests on testimony and evidence.'],
      followUps: [
        {
          reply: 'At least science can be tested. Religion is just faith.',
          answer: 'Christian faith is not belief without evidence. It is trust based on evidence, and its central claim can be investigated like any other event in history. Paul staked everything on whether it happened (1 Corinthians 15:14).',
          followUps: [
            {
              reply: 'History is not science. Nobody can rerun the first century, so a claim like the resurrection can never really be tested.',
              answer: 'We cannot rerun it. Nor can we rerun the Big Bang, the extinction of the dinosaurs or last year’s murder. Cosmology, geology and the courts all reason from present evidence to the best explanation of a past event that happened once. History works the same way: how early the sources are, whether they are independent, and whether rival explanations fit the facts. By those tests the crucifixion of Jesus is as secure as anything in ancient history. The question is what best explains what followed it.',
              followUps: [
                {
                  reply: 'Science corrects itself. Religion never changes its mind, whatever the evidence.',
                  answer: 'Christians have changed their minds about a good deal, including how to read the Bible’s language about the sun and the earth. On its central claim Christianity is unusually exposed. Paul wrote that if Christ has not been raised the faith is worthless, and the apostles are “false witnesses about God” (1 Corinthians 15:14-15). That is a plain statement of what would refute it. Few views of the world name their own refutation so openly. May I ask what would change your mind?',
                },
              ],
            },
          ],
        },
        {
          reply: 'I cannot prove that other minds or the past exist, but those beliefs work and everyone shares them. God is not like that.',
          answer: 'Then we agree that it can be reasonable to believe things science cannot prove, and the original rule has gone. The question now is which such beliefs are reasonable. Belief in God is hardly a fringe opinion. Most people in most ages have held it. And it does work, in the sense that it makes sense of things that are otherwise hard to account for: why the universe is orderly, why our reasoning can be trusted, why right and wrong bind us. That case can be disputed, but on its merits, not by a rule that has already been given up.',
          followUps: [
            {
              reply: 'Believing things without scientific proof is how people end up with fairies and horoscopes.',
              answer: 'The cure for believing too much is to weigh the evidence, not to admit only one kind of evidence. Horoscopes can be tested and they fail, and fairies explain nothing. The claim about God is tied to arguments from the existence and order of the universe, and to an event in history that can be examined. If that evidence is bad, reject it. The Christian rule is to “test all things. Hold fast to what is good” (1 Thessalonians 5:21).',
            },
          ],
        },
      ],
    },
    {
      id: 'sf-5',
      objection: 'The church has always held science back. Look at Galileo.',
      response:
        'Galileo’s case was real, and the church leaders of his day were wrong. But it was one dispute, tangled up with politics and personalities, and Galileo himself remained a believer to the end. Against it stand the monasteries and universities where science was nursed for centuries, and the long list of scientists who were Christians. One bad episode does not make a war.',
      keyPoints: ['Admit the church was wrong about Galileo.', 'It was one complex dispute.', 'The wider history is mixed, with much support.'],
      followUps: [
        {
          reply: 'Most scientists today are atheists.',
          answer: 'Many are, and many are not; surveys differ by country and field. But what scientists happen to believe does not decide what is true, any more than the faith of Newton and Maxwell does. The question is whether the arguments hold.',
          followUps: [
            {
              reply: 'The more eminent the scientist, the less likely he is to believe. The people who know most about nature have found no God in it.',
              answer: 'Surveys of elite bodies do show that. In 1998 Edward Larson and Larry Witham reported in Nature that only about seven per cent of the members of the United States National Academy of Sciences who answered them believed in a personal God. But the sociologist Elaine Ecklund, who surveyed scientists at leading American universities, found that for most of those she interviewed it was not science itself that had led them away from religion. The best predictor of a scientist’s faith was the home he or she grew up in (Science vs. Religion, 2010). And skill in physics or biology is not skill in philosophy or history, which is where the question of God is argued. There are believers at the top as well, such as Francis Collins, who led the Human Genome Project.',
            },
          ],
        },
        {
          reply: 'It was not only Galileo. The church burned Giordano Bruno, taught that the earth was flat, and fought Darwin.',
          answer: 'Take them in turn. Burning Bruno in 1600 was a wicked act, but the final list of charges is lost, and what we know of his trial is mostly theology, such as his views on the Trinity and the deity of Christ. His belief in many worlds was also raised, and historians dispute how much it counted. The medieval church did not teach a flat earth: Bede and Thomas Aquinas took a round earth for granted, and the story that churchmen opposed Columbus on that ground owes much to Washington Irving’s biography of 1828. As for Darwin, Christians were divided from the start. His chief American defender, the botanist Asa Gray, was a convinced Christian.',
          followUps: [
            {
              reply: 'The conflict is not a myth from old books. Churches are still fighting evolution in schools today.',
              answer: 'I grant that some Christians reject evolution, and that some have fought over what schools teach. It is a dispute about one theory, which nearly all scientists accept, and about how to read Genesis, and there are Christians on both sides of it. It is not a war between Christianity and science as such. The books that spread the war story claimed far more. John William Draper’s History of the Conflict between Religion and Science (1874) and Andrew Dickson White’s A History of the Warfare of Science with Theology in Christendom (1896) said that the church had resisted science throughout its history. That is the picture historians have given up.',
            },
          ],
        },
        {
          reply: 'If Christianity fostered science, why did it take fifteen centuries to appear? The Greeks and the Islamic world did science without it.',
          answer: 'They did, and so did China, and Christian Europe inherited a great deal from them. I am not claiming that Christianity was enough to produce science, or that only Christians could do it. The claim is narrower. When modern science took shape in Europe in the sixteenth and seventeenth centuries, its pioneers gave theological reasons for what they were doing. Nature has laws because it has a lawgiver, and because God was free to make the world as he chose, we cannot work it out from an armchair and must go and look. Historians such as Peter Harrison have traced connections of this kind in detail, though Harrison has reservations about the second argument.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'sf-q1',
      question: 'What mainly popularised the idea of a long war between science and Christianity?',
      options: ['The Bible', 'Two nineteenth-century books', 'Galileo’s writings', 'Ancient Greek philosophers'],
      answer: 1,
      explanation: 'Historians of science do not accept the “warfare” picture.',
    },
    {
      id: 'sf-q2',
      question: 'What does the boiling-kettle example show?',
      options: [
        'Science is unreliable',
        'A scientific explanation and a purpose can both be true',
        'Tea is good for thinking',
        'Only one explanation can be right',
      ],
      answer: 1,
      explanation: '“How” and “why” are different questions.',
    },
    {
      id: 'sf-q3',
      question: 'What do the laws of nature tell us about miracles?',
      options: [
        'That they are impossible',
        'Nothing about whether God ever acts; they describe nature left to itself',
        'That they happen every day',
        'That they only happened in the past',
      ],
      answer: 1,
      explanation: 'Whether God has acted is a question of evidence.',
    },
    {
      id: 'sf-q4',
      question: 'What is wrong with “I only believe what science can prove”?',
      options: ['Nothing', 'Science cannot prove that statement', 'It is too modest', 'Scientists disagree with it'],
      answer: 1,
      explanation: 'It fails its own test.',
    },
    {
      id: 'sf-q5',
      question: 'On the age of the earth and evolution, Christians who trust the Bible…',
      options: ['All hold one view', 'Hold a range of views while agreeing that God made everything', 'Reject all science', 'Avoid the subject'],
      answer: 1,
      explanation: 'Keep the conversation on the central claims about Jesus.',
    },
    {
      id: 'sf-q6',
      question: 'How does the argument from the universe’s beginning and order differ from a “god of the gaps” argument?',
      options: [
        'It reasons from what we know about the universe, not from what we do not yet know',
        'It depends on science never advancing',
        'It only works for people who already believe',
        'It rejects natural explanations for events inside nature',
      ],
      answer: 0,
      explanation: 'A gap argument says “we do not know, therefore God”. This one says what is known requires a cause beyond space, time and matter.',
    },
    {
      id: 'sf-q7',
      question: 'Which verse was carved in Latin on the doors of the Cavendish Laboratory in Cambridge?',
      options: ['Genesis 1:1', 'John 3:16', 'Psalm 111:2', 'Romans 1:20'],
      answer: 2,
      explanation: '“Great are the works of the LORD; they are pondered by all who delight in them” (Psalm 111:2).',
    },
    {
      id: 'sf-q8',
      question: 'Which of these does science assume but cannot prove by experiment?',
      options: [
        'That water boils when heated',
        'That the planets orbit the sun',
        'That DNA carries genetic information',
        'That nature is orderly and that human minds can reach the truth about it',
      ],
      answer: 3,
      explanation: 'Every experiment takes these for granted. Christianity gives a reason to expect them: a rational God made the world and made us in his image.',
    },
    {
      id: 'sf-q9',
      question: 'Why is it wrong to say that first-century people believed in miracles because they did not know how nature works?',
      options: [
        'They had modern medical knowledge',
        'They knew that virgins do not conceive and the dead stay dead, which is why such events were called signs',
        'They did not believe any miracle reports',
        'They thought every event was a miracle',
      ],
      answer: 1,
      explanation: 'Joseph planned a divorce (Matthew 1:19) and Thomas refused to believe without seeing (John 20:25). Disbelief was the first reaction.',
    },
    {
      id: 'sf-q10',
      question: 'Hume argued that uniform human experience counts against any miracle report. What did C.S. Lewis reply?',
      options: [
        'Hume was not a real philosopher',
        'Experience has no value as evidence',
        'We can only call experience uniform if we already know every miracle report is false, which assumes the conclusion',
        'Miracles happen so often that they are ordinary',
      ],
      answer: 2,
      explanation: 'Experience shows what nature does when left to itself. It cannot tell us whether God has ever acted.',
    },
    {
      id: 'sf-q11',
      question: 'What is a fair summary of the Galileo affair?',
      options: [
        'The church leaders of the day were wrong, but it was one tangled dispute and not proof of a long war',
        'It never happened',
        'Galileo was an atheist attacking the faith',
        'It shows the Bible teaches that the sun moves round the earth',
      ],
      answer: 0,
      explanation: 'Admit the wrong plainly. Galileo remained a believer, and the wider history is mixed, with much Christian support for science.',
    },
    {
      id: 'sf-q12',
      question: 'How do we know that Caesar crossed the Rubicon?',
      options: [
        'By repeating the event in a laboratory',
        'By mathematical proof',
        'We cannot know anything about the past',
        'By testimony and evidence, as with all history',
      ],
      answer: 3,
      explanation: 'History is not known by experiment. The case for Jesus is made in the way all history is made.',
    },
    {
      id: 'sf-q13',
      question: 'Which two authors popularised the picture of a long war between science and Christianity?',
      options: [
        'Isaac Newton and Robert Boyle',
        'John William Draper and Andrew Dickson White',
        'Charles Darwin and Asa Gray',
        'Galileo and Kepler',
      ],
      answer: 1,
      explanation: 'Draper wrote in 1874 and White in 1896. Historians of science have given up their account.',
    },
    {
      id: 'sf-q14',
      question: 'Did the medieval church teach that the earth was flat?',
      options: [
        'Yes, until Columbus proved otherwise',
        'Yes, until Galileo',
        'No. Writers such as Bede and Thomas Aquinas took a round earth for granted',
        'No, because it had no view on anything in nature',
      ],
      answer: 2,
      explanation: 'The flat-earth story was popularised in the nineteenth century, notably by Washington Irving’s biography of Columbus.',
    },
    {
      id: 'sf-q15',
      question: 'Why did John record the signs Jesus performed?',
      options: [
        'To entertain his readers',
        'So that readers may believe that Jesus is the Christ, the Son of God',
        'To show that nature has no laws',
        'To prove that the disciples were powerful',
      ],
      answer: 1,
      explanation: '“But these are written so that you may believe that Jesus is the Christ, the Son of God” (John 20:30-31).',
    },
    {
      id: 'sf-q16',
      question: 'Biologists call mutations “random”. Why does that not show that no one is behind the process?',
      options: [
        'Because mutations never happen',
        'Because biologists secretly believe in design',
        'Because randomness has been disproved',
        'Because it means mutations do not arise to meet the organism’s needs, which says nothing about whether the outcome was intended',
      ],
      answer: 3,
      explanation: 'That a process is purposeless is a philosophical claim added to the science. Compare Proverbs 16:33 on the casting of lots.',
    },
    {
      id: 'sf-q17',
      question: 'Which Christian writer, some fourteen centuries before Darwin, argued that the days of Genesis were not ordinary days?',
      options: ['Augustine', 'Martin Luther', 'C.S. Lewis', 'Galileo'],
      answer: 0,
      explanation: 'In The Literal Meaning of Genesis. Christians differed over the days long before modern science raised the question.',
    },
    {
      id: 'sf-q18',
      question: 'Someone says, “Religion can never be shown to be wrong.” What does 1 Corinthians 15:14-15 show?',
      options: [
        'That Christians should avoid evidence',
        'That faith and facts are unrelated',
        'That Christianity names what would refute it: if Christ was not raised, the faith is worthless',
        'That Paul was unsure whether Jesus rose',
      ],
      answer: 2,
      explanation: 'Paul says that if Christ has not been raised the apostles are “false witnesses about God” (1 Corinthians 15:14-15).',
    },
    {
      id: 'sf-q19',
      question: 'Brain scans show activity during religious experience. Why does that not show the experience is of nothing real?',
      options: [
        'Brain scans are always inaccurate',
        'Every experience involves brain activity, including seeing things that are really there',
        'Religious experience does not involve the brain',
        'Neuroscience has proved that the soul exists',
      ],
      answer: 1,
      explanation: 'Finding the brain state that goes with an experience tells us how it is experienced, not whether its object exists.',
    },
  ],
  furtherReading: [
    'John Lennox — Can Science Explain Everything?',
    'C.S. Lewis — Miracles',
    'Alvin Plantinga — Where the Conflict Really Lies',
    'John Polkinghorne — Quarks, Chaos and Christianity',
  ],
};
