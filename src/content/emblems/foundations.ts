/** Emblems for the Foundations lessons: inner SVG markup on a 64 by 64 grid. See index.ts for the classes. */
export const foundations: Record<string, string> = {
  'resurrection': `
    <path class="e-soft" d="M8 54 Q32 6 56 54 Z"/>
    <path class="e-line" d="M8 54 Q32 6 56 54"/>
    <path class="e-ink" d="M24 54 V40 a8 8 0 0 1 16 0 V54 Z"/>
    <circle class="e-accent" cx="47" cy="46" r="9"/>
    <path class="e-accent-line" d="M32 22 V14 M22 25 l-5 -6 M42 25 l5 -6"/>
    <path class="e-line" d="M4 54 H60"/>`,
  'archaeology-and-the-bible': `
    <path class="e-soft" d="M12 14 h34 l6 8 v30 H12 Z"/>
    <path class="e-line" d="M12 14 h34 l6 8 v30 H12 Z"/>
    <path class="e-accent-line" d="M19 25 h22 M19 33 h26 M19 41 h18"/>
    <path class="e-line" d="M46 14 l-3 7 l5 5 l-4 6"/>
    <path class="e-line" d="M6 56 H58"/>`,
  'ancient-writers': `
    <rect class="e-soft" x="6" y="14" width="24" height="36" rx="2"/>
    <rect class="e-soft" x="34" y="14" width="24" height="36" rx="2"/>
    <rect class="e-line" x="6" y="14" width="24" height="36" rx="2"/>
    <rect class="e-line" x="34" y="14" width="24" height="36" rx="2"/>
    <path class="e-ink" d="M30 22 h4 v4 h-4 Z M30 38 h4 v4 h-4 Z"/>
    <path class="e-line" d="M11 23 h14 M11 31 h14 M11 39 h9"/>
    <path class="e-accent-line" d="M39 23 h14 M39 31 h8"/>
    <path class="e-accent" d="M40 50 L56 30 l4 3 L44 53 l-6 3 Z"/>`,
  'disputed-translations': `
    <path class="e-soft" d="M6 10 h22 v34 h-22 Z M36 20 h22 v34 h-22 Z"/>
    <path class="e-line" d="M6 10 h22 v34 h-22 Z"/>
    <path class="e-line" d="M36 20 h22 v34 h-22 Z"/>
    <path class="e-line" d="M11 18 h12 M11 34 h12 M41 28 h12 M41 44 h12"/>
    <path class="e-accent-line" d="M11 26 h12 M41 36 h7"/>
    <path class="e-accent-line" d="M28 26 h10 v10 M35 32 l3 4 l3 -4"/>`,
  'existence-of-god': `
    <path class="e-soft" d="M6 46 a26 26 0 0 1 52 0 Z"/>
    <path class="e-line" d="M6 46 a26 26 0 0 1 52 0 Z"/>
    <path class="e-line" d="M12 46 h-6 M58 46 h-6 M14 28 l4 3 M50 28 l-4 3"/>
    <path class="e-accent" d="M29 20 h6 l-1 8 h-4 Z"/>
    <path class="e-ink" d="M30 46 L31 26 h2 L34 46 Z"/>
    <circle class="e-ink" cx="32" cy="46" r="5"/>
    <path class="e-line" d="M4 56 H60"/>`,
  'fulfilled-prophecy': `
    <rect class="e-soft" x="14" y="26" width="36" height="28"/>
    <path class="e-line" d="M14 26 H50 M14 54 H50"/>
    <rect class="e-ink" x="8" y="20" width="7" height="40" rx="3"/>
    <rect class="e-ink" x="49" y="20" width="7" height="40" rx="3"/>
    <path class="e-line" d="M21 34 h22 M21 40 h22 M21 46 h14"/>
    <polygon class="e-accent" points="32,4 34.5,10.5 41,13 34.5,15.5 32,22 29.5,15.5 23,13 29.5,10.5"/>`,
  'hard-passages': `
    <rect class="e-soft" x="4" y="22" width="26" height="20" rx="10"/>
    <rect class="e-line" x="4" y="22" width="26" height="20" rx="10"/>
    <path class="e-soft" d="M44 22 h6 a10 10 0 0 1 0 20 h-6 Z"/>
    <path class="e-line" d="M40 22 h10 a10 10 0 0 1 0 20 h-10"/>
    <path class="e-ink" d="M10 29 h14 v6 h-14 Z M46 29 h8 v6 h-8 Z"/>
    <path class="e-accent-line" d="M35 12 v10 M35 42 v10 M41 14 l-2 6 M41 50 l-2 -6"/>`,
  'having-the-conversation': `
    <path class="e-soft" d="M8 30 h18 v10 a9 9 0 0 1 -18 0 Z M38 30 h18 v10 a9 9 0 0 1 -18 0 Z"/>
    <path class="e-line" d="M8 30 h18 v10 a9 9 0 0 1 -18 0 Z"/>
    <path class="e-line" d="M38 30 h18 v10 a9 9 0 0 1 -18 0 Z"/>
    <path class="e-line" d="M8 34 h-2 a4 4 0 0 0 0 8 h3 M56 34 h2 a4 4 0 0 1 0 8 h-3"/>
    <path class="e-accent-line" d="M17 24 q-4 -4 0 -8 q4 -4 0 -8 M47 24 q4 -4 0 -8 q-4 -4 0 -8"/>
    <path class="e-ink" d="M4 52 H60 v4 H4 Z"/>`,
  'how-we-got-the-bible': `
    <path class="e-soft" d="M8 40 h34 v16 h-34 Z"/>
    <path class="e-ink" d="M6 38 h38 v5 h-38 Z M6 53 h38 v5 h-38 Z"/>
    <path class="e-line" d="M10 43 v10 M42 46 h-26 M42 50 h-26"/>
    <path class="e-accent" d="M58 6 Q40 10 34 30 l4 2 Q54 24 58 6 Z"/>
    <path class="e-line" d="M36 31 L28 44"/>
    <path class="e-ink" d="M48 46 h10 l2 12 h-14 Z"/>`,
  'identity-of-jesus': `
    <path class="e-soft" d="M8 46 L6 20 L20 32 L32 12 L44 32 L58 20 L56 46 Z"/>
    <path class="e-line" d="M8 46 L6 20 L20 32 L32 12 L44 32 L58 20 L56 46 Z"/>
    <rect class="e-ink" x="8" y="46" width="48" height="8"/>
    <circle class="e-accent" cx="32" cy="9" r="4"/>
    <circle class="e-accent" cx="6" cy="18" r="3"/>
    <circle class="e-accent" cx="58" cy="18" r="3"/>
    <circle class="e-accent" cx="32" cy="38" r="4"/>`,
  'jesus-only-way': `
    <path class="e-soft" d="M4 30 h56 v26 h-56 Z"/>
    <path class="e-line" d="M4 30 H24 M40 30 H60 M4 56 H60"/>
    <path class="e-line" d="M12 30 v26 M52 30 v26 M4 43 h8 M52 43 h8"/>
    <path class="e-ink" d="M20 56 V20 a12 12 0 0 1 24 0 V56 h-5 V21 a7 7 0 0 0 -14 0 V56 Z"/>
    <path class="e-accent" d="M25 56 V22 a7 7 0 0 1 14 0 V56 Z"/>`,
  'problem-of-evil': `
    <path class="e-soft" d="M4 56 Q22 34 44 56 Z"/>
    <path class="e-line" d="M4 56 Q22 34 44 56"/>
    <path class="e-ink" d="M20 8 h6 v10 h10 v6 h-10 v24 h-6 v-24 h-10 v-6 h10 Z"/>
    <path class="e-accent" d="M50 22 q9 12 9 18 a9 9 0 0 1 -18 0 q0 -6 9 -18 Z"/>
    <path class="e-line" d="M4 56 H60"/>`,
  'reliability-of-scripture': `
    <path class="e-soft" d="M10 8 l12 -2 l8 4 l14 -3 l10 6 l-3 12 l5 10 l-6 14 l-12 9 l-14 -4 l-12 2 l-6 -14 l4 -12 l-5 -10 Z"/>
    <path class="e-line" d="M10 8 l12 -2 l8 4 l14 -3 l10 6 l-3 12 l5 10 l-6 14 l-12 9 l-14 -4 l-12 2 l-6 -14 l4 -12 l-5 -10 Z"/>
    <path class="e-line" d="M14 18 h34 M12 34 h40 M12 42 h34"/>
    <path class="e-accent-line" d="M13 26 h36 M20 50 h20"/>`,
  'science-and-faith': `
    <path class="e-soft" d="M8 34 L44 14 l6 10 L14 44 Z"/>
    <path class="e-line" d="M8 34 L44 14 l6 10 L14 44 Z"/>
    <path class="e-ink" d="M42 12 l8 -4 l8 14 l-8 4 Z"/>
    <path class="e-line" d="M28 38 L18 58 M28 38 L40 58 M28 38 V58"/>
    <polygon class="e-accent" points="14,6 16,11 21,13 16,15 14,20 12,15 7,13 12,11"/>`,
  'truth-and-relativism': `
    <path class="e-ink" d="M14 22 Q14 12 28 12 H42 Q56 12 56 28 V52 h-8 V40 H32 v12 h-8 V36 Q20 36 20 44 Q20 52 12 52 Q6 52 6 46 h4 Q10 48 12 48 Q15 48 15 42 V30 Q14 26 14 22 Z"/>
    <path class="e-soft" d="M24 16 q8 0 8 9 q0 8 -6 9 q-4 -6 -2 -18 Z"/>
    <path class="e-line" d="M24 16 q8 0 8 9 q0 8 -6 9"/>
    <circle class="e-accent" cx="19" cy="22" r="2"/>
    <path class="e-accent-line" d="M56 20 q4 4 2 10"/>
    <path class="e-line" d="M4 56 H60"/>`,
};
