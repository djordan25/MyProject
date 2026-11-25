import { MAPS, PLACES, placeNamed, type Place } from '../content/maps';
import { layoutMap, type MapView } from './mapLayout';
import { shuffle } from './shuffle';

/** One question of "Where was it?": a lesson's map with one place marked, to be named from four. */
export interface MapQuestion {
  topicId: string;
  view: MapView;
  /** The marked place. */
  target: Place;
  options: string[];
  /** Index into options. */
  answer: number;
}

/** Two places closer than this many map units cannot be told apart at the scale drawn. */
const TOO_CLOSE = 4;

const apart = (a: Place, b: Place, view: MapView): boolean => {
  const pa = view.pins.find((p) => p.place.name === a.name);
  const pb = view.pins.find((p) => p.place.name === b.name);
  if (!pa || !pb) return a.lat !== b.lat || a.lon !== b.lon;
  return Math.hypot(pa.x - pb.x, pa.y - pb.y) >= TOO_CLOSE * view.u;
};

/** Topics whose maps can be used: every lesson map. */
export const mapTopics = (): string[] => Object.keys(MAPS);

/**
 * Marks one place on a lesson's map and offers four names. The wrong names are other places on the same map where
 * they are far enough from the marked one to be told apart, so the choice is between places the lesson itself names.
 */
export function mapQuestion(topicId: string, count = 4): MapQuestion {
  const places = (MAPS[topicId] ?? []).map(placeNamed).filter((p): p is Place => !!p);
  const view = layoutMap(places);
  const target = shuffle(places)[0];
  const wrong: string[] = [];
  for (const p of [...shuffle(places), ...shuffle(PLACES)]) {
    if (wrong.length === count - 1) break;
    if (p.name !== target.name && !wrong.includes(p.name) && apart(p, target, view)) wrong.push(p.name);
  }
  const options = shuffle([target.name, ...wrong]);
  return { topicId, view, target, options, answer: options.indexOf(target.name) };
}
