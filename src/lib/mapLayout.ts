import { MAP_X_SCALE } from '../content/mapLand';
import type { Place } from '../content/maps';

export interface Pin {
  place: Place;
  /** True position. */
  x: number;
  y: number;
  /** Where the numbered badge sits, moved off the true position when places crowd together. */
  bx: number;
  by: number;
}

export interface MapView {
  x: number;
  y: number;
  w: number;
  h: number;
  /** One hundredth of the view width: the unit for badge and line sizes. */
  u: number;
  pins: Pin[];
}

const ASPECT = 1.5;
const MIN_H = 7;

/** Frames the places with a margin and spreads badges that would overlap. Coordinates match the land path. */
export function layoutMap(places: Place[]): MapView {
  const pts = places.map((place) => ({ place, x: place.lon * MAP_X_SCALE, y: -place.lat }));
  const xs = pts.map((p) => p.x);
  const ys = pts.map((p) => p.y);
  let w = Math.max(...xs) - Math.min(...xs);
  let h = Math.max(...ys) - Math.min(...ys);
  const cx = (Math.max(...xs) + Math.min(...xs)) / 2;
  const cy = (Math.max(...ys) + Math.min(...ys)) / 2;
  h = Math.max(h * 1.5, w * 1.3 / ASPECT, MIN_H);
  w = h * ASPECT;
  const u = w / 100;
  const r = 3.4 * u;
  const pins: Pin[] = pts.map((p) => ({ ...p, bx: p.x, by: p.y }));
  for (let pass = 0; pass < 60; pass++) {
    let moved = false;
    for (let i = 0; i < pins.length; i++) {
      for (let j = i + 1; j < pins.length; j++) {
        const a = pins[i];
        const b = pins[j];
        let dx = b.bx - a.bx;
        let dy = b.by - a.by;
        const d = Math.hypot(dx, dy);
        if (d >= 2 * r) continue;
        if (d < 1e-6) { dx = Math.cos(i + j); dy = Math.sin(i + j); } else { dx /= d; dy /= d; }
        const push = (2 * r - d) / 2 + 0.01 * u;
        a.bx -= dx * push; a.by -= dy * push;
        b.bx += dx * push; b.by += dy * push;
        moved = true;
      }
    }
    if (!moved) break;
  }
  return { x: cx - w / 2, y: cy - h / 2, w, h, u, pins };
}
