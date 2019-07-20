import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, shareReplay } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Beer } from '../../../models';
import { MatchedBeerService } from '../matched-beer/matched-beer.service';
import { BEERS_PER_PAGE, INIT_PAGE, NON_ALCOHOLIC_VALUE } from '../../constants/constants';
import { UtilsService } from '../utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private cachedBeers = [] as Beer[][];

  constructor(private http: HttpClient, private matchedBeerService: MatchedBeerService) { }

  /**
   * Get list of beers with description (if cached - get from cache)
   * @param {number} currentPage
   * @param {number} beersPerPage
   * @returns {Observable<Beer[]>}
   */
  getBeers(currentPage = INIT_PAGE, beersPerPage = BEERS_PER_PAGE): Observable<Beer[]> {
    const arrIndex = currentPage - 1;
    return !this.cachedBeers[arrIndex] ?
      this.getAllBeers(currentPage, beersPerPage) :
      of(this.cachedBeers[arrIndex]);
  }

  /**
   * Get single beer
   * @param {number} count
   * @returns {Observable<Beer>}
   */
  getSingleBeer(count: number): Observable<Beer> {
    return this.http.get<Beer[]>(`${environment.baseUrl}/beers/${count}`).pipe(
      map((beers: Beer[]) => beers[0]),
      tap( (beer: Beer) => this.matchedBeerService.changeBeer(beer)),
      shareReplay()
    );
  }

  /**
   * Get random beer
   * @returns {Observable<Beer>}
   */
  getRandomBeer(): Observable<Beer> {
    return this.http.get<Beer[]>(`${environment.baseUrl}/beers/random`).pipe(
      map((beers: Beer[]) => beers[0]),
      tap( (beer: Beer) => this.matchedBeerService.changeBeer(beer)),
      shareReplay()
    );
  }

  /**
   * Get random non-alcoholic beer from cached array of beers
   * @param {number} abvValue
   * @returns {Observable<Beer>}
   */
  getRandomNonAlcBeer(abvValue = NON_ALCOHOLIC_VALUE): Observable<Beer> {
    const flattenArray = [].concat(...this.cachedBeers);
    const filteredArray = flattenArray.filter((beer: Beer) => beer.abv <= abvValue);
    const randomIndex = UtilsService.getRandomIntInclusive(0, filteredArray.length - 1);
    return of(filteredArray[randomIndex]).pipe(
      tap( (beer: Beer) => this.matchedBeerService.changeBeer(beer)),
    );
  }

  /**
   * Get list of beers with description
   * @param {number} currentPage
   * @param {number} beersPerPage
   * @returns {Observable<Beer[]>}
   */
  private getAllBeers(currentPage = INIT_PAGE, beersPerPage = BEERS_PER_PAGE): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${environment.baseUrl}/beers?page=${currentPage}&per_page=${beersPerPage}`).pipe(
      tap((beersFromCurrentPage: Beer[]) => this.cachedBeers.push(beersFromCurrentPage)),
      shareReplay()
    );
  }
}
