import type { Topic } from './types';
import { existenceOfGod } from './topics/existence-of-god';
import { reliabilityOfScripture } from './topics/reliability-of-scripture';
import { resurrection } from './topics/resurrection';
import { problemOfEvil } from './topics/problem-of-evil';
import { identityOfJesus } from './topics/identity-of-jesus';

export const topics: Topic[] = [existenceOfGod, identityOfJesus, reliabilityOfScripture, resurrection, problemOfEvil];

export const getTopic = (id: string | undefined) => topics.find((t) => t.id === id);

export * from './types';
