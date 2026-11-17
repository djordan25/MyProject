/** A short vibration on phones that support it (Android browsers; iOS ignores it). Skipped when the user asks for reduced motion. */
const PATTERNS = { tap: 10, success: [12, 60, 24], miss: [30, 40, 30] } as const;

export function buzz(kind: keyof typeof PATTERNS = 'tap'): void {
  try {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    navigator.vibrate?.(PATTERNS[kind] as number | number[]);
  } catch {
    /* not supported */
  }
}
