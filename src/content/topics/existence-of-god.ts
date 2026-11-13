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
  ],
  objections: [
    {
      id: 'eog-1',
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
      objection: 'Science can explain the universe without God.',
      response:
        'Science explains how processes within the universe work, and that’s wonderful. But the question here is why there is a universe at all, and why its laws are suited to life. Science describes the laws; it can’t explain why there are laws or why anything exists. Many of the founders of modern science believed in God precisely because they expected a rational, orderly creation.',
      keyPoints: [
        'Science answers “how”, not ultimate “why”.',
        'Laws of nature describe; they do not create.',
        'Christian theism historically motivated science.',
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
      explanation: '“His invisible attributes… have been clearly perceived… in the things that have been made.” (Romans 1:20)',
    },
  ],
  furtherReading: [
    'William Lane Craig — Reasonable Faith',
    'C.S. Lewis — Mere Christianity (Book 1)',
    'Frank Turek & Norman Geisler — I Don’t Have Enough Faith to Be an Atheist',
  ],
};
