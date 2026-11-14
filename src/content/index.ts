import type { Topic, Track } from './types';
import { tracks } from './tracks';
import { existenceOfGod } from './topics/existence-of-god';
import { reliabilityOfScripture } from './topics/reliability-of-scripture';
import { resurrection } from './topics/resurrection';
import { problemOfEvil } from './topics/problem-of-evil';
import { identityOfJesus } from './topics/identity-of-jesus';
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

export const topics: Topic[] = [
  existenceOfGod, identityOfJesus, reliabilityOfScripture, resurrection, problemOfEvil,
  understandingIslam, islamicDilemma, quranMisunderstands, crucifixionDenial, muhammadTested, muhammadWarfare,
  quranOral, quranPreservation, quranConsistency, quranHistory, quranSources, hadithReliability,
  muhammadInBible, quranChallenge, scientificMiracles,
  jesusMoreThanProphet, crossAndResurrection, gospelOfGrace,
  trinity, deityObjections, atonementObjections, bibleCorruption,
];

export { tracks };

export const getTopic = (id: string | undefined) => topics.find((t) => t.id === id);
export const getTrack = (id: string | undefined) => tracks.find((t) => t.id === id);
export const trackForTopic = (topicId: string): Track | undefined =>
  tracks.find((t) => t.sections.some((s) => s.topicIds.includes(topicId)));
export const topicsInTrack = (track: Track): Topic[] =>
  track.sections.flatMap((s) => s.topicIds).map((id) => getTopic(id)!).filter(Boolean);

export * from './types';
