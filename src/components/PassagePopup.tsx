import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { loadPassages, type Passage } from '../lib/passages';
import { parseRef } from '../lib/references';

interface OpenState {
  id: number;
  ref: string;
  anchor: HTMLElement;
}

const PopupContext = createContext<(ref: string, anchor: HTMLElement) => void>(() => {});

/** Opens the passage popup for a citation. */
export const useOpenPassage = () => useContext(PopupContext);

const SOURCE_SITE = { quran: 'quran.com', bukhari: 'sunnah.com', muslim: 'sunnah.com', bible: 'BibleGateway' } as const;

export function PassageProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<OpenState | null>(null);
  const current = useRef<OpenState | null>(null);
  current.current = open;
  const openPassage = useCallback((ref: string, anchor: HTMLElement) => {
    const cur = current.current;
    setOpen(cur?.ref === ref && cur.anchor === anchor ? null : { id: Date.now(), ref, anchor });
  }, []);
  const close = useCallback(() => {
    current.current?.anchor.focus({ preventScroll: true });
    setOpen(null);
  }, []);
  return (
    <PopupContext.Provider value={openPassage}>
      {children}
      {open && <Popup key={open.id} state={open} onClose={close} />}
    </PopupContext.Provider>
  );
}

function Popup({ state, onClose }: { state: OpenState; onClose: () => void }) {
  const { ref, anchor } = state;
  const parsed = parseRef(ref);
  const [passage, setPassage] = useState<Passage | null | undefined>(undefined);
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let live = true;
    loadPassages()
      .then((all) => live && setPassage(all[ref] ?? null))
      .catch(() => live && setPassage(null));
    return () => {
      live = false;
    };
  }, [ref]);

  // Desktop: anchor the card next to the citation. Phones: CSS turns it into a bottom sheet.
  const place = useCallback(() => {
    const el = box.current;
    if (!el || window.innerWidth < 640) return setPos(null);
    const r = anchor.getBoundingClientRect();
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    const gap = 8;
    const below = r.bottom + gap + h <= window.innerHeight || r.top - gap - h < 0;
    setPos({
      top: below ? r.bottom + gap : r.top - gap - h,
      left: Math.min(Math.max(16, r.left), window.innerWidth - w - 16),
    });
  }, [anchor]);

  useLayoutEffect(place, [place, passage]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    const onDown = (e: PointerEvent) => {
      const t = e.target as Node;
      if (!box.current?.contains(t) && !anchor.contains(t)) onClose();
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('resize', place);
    window.addEventListener('scroll', place, true);
    box.current?.focus({ preventScroll: true });
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('resize', place);
      window.removeEventListener('scroll', place, true);
    };
  }, [anchor, onClose, place]);

  return (
    <>
      <div className="passage-backdrop" aria-hidden />
      <div
        ref={box}
        className={`passage ${parsed?.kind ?? ''}`}
        role="dialog"
        aria-label={ref}
        tabIndex={-1}
        style={pos ? { top: pos.top, left: pos.left } : undefined}
        data-anchored={pos ? 'true' : 'false'}
      >
        <header className="passage-head">
          <div>
            <strong>{ref}</strong>
            {passage && <div className="passage-src">{passage.src}</div>}
          </div>
          <button className="passage-close" onClick={onClose} aria-label="Close">×</button>
        </header>
        <div className="passage-body">
          {passage === undefined && <p className="muted">Loading…</p>}
          {passage === null && <p className="muted">Passage text isn’t available offline for this reference.</p>}
          {passage?.t && <p>{passage.t}</p>}
          {passage?.v && (
            <p>
              {passage.v.map(([n, text]) => (
                <span key={n}>
                  {passage.v!.length > 1 && <sup className="vnum">{n.split(':')[1]}</sup>}
                  {text}{' '}
                </span>
              ))}
            </p>
          )}
        </div>
        {parsed && (
          <a className="passage-link" href={parsed.url} target="_blank" rel="noopener noreferrer">
            Read in context on {SOURCE_SITE[parsed.kind]} ↗
          </a>
        )}
      </div>
    </>
  );
}
