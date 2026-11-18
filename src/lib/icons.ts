import type { EdIconName } from 'editorial-ui';

/** Lucide icon for each topic and track glyph in the content files, so the UI shows line icons instead of emoji. */
const GLYPHS: Record<string, EdIconName> = {
  '?': 'CircleHelp', '❓': 'CircleHelp', '⇄': 'ArrowLeftRight', '⑂': 'GitFork', '△': 'Triangle', '◎': 'Scale',
  '☀': 'Sun', '☪': 'Moon', '🌙': 'Moon', '♔': 'Crown', '👑': 'Crown', '♥': 'Heart', '⚑': 'Flag', '⚓': 'Anchor',
  '⚔': 'Swords', '⚖': 'Scale', '⚛': 'Atom', '⛓': 'Link', '✉': 'Mail', '✊': 'Hand', '✋': 'Hand', '✒': 'PenLine',
  '✝': 'Cross', '✦': 'Sparkles', '✶': 'Sparkle', '➤': 'Send', '⭐': 'Star', '🎶': 'Music', '🏛': 'Landmark',
  '💬': 'MessageCircle', '📖': 'BookOpen', '📚': 'Library', '📜': 'ScrollText', '🔍': 'Search', '🔎': 'SearchCheck',
  '🔥': 'Flame', '🔬': 'Microscope', '🕊': 'Bird', '🕌': 'Landmark', '🗣': 'Megaphone', '🗺': 'Map', '🛡': 'Shield',
  '🧭': 'Compass',
};

export const iconFor = (glyph: string): EdIconName => GLYPHS[glyph] ?? 'BookOpen';
