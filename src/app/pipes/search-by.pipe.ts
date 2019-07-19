import { Pipe, PipeTransform } from '@angular/core';
import { Beer } from '../../models';

@Pipe({
  name: 'searchBy'
})
export class SearchByPipe implements PipeTransform {

  transform(beers: Beer[], propertyName: string, searchTerm: string): Beer[] {
    return searchTerm ?
      beers.filter((beer: Beer) => beer[propertyName].toLowerCase().includes(searchTerm.toLowerCase())) :
      beers;
  }

}
