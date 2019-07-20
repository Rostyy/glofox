import { Pipe, PipeTransform } from '@angular/core';
import { Beer } from '../../../../models/beer.model';
import { KEG_EXCLUSION } from '../../../constants/constants';

@Pipe({
  name: 'excludeKegBeer'
})
export class ExcludeKegBeerPipe implements PipeTransform {

  transform(beers: Beer[], exclusionUrl = KEG_EXCLUSION): Beer[] {
    return beers.filter((beer: Beer) => beer.image_url && beer.description && beer.image_url !== exclusionUrl);
  }

}
