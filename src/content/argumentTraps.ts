/**
 * Near misses for the "Build the argument" game: for each step of a lesson's numbered argument, three statements
 * that look like the step but fail as it, each with the reason. They are deliberately wrong, and say nothing
 * about history or texts that the lessons do not: each is the lesson's own step, overstated, reversed or cut loose.
 */
export interface Trap {
  text: string;
  why: string;
}

export interface ArgumentTraps {
  topicId: string;
  /** Heading of the lesson section the argument belongs to. */
  heading: string;
  /** One list of near misses per step, in the order of the argument's steps. */
  traps: Trap[][];
}

export const TRAPS: ArgumentTraps[] = [
  {
    topicId: 'existence-of-god',
    heading: 'The Kalam Cosmological Argument',
    traps: [
      [
        { text: 'Everything that exists has a cause.', why: 'That invites the question, “Then who caused God?” The step is only about things that begin to exist.' },
        { text: 'Whatever has a cause began to exist.', why: 'This is the step turned round. Joined to “the universe began to exist”, it tells us nothing about a cause.' },
        { text: 'Most things that begin to exist have a cause.', why: '“Most” leaves room for the universe to be the exception, so the conclusion no longer follows.' },
      ],
      [
        { text: 'The universe has always existed.', why: 'This is the opposite of the step. A universe with no beginning would not fall under the first premise.' },
        { text: 'Everything inside the universe began to exist.', why: 'The step has to be about the universe itself. Stars and planets beginning says nothing about the whole.' },
        { text: 'The universe may have begun to exist.', why: 'From “may have begun” only “may have a cause” follows. The lesson says the evidence points to a beginning.' },
      ],
      [
        { text: 'Therefore, the God of the Bible created the universe.', why: 'This goes further than the premises: they reach a cause of the universe, not yet the God of the Bible.' },
        { text: 'Therefore, everything has a cause.', why: 'The premises are about what begins to exist. This widens them to everything, and invites “Who caused God?”' },
        { text: 'Therefore, the universe caused itself.', why: 'The premises give the universe a cause; they do not say what it is. And nothing can make itself.' },
      ],
    ],
  },
  {
    topicId: 'existence-of-god',
    heading: 'The Fine-Tuning Argument',
    traps: [
      [
        { text: 'The fine-tuning of the universe is due to evolution, chance, or design.', why: 'Evolution is not one of the three explanations the argument weighs. The one to list is physical necessity.' },
        { text: 'The fine-tuning of the universe is due to either chance or design.', why: 'This leaves out physical necessity, an option the lesson takes seriously. The next step would then rule out something never listed.' },
        { text: 'The fine-tuning of the universe is plainly due to design and nothing else.', why: 'That assumes the conclusion. The argument must first list the rival explanations and then weigh them.' },
      ],
      [
        { text: 'It is not due to physical necessity.', why: 'That leaves chance standing, so two options remain and design does not yet follow.' },
        { text: 'It is due to either physical necessity or chance.', why: 'This is the opposite of the step. It would leave no room for design at all.' },
        { text: 'It is not due to evolution or to a multiverse.', why: 'These are not the options the first step listed, so necessity and chance are left unanswered.' },
      ],
      [
        { text: 'Therefore, it is due to the God of the Bible.', why: 'This goes further than the premises: they reach a designer, not yet the God who has spoken in Scripture.' },
        { text: 'Therefore, the whole universe was made to be full of life.', why: 'The argument is that the laws permit life at all, not that the universe is crowded with it.' },
        { text: 'Therefore, design is one possible cause.', why: 'Too weak: if necessity and chance are set aside, design is the one explanation left, not one of several.' },
      ],
    ],
  },
  {
    topicId: 'existence-of-god',
    heading: 'The Moral Argument',
    traps: [
      [
        { text: 'If people do not believe in God, they cannot be good or know right from wrong.', why: 'The argument is not about belief or behaviour. It is about what makes anything objectively right or wrong.' },
        { text: 'If God exists, objective moral values and duties exist.', why: 'This is the step turned round. Joined to the second premise, it does not lead to “God exists”.' },
        { text: 'If God does not exist, moral values and duties are harder to agree on.', why: 'Too weak: hard-to-agree-on values could still be objective, so nothing follows about God.' },
      ],
      [
        { text: 'People everywhere feel that some things are wrong.', why: 'Feelings are not enough: evolution might explain why we feel that way. The step needs things to be really wrong.' },
        { text: 'Moral values and duties are what each society decides.', why: 'That makes morality a convention, which is the opposite of objective. The argument then has nothing to explain.' },
        { text: 'Objective moral values and duties are known only to believers.', why: 'The step is about whether such values exist, not who knows them. The lesson grants that unbelievers know right from wrong.' },
      ],
      [
        { text: 'Therefore, atheists cannot be good people.', why: 'The lesson says plainly that this is not the argument. The premises are about what grounds morality, not who is moral.' },
        { text: 'Therefore, the Bible is the word of God.', why: 'This goes further than the premises. They reach God as the ground of goodness, not yet that he has spoken.' },
        { text: 'Therefore, belief in God is useful.', why: 'This lands somewhere else. The premises are about whether God exists, not whether belief is useful.' },
      ],
    ],
  },
  {
    topicId: 'existence-of-god',
    heading: 'Why is there anything at all?',
    traps: [
      [
        { text: 'Everything that exists has an external cause of its existence.', why: 'Then God would need an outside cause too. The step allows for something that exists by its own nature.' },
        { text: 'Everything that begins to exist has an explanation of its existence in an external cause.', why: 'That is the Kalam premise. This argument does not depend on a beginning, and holds even without a first moment.' },
        { text: 'Most things that exist have an explanation of their existence, either in their own nature or in an external cause.', why: '“Most” lets the universe be the exception, a brute fact, and the argument stops there.' },
      ],
      [
        { text: 'The universe exists, and exists by its own nature.', why: 'This is the opposite of the step. The lesson says the universe could have been different, or not been at all.' },
        { text: 'The universe exists, and had a first moment.', why: 'That belongs to the Kalam argument. Here the point is that the universe does not have to exist, beginning or not.' },
        { text: 'The universe exists, and each of its states is explained by the state before it.', why: 'Explaining each member of a series by another does not explain why there is a series at all.' },
      ],
      [
        { text: 'Therefore the universe has an external cause, who has spoken to us in Scripture.', why: 'This goes further than the premises. They do not tell us that the Creator has spoken.' },
        { text: 'Therefore the universe has an explanation in an earlier state of space, time and matter.', why: 'An earlier state is still part of the universe. The premises call for a cause outside it.' },
        { text: 'Therefore everything that exists has an external cause, beyond space, time and matter.', why: 'The premises are about the universe. Widened to everything, this would give God an outside cause too.' },
      ],
    ],
  },
  {
    topicId: 'identity-of-jesus',
    heading: 'The trilemma',
    traps: [
      [
        { text: 'Jesus claimed to be a prophet.', why: 'A sane and honest man could be mistaken about that. The argument depends on how great the claim was.' },
        { text: 'Jesus’ followers later claimed that he was divine.', why: 'That is the “legend” option. The argument needs the claim to be his own, as the earliest sources show.' },
        { text: 'Jesus was a great moral teacher.', why: 'That is the view the argument is answering, and it gives no claim for the next step to weigh.' },
      ],
      [
        { text: 'Either the claim was a deliberate lie or the truth.', why: 'This leaves out the option that he sincerely believed something false, which the argument has to face.' },
        { text: 'Either the claim was a later legend, a sincere delusion, or the truth.', why: 'The first step already says Jesus made the claim. The options here are about a claim he made himself.' },
        { text: 'The claim was too great to be anything but the truth.', why: 'That assumes the conclusion. The other possibilities have to be set out before they can be ruled out.' },
      ],
      [
        { text: 'His character and teaching rule out liar.', why: 'That leaves “lunatic” standing, so the conclusion does not yet follow.' },
        { text: 'His followers’ devotion rules out liar or lunatic.', why: 'Devoted followers show what they believed. It is his own sanity, calm and teaching that answer the charge.' },
        { text: 'His character and teaching show that he was a great moral teacher.', why: 'That is the one option the argument closes off, and it rules nothing out.' },
      ],
      [
        { text: 'Therefore, Jesus was a great moral teacher.', why: 'Someone who made these claims cannot simply be a great moral teacher. With liar and lunatic gone, only “Lord” is left.' },
        { text: 'Therefore, Jesus believed he was Lord.', why: 'Too weak: sincere belief fits delusion as well. With that ruled out, the claim is true.' },
        { text: 'Therefore, every word of the Bible is true.', why: 'This goes further than the premises. They are about who Jesus is, not about the whole Bible.' },
      ],
    ],
  },
  {
    topicId: 'disputed-translations',
    heading: 'Why Bibles differ',
    traps: [
      [
        { text: 'A belief that rested on one disputed rendering would be secure as long as our own Bible printed that rendering.', why: 'An argument that leans on a doubtful rendering is only as strong as the rendering, whichever Bible prints it.' },
        { text: 'A belief that was supported by any disputed rendering would be only as secure as that rendering.', why: 'Too broad: the risk is in resting on one such verse. A belief taught in many undisputed passages is not at risk.' },
        { text: 'A rendering that is disputed is most likely a wrong rendering.', why: 'The lesson says to weigh each disputed verse on its merits. And this says nothing about what a belief should rest on.' },
      ],
      [
        { text: 'That Jesus is God is taught in one passage whose translation is not in dispute: Thomas’s words to him: “My Lord and my God!” (John 20:28).', why: 'The lesson says never to rest a doctrine on one verse. The step needs many undisputed passages.' },
        { text: 'That Jesus is God is taught mainly in passages whose translation is in dispute, but our Bible renders them correctly.', why: 'Then the belief would be only as secure as those renderings, which is what the first step warns against.' },
        { text: 'That no verse about Jesus is really in dispute among translators is shown by Thomas’s words to him: “My Lord and my God!” (John 20:28).', why: 'The lesson grants that the disagreements are real. The point is that the belief does not depend on them.' },
      ],
      [
        { text: 'So each disputed verse must be defended in our own Bible’s wording, or the belief itself will be at risk.', why: 'This is the opposite of what follows. The belief rests on undisputed passages, so no single verse carries it.' },
        { text: 'So each disputed verse should be given up as mistranslated, since the belief does not need any of them.', why: 'Granting a verse for the sake of argument is not admitting it is wrong. Each is still weighed on its merits.' },
        { text: 'So each disputed verse can be weighed on its merits, and the belief will stand or fall with the result.', why: 'The premises say the belief rests on undisputed passages, so it does not stand or fall with a disputed one.' },
      ],
    ],
  },
  {
    topicId: 'ancient-writers',
    heading: 'What outside sources can and cannot do',
    traps: [
      [
        { text: 'Christian writers had no reason to invent facts that helped Christians.', why: 'The step is about writers outside the church. It is their hostility or indifference that makes their agreement worth more.' },
        { text: 'Hostile or indifferent writers are reliable in everything they say about Christians.', why: 'Having no motive to invent helpful facts is not the same as being right about everything.' },
        { text: 'Hostile or indifferent writers had no reason to mention Christians at all.', why: 'This would explain silence. It gives no reason to trust what they do say, which is what the argument needs.' },
      ],
      [
        { text: 'Roman and Jewish writers within about a century confirm that Jesus rose from the dead and is the Son of God.', why: 'The lesson says to keep the claim modest: they confirm the frame of the story, not the resurrection.' },
        { text: 'Christian writers within about a century confirm that Jesus was executed under Pilate and was soon worshipped.', why: 'The conclusion is about testimony from outside the church. Christian writers cannot supply that.' },
        { text: 'Roman and Jewish writers within about a century confirm that there were Christians in the empire.', why: 'Too weak: nobody denies that Christians existed. The step needs what they say about Jesus’ execution and worship.' },
      ],
      [
        { text: 'So the whole of the Gospel story is proved by writers who were not Christians.', why: 'This goes further than the premises. Outside writers confirm the outline, not the whole story.' },
        { text: 'So the outline of the Gospel story does not rest on Christian testimony at all.', why: 'Too strong: almost everything we know about Jesus comes from the New Testament. Outside writers add to it.' },
        { text: 'So wherever outside writers and the Gospels seem to differ, the outside writers are mistaken.', why: 'That does not follow from agreement on the outline. The lesson treats those places as real difficulties.' },
      ],
    ],
  },
  {
    topicId: 'archaeology-and-the-bible',
    heading: 'What archaeology can and cannot do',
    traps: [
      [
        { text: 'Writers who set their stories in real places must be telling true stories.', why: 'A story can be set in a real city and still be fiction. Accurate background earns a hearing, not proof.' },
        { text: 'Writers who get any of the background wrong must have invented their stories.', why: 'This is the step turned round. It would count the Bible’s open questions against it and proves nothing for it.' },
        { text: 'Writers who invent stories far from the events may or may not get the background right.', why: 'Too weak: if inventors might get it right, a confirmed background would tell us nothing about the writers.' },
      ],
      [
        { text: 'From the earliest periods onward, wherever the Bible’s rulers, places and customs are tested against inscriptions and excavations, they are confirmed every time. No open questions remain.', why: 'The lesson says archaeology has also raised hard questions, mostly about the earliest periods.' },
        { text: 'From the time of Israel’s kings onward, where the Bible’s miracles and messages from God can be tested against inscriptions and excavations, they are confirmed again and again. The open questions lie mostly in its earliest periods.', why: 'Archaeology cannot prove that God spoke or that a miracle happened. It tests the background: people, places and customs.' },
        { text: 'From the time of Israel’s kings onward, the Bible’s rulers, places and customs have seldom been contradicted by inscriptions and excavations, since so little has been dug. The open questions lie mostly in its earliest periods.', why: 'Not being contradicted for lack of digging is not being confirmed. The argument needs the tests to have been passed.' },
      ],
      [
        { text: 'So archaeology has proved that the Bible is true in all it says.', why: 'The lesson warns against “archaeology proves the Bible”. It confirms much and leaves most things untouched.' },
        { text: 'So the writers must also be right about the miracles they describe.', why: 'This goes further than the premises. A writer correct where tested has earned a hearing elsewhere, not proof.' },
        { text: 'So the hard questions about the earliest periods can safely be set aside.', why: 'That does not follow, and the lesson says an honest apologist knows those questions and grants what is true in them.' },
      ],
    ],
  },
  {
    topicId: 'resurrection',
    heading: 'The minimal facts',
    traps: [
      [
        { text: 'Jesus died and rose again.', why: 'The resurrection is what the facts point to. It cannot be listed among the facts that sceptics already accept.' },
        { text: 'Jesus was crucified, but may not have died.', why: 'That is the swoon theory. Without a real death there is nothing for a resurrection to explain.' },
        { text: 'Jesus died on the cross for our sins.', why: 'That is what his death means, which Christians believe. The list holds only facts that sceptical scholars also accept.' },
      ],
      [
        { text: 'His disciples proved that he rose and appeared to them.', why: 'What scholars grant is that they sincerely believed it. Whether the belief was true is what the argument goes on to weigh.' },
        { text: 'His disciples said he rose and appeared to them, whether or not they believed it.', why: 'Their sincerity is the point. People do not suffer and die for what they know is a lie.' },
        { text: 'Later Christians sincerely believed that he rose and appeared to the disciples.', why: 'The fact concerns those who were in a position to know. Belief received from others carries less weight.' },
      ],
      [
        { text: 'Paul, a follower of Jesus, grew stronger in his faith.', why: 'The force of the fact is that Paul was an enemy. A believer’s growing faith needs no special explanation.' },
        { text: 'Paul, a persecutor of the church, proved by his conversion that Jesus rose.', why: 'One fact does not prove the case by itself. The argument is that the resurrection best explains all the facts together.' },
        { text: 'Paul, a persecutor of the church, gradually softened towards Christians.', why: 'Too weak: he was suddenly converted, from hunting Christians to planting churches. That is what needs explaining.' },
      ],
      [
        { text: 'James, Jesus’ sceptical brother, was converted (granted by every scholar without exception).', why: 'The lesson is careful here: most scholars who discuss it grant it, and fewer discuss it.' },
        { text: 'James, Jesus’ devoted brother, went on believing (granted by most scholars who discuss it, though fewer do).', why: 'The force of the fact is that James had not believed in his brother. A change is what needs explaining.' },
        { text: 'James, Jesus’ sceptical brother, may have been converted (a guess that few scholars would discuss).', why: 'Too weak: a guess cannot serve as a well-evidenced fact. The lesson says most scholars who discuss it grant it.' },
      ],
      [
        { text: 'The tomb was empty (the surest of the minimal facts: virtually all the publications Habermas surveyed accept it).', why: 'The lesson says the opposite: it is not strictly a minimal fact, and about three quarters accept it.' },
        { text: 'The tomb was empty, which is enough to prove that he rose (about three quarters of the publications Habermas surveyed accept it).', why: 'An empty tomb needs explaining and was at first blamed on theft. No single fact proves the case alone.' },
        { text: 'The tomb was said to be empty by the disciples alone (not strictly one of the minimal facts: about three quarters of the publications Habermas surveyed accept it).', why: 'The earliest reply on record, that the disciples stole the body, explains an empty tomb and does not deny one.' },
      ],
    ],
  },
  {
    topicId: 'islam-dilemma',
    heading: 'The dilemma',
    traps: [
      [
        { text: 'The Quran affirms that the Torah and Gospel as first given to Moses and Jesus were God’s inspired and authoritative word.', why: 'That leaves room for a lost original. The step must be about the books Jews and Christians held in Muhammad’s day.' },
        { text: 'The Quran affirms that every teaching held by Jews and Christians in Muhammad’s day was God’s inspired and authoritative word.', why: 'Overstated: the Quran affirms their scriptures, not everything they taught. The dilemma is only about the books.' },
        { text: 'The Quran speaks with respect of the Torah and Gospel possessed by Jews and Christians in Muhammad’s day.', why: 'Too weak: respect is not enough. The dilemma needs the Quran to affirm those books as God’s authoritative word.' },
      ],
      [
        { text: 'Those scriptures were preserved in some parts and corrupted in others.', why: 'The next two steps each take one side of an either-or. This gives them no either-or to work on.' },
        { text: 'Either those scriptures were preserved, or the Quran is the word of God.', why: 'These are not the two possibilities the next steps examine. They ask: preserved, or corrupted?' },
        { text: 'Either those scriptures were preserved until Muhammad’s day, or they were corrupted after it.', why: 'Both halves could be true together, so it is no real choice. The question is their state in Muhammad’s day.' },
      ],
      [
        { text: 'If preserved, the Quran is false, because it affirms them as reliable and says God’s words cannot be changed.', why: 'Affirming preserved books would be no fault. On this side the trouble is that the Quran contradicts them.' },
        { text: 'If preserved, the Bible is true, because it was copied centuries before Muhammad and still exists.', why: 'Being well preserved does not make a book true, and the step needed here is about the Quran.' },
        { text: 'If preserved, the Quran is false, because it contradicts them on every point they teach.', why: 'Overstated: the clash the lesson names is on the central points, Jesus’ death, deity and resurrection, not on everything.' },
      ],
      [
        { text: 'If corrupted, the Quran is false, because it contradicts them on Jesus’ death, deity and resurrection.', why: 'Contradicting corrupted books would be no fault. On this side the trouble is that the Quran affirms them.' },
        { text: 'If corrupted, the Bible is false, because God’s words cannot be changed.', why: 'Wrong subject: this step must say what follows for the Quran if the books it affirms were corrupted.' },
        { text: 'If corrupted, the Quran is harder to check, because the books it points to can no longer be trusted.', why: 'Too weak: the Quran affirms those books, so their corruption would make it mistaken, not merely hard to check.' },
      ],
      [
        { text: 'Therefore, either way, the Bible is proved to be the word of God.', why: 'This goes further than the premises: they show a problem in the Quran, not yet the truth of the Bible.' },
        { text: 'Therefore, if those scriptures were preserved, the Quran is not the word of God.', why: 'Only half the dilemma: the premises cover the corrupted side too, so the conclusion holds either way.' },
        { text: 'Therefore, either way, the Torah and Gospel must have been corrupted.', why: 'The premises leave open which side is true. What follows on both sides is a conclusion about the Quran.' },
      ],
    ],
  },
  {
    topicId: 'islam-muhammad-tested',
    heading: 'Biblical tests for a prophet',
    traps: [
      [
        { text: 'Any message that agrees with God’s earlier revelation comes from a true prophet.', why: 'This is the step turned round. Agreement is required of a prophet; it does not by itself make one.' },
        { text: 'A true prophet performs signs that confirm God’s earlier revelation.', why: 'Deuteronomy 13 says a prophet may perform signs and still be false. The test is his message.' },
        { text: 'A true prophet’s message adds nothing to God’s earlier revelation.', why: 'Overstated: agreeing with the earlier revelation is not the same as adding nothing to it.' },
      ],
      [
        { text: 'Muhammad’s message differs from the earlier revelation on matters that are not central to it.', why: 'Too weak: the argument needs a denial of what is central, the Father and the Son and Christ’s death.' },
        { text: 'Muhammad’s message denies everything that the earlier revelation teaches.', why: 'Overstated: the lesson points to the central denials only. The Quran itself says the Torah and Gospel came from God.' },
        { text: 'Muhammad’s message denies the Father and the Son and the death of Christ, which Christians hold dear.', why: 'What Christians hold dear proves nothing. The step must say these things are central to God’s earlier revelation.' },
      ],
      [
        { text: 'Therefore, nothing in Muhammad’s message is true.', why: 'This goes further than the premises: they show the message is not from God, not that every statement in it is false.' },
        { text: 'Therefore, the earlier revelation is proved to be from God.', why: 'The premises take the earlier revelation as the standard; they do not prove it. The conclusion is about Muhammad’s message.' },
        { text: 'Therefore, Muhammad’s message should be tested before it is accepted.', why: 'That is where the lesson starts (1 John 4:1). The premises have already applied the test, so more follows.' },
      ],
    ],
  },
  {
    topicId: 'islam-hadith-reliability',
    heading: 'The hadith dilemma',
    traps: [
      [
        { text: 'Everything a Muslim believes, including the text of the Quran itself, is taken from the Sahih hadith.', why: 'Overstated: the lesson says practice and the Quran’s history depend on the hadith, not the Quran’s text itself.' },
        { text: 'The Sahih hadith depend on Islamic practice and the history of the Quran.', why: 'This is back to front. The dilemma needs Islam to depend on the hadith, not the hadith on Islam.' },
        { text: 'The Sahih hadith were compiled about two centuries after Muhammad.', why: 'The lesson says so, but the dilemma needs the dependence: without it, losing the hadith would cost Islam nothing.' },
      ],
      [
        { text: 'If the Sahih hadith are reliable, Islam’s claim to a perfectly preserved revelation is confirmed.', why: 'The opposite of what this side shows: if reliable, their reports of lost verses and burned variants must be accepted.' },
        { text: 'If the Sahih hadith are reliable, the Quran is shown to be false in everything it says.', why: 'Far too much: the reports count against perfect preservation, not against everything in the Quran.' },
        { text: 'If the Sahih hadith are unreliable, they report lost verses, burned variants, and serious problems in Muhammad’s life.', why: 'If they are unreliable their reports carry no weight. This side of the dilemma needs them to be reliable.' },
      ],
      [
        { text: 'If they are unreliable, their reports of lost verses and burned variants can still be used against Islam.', why: 'The lesson warns against this: you cannot call the hadith unreliable and then quote them as proof.' },
        { text: 'If they are unreliable, Islam still keeps its knowledge of Muhammad, its law and the Quran’s history.', why: 'The first step said these depend on the hadith, so they cannot survive the loss of the hadith.' },
        { text: 'If they are unreliable, nothing at all can be known about Muhammad or the Quran.', why: 'Overstated: the lesson says Islam loses “nearly everything” it knows of Muhammad, not that nothing can be known.' },
      ],
      [
        { text: 'Either way, the Sahih hadith are shown to be unreliable.', why: 'The premises leave open whether the hadith are reliable. The conclusion is what follows on both sides.' },
        { text: 'Either way, the Quran is shown to have been corrupted beyond recovery.', why: 'This goes further than the premises: they undermine the claim of perfect, verified preservation, and no more.' },
        { text: 'Either way, the Bible is shown to be better preserved than the Quran.', why: 'The premises say nothing about the Bible, so no conclusion about it can follow from them.' },
      ],
    ],
  },
  {
    topicId: 'islam-outside-writers',
    heading: 'What outside sources can and cannot do',
    traps: [
      [
        { text: 'Nothing at all about Muhammad’s life was recorded by Muslims until more than a century after his death.', why: 'Overstated: the lesson grants a firm early outline and the Constitution of Medina. It is the detailed account that is late.' },
        { text: 'The accounts of Muhammad written outside Islam were set down more than a century after his death.', why: 'Wrong subject: the outside writers are the early ones. It is the detailed Muslim account that is late.' },
        { text: 'The detailed Muslim account of Muhammad’s life is much fuller than anything written outside Islam.', why: 'The argument turns on dates, not fullness. The lesson says a later account is not right just because it is fuller.' },
      ],
      [
        { text: 'Writers outside Islam who knew him in person were describing him and his movement during his lifetime.', why: 'Overstated: the lesson says they wrote at a distance after his death, and no account by anyone who knew him survives.' },
        { text: 'Writers outside Islam were describing him and his movement fairly and with good information.', why: 'The lesson says most were hostile and some badly informed. Their value lies in their date.' },
        { text: 'Writers outside Islam were describing him and his movement at about the time the Muslim account was written.', why: 'Then they would not be earlier witnesses. The argument needs them to have written within ten to thirty years.' },
      ],
      [
        { text: 'So the traditional account should be set aside, and the earlier witnesses believed wherever the two differ.', why: 'This goes too far: the lesson does not trust the outsiders over Muslim sources as a rule. It asks for testing.' },
        { text: 'So Muhammad probably never lived, and the traditional account was made up afterwards.', why: 'The lesson says not to use this claim. The outside writers show the opposite: they name him.' },
        { text: 'So these earlier witnesses should be tested against the traditional account, which can be taken on its own word.', why: 'This is reversed. The earlier date is what gives the outside witnesses their use as a check.' },
      ],
    ],
  },
  {
    topicId: 'sunni-overview',
    heading: 'The example that binds',
    traps: [
      [
        { text: 'Christians hold that Muhammad’s example, as recorded in the sound hadith, ought to bind every Muslim.', why: 'What Christians think binds no one. The argument works only from what Sunni Islam itself holds.' },
        { text: 'Many Sunnis are troubled by parts of Muhammad’s example as recorded in the sound hadith.', why: 'The lesson grants this, but the argument needs what Sunni doctrine holds: that the example is binding.' },
        { text: 'The Quran says there is an excellent pattern in the Messenger of Allah (Quran 33:21).', why: 'The verse alone does not mention the hadith. The step must say the recorded example is held to be binding.' },
      ],
      [
        { text: 'The hadith Sunnis count most sound record many sayings about kindness to neighbours and guests (Sahih al-Bukhari 6018).', why: 'True, and the lesson grants it gladly, but it gives the conclusion’s “that command” nothing to refer to.' },
        { text: 'Books written by critics of Islam say that he commanded death for those who leave Islam.', why: 'A Sunni is not bound by critics’ books. The step must come from the hadith Sunnis themselves count most sound.' },
        { text: 'The four schools of law differed over what should be done to a woman who leaves Islam.', why: 'This is about the jurists. The argument needs what the sound hadith record Muhammad himself commanding.' },
      ],
      [
        { text: 'Therefore a Sunni must defend that command as God’s will for all time, since these books and this example are binding.', why: 'The premises leave two ways open. This takes the binding claim as fixed, which is the very thing in question.' },
        { text: 'Therefore a Sunni must either defend that command as God’s will for all time, or give up Islam altogether.', why: 'The second half goes too far: what the premises put in question is the binding force of these books, not all of Islam.' },
        { text: 'Therefore a Sunni may keep the kind sayings as binding and set that command aside.', why: 'The first step makes the whole recorded example binding, so the premises do not allow picking and choosing.' },
      ],
    ],
  },
  {
    topicId: 'sunni-companions',
    heading: 'The Sunni answers, stated fairly',
    traps: [
      [
        { text: 'Sunni Islam honours the companions as the best generation of Muslims.', why: 'Honour alone is not enough. The step must say the Quran and hadith are accepted on the companions’ word.' },
        { text: 'The Quran says that Allah is pleased with the first emigrants and helpers (Quran 9:100).', why: 'True, but it does not say what Sunni Islam rests on the companions, and the conclusion’s “what rests on it” needs that.' },
        { text: 'Christians accept the New Testament on the word of the apostles, who argued and were reconciled.', why: 'This is the other half of the lesson’s comparison. The argument needs what Sunni Islam rests on the companions.' },
      ],
      [
        { text: 'Books that Sunnis do not accept record that leading companions fought and killed one another.', why: 'The lesson takes its facts from the books Sunnis trust most. A Sunni need not answer for books he rejects.' },
        { text: 'Its most trusted books record that Muhammad called his own generation the best of people (Sahih al-Bukhari 6429).', why: 'True, but this supports the doctrine. The argument needs the reports that put it in question.' },
        { text: 'Its most trusted books record that the companions, like all people, were not free from sin or from honest mistakes.', why: 'Too weak: Sunni scholars already say uprightness is not sinlessness, so this raises no difficulty for the doctrine.' },
      ],
      [
        { text: 'Therefore none of the companions was upright, and what rests on their word is false.', why: 'This goes too far. A sinner can tell the truth; the premises only remove the right to assume uprightness.' },
        { text: 'Therefore the companions were sinners, as all people are, and were not free from error.', why: 'Sunni scholars already grant this. The conclusion concerns whether the uprightness of all can simply be assumed.' },
        { text: 'Therefore the testimony of the apostles is shown to be true, and what rests on it needs no other support.', why: 'The premises say nothing about the apostles. The lesson’s comparison comes later and does not settle every question.' },
      ],
    ],
  },
  {
    topicId: 'shia-sources',
    heading: 'The dilemma: who handed down the Quran?',
    traps: [
      [
        { text: 'Most of Muhammad’s leading companions did in fact disobey his clear appointment of Ali.', why: 'The lesson takes no side on whether Ali was appointed. The step only reports what the Shia account says.' },
        { text: 'On the Sunni account, all of Muhammad’s companions are trustworthy witnesses.', why: 'True, but the dilemma is drawn from the Shia account. This gives no reason to question the companions.' },
        { text: 'On the Shia account, companions such as Salman, Abu Dharr, al-Miqdad and Ammar stood by Ali.', why: 'True, but the dilemma turns on the many who are said to have set the appointment aside, not the few.' },
      ],
      [
        { text: 'The hadith were handed down by those companions, and were gathered into books long after Abu Bakr, Umar and Uthman.', why: 'Wrong subject: the dilemma asks who handed down the Quran, not the hadith.' },
        { text: 'The Quran was altered by those companions when it was collected and standardised under Abu Bakr, Umar and Uthman.', why: 'The lesson does not claim this. The step says only who handed the Quran down; their reliability is the next step’s question.' },
        { text: 'The Shia read the same Arabic text of the Quran as every Sunni does, and mainstream Twelver teaching holds it to be complete.', why: 'True, and worth saying, but it does not say through whose hands the text came, which the next step needs.' },
      ],
      [
        { text: 'If they were reliable, Ali was certainly never appointed. If they were not, what they transmitted is certainly corrupt.', why: 'Too strong on both sides: the lesson speaks of weighty evidence and weakened confidence, not of certainty.' },
        { text: 'If they were reliable, confidence in what they transmitted is weakened. If they were not, their rejection of Ali’s appointment counts strongly against it.', why: 'The two halves are swapped. Reliable men do not weaken confidence, and the rejection of unreliable men proves little.' },
        { text: 'They were reliable, so their rejection of Ali’s appointment counts strongly against it.', why: 'This takes one side as settled. The lesson says it is not an argument for the Sunni side; both possibilities stay open.' },
      ],
      [
        { text: 'Either way the Sunni account of the companions is shown to be the right one.', why: 'The lesson says plainly that this is not an argument for the Sunni side.' },
        { text: 'Either way the Quran in Shia hands is shown to have been altered.', why: 'This goes too far: the premises raise a difficulty about confidence. They do not show that anything was altered.' },
        { text: 'Either way the Shia account of the companions is shown to be mistaken, and Ali was never appointed.', why: 'Only the first side points that way, and even there only as strong evidence, not as proof.' },
      ],
    ],
  },
  {
    topicId: 'quranist-answering',
    heading: 'The Quran came through the same hands',
    traps: [
      [
        { text: 'The Quran and the hadith came down in exactly the same way and are equally well attested.', why: 'Overstated: the lesson grants a real difference between them. The step claims only that the same generations handed both on.' },
        { text: 'The hadith were passed on by word of mouth for two centuries before they were written down.', why: 'A Quran-only Muslim already says this. The argument needs the link: the Quran came through the same hands.' },
        { text: 'The Quran was recited piece by piece over about twenty years.', why: 'True in the lesson, but it says nothing about who handed the Quran on, which the argument turns on.' },
      ],
      [
        { text: 'Sunni Muslims hold that what those generations reported about Muhammad is reliable and binding.', why: 'True, but this argument is put to the Quran-only Muslim, and the next step starts from his rejection of the reports.' },
        { text: 'Christians hold that what those generations reported about Muhammad is too unreliable to use.', why: 'The argument tests the Quran-only view by its own standard. What Christians think of the reports is beside the point.' },
        { text: 'Quran-only Muslims hold that the Quran was written early and recited by the whole community.', why: 'The lesson grants this, but the dilemma needs their judgment on the reports about Muhammad, not on the Quran.' },
      ],
      [
        { text: 'If their reports are that unreliable, the wholesale rejection of the rest is unjustified. If they are reliable enough for that, the reports of how the Quran was written, collected and standardised are in doubt as well.', why: 'The two halves are swapped. Unreliable reports justify rejection, and reliable ones put nothing in doubt.' },
        { text: 'If their reports are that unreliable, the Quran itself is certainly corrupt. If they are reliable enough for that, every one of the hadith must be accepted as true.', why: 'Too strong on both sides: the lesson says only “in doubt”, and objects only to rejecting the rest wholesale.' },
        { text: 'Their reports are that unreliable, so the reports of how the Quran was written, collected and standardised are in doubt as well.', why: 'This takes one side as settled. The argument leaves both open, which is why it concludes “either way”.' },
      ],
      [
        { text: 'Either way, the Quran is shown to be as unreliable as the reports of those who handed it down.', why: 'This goes too far: the premises show that two positions cannot be held together, not that the Quran is unreliable.' },
        { text: 'Either way, the Quran-only Muslim is bound to accept the hadith as binding.', why: 'The premises do not show that the hadith are binding, only that the witnesses cannot be dismissed wholesale.' },
        { text: 'Either way, the hadith are shown to be as reliable as the Quran.', why: 'The lesson grants a real difference between them. The premises do not make the two equal.' },
      ],
    ],
  },
];
