export type Theme = 'auto' | 'light' | 'dark';

const KEY = 'apologetics-theme';
const dark = () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches;

export function loadTheme(): Theme {
  try {
    const t = localStorage.getItem(KEY);
    return t === 'light' || t === 'dark' ? t : 'auto';
  } catch {
    return 'auto';
  }
}

let current: Theme = 'auto';

/** EditorialUI switches on data-theme, so 'auto' resolves the device setting to light or dark and follows changes. */
function paint() {
  const resolved = current === 'auto' ? (dark() ? 'dark' : 'light') : current;
  document.documentElement.dataset.theme = resolved;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', resolved === 'dark' ? '#0e1216' : '#f8fafd');
}

if (typeof window !== 'undefined' && window.matchMedia) {
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const onChange = () => current === 'auto' && paint();
  // Safari before 14 only has the deprecated addListener.
  if (mq.addEventListener) mq.addEventListener('change', onChange);
  else mq.addListener?.(onChange);
}

/** Applies the theme to the page and remembers it. 'auto' follows the device setting. */
export function applyTheme(theme: Theme): void {
  current = theme;
  paint();
  try {
    if (theme === 'auto') localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, theme);
  } catch {
    /* storage unavailable: the choice lasts for this visit only */
  }
}

export const nextTheme = (t: Theme): Theme => (t === 'auto' ? 'light' : t === 'light' ? 'dark' : 'auto');
