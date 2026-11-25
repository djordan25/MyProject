/**
 * Places the lessons name, with their coordinates (checked against OpenStreetMap and, for ancient sites, the Pleiades
 * gazetteer; Ghadir Khumm is placed at al-Juhfa, the nearest site either one records), and the places to show on each lesson's map.
 * A map only ever shows a place its lesson mentions: the list is checked against the lesson text by a test.
 */
export interface Place {
  name: string;
  lat: number;
  lon: number;
  /** Other spellings to look for in the lesson text. */
  also?: string[];
}

const place = (name: string, lat: number, lon: number, also?: string[]): Place => ({ name, lat, lon, also });

export const PLACES: Place[] = [
  place('Jerusalem', 31.78, 35.22), place('Mecca', 21.42, 39.83), place('Medina', 24.47, 39.61), place('Rome', 41.9, 12.5),
  place('Damascus', 33.51, 36.29), place('Antioch', 36.2, 36.16), place('Bethlehem', 31.7, 35.2), place('Nazareth', 32.7, 35.3),
  place('Nineveh', 36.36, 43.15), place('Nicaea', 40.43, 29.72), place('Athens', 37.98, 23.73), place('Babylon', 32.54, 44.42),
  place('Cairo', 30.04, 31.24), place('Karbala', 32.62, 44.02), place('Ghadir Khumm', 22.71, 39.15), place('Corinth', 37.91, 22.88),
  place('Najran', 17.54, 44.23), place('Kufa', 32.03, 44.4), place('Alexandria', 31.2, 29.92), place('Caesarea', 32.5, 34.89),
  place('Ephesus', 37.94, 27.34), place('Badr', 23.78, 38.79), place('Lahore', 31.55, 74.34), place('Samarra', 34.2, 43.87),
  place('Khaybar', 25.7, 39.29), place('Najaf', 32.0, 44.34), place('Constantinople', 41.01, 28.98), place('Istanbul', 41.01, 28.98),
  place('Delphi', 38.48, 22.5), place('Carthage', 36.85, 10.32), place('Edessa', 37.16, 38.79), place('Gaza', 31.5, 34.47),
  place('Srinagar', 34.08, 74.8), place('Basra', 30.51, 47.81), place('Baghdad', 33.32, 44.37), place('Sanaa', 15.35, 44.21, ['Sana‘a']),
  place('Tabuk', 28.38, 36.57), place('Qadian', 31.82, 75.38), place('Tel Dan', 33.25, 35.65), place('Jericho', 31.87, 35.44),
  place('Lachish', 31.56, 34.85), place('Thessalonica', 40.64, 22.94), place('Megiddo', 32.58, 35.18), place('Hazor', 33.02, 35.57),
  place('Chalcedon', 40.98, 29.03), place('Petra', 30.33, 35.44), place('Marib', 15.42, 45.34), place('Aksum', 14.13, 38.72),
  place('Amritsar', 31.63, 74.87), place('Ludhiana', 30.9, 75.85), place('Nisibis', 37.07, 41.22), place('Hemis', 33.91, 77.7),
  place('Sivas', 39.75, 37.02), place('Kahramanmaraş', 37.58, 36.93), place('Dersim', 39.11, 39.55), place('Tehran', 35.69, 51.39),
  place('Qom', 34.64, 50.88), place('Mashhad', 36.3, 59.61), place('Latakia', 35.52, 35.79), place('Aleppo', 36.2, 37.16),
  place('Oxyrhynchus', 28.54, 30.66), place('Akhmim', 26.56, 31.75), place('Hippo', 36.88, 7.75), place('Trent', 46.07, 11.12),
  place('Masada', 31.32, 35.35), place('Leipzig', 51.34, 12.37), place('Jamnia', 31.87, 34.74), place('Florence', 43.77, 11.25),
  place('Lyon', 45.76, 4.84), place('Vienna', 48.21, 16.37), place('Rhossus', 36.42, 35.89),
  place('Homs', 34.73, 36.72), place('Amman', 31.95, 35.93), place('Nag Hammadi', 26.05, 32.24), place('Tashkent', 41.3, 69.24),
];

/** Topic id to the names of the places on its map, roughly in the order the lesson meets them. */
export const MAPS: Record<string, string[]> = {
  'archaeology-and-the-bible': ['Tel Dan', 'Hazor', 'Megiddo', 'Jericho', 'Jerusalem', 'Lachish', 'Caesarea', 'Nazareth', 'Babylon', 'Nineveh', 'Corinth', 'Delphi', 'Thessalonica'],
  'canons-compared': ['Jerusalem', 'Nicaea', 'Hippo', 'Carthage', 'Trent'],
  'old-testament-apocrypha': ['Jerusalem', 'Alexandria', 'Jamnia', 'Masada', 'Bethlehem', 'Rome', 'Hippo', 'Carthage', 'Florence', 'Trent', 'Leipzig'],
  'other-gospels': ['Nag Hammadi', 'Oxyrhynchus', 'Akhmim', 'Cairo', 'Alexandria', 'Antioch', 'Rhossus', 'Lyon', 'Nicaea', 'Jerusalem'],
  'edges-of-the-canon': ['Rome', 'Corinth', 'Alexandria', 'Carthage', 'Hippo', 'Cairo', 'Vienna', 'Jerusalem', 'Nazareth', 'Mecca'],
  'islam-quran-readings': ['Mecca', 'Medina', 'Kufa', 'Basra', 'Damascus', 'Baghdad', 'Cairo', 'Istanbul'],
  'reliability-of-scripture': ['Jerusalem', 'Caesarea', 'Corinth', 'Delphi', 'Rome', 'Bethlehem'],
  'ancient-writers': ['Rome', 'Jerusalem', 'Caesarea', 'Alexandria', 'Corinth', 'Bethlehem', 'Nazareth'],
  'how-we-got-the-bible': ['Nicaea', 'Constantinople', 'Ephesus', 'Nag Hammadi'],
  'fulfilled-prophecy': ['Bethlehem', 'Nazareth', 'Jerusalem', 'Babylon', 'Rome'],
  'islam-trinity': ['Nicaea', 'Antioch', 'Damascus', 'Rome'],
  'islam-outside-writers': ['Mecca', 'Medina', 'Jerusalem', 'Damascus', 'Gaza', 'Edessa', 'Carthage', 'Rome'],
  'islam-archaeology': ['Petra', 'Mecca', 'Medina', 'Jerusalem', 'Marib', 'Edessa'],
  'islam-quran-manuscripts': ['Sanaa', 'Cairo', 'Istanbul', 'Tashkent', 'Mecca', 'Medina'],
  'islam-night-journey': ['Mecca', 'Jerusalem', 'Medina'],
  'islam-farthest-mosque': ['Mecca', 'Jerusalem', 'Medina'],
  'islam-quran-challenge': ['Mecca', 'Badr', 'Jerusalem', 'Nineveh', 'Bethlehem'],
  'islam-muhammad-warfare': ['Mecca', 'Medina', 'Badr', 'Tabuk', 'Constantinople', 'Jerusalem'],
  'islam-quran-history': ['Mecca', 'Medina', 'Najran', 'Babylon', 'Khaybar', 'Samarra', 'Damascus'],
  'shia-overview': ['Medina', 'Ghadir Khumm', 'Kufa', 'Karbala', 'Najaf', 'Samarra', 'Qom', 'Mashhad', 'Cairo'],
  'shia-imamate': ['Mecca', 'Medina', 'Ghadir Khumm', 'Kufa', 'Tabuk', 'Najran'],
  'shia-karbala-gospel': ['Mecca', 'Medina', 'Kufa', 'Karbala', 'Damascus', 'Samarra'],
  'sunni-companions': ['Mecca', 'Medina', 'Kufa', 'Basra', 'Karbala', 'Antioch', 'Jerusalem'],
  'ahmadiyya-overview': ['Qadian', 'Ludhiana', 'Amritsar', 'Lahore'],
  'ahmadiyya-jesus-in-india': ['Jerusalem', 'Nisibis', 'Srinagar', 'Qadian', 'Hemis'],
  'alevis': ['Sivas', 'Kahramanmaraş', 'Dersim', 'Istanbul', 'Karbala'],
  'alawites': ['Latakia', 'Aleppo', 'Homs', 'Damascus'],
  'druze-overview': ['Cairo', 'Damascus', 'Baghdad'],
  'noi-answering': ['Aksum', 'Alexandria', 'Carthage', 'Antioch', 'Athens', 'Corinth', 'Gaza', 'Jerusalem'],
};

/** A line drawn between two places where the lesson itself tells of a journey. */
export const ROUTES: Record<string, { from: string; to: string; label: string }> = {
  'islam-night-journey': { from: 'Mecca', to: 'Jerusalem', label: 'The journey as the story tells it' },
};

export const placeNamed = (name: string): Place | undefined => PLACES.find((p) => p.name === name);
