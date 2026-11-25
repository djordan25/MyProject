/**
 * Near misses for the "Build the argument" game: for each step of a lesson's numbered argument, three statements
 * that look like the step but fail as it, each with the reason. They are deliberately wrong, and say nothing
 * about history or texts that the lessons do not: each is the lesson's own step, overstated, reversed or cut loose.
 */
export interface Trap {
  text: string;
  why: string;
}

export interface ArgumentTraps {
  topicId: string;
  /** Heading of the lesson section the argument belongs to. */
  heading: string;
  /** One list of near misses per step, in the order of the argument's steps. */
  traps: Trap[][];
}

export const TRAPS: ArgumentTraps[] = [
];
