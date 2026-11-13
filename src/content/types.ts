export interface LessonSection {
  heading: string;
  /** Paragraphs of explanation. */
  body: string[];
  /** Optional numbered argument (premises → conclusion). */
  argument?: string[];
  scriptures?: string[];
}

export interface Objection {
  id: string;
  objection: string;
  /** A model response, written the way you might say it in conversation. */
  response: string;
  keyPoints: string[];
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
  furtherReading: string[];
}
