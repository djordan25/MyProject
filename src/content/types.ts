export interface LessonSection {
  heading: string;
  /** Paragraphs of explanation. Citations like "Quran 5:47", "Sahih al-Bukhari 4987" or "John 14:26" are auto-linked. */
  body: string[];
  /** Optional numbered argument (premises → conclusion). */
  argument?: string[];
  references?: string[];
}

export interface Objection {
  id: string;
  objection: string;
  /** A model response, written the way you might say it in conversation. */
  response: string;
  keyPoints: string[];
  references?: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  /** Index into options. */
  answer: number;
  explanation: string;
}

export interface Topic {
  id: string;
  title: string;
  icon: string;
  summary: string;
  lesson: LessonSection[];
  objections: Objection[];
  quiz: QuizQuestion[];
  furtherReading?: string[];
}

export interface TrackSection {
  title: string;
  description: string;
  topicIds: string[];
}

export interface Track {
  id: string;
  title: string;
  icon: string;
  summary: string;
  intro?: string[];
  sections: TrackSection[];
  /** When true, every reference must be the Bible, the Quran, Sahih al-Bukhari or Sahih Muslim (enforced by tests). */
  primarySourcesOnly?: boolean;
}
