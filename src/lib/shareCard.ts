import type { Objection } from '../content';

/** Fixed light-theme colours, so a shared image looks the same whatever theme the sharer uses. */
const C = {
  bg: '#f7f5f0',
  surface: '#ffffff',
  text: '#1d2430',
  muted: '#5f6b7a',
  border: '#e3ded3',
  primary: '#1f3a5f',
  accent: '#b8902f',
  accentInk: '#8a6a1c',
  success: '#2f7a4f',
};
const SERIF = 'Georgia, "Times New Roman", serif';
const SANS = 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';
const W = 1080;
const H = 1350;
const PAD = 80;
const INNER = W - PAD * 2;

function wrap(ctx: CanvasRenderingContext2D, text: string, width: number): string[] {
  const lines: string[] = [];
  for (const para of text.split('\n')) {
    let line = '';
    for (const word of para.split(/\s+/).filter(Boolean)) {
      const test = line ? `${line} ${word}` : word;
      if (ctx.measureText(test).width > width && line) {
        lines.push(line);
        line = word;
      } else line = test;
    }
    if (line) lines.push(line);
  }
  return lines;
}

function spaced(ctx: CanvasRenderingContext2D, px: string) {
  if ('letterSpacing' in ctx) (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = px;
}

function loadIcon(): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = './icon.svg';
  });
}

/** Draws an objection, its answer, key points and references as a 1080×1350 PNG. */
export async function renderShareCard(o: Objection, topic: string): Promise<Blob> {
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;
  const icon = await loadIcon();

  ctx.fillStyle = C.bg;
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = C.primary;
  ctx.fillRect(0, 0, W, 14);
  ctx.textBaseline = 'top';

  const footerTop = H - PAD - 64;
  const refs = o.references?.length ? `See ${o.references.join(' · ')}` : '';

  // Shrink the body until everything fits above the footer.
  let size = 34;
  let layout: { obj: string[]; objSize: number; body: string[]; points: string[][]; refs: string[]; height: number } | null = null;
  for (; size >= 22; size -= 2) {
    const objSize = Math.round(size * 1.55);
    ctx.font = `${objSize}px ${SERIF}`;
    const obj = wrap(ctx, `“${o.objection}”`, INNER - 36);
    ctx.font = `${size}px ${SANS}`;
    const body = wrap(ctx, o.response, INNER);
    const points = o.keyPoints.map((k) => wrap(ctx, k, INNER - 44));
    ctx.font = `${Math.round(size * 0.75)}px ${SANS}`;
    const refLines = refs ? wrap(ctx, refs, INNER) : [];
    const height =
      40 + 36 + obj.length * objSize * 1.3 + 56 + 40 + body.length * size * 1.45 + 40 + 40 +
      points.reduce((h, p) => h + p.length * size * 1.4 + 12, 0) + (refLines.length ? 24 + refLines.length * size * 0.75 * 1.4 : 0);
    layout = { obj, objSize, body, points, refs: refLines, height };
    if (PAD + 24 + height <= footerTop - 32) break;
  }
  const L = layout!;
  const fs = Math.max(size, 22);
  // Still too long at the smallest size: trim the answer.
  const room = footerTop - 32 - (PAD + 24) - (L.height - L.body.length * fs * 1.45);
  const maxBody = Math.max(3, Math.floor(room / (fs * 1.45)));
  if (L.body.length > maxBody) {
    L.body = L.body.slice(0, maxBody);
    L.body[maxBody - 1] = L.body[maxBody - 1].replace(/\s+\S*$/, '') + '…';
  }

  let y = PAD + 24;
  ctx.fillStyle = C.accentInk;
  ctx.font = `700 24px ${SANS}`;
  spaced(ctx, '3px');
  ctx.fillText(topic.toUpperCase(), PAD, y);
  spaced(ctx, '0px');
  y += 40 + 36;

  ctx.fillStyle = C.primary;
  ctx.fillRect(PAD, y, 8, L.obj.length * L.objSize * 1.3 - L.objSize * 0.2);
  ctx.fillStyle = C.text;
  ctx.font = `${L.objSize}px ${SERIF}`;
  for (const line of L.obj) {
    ctx.fillText(line, PAD + 36, y);
    y += L.objSize * 1.3;
  }
  y += 56;

  ctx.fillStyle = C.accentInk;
  ctx.font = `700 22px ${SANS}`;
  spaced(ctx, '3px');
  ctx.fillText('A STRONG ANSWER', PAD, y);
  spaced(ctx, '0px');
  y += 40;
  ctx.fillStyle = C.text;
  ctx.font = `${fs}px ${SANS}`;
  for (const line of L.body) {
    ctx.fillText(line, PAD, y);
    y += fs * 1.45;
  }
  y += 40;

  ctx.fillStyle = C.accentInk;
  ctx.font = `700 22px ${SANS}`;
  spaced(ctx, '3px');
  ctx.fillText('KEY POINTS', PAD, y);
  spaced(ctx, '0px');
  y += 40;
  for (const lines of L.points) {
    ctx.fillStyle = C.success;
    ctx.font = `700 ${fs}px ${SANS}`;
    ctx.fillText('✓', PAD, y);
    ctx.fillStyle = C.text;
    ctx.font = `${fs}px ${SANS}`;
    for (const line of lines) {
      ctx.fillText(line, PAD + 44, y);
      y += fs * 1.4;
    }
    y += 12;
  }
  if (L.refs.length) {
    y += 24;
    ctx.fillStyle = C.muted;
    ctx.font = `${Math.round(fs * 0.75)}px ${SANS}`;
    for (const line of L.refs) {
      ctx.fillText(line, PAD, y);
      y += fs * 0.75 * 1.4;
    }
  }

  ctx.fillStyle = C.border;
  ctx.fillRect(PAD, footerTop - 32, INNER, 2);
  if (icon) ctx.drawImage(icon, PAD, footerTop, 64, 64);
  ctx.fillStyle = C.text;
  ctx.font = `700 28px ${SANS}`;
  ctx.fillText('Apologetics Trainer', PAD + 84, footerTop + 2);
  ctx.fillStyle = C.muted;
  ctx.font = `italic 22px ${SANS}`;
  ctx.fillText('“…with gentleness and respect.” — 1 Peter 3:15', PAD + 84, footerTop + 38);

  return new Promise((resolve, reject) => canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('Could not draw the card'))), 'image/png'));
}

/** Shares the image with the phone's share sheet, or downloads it where sharing files is not supported. */
export async function shareCard(o: Objection, topic: string): Promise<'shared' | 'downloaded' | 'cancelled'> {
  const blob = await renderShareCard(o, topic);
  const name = `${o.id}.png`;
  const file = new File([blob], name, { type: 'image/png' });
  if (navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ files: [file], title: o.objection });
      return 'shared';
    } catch (e) {
      if ((e as Error).name === 'AbortError') return 'cancelled';
    }
  }
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return 'downloaded';
}
