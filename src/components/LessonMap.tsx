import { useMemo } from 'react';
import type { Topic } from '../content';
import { MAP_LAND } from '../content/mapLand';
import { MAPS, ROUTES, placeNamed, type Place } from '../content/maps';
import { layoutMap } from '../lib/mapLayout';

/** The places a lesson names, numbered on a map of the region, with the key beneath. */
export default function LessonMap({ topic }: { topic: Topic }) {
  const places = useMemo(() => (MAPS[topic.id] ?? []).map(placeNamed).filter((p): p is Place => !!p), [topic.id]);
  const view = useMemo(() => (places.length ? layoutMap(places) : null), [places]);
  if (!view) return null;
  const { u } = view;
  const route = ROUTES[topic.id];
  const from = route && view.pins.find((p) => p.place.name === route.from);
  const to = route && view.pins.find((p) => p.place.name === route.to);
  return (
    <figure className="lesson-map">
      <svg viewBox={`${view.x} ${view.y} ${view.w} ${view.h}`} role="img" aria-label={`Map showing ${places.map((p) => p.name).join(', ')}`}>
        <rect className="map-sea" x={view.x} y={view.y} width={view.w} height={view.h} />
        <path className="map-land" d={MAP_LAND} strokeWidth={0.25 * u} />
        {from && to && (
          <path className="map-route" d={`M${from.x} ${from.y} Q${(from.x + to.x) / 2 + 6 * u} ${(from.y + to.y) / 2} ${to.x} ${to.y}`} strokeWidth={0.7 * u} strokeDasharray={`${1.6 * u} ${1.4 * u}`} />
        )}
        {view.pins.map((p) => (
          <g key={p.place.name}>
            <line className="map-leader" x1={p.x} y1={p.y} x2={p.bx} y2={p.by} strokeWidth={0.35 * u} />
            <circle className="map-dot" cx={p.x} cy={p.y} r={0.9 * u} />
          </g>
        ))}
        {view.pins.map((p, i) => (
          <g key={p.place.name}>
            <circle className="map-badge" cx={p.bx} cy={p.by} r={3.2 * u} strokeWidth={0.4 * u} />
            <text className="map-num" x={p.bx} y={p.by} fontSize={3.6 * u} dy={1.25 * u} textAnchor="middle">{i + 1}</text>
          </g>
        ))}
      </svg>
      <figcaption>
        <ol className="map-key">
          {places.map((p) => <li key={p.name}>{p.name}</li>)}
        </ol>
        {route && <p className="map-route-key"><span aria-hidden /> {route.label}: {route.from} to {route.to}</p>}
        <p className="muted">Coastlines from Natural Earth; places from OpenStreetMap and the Pleiades gazetteer. Positions are approximate.</p>
      </figcaption>
    </figure>
  );
}
