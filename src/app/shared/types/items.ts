import { Common } from './common';

export interface Item extends Common {
  description: string;
  icon: number;
  price: number;
}
