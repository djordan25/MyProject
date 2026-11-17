import { describe, expect, it } from 'vitest';
import { orderedTopics, orderedTracks } from './profile';
import { forSpeech } from './speech';
import { buildSession } from './session';
import type { Progress } from './progress';

const empty: Progress = { lessonsRead: {}, quizBest: {}, drills: {}, review: {}, notes: {}, confidence: {}, days: [] };

describe('audience ordering', () => {
  it('puts the Islam track first for a Muslim friend', () => {
    expect(orderedTracks('muslim')[0].id).toBe('islam');
    expect(orderedTracks('skeptic')[0].id).toBe('foundations');
    expect(orderedTopics('muslim')[0].id).toBe('islam-understanding');
  });

  it('starts doubts with the hardest questions and keeps every topic once', () => {
    const doubts = orderedTopics('doubts');
    expect(doubts[0].id).toBe('problem-of-evil');
    expect(new Set(doubts.map((t) => t.id)).size).toBe(orderedTopics('all').length);
  });

  it('picks the new objection in the daily session from the chosen track', () => {
    expect(buildSession(empty, 'muslim').drills[0].topic.id).toBe('islam-understanding');
    expect(buildSession(empty, 'doubts').drills[0].topic.id).toBe('problem-of-evil');
  });
});

describe('speech text', () => {
  it('drops bracketed citations and reads verses as words', () => {
    expect(forSpeech('They do not happen to groups (1 Corinthians 15:5-8), and Luke 24:11 says so.')).toBe(
      'They do not happen to groups, and Luke 24, verse 11 says so.',
    );
    expect(forSpeech('Read Quran 4:157-158 slowly.')).toBe('Read Quran 4, verses 157 to 158 slowly.');
  });
});
