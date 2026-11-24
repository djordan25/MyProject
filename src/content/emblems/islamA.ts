/** Emblems: inner SVG markup on a 64 by 64 grid. See index.ts for the classes. */
export const islamA: Record<string, string> = {
  'islam-understanding': `
    <rect class="e-ink" x="6" y="11" width="52" height="7"/>
    <path class="e-ink" d="M9 21 h6 v28 h-6 Z M19 21 h6 v28 h-6 Z M39 21 h6 v28 h-6 Z M49 21 h6 v28 h-6 Z"/>
    <rect class="e-accent" x="29" y="21" width="6" height="28"/>
    <rect class="e-ink" x="5" y="51" width="54" height="5"/>`,
  'islam-branches': `
    <path class="e-ink" d="M28 58 V40 L12 22 l4 -4 L30 32 V8 h6 v20 l12 -12 l4 4 L36 38 V58 Z"/>
    <circle class="e-soft" cx="12" cy="16" r="7"/>
    <circle class="e-line" cx="12" cy="16" r="7"/>
    <circle class="e-accent" cx="33" cy="9" r="5"/>
    <circle class="e-soft" cx="52" cy="14" r="7"/>
    <circle class="e-line" cx="52" cy="14" r="7"/>
    <path class="e-line" d="M16 58 H50"/>`,
  'islam-dilemma': `
    <rect class="e-ink" x="30" y="6" width="4" height="52"/>
    <polygon class="e-soft" points="34,12 52,12 59,18 52,24 34,24"/>
    <polygon class="e-line" points="34,12 52,12 59,18 52,24 34,24"/>
    <polygon class="e-accent" points="30,28 12,28 5,34 12,40 30,40"/>
    <path class="e-line" d="M20 58 H44"/>`,
  'islam-misunderstands-christianity': `
    <circle class="e-soft" cx="18" cy="34" r="12"/>
    <circle class="e-line" cx="18" cy="34" r="12"/>
    <circle class="e-soft" cx="46" cy="34" r="12"/>
    <circle class="e-line" cx="46" cy="34" r="12"/>
    <path class="e-line" d="M30 32 q2 -4 4 0 M6 30 L4 20 M58 30 L60 20"/>
    <path class="e-accent-line" d="M42 24 l5 8 l-5 4 l6 9"/>`,
  'islam-crucifixion': `
    <path class="e-ink" d="M12 8 h12 v4 h-4 l-1 38 l-1 6 l-1 -6 l-1 -38 h-4 Z"/>
    <path class="e-accent" d="M26 8 h12 v4 h-4 l-1 38 l-1 6 l-1 -6 l-1 -38 h-4 Z"/>
    <path class="e-ink" d="M40 8 h12 v4 h-4 l-1 38 l-1 6 l-1 -6 l-1 -38 h-4 Z"/>`,
  'islam-quran-oral': `
    <path class="e-line" d="M10 56 Q28 40 54 8"/>
    <path class="e-soft" d="M20 48 Q14 32 26 22 Q30 34 20 48 Z M32 37 Q28 22 40 12 Q44 24 32 37 Z M24 45 Q40 48 50 40 Q38 34 24 45 Z M37 31 Q50 34 58 24 Q46 20 37 31 Z"/>
    <path class="e-line" d="M20 48 Q14 32 26 22 Q30 34 20 48 Z M32 37 Q28 22 40 12 Q44 24 32 37 Z M24 45 Q40 48 50 40 Q38 34 24 45 Z M37 31 Q50 34 58 24 Q46 20 37 31 Z"/>
    <path class="e-accent-line" d="M21 40 l3 -9 M33 29 l4 -9 M32 43 l9 -2 M44 28 l8 -3"/>`,
  'islam-quran-preservation': `
    <polygon class="e-soft" points="5,33 20,29 25,50 10,54"/>
    <polygon class="e-line" points="5,33 20,29 25,50 10,54"/>
    <polygon class="e-soft" points="16,9 30,12 27,31 13,28"/>
    <polygon class="e-line" points="16,9 30,12 27,31 13,28"/>
    <rect class="e-ink" x="34" y="14" width="24" height="36" rx="2"/>
    <rect class="e-accent" x="42" y="26" width="8" height="12" rx="4"/>
    <path class="e-line" d="M4 56 H60"/>`,
  'islam-quran-manuscripts': `
    <rect class="e-soft" x="6" y="8" width="36" height="46"/>
    <rect class="e-line" x="6" y="8" width="36" height="46"/>
    <path class="e-line" d="M12 17 h24 M12 26 h10 M12 44 h14"/>
    <circle class="e-soft" cx="36" cy="34" r="12"/>
    <circle class="e-line" cx="36" cy="34" r="12"/>
    <path class="e-accent-line" d="M29 31 h14 M30 38 h11"/>
    <path class="e-ink" d="M43 45 l4 -4 l12 12 l-4 4 Z"/>`,
  'islam-quran-consistency': `
    <rect class="e-soft" x="14" y="12" width="36" height="40"/>
    <path class="e-line" d="M14 12 V52 M50 12 V52"/>
    <rect class="e-ink" x="8" y="6" width="48" height="7" rx="3"/>
    <rect class="e-ink" x="8" y="51" width="48" height="7" rx="3"/>
    <path class="e-line" d="M20 21 h24 M20 29 h24 M20 45 h18"/>
    <path class="e-line" d="M20 37 h24"/>
    <path class="e-accent-line" d="M17 41 L47 33"/>`,
  'islam-quran-history': `
    <path class="e-soft" d="M8 56 V44 h8 V32 h8 V20 h16 V32 h8 V44 h8 V56 Z"/>
    <path class="e-line" d="M8 56 V44 h8 V32 h8 V20 h16 V32 h8 V44 h8 V56 Z"/>
    <path class="e-line" d="M16 44 h32 M24 32 h16 M32 20 v12 M24 44 v12 M40 44 v12 M32 32 v12"/>
    <rect class="e-accent" x="27" y="9" width="10" height="10"/>
    <path class="e-line" d="M4 56 H60"/>`,
  'islam-quran-sources': `
    <path class="e-soft" d="M6 48 q2 -12 14 -12 q4 -8 10 -4 l6 2 l-6 3 q2 13 -10 15 h-10 Z"/>
    <path class="e-line" d="M6 48 q2 -12 14 -12 q4 -8 10 -4 l6 2 l-6 3 q2 13 -10 15 h-10 Z"/>
    <circle class="e-ink" cx="27" cy="34" r="1.5"/>
    <path class="e-line" d="M4 56 H38"/>
    <path class="e-accent" d="M32 14 q9 -6 14 4 q5 -10 14 -8 q-8 4 -9 13 l-5 5 l-4 -6 q-3 -8 -10 -8 Z"/>`,
  'islam-hadith-reliability': `
    <rect class="e-line" x="5" y="23" width="22" height="18" rx="9"/>
    <path class="e-accent-line" d="M30 23 a9 9 0 0 0 0 18 M34 23 a9 9 0 0 1 0 18"/>
    <rect class="e-line" x="37" y="23" width="22" height="18" rx="9"/>
    <path class="e-accent-line" d="M32 17 v-5 M32 47 v5"/>`,
  'islam-scientific-miracles': `
    <path class="e-accent" d="M18 36 a14 14 0 0 1 28 0 Z"/>
    <path class="e-accent-line" d="M32 16 V8 M18 22 l-6 -6 M46 22 l6 -6"/>
    <ellipse class="e-soft" cx="32" cy="42" rx="26" ry="10"/>
    <ellipse class="e-line" cx="32" cy="42" rx="26" ry="10"/>
    <path class="e-line" d="M16 42 q4 -3 8 0 t8 0 t8 0 t8 0 M24 47 q4 -3 8 0 t8 0"/>`,
};
