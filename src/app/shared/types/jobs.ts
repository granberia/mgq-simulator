import { Common } from './common';

export interface Job extends Common {
  require: string[];
  abilityPoints?: number[];
}
