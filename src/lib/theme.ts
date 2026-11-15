export type Theme = 'auto' | 'light' | 'dark';

const KEY = 'apologetics-theme';

export function loadTheme(): Theme {
  try {
    const t = localStorage.getItem(KEY);
    return t === 'light' || t === 'dark' ? t : 'auto';
  } catch {
    return 'auto';
  }
}

/** Applies the theme to the page and remembers it. 'auto' follows the device setting. */
export function applyTheme(theme: Theme): void {
  if (theme === 'auto') delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = theme;
  try {
    if (theme === 'auto') localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, theme);
  } catch {
    /* storage unavailable: the choice lasts for this visit only */
  }
}

export const nextTheme = (t: Theme): Theme => (t === 'auto' ? 'light' : t === 'light' ? 'dark' : 'auto');
