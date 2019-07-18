import { Fermentation } from './fermentation.model';
import { Volume } from './volume.model';

export interface Method {
  mash_temp: MashTemp[];
  fermentation: Fermentation;
  twist: any;
}

export interface MashTemp {
  duration: number;
  temp: Volume;
}
