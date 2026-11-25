import type { FollowUp, Topic, Track } from './types';
import { tracks } from './tracks';
import { existenceOfGod } from './topics/existence-of-god';
import { reliabilityOfScripture } from './topics/reliability-of-scripture';
import { resurrection } from './topics/resurrection';
import { problemOfEvil } from './topics/problem-of-evil';
import { identityOfJesus } from './topics/identity-of-jesus';
import { howWeGotTheBible } from './topics/how-we-got-the-bible';
import { disputedTranslations } from './topics/disputed-translations';
import { ancientWriters } from './topics/ancient-writers';
import { archaeologyAndTheBible } from './topics/archaeology-and-the-bible';
import { truthAndRelativism } from './topics/truth-and-relativism';
import { scienceAndFaith } from './topics/science-and-faith';
import { fulfilledProphecy } from './topics/fulfilled-prophecy';
import { jesusOnlyWay } from './topics/jesus-only-way';
import { hardPassages } from './topics/hard-passages';
import { havingTheConversation } from './topics/having-the-conversation';
import { understandingIslam } from './islam/understanding-islam';
import { islamicDilemma } from './islam/islamic-dilemma';
import { quranMisunderstands } from './islam/quran-misunderstands';
import { crucifixionDenial } from './islam/crucifixion-denial';
import { quranPreservation } from './islam/quran-preservation';
import { muhammadTested } from './islam/muhammad-tested';
import { muhammadInBible } from './islam/muhammad-in-bible';
import { quranChallenge } from './islam/quran-challenge';
import { scientificMiracles } from './islam/scientific-miracles';
import { jesusMoreThanProphet } from './islam/jesus-more-than-prophet';
import { crossAndResurrection } from './islam/cross-resurrection';
import { gospelOfGrace } from './islam/gospel-of-grace';
import { trinity } from './islam/trinity';
import { deityObjections } from './islam/deity-objections';
import { atonementObjections } from './islam/atonement-objections';
import { bibleCorruption } from './islam/bible-corruption';
import { quranOral } from './islam/quran-oral';
import { quranConsistency } from './islam/quran-consistency';
import { quranHistory } from './islam/quran-history';
import { quranSources } from './islam/quran-sources';
import { hadithReliability } from './islam/hadith-reliability';
import { muhammadWarfare } from './islam/muhammad-warfare';
import { sharingTheGospel } from './islam/sharing-the-gospel';
import { branchesOfIslam } from './islam/branches';
import { quranManuscripts } from './islam/quran-manuscripts';
import { outsideWriters } from './islam/outside-writers';
import { archaeologyIslam } from './islam/archaeology-islam';
import { nightJourney } from './islam/night-journey';
import { farthestMosque } from './islam/farthest-mosque';
import { sunniOverview } from './islam/sects/sunni-overview';
import { sunniCompanions } from './islam/sects/sunni-companions';
import { sunniSalafiSufi } from './islam/sects/sunni-salafi-sufi';
import { shiaOverview } from './islam/sects/shia-overview';
import { shiaImamate } from './islam/sects/shia-imamate';
import { shiaSources } from './islam/sects/shia-sources';
import { shiaKarbalaGospel } from './islam/sects/shia-karbala-gospel';
import { quranistOverview } from './islam/sects/quranist-overview';
import { quranistAnswering } from './islam/sects/quranist-answering';
import { canonsCompared } from './topics/canons-compared';
import { oldTestamentApocrypha } from './topics/old-testament-apocrypha';
import { otherGospels } from './topics/other-gospels';
import { edgesOfTheCanon } from './topics/edges-of-the-canon';
import { quranReadings } from './islam/quran-readings';
import { ahmadiyyaOverview } from './islam/sects/ahmadiyya-overview';
import { ahmadiyyaJesusInIndia } from './islam/sects/ahmadiyya-jesus-in-india';
import { noiOverview } from './islam/sects/noi-overview';
import { noiAnswering } from './islam/sects/noi-answering';
import { druze } from './islam/sects/druze';
import { alawites } from './islam/sects/alawites';
import { alevis } from './islam/sects/alevis';

export const topics: Topic[] = [
  truthAndRelativism, existenceOfGod, scienceAndFaith, identityOfJesus, fulfilledProphecy, reliabilityOfScripture, howWeGotTheBible, disputedTranslations, canonsCompared, oldTestamentApocrypha, otherGospels, edgesOfTheCanon, ancientWriters, archaeologyAndTheBible, resurrection, jesusOnlyWay, problemOfEvil, hardPassages, havingTheConversation,
  understandingIslam, branchesOfIslam, islamicDilemma, quranMisunderstands, crucifixionDenial, muhammadTested, muhammadWarfare,
  quranOral, quranPreservation, quranManuscripts, quranReadings, quranConsistency, quranHistory, quranSources, hadithReliability,
  outsideWriters, archaeologyIslam, nightJourney, farthestMosque,
  muhammadInBible, quranChallenge, scientificMiracles,
  jesusMoreThanProphet, crossAndResurrection, gospelOfGrace,
  trinity, deityObjections, atonementObjections, bibleCorruption, sharingTheGospel,
  sunniOverview, sunniCompanions, sunniSalafiSufi, shiaOverview, shiaImamate, shiaSources, shiaKarbalaGospel,
  quranistOverview, quranistAnswering, ahmadiyyaOverview, ahmadiyyaJesusInIndia, noiOverview, noiAnswering, druze, alawites, alevis,
];

export { tracks };

export const getTopic = (id: string | undefined) => topics.find((t) => t.id === id);
export const getTrack = (id: string | undefined) => tracks.find((t) => t.id === id);
/** The track (or sub-track) whose own sections list the topic. */
export const trackForTopic = (topicId: string): Track | undefined =>
  tracks.find((t) => t.sections.some((s) => s.topicIds.includes(topicId)));
export const topLevelTracks: Track[] = tracks.filter((t) => !t.parent);
export const subtracksOf = (track: Track): Track[] => tracks.filter((t) => t.parent === track.id);
/** Topics listed in the track's own sections, not counting its sub-tracks. */
export const ownTopics = (track: Track): Topic[] =>
  track.sections.flatMap((s) => s.topicIds).map((id) => getTopic(id)!).filter(Boolean);
/** Every topic in the track, including those in its sub-tracks. */
export const topicsInTrack = (track: Track): Topic[] => [...ownTopics(track), ...subtracksOf(track).flatMap(topicsInTrack)];

/** A follow-up chain flattened into a list: every reply and answer at every depth. */
export const flattenFollowUps = (followUps: FollowUp[] | undefined): FollowUp[] =>
  (followUps ?? []).flatMap((f) => [f, ...flattenFollowUps(f.followUps)]);

export * from './types';
