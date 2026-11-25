/** Emblems: inner SVG markup on a 64 by 64 grid. See index.ts for the classes. */
export const islamB: Record<string, string> = {
  'islam-muhammad-tested': `
    <polygon class="e-ink" points="4,56 13,40 19,43 29,18 35,9 42,21 46,19 60,56"/>
    <path class="e-accent" d="M28 40 V33 a5 5 0 0 1 10 0 V40 Z"/>
    <path class="e-accent-line" d="M33 40 Q36 48 28 56"/>
    <circle class="e-ink" cx="12" cy="12" r="2"/>
    <circle class="e-ink" cx="52" cy="8" r="2"/>
    <circle class="e-ink" cx="20" cy="24" r="1.5"/>`,
  'islam-muhammad-in-bible': `
    <path class="e-soft" d="M32 6 C44 20 48 28 48 38 a16 16 0 0 1 -32 0 C16 30 22 26 24 18 C28 22 30 16 32 6 Z"/>
    <path class="e-line" d="M32 6 C44 20 48 28 48 38 a16 16 0 0 1 -32 0 C16 30 22 26 24 18 C28 22 30 16 32 6 Z"/>
    <path class="e-accent" d="M32 30 C38 38 40 40 40 44 a8 8 0 0 1 -16 0 C24 40 28 38 32 30 Z"/>
    <path class="e-line" d="M10 58 h44"/>`,
  'islam-muhammad-warfare': `
    <path class="e-soft" d="M26 26 V48 L32 59 L38 48 V26 Z"/>
    <path class="e-line" d="M26 26 V48 L32 59 L38 48 V26 Z"/>
    <path class="e-accent-line" d="M26 34 H38"/>
    <rect class="e-ink" x="16" y="21" width="32" height="5" rx="2"/>
    <rect class="e-ink" x="29" y="9" width="6" height="13"/>
    <circle class="e-accent" cx="32" cy="8" r="4"/>`,
  'islam-quran-challenge': `
    <path class="e-line" d="M32 53 A21 21 0 0 1 20 14.8 M32 53 A21 21 0 0 0 44 14.8"/>
    <path class="e-ink" d="M29.6 51.1 Q23.9 47.9 18.6 51.8 Q24.4 55.1 29.6 51.1 Z M20.4 47.4 Q17 41.7 10.5 42.5 Q13.9 48.2 20.4 47.4 Z M14.3 39.5 Q14.2 32.9 8.1 30.4 Q8.2 36.9 14.3 39.5 Z M12.9 29.6 Q16.1 23.9 12.2 18.6 Q8.9 24.4 12.9 29.6 Z M16.6 20.4 Q22.3 17 21.5 10.5 Q15.8 13.9 16.6 20.4 Z"/>
    <path class="e-ink" d="M34.4 51.1 Q40.1 47.9 45.4 51.8 Q39.6 55.1 34.4 51.1 Z M43.6 47.4 Q47 41.7 53.5 42.5 Q50.1 48.2 43.6 47.4 Z M49.7 39.5 Q49.8 32.9 55.9 30.4 Q55.8 36.9 49.7 39.5 Z M51.1 29.6 Q47.9 23.9 51.8 18.6 Q55.1 24.4 51.1 29.6 Z M47.4 20.4 Q41.7 17 42.5 10.5 Q48.2 13.9 47.4 20.4 Z"/>
    <circle class="e-accent" cx="32" cy="53" r="4"/>`,
  'islam-night-journey': `
    <path class="e-line" d="M23 58 L28 20 M41 58 L36 20"/>
    <path class="e-line" d="M24 50 H40 M25 41 H39 M26 32 H38 M27 24 H37"/>
    <circle class="e-accent" cx="7.9" cy="29.5" r="2.5"/>
    <circle class="e-accent" cx="12.8" cy="19.9" r="2.5"/>
    <circle class="e-accent" cx="21.4" cy="13.3" r="2.5"/>
    <circle class="e-accent" cx="32" cy="11" r="2.5"/>
    <circle class="e-accent" cx="42.6" cy="13.3" r="2.5"/>
    <circle class="e-accent" cx="51.2" cy="19.9" r="2.5"/>
    <circle class="e-accent" cx="56.1" cy="29.5" r="2.5"/>`,
  'islam-farthest-mosque': `
    <rect class="e-soft" x="6" y="42" width="52" height="14"/>
    <rect class="e-line" x="6" y="42" width="52" height="14"/>
    <path class="e-line" d="M6 49 H58 M22 42 V49 M42 42 V49 M32 49 V56"/>
    <polygon class="e-ink" points="12,42 12,16 15,20 18,14 21,19 21,42"/>
    <polygon class="e-ink" points="27,42 27,30 30,33 33,28 36,32 36,42"/>
    <polygon class="e-ink" points="44,42 44,22 47,26 50,20 53,25 53,42"/>
    <polygon class="e-accent" points="37,42 39,36 43,37 42,42"/>`,
  'islam-outside-writers': `
    <path class="e-ink" d="M20 36 H40 L48 44 V56 H12 V44 Z"/>
    <rect class="e-line" x="22" y="29" width="16" height="7"/>
    <polygon class="e-accent" points="28,34 32,35 54,8 50,5"/>
    <path class="e-line" d="M6 57 H58"/>`,
  'islam-archaeology': `
    <circle class="e-soft" cx="20" cy="22" r="13"/>
    <circle class="e-line" cx="20" cy="22" r="13"/>
    <circle class="e-accent-line" cx="20" cy="22" r="7"/>
    <polygon class="e-ink" points="20,57 37,35 49,45"/>
    <path class="e-line" d="M43 40 L48 34"/>
    <polygon class="e-accent" points="45,32 50,37 60,26 55,21"/>`,
  'islam-jesus-more-than-prophet': `
    <path class="e-soft" d="M20 10 h24 v30 h-24 Z"/>
    <path class="e-line" d="M20 40 V10 h24 v30"/>
    <path class="e-line" d="M14 28 v12 h36 v-12"/>
    <path class="e-accent" d="M20 34 h24 v6 h-24 Z"/>
    <path class="e-line" d="M16 40 v14 M48 40 v14 M8 56 h48"/>
    <circle class="e-accent" cx="32" cy="18" r="4"/>`,
  'islam-cross-resurrection': `
    <path class="e-soft" d="M4 58 Q32 36 60 58 Z"/>
    <path class="e-line" d="M4 58 Q32 36 60 58"/>
    <rect class="e-ink" x="29" y="6" width="6" height="44"/>
    <rect class="e-ink" x="16" y="17" width="32" height="6"/>
    <path class="e-accent-line" d="M19 15 V22 Q32 42 45 22 V15"/>`,
  'islam-gospel-of-grace': `
    <path class="e-line" d="M32 13 V54 M20 56 H44"/>
    <path class="e-line" d="M12 24 L52 14"/>
    <path class="e-line" d="M6 42 L12 24 L18 42 M46 30 L52 14 L58 30"/>
    <path class="e-ink" d="M4 42 H20 Q12 54 4 42 Z"/>
    <path class="e-ink" d="M44 30 H60 Q52 42 44 30 Z"/>
    <circle class="e-accent" cx="12" cy="38" r="4"/>
    <circle class="e-ink" cx="32" cy="12" r="4"/>`,
  'islam-trinity': `
    <path class="e-line" d="M12 14 H52 L32 52 Z M32 28 L12 14 M32 28 L52 14 M32 28 V52"/>
    <circle class="e-ink" cx="12" cy="14" r="7"/>
    <circle class="e-ink" cx="52" cy="14" r="7"/>
    <circle class="e-ink" cx="32" cy="52" r="7"/>
    <circle class="e-accent" cx="32" cy="27" r="7"/>`,
  'islam-deity-objections': `
    <polygon class="e-soft" points="8,34 56,34 48,46 16,46"/>
    <polygon class="e-line" points="8,34 56,34 48,46 16,46"/>
    <path class="e-line" d="M14 58 L26 46 M50 58 L38 46 M26 46 L38 58 M38 46 L26 58"/>
    <path class="e-accent-line" d="M14 34 l4 -6 l4 6 l5 -7 l5 7 l5 -7 l5 7 l4 -6 l4 6"/>
    <polygon class="e-accent" points="32,4 34.5,10.5 41,13 34.5,15.5 32,22 29.5,15.5 23,13 29.5,10.5"/>`,
  'islam-atonement': `
    <ellipse class="e-soft" cx="28" cy="36" rx="17" ry="11"/>
    <ellipse class="e-line" cx="28" cy="36" rx="17" ry="11"/>
    <path class="e-line" d="M18 45 V56 M25 47 V56 M32 47 V56 M39 45 V56"/>
    <circle class="e-ink" cx="49" cy="27" r="6"/>
    <path class="e-accent-line" d="M47 20 A7 7 0 1 0 43 30"/>
    <path class="e-line" d="M6 57 H58"/>`,
  'islam-bible-corruption': `
    <rect class="e-soft" x="36" y="14" width="22" height="42" rx="2"/>
    <rect class="e-line" x="36" y="14" width="22" height="42" rx="2"/>
    <rect class="e-ink" x="36" y="14" width="6" height="42"/>
    <path class="e-line" d="M46 24 h8 M46 30 h8"/>
    <path class="e-line" d="M22 56 C22 38 32 18 21 15 C14 14 12 20 12 24"/>
    <path class="e-accent" d="M12 22 q-10 8 -5 20 q4 -3 5 -9 q1 6 6 9 q4 -12 -6 -20 Z"/>
    <path class="e-accent" d="M24 49 q5 -4 9 1 q-5 4 -9 -1 Z"/>
    <path class="e-line" d="M4 56 H60"/>`,
  'islam-sharing-the-gospel': `
    <rect class="e-ink" x="5" y="38" width="54" height="5"/>
    <path class="e-line" d="M12 43 V58 M52 43 V58"/>
    <path class="e-accent" d="M10 38 A10 9 0 0 1 30 38 Z"/>
    <path class="e-soft" d="M34 24 H42 V38 H34 Z M46 24 H54 V38 H46 Z"/>
    <path class="e-line" d="M34 24 H42 V38 H34 Z M46 24 H54 V38 H46 Z"/>
    <path class="e-accent-line" d="M38 19 V14 M50 19 V14"/>`,
};
