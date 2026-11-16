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
        'The constants and initial conditions of physics (e.g. the cosmological constant, the strength of gravity, the ratio of electron to proton mass) fall within extraordinarily narrow life-permitting ranges.',
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
        'Without God, it is hard to ground such values; morality reduces to evolutionary instinct or social convention. God, whose nature is the standard of goodness, provides a firm foundation.',
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
        'The Kalam argument depends on the universe having a beginning. A second argument does not. Everything we know of exists either because it must, by its own nature, or because something else explains it. A triangle has three sides by its own nature. A house exists because someone built it.',
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
        { reply: 'Then why can’t the universe be the uncaused thing?', answer: 'Because the evidence points to the universe having a beginning, and whatever begins to exist needs a cause. An eternal universe was the standard atheist view until the evidence for a beginning became hard to resist.' },
      ],
      objection: 'If everything needs a cause, then who caused God?',
      response:
        'The premise isn’t that everything needs a cause — only that whatever begins to exist does. God, by definition, is eternal and never began to exist, so he doesn’t need a cause. In fact, the atheist used to say the same about the universe; the evidence that the universe had a beginning is what makes the question pressing.',
      keyPoints: [
        'Correct the misquote: “whatever begins to exist”, not “everything”.',
        'God is uncaused because he is eternal.',
        'Something must be eternal — the question is whether it is the universe or God.',
      ],
    },
    {
      id: 'eog-2',
      followUps: [
        { reply: 'A multiverse is still simpler than God.', answer: 'A multiverse is an unimaginably large number of unobservable universes, plus a mechanism to produce them that itself needs explaining. One eternal mind is a far simpler explanation, and it also explains why there is anything at all.' },
      ],
      objection: 'Maybe we live in a multiverse, so fine-tuning is just what we’d expect somewhere.',
      response:
        'There is no direct evidence of a multiverse, so it is a speculative hypothesis. Even if one exists, the mechanism that generates universes would itself require fine-tuning. And a multiverse predicts we should far more likely be a small, briefly-existing observer (a “Boltzmann brain”) than an entire finely-tuned cosmos like ours.',
      keyPoints: [
        'Multiverse is unobserved and possibly unobservable.',
        'A universe-generator needs its own fine-tuning.',
        'Boltzmann-brain problem undermines it as an explanation.',
      ],
    },
    {
      id: 'eog-3',
      followUps: [
        { reply: 'Morality evolved to help us survive.', answer: 'Evolution might explain why we feel that some things are wrong. It cannot make them actually wrong. If our moral sense is only a survival instinct, then cruelty is not evil, merely out of fashion among our species.' },
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
        { reply: 'Science has explained everything else. It will explain this too.', answer: 'Science explains how things inside the universe behave by using the laws of nature. It cannot use those laws to explain why there are laws, or why there is a universe for them to govern. That is not a gap waiting to be filled; it is a different kind of question.' },
      ],
      objection: 'Science can explain the universe without God.',
      response:
        'Science explains how processes within the universe work, and that’s wonderful. But the question here is why there is a universe at all, and why its laws are suited to life. Science describes the laws; it can’t explain why there are laws or why anything exists. Many of the founders of modern science believed in God precisely because they expected a rational, orderly creation.',
      keyPoints: [
        'Science answers “how”, not ultimate “why”.',
        'Laws of nature describe; they do not create.',
        'Christian theism historically motivated science.',
      ],
    },
    {
      id: 'eog-5',
      objection: 'If the universe needs a designer, then who designed the designer?',
      response:
        'To recognise that something is the best explanation, you do not need an explanation of the explanation. If archaeologists dig up arrowheads, they rightly conclude people made them, even if they know nothing of who those people were. And the question assumes God is one more thing inside the chain of things that need causes. The argument is that the chain has to end in something that does not need one: a being that exists by its own nature.',
      keyPoints: ['An explanation can be good without being explained.', 'God is not one more caused thing.', 'The chain must end in something uncaused.'],
      followUps: [
        { reply: 'Then the universe itself could be the thing that needs no cause.', answer: 'It could, if it showed any sign of having to exist. It does not. It began, it is running down, and it could have had different laws. Those are the marks of something that depends on something else.' },
      ],
    },
    {
      id: 'eog-6',
      objection: 'Evolution explains the appearance of design. No designer is needed.',
      response:
        'Evolution is about how living things change once there is life. The fine-tuning argument is about what had to be in place long before: the strength of gravity, the energy of the early universe, the properties of carbon. Without those, there are no stars, no chemistry and nothing to evolve. Whatever one thinks about evolution, it cannot explain the conditions that make it possible.',
      keyPoints: ['Fine-tuning concerns physics, before any life.', 'Evolution needs a life-permitting universe.', 'A process cannot explain its own preconditions.'],
      followUps: [
        { reply: 'Given enough time, anything can happen by chance.', answer: 'Chance needs a stage to act on. No amount of time helps if the laws of physics do not allow stars, stable atoms or chemistry in the first place. The question is why the stage is set at all.' },
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
        { reply: 'If God existed, he would make himself obvious.', answer: 'He has made himself known in creation and conscience (Romans 1:20), and came in person in Jesus. What he has not done is force himself on anyone. A God who wants to be loved, not merely acknowledged, leaves room for a person to turn away.' },
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
      explanation: 'Fine-tuning is due to physical necessity, chance, or design; the argument shows the first two are implausible.',
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
  ],
  furtherReading: [
    'William Lane Craig — Reasonable Faith',
    'C.S. Lewis — Mere Christianity (Book 1)',
    'Frank Turek & Norman Geisler — I Don’t Have Enough Faith to Be an Atheist',
  ],
};
