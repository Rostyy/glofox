import { Volume } from './volume.model';
import { Method } from './method.model';
import { Ingredients } from './ingredients.model';

export interface Beer {
  abv: number;
  attenuation_level: number;
  boil_volume: Volume;
  brewers_tips: string;
  contributed_by: string;
  description: string;
  ebc: number;
  first_brewed: string;
  food_pairing: string[];
  ibu: number;
  id: number;
  image_url: string;
  ingredients: Ingredients;
  method: Method;
  name: string;
  ph: number;
  srm: number;
  tagline: string;
  target_fg: number;
  target_og: number;
  volume: Volume;
}


