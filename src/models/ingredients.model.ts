import { Volume } from './volume.model';

export interface Ingredients {
  hops: Hops[];
  malt: Malt[];
  yest: string;
}

export interface Malt {
  amount: Volume;
  name: string;
}

export interface Hops extends Malt {
  add: string;
  attribute: string;
}
