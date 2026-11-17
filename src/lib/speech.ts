/** Text-to-speech with the browser's built-in voices. Works offline where the device has a local voice. */
export const canSpeak = typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;

export interface Segment {
  text: string;
  /** Silence after this segment, in milliseconds. */
  pauseAfter?: number;
  /** Lets the page show what is being read. */
  id?: string;
}

/** Reads naturally: drops bracketed citations and says chapter and verse as words. */
export function forSpeech(text: string): string {
  return text
    .replace(/\s*\((?:[^()]*\d+:\d+[^()]*|Sahih [^()]*\d+[^()]*)\)/g, '')
    .replace(/(\d+):(\d+)\s*[-–]\s*(\d+)/g, '$1, verses $2 to $3')
    .replace(/(\d+):(\d+)/g, '$1, verse $2')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Sentences, so long passages are not cut off by browsers that stop long utterances. */
const sentences = (text: string) => text.match(/[^.!?…]+[.!?…]+["”’)]*|[^.!?…]+$/g)?.map((s) => s.trim()).filter(Boolean) ?? [text];

let voice: SpeechSynthesisVoice | null | undefined;
function pickVoice(): SpeechSynthesisVoice | null {
  if (voice !== undefined && voice !== null) return voice;
  const voices = window.speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith('en'));
  const score = (v: SpeechSynthesisVoice) =>
    (/natural|enhanced|premium|neural/i.test(v.name) ? 4 : 0) + (/en-gb|en-us/i.test(v.lang) ? 2 : 0) + (v.localService ? 1 : 0);
  voice = voices.sort((a, b) => score(b) - score(a))[0] ?? null;
  return voice;
}

/**
 * Reads the segments in order. Returns a function that stops reading.
 * onSegment fires as each segment starts; onEnd once all have been read (not when stopped).
 */
export function speak(segments: Segment[], handlers: { onSegment?: (i: number) => void; onEnd?: () => void } = {}, rate = 1): () => void {
  const synth = window.speechSynthesis;
  let stopped = false;
  let timer: ReturnType<typeof setTimeout> | undefined;
  synth.cancel();

  const play = (i: number) => {
    if (stopped) return;
    if (i >= segments.length) return handlers.onEnd?.();
    handlers.onSegment?.(i);
    const parts = sentences(forSpeech(segments[i].text));
    const say = (j: number) => {
      if (stopped) return;
      if (j >= parts.length) {
        timer = setTimeout(() => play(i + 1), segments[i].pauseAfter ?? 400);
        return;
      }
      const u = new SpeechSynthesisUtterance(parts[j]);
      const v = pickVoice();
      if (v) u.voice = v;
      u.rate = rate;
      u.onend = () => say(j + 1);
      u.onerror = () => say(j + 1);
      synth.speak(u);
    };
    say(0);
  };

  play(0);
  return () => {
    stopped = true;
    clearTimeout(timer);
    synth.cancel();
  };
}
