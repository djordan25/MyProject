/** Emblems: inner SVG markup on a 64 by 64 grid. See index.ts for the classes. */
export const sects: Record<string, string> = {
  'sunni-overview': `
    <rect class="e-soft" x="8" y="10" width="48" height="8"/>
    <rect class="e-line" x="8" y="10" width="48" height="8"/>
    <path class="e-line" d="M14 18 V50 M26 18 V50 M38 18 V50 M50 18 V50"/>
    <path class="e-accent-line" d="M11 22 h6 M23 22 h6 M35 22 h6 M47 22 h6"/>
    <rect class="e-ink" x="6" y="50" width="52" height="6"/>`,
  'sunni-companions': `
    <path class="e-soft" d="M6 26 L32 12 L58 26 V32 H6 Z"/>
    <path class="e-line" d="M6 26 L32 12 L58 26 V32 H6 Z"/>
    <path class="e-accent-line" d="M14 26 h36"/>
    <path class="e-line" d="M12 32 V54 M52 32 V54 M32 32 V54"/>
    <path class="e-line" d="M4 54 H60"/>
    <path class="e-line" d="M16 46 H28 M36 46 H48"/>`,
  'sunni-salafi-sufi': `
    <path class="e-soft" d="M26 6 H38 V24 L58 50 V58 H6 V50 L26 24 Z"/>
    <path class="e-line" d="M26 6 V24 L6 52 M38 6 V24 L58 52"/>
    <path class="e-line" d="M32 30 L20 58 M32 30 L44 58"/>
    <path class="e-ink" d="M32 30 L24 58 H12 Z"/>
    <path class="e-accent" d="M32 30 L40 58 H52 Z"/>`,
  'shia-overview': `
    <circle class="e-soft" cx="32" cy="32" r="14"/>
    <path class="e-ink" d="M44.0 7.2 a4 4 0 1 0 0.1 0 Z M52.8 16.0 a4 4 0 1 0 0.1 0 Z M56.0 28.0 a4 4 0 1 0 0.1 0 Z M52.8 40.0 a4 4 0 1 0 0.1 0 Z M44.0 48.8 a4 4 0 1 0 0.1 0 Z M32.0 52.0 a4 4 0 1 0 0.1 0 Z M20.0 48.8 a4 4 0 1 0 0.1 0 Z M11.2 40.0 a4 4 0 1 0 0.1 0 Z M8.0 28.0 a4 4 0 1 0 0.1 0 Z M11.2 16.0 a4 4 0 1 0 0.1 0 Z M20.0 7.2 a4 4 0 1 0 0.1 0 Z"/>
    <circle class="e-accent-line" cx="32" cy="8" r="4"/>`,
  'shia-imamate': `
    <ellipse class="e-soft" cx="26" cy="48" rx="20" ry="8"/>
    <ellipse class="e-line" cx="26" cy="48" rx="20" ry="8"/>
    <path class="e-accent-line" d="M16 47 h10 M24 51 h10"/>
    <path class="e-line" d="M50 56 Q46 36 48 20"/>
    <path class="e-line" d="M48 20 Q38 14 32 22 M48 20 Q42 8 34 10 M48 20 Q54 8 60 12 M48 20 Q58 16 60 26"/>
    <circle class="e-accent" cx="14" cy="14" r="6"/>`,
  'shia-sources': `
    <path class="e-soft" d="M8 22 L40 14 L56 22 V44 L24 52 L8 44 Z"/>
    <path class="e-line" d="M8 22 L40 14 L56 22 L24 30 Z"/>
    <path class="e-line" d="M8 22 V44 L24 52 V30 M56 22 V44 L24 52"/>
    <path class="e-line" d="M30 34 L52 28 M30 40 L52 34"/>
    <path class="e-accent" d="M38 26 h8 v20 l-4 -4 l-4 4 Z"/>`,
  'shia-karbala-gospel': `
    <path class="e-soft" d="M10 40 L28 12 L46 40 Z"/>
    <path class="e-line" d="M10 40 L28 12 L46 40 Z"/>
    <path class="e-ink" d="M22 40 L28 26 L34 40 Z"/>
    <path class="e-line" d="M28 12 V6"/>
    <path class="e-accent" d="M28 5 h10 l-3 3 l3 3 h-10 Z"/>
    <path class="e-line" d="M4 40 H60"/>
    <path class="e-accent-line" d="M6 48 q6 -4 12 0 t12 0 t12 0 t12 0 M10 56 q6 -4 12 0 t12 0 t12 0"/>`,
  'quranist-overview': `
    <path class="e-line" d="M6 50 H58"/>
    <path class="e-line" d="M10 50 V58 M54 50 V58"/>
    <rect class="e-soft" x="12" y="14" width="14" height="36"/>
    <rect class="e-line" x="12" y="14" width="14" height="36"/>
    <path class="e-accent-line" d="M12 22 h14 M12 42 h14"/>
    <path class="e-line" d="M32 50 V46 M32 40 V36 M32 30 V26 M32 20 V16 M40 50 V46 M40 40 V36 M40 30 V26 M40 20 V16 M48 50 V46 M48 40 V36 M48 30 V26 M48 20 V16"/>`,
  'quranist-answering': `
    <rect class="e-soft" x="16" y="10" width="32" height="44"/>
    <rect class="e-line" x="16" y="10" width="32" height="44"/>
    <path class="e-accent-line" d="M24 46 V28 a8 8 0 0 1 16 0 V46 Z"/>
    <path class="e-line" d="M18 6 V10 M24 6 V10 M30 6 V10 M36 6 V10 M42 6 V10 M46 6 V10"/>
    <path class="e-line" d="M18 54 V58 M24 54 V58 M30 54 V58 M36 54 V58 M42 54 V58 M46 54 V58"/>
    <circle class="e-ink" cx="32" cy="17" r="2.5"/>`,
  'ahmadiyya-overview': `
    <circle class="e-accent" cx="26" cy="22" r="14"/>
    <circle class="e-ink" cx="33" cy="22" r="12"/>
    <path class="e-accent-line" d="M8 8 l-3 -3 M6 22 h-2 M8 36 l-3 3"/>
    <path class="e-soft" d="M6 56 V48 h10 v-6 h10 v6 h8 v-8 h10 v8 h14 v8 Z"/>
    <path class="e-line" d="M6 56 V48 h10 v-6 h10 v6 h8 v-8 h10 v8 h14 v8"/>
    <path class="e-line" d="M4 56 H60"/>`,
  'ahmadiyya-jesus-in-india': `
    <path class="e-soft" d="M4 40 L20 12 L30 28 L42 8 L60 40 Z"/>
    <path class="e-line" d="M4 40 L20 12 L30 28 L42 8 L60 40"/>
    <path class="e-line" d="M15 21 l5 4 l4 -4 M37 16 l5 5 l5 -5"/>
    <path class="e-accent-line" d="M10 58 Q30 54 26 48 Q22 42 36 40"/>
    <path class="e-ink" d="M42 56 V48 a6 6 0 0 1 12 0 V56 Z"/>
    <path class="e-line" d="M38 56 H58"/>`,
  'noi-overview': `
    <rect class="e-soft" x="10" y="6" width="28" height="50"/>
    <rect class="e-line" x="10" y="6" width="28" height="50"/>
    <rect class="e-line" x="16" y="12" width="16" height="14"/>
    <circle class="e-ink" cx="32" cy="34" r="2.5"/>
    <rect class="e-accent" x="40" y="40" width="20" height="16"/>
    <path class="e-accent-line" d="M46 40 v-5 h8 v5"/>
    <path class="e-line" d="M4 56 H60"/>`,
  'noi-answering': `
    <circle class="e-soft" cx="13" cy="38" r="9"/>
    <circle class="e-soft" cx="51" cy="38" r="9"/>
    <path class="e-line" d="M4 38 a9 9 0 1 0 18 0 a9 9 0 1 0 -18 0 Z M42 38 a9 9 0 1 0 18 0 a9 9 0 1 0 -18 0 Z"/>
    <path class="e-line" d="M8 38 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0 Z M46 38 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0 Z"/>
    <ellipse class="e-line" cx="26" cy="38" rx="4" ry="2.5"/>
    <ellipse class="e-line" cx="38" cy="38" rx="4" ry="2.5"/>
    <path class="e-accent-line" d="M32 30 V20 M27 31 l-4 -8 M37 31 l4 -8 M32 46 V54"/>`,
  'druze-overview': `
    <ellipse class="e-soft" cx="32" cy="32" rx="26" ry="10"/>
    <path class="e-line" d="M12 22 H52 a6 10 0 0 1 0 20 H12 a6 10 0 0 1 0 -20 Z"/>
    <path class="e-line" d="M12 22 a6 10 0 0 1 0 20"/>
    <path class="e-accent-line" d="M30 22 V42 M34 22 V42"/>
    <path class="e-accent-line" d="M32 42 L26 56 M32 42 L38 56"/>
    <circle class="e-accent" cx="32" cy="32" r="6"/>`,
  'alawites': `
    <path class="e-soft" d="M4 44 Q16 10 30 30 Q40 14 60 44 Z"/>
    <path class="e-line" d="M4 44 Q16 10 30 30 Q40 14 60 44"/>
    <path class="e-ink" d="M22 44 v-8 l5 -4 l5 4 v8 Z"/>
    <path class="e-ink" d="M36 44 v-6 l4 -3 l4 3 v6 Z"/>
    <path class="e-line" d="M4 44 H60"/>
    <path class="e-accent-line" d="M6 51 q6 -4 12 0 t12 0 t12 0 t12 0 M12 58 q6 -4 12 0 t12 0 t12 0"/>`,
  'alevis': `
    <path class="e-soft" d="M10.8 53.2 A13 10 -45 1 1 29.2 34.8 A13 10 -45 1 1 10.8 53.2 Z"/>
    <path class="e-line" d="M10.8 53.2 A13 10 -45 1 1 29.2 34.8 A13 10 -45 1 1 10.8 53.2 Z"/>
    <path class="e-line" d="M28 36 L54 10"/>
    <path class="e-line" d="M50 8 l6 6"/>
    <path class="e-ink" d="M47 11 l-4 -1 M55 17 l1 4"/>
    <circle class="e-accent" cx="20" cy="44" r="3.5"/>
    <path class="e-accent-line" d="M34 30 l3 3 M40 24 l3 3"/>`,
};
