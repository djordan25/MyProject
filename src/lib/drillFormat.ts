import { useState } from 'react';

export type DrillFormat = 'sparring' | 'cards' | 'listen';
const KEY = 'apologetics-drill-format';

function load(): DrillFormat {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'cards' || v === 'listen' ? v : 'sparring';
  } catch {
    return 'sparring';
  }
}

/** Whether objections are practised as a conversation or as cards; remembered on this device. */
export function useDrillFormat(): [DrillFormat, (f: DrillFormat) => void] {
  const [format, setFormat] = useState(load);
  return [
    format,
    (f) => {
      setFormat(f);
      try {
        localStorage.setItem(KEY, f);
      } catch {
        /* storage unavailable: the choice lasts for this visit only */
      }
    },
  ];
}
