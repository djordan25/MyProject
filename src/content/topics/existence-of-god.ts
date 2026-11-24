import type { Topic } from '../types';

export const existenceOfGod: Topic = {
  id: 'existence-of-god',
  title: 'The Existence of God',
  icon: '✦',
  summary: 'Three classic lines of evidence: the beginning of the universe, its fine-tuning, and the reality of objective morality.',
  lesson: [
    {
      heading: 'Why start here?',
      body: [
        'Many conversations stall because the other person doubts that God exists at all. Before discussing the Bible or Jesus, it often helps to show that belief in God is reasonable.',
        'No single argument has to carry the whole load. Like strands of a rope, several independent arguments together make a strong cumulative case.',
      ],
      references: ['Romans 1:20', 'Psalm 19:1', 'Acts 17:24-28'],
    },
    {
      heading: 'The Kalam Cosmological Argument',
      body: [
        'Whatever begins to exist needs a cause. Both philosophy (the impossibility of an actually infinite series of past events) and science (Big Bang cosmology, the second law of thermodynamics) indicate the universe began to exist.',
        'The cause of all space, time and matter must itself be spaceless, timeless, immaterial, enormously powerful, and — because it chose to create a universe from a timeless state — personal.',
      ],
      argument: [
        'Whatever begins to exist has a cause.',
        'The universe began to exist.',
        'Therefore, the universe has a cause.',
      ],
      references: ['Genesis 1:1', 'Hebrews 11:3'],
    },
    {
      heading: 'The Fine-Tuning Argument',
      body: [
        'The constants and initial conditions of physics (e.g. the cosmological constant, the strength of gravity, the ratio of electron to proton mass) appear to fall within narrow life-permitting ranges, some of them extraordinarily narrow.',
        'This fine-tuning is due to physical necessity, chance, or design. It is not necessary — the constants appear independent of the laws of nature — and chance is overwhelmingly improbable. Design is the best explanation.',
      ],
      argument: [
        'The fine-tuning of the universe is due to physical necessity, chance, or design.',
        'It is not due to physical necessity or chance.',
        'Therefore, it is due to design.',
      ],
      references: ['Isaiah 45:18', 'Jeremiah 33:25'],
    },
    {
      heading: 'The Moral Argument',
      body: [
        'Most people recognise that some things — torturing children for fun, for example — are really wrong, not just unfashionable. That is a claim about objective moral values: true regardless of anyone’s opinion.',
        'Without God, it is hard to ground such values; morality seems to reduce to evolutionary instinct or social convention. God, whose nature is the standard of goodness, provides a firm foundation.',
        'Key distinction: the argument is not that atheists cannot be moral or know right from wrong. It is about what makes moral claims objectively true (moral ontology), not how we come to know them (moral epistemology).',
      ],
      argument: [
        'If God does not exist, objective moral values and duties do not exist.',
        'Objective moral values and duties do exist.',
        'Therefore, God exists.',
      ],
      references: ['Romans 2:14-15'],
    },
    {
      heading: 'Why is there anything at all?',
      body: [
        'The Kalam argument depends on the universe having a beginning. A second argument does not. Everything we know of exists either because it must, by its own nature, or because something else explains it. If numbers exist, they exist by necessity: nothing made the number seven. A house, by contrast, exists because someone built it.',
        'The universe is not the kind of thing that has to exist. It could have been different, or not been at all. So its existence calls for an explanation outside itself: something that exists by its own nature, beyond space, time and matter. That is what people have always meant by God.',
        'This holds even if the universe had no first moment. A chain of causes stretching back for ever would still leave the question of why there is a chain.',
      ],
      argument: [
        'Everything that exists has an explanation of its existence, either in its own nature or in an external cause.',
        'The universe exists, and does not exist by its own nature.',
        'Therefore the universe has an external cause, beyond space, time and matter.',
      ],
      references: ['Acts 17:24-25', 'Hebrews 11:3'],
    },
    {
      heading: 'The argument from the mind',
      body: [
        'We are not only bodies. We are conscious; we think about things; we reason from evidence to conclusions and expect our reasoning to be valid.',
        'If the universe is at bottom only matter in motion, it is hard to see where any of that comes from. Atoms are not about anything. And if our thinking is only the by-product of a process that rewards survival, we have little reason to trust it on questions far from survival, including the question of whether the universe is only matter in motion.',
        'If the universe comes from a Mind, and we are made in the image of that Mind, then consciousness and reason are what we should expect to find.',
      ],
      references: ['Genesis 1:27', 'John 1:1'],
    },
    {
      heading: 'From a Creator to the God of the Bible',
      body: [
        'Be clear about how far these arguments go. Together they point to a Creator who is beyond the universe, immensely powerful, intelligent and good. They do not tell us that this Creator has spoken, or that he became man.',
        'That is the next step, and it rests on Jesus. Paul took exactly this route in Athens: he began with the God who made the world and gives life to all (Acts 17:24-25), and ended with the man God raised from the dead. “In these last days He has spoken to us by His Son” (Hebrews 1:1-2).',
      ],
      references: ['Acts 17:24-25', 'Hebrews 1:1-2'],
    },
  ],
  objections: [
    {
      id: 'eog-1',
      followUps: [
        {
          reply: 'Then why can’t the universe be the uncaused thing?',
          answer: 'Because the evidence points to the universe having a beginning, and whatever begins to exist needs a cause. An eternal universe was a common atheist view until the evidence for a beginning became hard to resist.',
          followUps: [
            {
              reply: 'The Big Bang is only as far back as our physics reaches. There may have been something before it: an earlier universe, a bounce, a quantum vacuum.',
              answer: 'There may, and cosmologists work on such models. But they move the question back without removing it. In 2003 Arvind Borde, Alan Guth and Alexander Vilenkin proved that any universe which has on average been expanding cannot be extended into an infinite past. Vilenkin wrote in Many Worlds in One (2006) that cosmologists can no longer hide behind the possibility of a past-eternal universe. The paper itself concludes only that some new physics is needed at the past boundary it finds, and others, such as Sean Carroll, reply that the theorem covers only classical spacetime, so a full theory of quantum gravity might change the picture. So I put it modestly: the evidence we have points to a beginning, and an eternal past is at present a possibility, not a finding.',
              followUps: [
                {
                  reply: 'Quantum physics shows that things happen without causes. Particles appear out of nothing in a vacuum, so a universe could too.',
                  answer: 'Those particles do not come from nothing. They arise from the quantum vacuum, which is a physical state with energy, governed by laws. That is something. Whether quantum events are truly uncaused is also disputed among physicists: on some interpretations of quantum mechanics, such as David Bohm’s, they are fully determined. Either way, fluctuations in a field cannot explain where the field and its laws came from.',
                  followUps: [
                    {
                      reply: 'Asking what caused the universe makes no sense. A cause comes before its effect, and there was no time before the Big Bang.',
                      answer: 'That assumes a cause must be earlier in time than its effect. It need not be. A heavy ball resting on a cushion causes the hollow for as long as it rests there, cause and effect together. That example is Kant’s. In the same way the act of creating and the first moment of the universe can be simultaneous. All the argument needs is that the universe did not make itself and did not come from nothing.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          reply: 'Saying God is eternal “by definition” is special pleading. You make a rule and then exempt the one thing you want exempted.',
          answer: 'It would be, if the rule were that everything needs a cause. The rule is that whatever begins needs a cause, and it applies to everything alike. Nor is an uncaused starting point something believers invented for God. Bertrand Russell, in his 1948 radio debate with Frederick Copleston, said the universe is just there, and that is all. Everyone stops somewhere, and the question is what is fit to stop at: something that began, or something that never did. Scripture says of God, “from everlasting to everlasting You are God” (Psalm 90:2).',
          followUps: [
            {
              reply: 'Even granting a first cause, nothing makes it a personal God. It could be an impersonal force or law.',
              answer: 'Two things point to a person. First, the cause is beyond space, time and matter, and we know of only two sorts of thing that could be like that: abstract objects such as numbers, and minds. Numbers cause nothing. Second, an impersonal cause that had always been enough to produce the universe would always have produced it, so the universe would be as old as its cause. An effect that begins, from a cause that is timeless, looks like a choice. To get from there to Christianity we need Jesus.',
            },
          ],
        },
      ],
      objection: 'If everything needs a cause, then who caused God?',
      response:
        'The premise isn’t that everything needs a cause — only that whatever begins to exist does. God, by definition, is eternal and never began to exist, so he doesn’t need a cause. In fact, many atheists used to say the same about the universe; the evidence that the universe had a beginning is what makes the question pressing.',
      keyPoints: [
        'Correct the misquote: “whatever begins to exist”, not “everything”.',
        'God is uncaused because he is eternal.',
        'Something must be eternal — the question is whether it is the universe or God.',
      ],
    },
    {
      id: 'eog-2',
      followUps: [
        {
          reply: 'A multiverse is still simpler than God.',
          answer: 'A multiverse is an unimaginably large number of unobservable universes, plus a mechanism to produce them that itself needs explaining. One eternal mind is a far simpler explanation, and it also explains why there is anything at all.',
          followUps: [
            {
              reply: 'God is not simple. A mind able to design a universe would have to be more complex than the universe, and so even less probable.',
              answer: 'That is Richard Dawkins’s argument in The God Delusion, and it treats God as something elaborately constructed, like a brain or a computer on a vast scale. A mind is not complex in that way. Its thoughts may be complex, but a mind is not built out of pieces as a brain or a machine is. And an explanation does not have to be simpler than what it explains before we may accept it. A human being is far more complex than an arrowhead, and we still explain arrowheads by people.',
              followUps: [
                {
                  reply: 'Then you are simply declaring that God needs no explanation. I can say the same of the multiverse.',
                  answer: 'You can say it, but a multiverse is a physical system. It has parts, a mechanism, laws and particular quantities, and any of those could have been different. That is the mark of a thing that needs an explanation outside itself. The claim about God is not made up for the occasion. If there is a being that exists by the necessity of its own nature, it could not have been otherwise or failed to exist. Whether there is such a being is what we are discussing, but it is a different kind of stopping point from a universe-generator.',
                },
              ],
            },
          ],
        },
        {
          reply: 'We should not be surprised that the universe suits us. If it did not, we would not be here to notice.',
          answer: 'It is true that we could only ever observe a universe that permits life. That does not explain why there is one. The philosopher John Leslie gives the example of a firing squad. Fifty trained marksmen fire at you and every one misses. You would not say, “Of course they missed, or I would not be here to wonder about it.” You would be right to be surprised, and right to suspect that it was intended.',
          followUps: [
            {
              reply: 'Perhaps the constants could not have been different. A deeper theory may show that they had to have these values.',
              answer: 'Perhaps. That is the option of physical necessity, and it cannot be ruled out. But no such theory exists, and the best-known candidate for a deeper theory, string theory, points the other way: it appears to allow an enormous range of possible universes with different constants, often put at around 10 to the power of 500. And if one day a theory did force exactly the values that life needs, that would be a striking fact about the theory. The fine-tuning would have moved up a level, not gone away.',
              followUps: [
                {
                  reply: 'You cannot call our universe improbable. We have only one, so nobody knows the odds of any other values.',
                  answer: 'That is the most serious objection, and philosophers of physics do debate it. We cannot rerun the universe, but the judgment is not plucked from the air. Physicists themselves ask what range of values their theories would naturally allow, and compare it with what we observe. The energy of empty space is smaller than the usual theoretical estimate by something like 120 powers of ten, and physicists with no interest in God treat that as a problem needing an explanation. It is why some of them turn to a multiverse. I ask only that design be allowed on the list of explanations.',
                },
              ],
            },
          ],
        },
      ],
      objection: 'Maybe we live in a multiverse, so fine-tuning is just what we’d expect somewhere.',
      response:
        'There is no direct evidence of a multiverse, so it remains speculative, though many physicists think inflation and string theory point to one. Even if one exists, the mechanism that generates universes may itself require fine-tuning. And on some multiverse models we should far more likely be a small, briefly-existing observer (a “Boltzmann brain”) than an entire finely-tuned cosmos like ours.',
      keyPoints: [
        'Multiverse is unobserved and possibly unobservable.',
        'A universe-generator may need its own fine-tuning.',
        'On some models the Boltzmann-brain problem undermines it as an explanation.',
      ],
    },
    {
      id: 'eog-3',
      followUps: [
        {
          reply: 'Morality evolved to help us survive.',
          answer: 'Evolution might explain why we feel that some things are wrong. It cannot make them actually wrong. If our moral sense is only a survival instinct, then cruelty is not evil, merely out of fashion among our species.',
          followUps: [
            {
              reply: 'Morality needs neither God nor evolution. It is about wellbeing: what causes suffering is bad and what helps people flourish is good. That is objective enough.',
              answer: 'I agree that suffering is bad. That is the very thing that needs a foundation. If there is no God, why is human flourishing good, and not merely something humans happen to want? Science can tell us what makes people flourish. It cannot tell me that I ought to care, least of all when someone else’s flourishing costs me my own. The step from “this causes suffering” to “you must not do it” is the step that has to be explained.',
              followUps: [
                {
                  reply: 'Moral truths could simply exist, as the truths of mathematics do. No God is needed.',
                  answer: 'Some atheist philosophers hold that, Erik Wielenberg among them, and it is a serious view. I see two difficulties. Even if “justice is good” exists as an abstract truth, an abstraction cannot oblige anyone. Duties are owed to persons. And it would be a remarkable coincidence if a blind process aimed only at survival had given us moral beliefs that happen to match that abstract realm. A good and personal God who made us to know him accounts for the values, the duties and our knowledge of them (Romans 2:14-15).',
                },
              ],
            },
          ],
        },
        {
          reply: 'Is a thing good because God commands it, or does God command it because it is good? Either way God adds nothing.',
          answer: 'That is the dilemma from Plato’s Euthyphro, and it leaves out a third answer. God commands what is good because he is good. Goodness is not a rule standing over God, and it is not whatever he happens to decide. It is his own character: loving, just and faithful. His commands express what he is.',
          followUps: [
            {
              reply: 'That only moves the problem. Is God’s nature good because it meets some standard, or would any nature he happened to have be called good?',
              answer: 'Every account of morality ends in something that is good in itself and not because of anything further. For the atheist who believes in objective values it is an abstract Good, and for the Christian it is God. So the question is which stopping point makes better sense. God is not an arbitrary one. If he exists by necessity, his character could not have been different, so there is no possible world in which cruelty is good. Scripture puts it simply: “I, the LORD, do not change” (Malachi 3:6).',
              followUps: [
                {
                  reply: 'Your own Bible has God commanding the killing of whole peoples. So much for a perfectly good standard.',
                  answer: 'Those passages are hard, and they deserve a proper answer of their own. But notice what the objection assumes: that there is a real standard of goodness, binding on everyone, by which even those events can be judged. That is the second premise of the moral argument. If there is no God, the conquest of Canaan was not objectively wrong, only different from what we prefer today. So the objection, if it is meant seriously, grants that objective morality exists. What is left is a question about how to read certain texts, and I am glad to take that up.',
                },
              ],
            },
          ],
        },
      ],
      objection: 'I don’t need God to be a good person.',
      response:
        'I agree — you clearly can be a good person without believing in God. My question is different: if there is no God, what makes anything objectively good or evil in the first place? Belief in God isn’t needed to be moral, but God may be needed for morality to be more than opinion.',
      keyPoints: [
        'Affirm their moral character.',
        'Distinguish knowing morality from grounding morality.',
        'Ask what makes “good” objectively good on atheism.',
      ],
    },
    {
      id: 'eog-4',
      followUps: [
        {
          reply: 'Science has explained everything else. It will explain this too.',
          answer: 'Science explains how things inside the universe behave by using the laws of nature. It cannot use those laws to explain why there are laws, or why there is a universe for them to govern. That is not a gap waiting to be filled; it is a different kind of question.',
          followUps: [
            {
              reply: 'Physicists such as Stephen Hawking and Lawrence Krauss say physics can explain how a universe comes from nothing.',
              answer: 'Look at what they mean by nothing. Hawking and Leonard Mlodinow wrote in The Grand Design (2010), “Because there is a law like gravity, the universe can and will create itself from nothing”. A law of gravity is not nothing. Krauss’s “nothing”, in A Universe from Nothing (2012), is a quantum vacuum or the laws of quantum physics, and those are something too. It was a philosopher of physics, David Albert, who made this point most sharply, in his review of Krauss’s book in the New York Times. He was not arguing for God.',
              followUps: [
                {
                  reply: 'Then the laws of physics are brute facts. Explanation has to stop somewhere, and that is where it stops.',
                  answer: 'It does have to stop somewhere. The question is where it is reasonable to stop. Science has advanced by refusing to say “it just is” about anything that could have been otherwise. The laws and constants could have been otherwise, so stopping there is arbitrary. Stopping at a being that exists by its own nature, and could not have been otherwise, is not.',
                  followUps: [
                    {
                      reply: '“God did it” explains nothing. It makes no predictions and cannot be tested.',
                      answer: 'It is not a scientific theory and does not compete with one. It answers a different question: why there is an ordered world for science to study. Nor is it empty. If a rational God made the world, we should expect it to be orderly, open to minds like ours and fit for life, and if there is no God we have no reason to expect any of that. And explaining something by a person’s intention is an ordinary kind of explanation. We use it whenever we ask why the kettle is on.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          reply: 'The founders of science believed in God because everyone did then. As science has advanced, God has had less and less to do.',
          answer: 'That would count if God had been brought in to fill the holes in science. Some believers did argue that way, and they were wrong to. But the arguments I am using start from what science has found, and the findings are modern: the evidence for a beginning of the universe and for the fine-tuning of its constants was found in the twentieth century. The Big Bang theory was first proposed by Georges Lemaître, a physicist who was also a Catholic priest. Fred Hoyle, who gave it its name, disliked the idea of a beginning and defended an eternal steady-state universe for years.',
        },
      ],
      objection: 'Science can explain the universe without God.',
      response:
        'Science explains how processes within the universe work, and that’s wonderful. But the question here is why there is a universe at all, and why its laws are suited to life. Science describes the laws; it can’t explain why there are laws or why anything exists. Many of the founders of modern science believed in God, and several historians argue that this belief led them to expect a rational, orderly creation.',
      keyPoints: [
        'Science answers “how”, not ultimate “why”.',
        'Laws of nature describe; they do not create.',
        'Christian theism helped motivate early science, several historians argue.',
      ],
    },
    {
      id: 'eog-5',
      objection: 'If the universe needs a designer, then who designed the designer?',
      response:
        'To recognise that something is the best explanation, you do not need an explanation of the explanation. If archaeologists dig up arrowheads, they rightly conclude people made them, even if they know nothing of who those people were. And the question assumes God is one more thing inside the chain of things that need causes. The argument is that the chain has to end in something that does not need one: a being that exists by its own nature.',
      keyPoints: ['An explanation can be good without being explained.', 'God is not one more caused thing.', 'The chain must end in something uncaused.'],
      followUps: [
        {
          reply: 'Then the universe itself could be the thing that needs no cause.',
          answer: 'It could, if it showed any sign of having to exist. It does not. It began, it is running down, and it could have had different laws. Those are the marks of something that depends on something else.',
          followUps: [
            {
              reply: 'Why must it have a reason at all? The universe may be a brute fact, with no explanation.',
              answer: 'You can say that, but count the cost. We accept it of nothing else. If you found a glowing ball in a wood you would assume there was some explanation of how it got there, and making the ball as large as the universe would not change that. To exempt the universe alone, at the moment the explanation begins to point beyond it, is the special pleading believers are usually accused of.',
              followUps: [
                {
                  reply: 'Each state of the universe is explained by the state before it. Once every part is explained, nothing is left over to explain.',
                  answer: 'Leibniz answered that with a picture. Imagine a geometry book that was copied from an earlier copy, and that one from an earlier one, back for ever. Each copy is explained by the one before. We still have not explained why there are any such books, or why they contain geometry and not something else. Explaining each member by another member does not explain why the series exists.',
                  followUps: [
                    {
                      reply: 'If God exists by necessity and explains the universe, then the universe is necessary too, and nothing could have been otherwise.',
                      answer: 'That would follow if God produced the universe as premises produce a conclusion. A person does not explain things in that way. A free agent can have good reason for a choice without being forced to make it. God exists necessarily. The universe exists because he chose to create it, and he could have chosen otherwise. This is one more reason the first cause has to be personal: a necessary mechanism would yield a necessary universe, and a necessary person need not.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          reply: 'The arrowhead comparison fails. We know that people exist and make arrowheads. We have no experience of gods making universes.',
          answer: 'That is David Hume’s objection, and it proves too much. We often infer causes of a kind we have never observed. Physicists inferred the neutrino from its effects a quarter of a century before one was detected, and astronomers searching for alien signals would recognise intelligence without ever having met an alien. What an inference needs is that the cause explains the evidence better than its rivals. And we have no experience of universes arising by chance or from a multiverse either, so the objection would rule out every explanation alike.',
        },
      ],
    },
    {
      id: 'eog-6',
      objection: 'Evolution explains the appearance of design. No designer is needed.',
      response:
        'Evolution is about how living things change once there is life. The fine-tuning argument is about what had to be in place long before: the strength of gravity, the energy of the early universe, the properties of carbon. Without those, there are no stars, no chemistry and nothing to evolve. Whatever one thinks about evolution, it cannot explain the conditions that make it possible.',
      keyPoints: ['Fine-tuning concerns physics, before any life.', 'Evolution needs a life-permitting universe.', 'A process cannot explain its own preconditions.'],
      followUps: [
        {
          reply: 'Given enough time, anything can happen by chance.',
          answer: 'Chance needs a stage to act on. No amount of time helps if the laws of physics do not allow stars, stable atoms or chemistry in the first place. The question is why the stage is set at all.',
          followUps: [
            {
              reply: 'Life adapts to its conditions. With different constants there would simply be a different kind of life.',
              answer: 'For small differences that may be so, and I grant that we do not know every form life could take. But most changes to the constants do not give a different habitat; they give none. Make the early expansion slightly faster or slower and the universe thins out before galaxies form, or collapses again. Change the nuclear forces and there is no carbon, or nothing but hydrogen. Any life needs some chemistry, a steady source of energy and time. A universe that lasts a second, or contains one element, gives life nothing to adapt to.',
              followUps: [
                {
                  reply: 'The universe hardly looks made for life. Almost all of it is empty and lethal. That is terrible design.',
                  answer: 'The argument is not that the universe is crowded with life. It is that its laws permit life at all, when almost any alternative would not. Nor is the size waste: carbon and oxygen are made inside stars, which takes billions of years, and a universe that has been expanding for billions of years is bound to be billions of light-years across. A universe able to produce one living planet looks much like this one. The smallness of man under the heavens is an old observation: “what is man that You are mindful of him?” (Psalm 8:3-4).',
                },
              ],
            },
          ],
        },
        {
          reply: 'Darwin showed that the appearance of design can come from a blind process. Physics may find a Darwin of its own.',
          answer: 'It may. I cannot rule out future discoveries, and you cannot promise them, so we both have to argue from what is known now. And notice what natural selection requires: things that reproduce, inherit and compete, under stable laws. Any account of universes being “selected” needs the same. The physicist Lee Smolin has proposed that universes reproduce through black holes. But that requires machinery for making universes, with laws of its own, and we are back to asking why that machinery is set up to turn out universes fit for life.',
        },
      ],
    },
    {
      id: 'eog-7',
      objection: 'There is simply no evidence for God.',
      response:
        'May I ask what kind of evidence you would accept? I ask because I think there is a good deal: a universe that began, laws balanced for life, a moral law we all appeal to, minds that can reason, and the life, death and resurrection of Jesus in history. You may not find it convincing, and we can talk about why. But “no evidence” is a different claim from “evidence I am not persuaded by”.',
      keyPoints: ['Ask what would count as evidence.', 'List the evidence: beginning, fine-tuning, morality, mind, Jesus.', 'Unpersuaded is not the same as no evidence.'],
      references: ['Romans 1:20', 'Acts 17:30-31'],
      followUps: [
        {
          reply: 'If God existed, he would make himself obvious.',
          answer: 'He has made himself known in creation (Romans 1:20) and in conscience, and came in person in Jesus. What he has not done is force himself on anyone. A God who wants to be loved, not merely acknowledged, leaves room for a person to turn away.',
          followUps: [
            {
              reply: 'Plenty of people have looked honestly and not found him. A loving God would not leave a sincere seeker in the dark.',
              answer: 'I take that seriously. It is one of the strongest arguments against God, and I would never tell someone that their search was insincere. But I cannot see the whole of anyone’s life, including how it ends, and God may have reasons for his timing that I do not know. And the Christian claim is that God has not stayed hidden. He came in person, at a place and time that can be examined. So the search has somewhere definite to look: “seek, and you will find” (Matthew 7:7) is a promise made by Jesus, about coming to him.',
              followUps: [
                {
                  reply: 'I did seek. I prayed, I read the Bible, and nothing happened.',
                  answer: 'Thank you for telling me. I will not explain it away. I would say only that Christianity does not promise a feeling on request, and believers go through long silences too. The Psalms are full of them: “How long, O LORD? Will You forget me forever?” (Psalm 13:1). Faith does not rest on an experience but on what God did in public, in Jesus. Would you be willing to look at that with me as a question of history, and leave feelings on one side for now?',
                },
              ],
            },
          ],
        },
        {
          reply: 'Extraordinary claims require extraordinary evidence.',
          answer: 'That depends on what the slogan means. If it means we should want good evidence before believing something surprising, I agree. If it means the evidence must itself be extraordinary, nothing could ever be shown, because that evidence would then need extraordinary evidence of its own. Evidence is good when the facts are much better explained by the claim being true than by its being false. And “extraordinary” depends on what you already believe. A universe that came from nothing, by nothing, finely balanced for life, is an extraordinary claim as well.',
          followUps: [
            {
              reply: 'I am not claiming anything. Atheism is only a lack of belief, so the burden of proof is all yours.',
              answer: 'I accept the burden for what I claim, which is why I have given reasons. But if atheism is only an absence of belief, it is not a view that can be true or false. A cat has it. Most atheists I talk to hold something more: that the universe is all there is, that mind came from mindless matter, that there is probably no God. Those are claims and they need reasons. Only “I do not know” carries no burden, and a person who does not know has every reason to look.',
              followUps: [
                {
                  reply: 'You do not believe in Zeus or Thor. I just go one god further than you do.',
                  answer: 'The step from one God to none is not like the step from ten gods to nine. Zeus and Thor are beings inside the universe, with births, bodies and limits, and if you take them away the world carries on much as before. The God these arguments point to is the source of the universe, the reason there is anything at all. And I do not set Zeus aside on a whim. Nothing points to him, while the beginning of the universe, its order and the moral law do point to a Creator. The evidence decides each case.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'eog-q1',
      question: 'What is the first premise of the Kalam cosmological argument?',
      options: [
        'Everything has a cause.',
        'Whatever begins to exist has a cause.',
        'The universe is eternal.',
        'God exists necessarily.',
      ],
      answer: 1,
      explanation: 'The premise is limited to things that begin to exist — which is why “Who made God?” misses the point.',
    },
    {
      id: 'eog-q2',
      question: 'The fine-tuning argument considers which three explanations?',
      options: [
        'Evolution, chance, and design',
        'Physical necessity, chance, and design',
        'Multiverse, simulation, and design',
        'Chance, luck, and coincidence',
      ],
      answer: 1,
      explanation: 'Fine-tuning is due to physical necessity, chance, or design; the argument is that the first two are implausible.',
    },
    {
      id: 'eog-q3',
      question: 'The moral argument claims that…',
      options: [
        'Atheists cannot behave morally.',
        'Only Christians know right from wrong.',
        'Without God there is no foundation for objective moral values.',
        'Morality is determined by culture.',
      ],
      answer: 2,
      explanation: 'It is about the grounding of morality (ontology), not whether unbelievers can know or do good (epistemology).',
    },
    {
      id: 'eog-q4',
      question: 'Which verse is often cited for God being revealed through creation?',
      options: ['John 3:16', 'Romans 1:20', 'Matthew 28:19', 'Ephesians 2:8'],
      answer: 1,
      explanation: '“God’s invisible qualities… have been clearly seen, being understood from His workmanship.” (Romans 1:20)',
    },
    {
      id: 'eog-q5',
      question: 'How does the contingency argument differ from the Kalam argument?',
      options: ['It needs no premises', 'It does not depend on the universe having a beginning', 'It is about morality', 'It is based on the Bible'],
      answer: 1,
      explanation: 'It asks why there is anything at all, whether or not there was a first moment.',
    },
    {
      id: 'eog-q6',
      question: 'How far do the arguments for God’s existence take us by themselves?',
      options: ['To the Trinity', 'To a powerful, intelligent and good Creator', 'To the Bible’s authority', 'Nowhere'],
      answer: 1,
      explanation: 'The step from a Creator to Christianity rests on Jesus.',
    },
    {
      id: 'eog-q7',
      question: 'Why does the Kalam argument conclude that the cause of the universe is timeless, spaceless and immaterial?',
      options: [
        'Because the Bible says so',
        'Because scientists have observed the cause directly',
        'Because it is the cause of all space, time and matter, so it cannot be made of them',
        'Because nothing can be known about it',
      ],
      answer: 2,
      explanation: 'Whatever brought space, time and matter into being must itself be beyond them.',
    },
    {
      id: 'eog-q8',
      question: 'Someone says particles appear from nothing in a quantum vacuum, so a universe could too. What is the flaw?',
      options: [
        'Quantum physics has been disproved',
        'Particles never appear in a vacuum',
        'The vacuum only exists inside black holes',
        'A quantum vacuum is a physical state with energy and laws, so it is not nothing',
      ],
      answer: 3,
      explanation: 'Fluctuations in a field cannot explain where the field and its laws came from.',
    },
    {
      id: 'eog-q9',
      question: 'The Euthyphro dilemma asks whether a thing is good because God commands it, or commanded because it is good. What is the Christian answer?',
      options: [
        'God’s own character is the standard of goodness, and his commands express it',
        'Good is whatever God happens to decide',
        'There is a moral law higher than God, which he obeys',
        'The question cannot be answered',
      ],
      answer: 0,
      explanation: 'Goodness is neither a rule over God nor an arbitrary decision. It is what he unchangingly is (Malachi 3:6).',
    },
    {
      id: 'eog-q10',
      question: 'Someone says, “Evolution explains why we have a moral sense.” Why does that not answer the moral argument?',
      options: [
        'Evolution has nothing to do with behaviour',
        'It may explain why we feel some things are wrong, but it cannot make them actually wrong',
        'Animals have no instincts',
        'The moral argument is about how old the earth is',
      ],
      answer: 1,
      explanation: 'The argument concerns what makes moral claims objectively true, not how we came to have moral feelings.',
    },
    {
      id: 'eog-q11',
      question: '“If the universe were not fit for life, we would not be here to notice.” What does the firing-squad example show about this reply?',
      options: [
        'That firing squads never miss',
        'That observers cannot know anything',
        'That being alive to notice does not explain why every shot missed; the survival still calls for an explanation',
        'That the universe is hostile to life',
      ],
      answer: 2,
      explanation: 'We could only observe a life-permitting universe, but that does not explain why there is one.',
    },
    {
      id: 'eog-q12',
      question: 'Why can evolution not account for the fine-tuning of the universe?',
      options: [
        'Fine-tuning concerns the physical conditions that had to be in place before there was any life to evolve',
        'Evolution has been abandoned by biologists',
        'Fine-tuning is about the design of animals’ eyes',
        'Evolution works too slowly',
      ],
      answer: 0,
      explanation: 'Without the right constants there are no stars, no chemistry and nothing to evolve. A process cannot explain its own preconditions.',
    },
    {
      id: 'eog-q13',
      question: 'When Paul spoke in Athens, where did he begin and where did he end?',
      options: [
        'He began with the law of Moses and ended with the temple',
        'He began with Greek philosophy and ended with ethics',
        'He began with his own conversion and ended with baptism',
        'He began with the God who made the world and ended with the man God raised from the dead',
      ],
      answer: 3,
      explanation: 'Acts 17:24-25 and Acts 17:30-31. The arguments for a Creator lead on to Jesus.',
    },
    {
      id: 'eog-q14',
      question: 'What does the argument from the mind say about trusting our reasoning?',
      options: [
        'Reasoning is always unreliable',
        'If our thinking is only a by-product of a process that rewards survival, we have little reason to trust it on questions far from survival',
        'Only believers are able to reason',
        'Animals reason as well as people do',
      ],
      answer: 1,
      explanation: 'If the universe comes from a Mind and we are made in its image (Genesis 1:27), reason is what we should expect.',
    },
    {
      id: 'eog-q15',
      question: '“You don’t believe in Zeus. I just go one god further.” Why does the comparison fail?',
      options: [
        'Because Zeus was a real person',
        'Because Christians do believe in Zeus',
        'Because Zeus is a being inside the universe, while God is the source of the universe itself, and the evidence for each is weighed separately',
        'Because the Greeks had no arguments',
      ],
      answer: 2,
      explanation: 'The arguments from the beginning, order and moral law point to a Creator. Nothing comparable points to Zeus.',
    },
    {
      id: 'eog-q16',
      question: 'Who first proposed what became known as the Big Bang theory?',
      options: [
        'Georges Lemaître, a physicist and Catholic priest',
        'Fred Hoyle, who defended it all his life',
        'Charles Darwin',
        'Isaac Newton',
      ],
      answer: 0,
      explanation: 'Hoyle gave the theory its name but disliked the idea of a beginning and defended a steady-state universe.',
    },
    {
      id: 'eog-q17',
      question: 'Each state of the universe is explained by the one before. Why does that not answer the question of why there is a universe?',
      options: [
        'Because earlier states cannot cause later ones',
        'Because explaining each member of a series by another member does not explain why the series exists at all',
        'Because the universe has no states',
        'Because physics cannot describe the past',
      ],
      answer: 1,
      explanation: 'Leibniz’s picture: a book copied from an earlier copy for ever still leaves unexplained why there are any such books.',
    },
    {
      id: 'eog-q18',
      question: 'Why does the Kalam argument point to a personal cause and not an impersonal force?',
      options: [
        'Because forces do not exist',
        'Because the Bible uses personal language',
        'Because people prefer a personal God',
        'Because a timeless cause producing an effect that begins looks like a choice, and only minds and abstract objects could be beyond space and time',
      ],
      answer: 3,
      explanation: 'An impersonal cause that was always sufficient would always have produced its effect. Abstract objects such as numbers cause nothing.',
    },
    {
      id: 'eog-q19',
      question: 'An atheist says, “Atheism is just a lack of belief, so I have nothing to defend.” What is a fair reply?',
      options: [
        'Atheists are not allowed to ask for evidence',
        'The Christian has no burden of proof either',
        'A mere absence of belief cannot be true or false, but “there is probably no God” is a claim and needs reasons like any other',
        'Lack of belief is impossible',
      ],
      answer: 2,
      explanation: 'The Christian should accept the burden for what he claims. Only “I do not know” carries none.',
    },
  ],
  furtherReading: [
    'William Lane Craig — Reasonable Faith',
    'C.S. Lewis — Mere Christianity (Book 1)',
    'Norman Geisler & Frank Turek — I Don’t Have Enough Faith to Be an Atheist',
  ],
};
