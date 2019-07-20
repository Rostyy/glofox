import { NON_ALCOHOLIC_VALUE } from '../constants/constants';

export class AlcoholCheck {

  constructor() { }

  isNonAlcoholic(abv: string): boolean {
    return +abv <= NON_ALCOHOLIC_VALUE;
  }
}
