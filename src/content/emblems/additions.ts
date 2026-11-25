/** Emblems for lessons added later: inner SVG markup on a 64 by 64 grid. See index.ts for the classes. */
export const additions: Record<string, string> = {
  'old-testament-apocrypha': `
    <rect class="e-soft" x="8" y="12" width="16" height="42"/>
    <rect class="e-line" x="8" y="12" width="16" height="42"/>
    <rect class="e-soft" x="40" y="12" width="16" height="42"/>
    <rect class="e-line" x="40" y="12" width="16" height="42"/>
    <rect class="e-accent" x="27" y="24" width="10" height="30"/>
    <path class="e-line" d="M12 20 h8 M12 26 h8 M44 20 h8 M44 26 h8"/>
    <path class="e-line" d="M4 56 H60"/>`,
  'other-gospels': `
    <path class="e-soft" d="M22 22 C10 30 12 54 24 56 h16 C52 54 54 30 42 22 Z"/>
    <path class="e-line" d="M22 22 C10 30 12 54 24 56 h16 C52 54 54 30 42 22"/>
    <path class="e-line" d="M20 22 h24 M23 16 h18 v6 h-18 Z"/>
    <rect class="e-accent" x="28" y="5" width="8" height="15"/>
    <path class="e-line" d="M18 38 h28"/>
    <path class="e-accent-line" d="M24 46 h16"/>`,
  'edges-of-the-canon': `
    <path class="e-line" d="M4 50 H46 M46 50 v8"/>
    <rect class="e-soft" x="8" y="20" width="8" height="30"/>
    <rect class="e-line" x="8" y="20" width="8" height="30"/>
    <rect class="e-ink" x="18" y="14" width="8" height="36"/>
    <rect class="e-soft" x="28" y="22" width="8" height="28"/>
    <rect class="e-line" x="28" y="22" width="8" height="28"/>
    <polygon class="e-accent" points="40,50 48,50 58,22 50,20"/>
    <path class="e-accent-line" d="M52 56 l6 0"/>`,
  'islam-quran-readings': `
    <path class="e-line" d="M14 58 L32 42 M50 58 L32 42"/>
    <path class="e-soft" d="M6 16 L32 24 L58 16 V34 L32 42 L6 34 Z"/>
    <path class="e-line" d="M6 16 L32 24 L58 16 V34 L32 42 L6 34 Z M32 24 V42"/>
    <path class="e-line" d="M12 23 l14 4 M38 27 l14 -4"/>
    <path class="e-accent-line" d="M12 29 l14 4 M38 33 l8 -2.4"/>`,
};
