import { useRef, type KeyboardEvent, type ReactNode } from 'react';
import { EdChip } from 'editorial-ui';

interface Props<T extends string | number> {
  label: string;
  value: T;
  onChange: (value: T) => void;
  options: { id: T; label: ReactNode; count?: number }[];
}

/**
 * A row of EditorialUI chips that behaves as one radio group: a single tab stop, arrow keys (and Home/End)
 * move and select, and re-selecting the current chip does nothing.
 */
export default function RadioChips<T extends string | number>({ label, value, onChange, options }: Props<T>) {
  const chips = useRef<(HTMLButtonElement | null)[]>([]);
  const current = Math.max(0, options.findIndex((o) => o.id === value));

  const go = (index: number) => {
    const n = (index + options.length) % options.length;
    if (options[n].id !== value) onChange(options[n].id);
    chips.current[n]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    const step = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
    if (step) go(current + step);
    else if (e.key === 'Home') go(0);
    else if (e.key === 'End') go(options.length - 1);
    else return;
    e.preventDefault();
  };

  return (
    <div className="format-toggle" role="radiogroup" aria-label={label} onKeyDown={onKeyDown}>
      {options.map((o, i) => (
        <EdChip
          key={o.id}
          ref={(el) => {
            chips.current[i] = el;
          }}
          kind="radio"
          selected={o.id === value}
          count={o.count}
          tabIndex={i === current ? 0 : -1}
          onSelectedChange={() => o.id !== value && onChange(o.id)}
        >
          {o.label}
        </EdChip>
      ))}
    </div>
  );
}
