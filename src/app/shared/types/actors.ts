import { Common } from './common';
import { BaseRace } from './races';

export interface InitRace {
  id: string,
  level: number,
}

export interface Actor extends Common {
  secondaryName?: string;
  defaultJob: string;
  defaultRace: string;
  initJob: {
    id: string,
    level: number,
  }[];
  initRace: InitRace[];
  baseRaces?: BaseRace[];
  artist: string;
}
