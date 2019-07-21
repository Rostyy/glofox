import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, shareReplay } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Beer } from '../../../models';
import { MatchedBeerService } from '../matched-beer/matched-beer.service';
import { BEERS_PER_PAGE, INIT_PAGE, NON_ALCOHOLIC_VALUE } from '../../constants/constants';
import { UtilsService } from '../utils/utils.service';
import { ExcludeKegBeerPipe } from '../../shared/pipes/exclude-keg-beer/exclude-keg-beer.pipe';
import { PageSelectionService } from '../page-selection/page-selection.service';
import { BeerIterator } from '../../classes/beer-iterator/beer-iterator';

@Injectable({
  providedIn: 'root'
})
export class BeerService extends BeerIterator {

  private cachedBeers = [] as Beer[][];
  private cachedNonAlcBeers: Beer[];

  constructor(
    private http: HttpClient,
    private matchedBeerService: MatchedBeerService,
    private excludeKegBeerPipe: ExcludeKegBeerPipe,
    private pageSelectionService: PageSelectionService
  ) {
    super();
    this.pageSelectionService.changePage$.subscribe((newPage: number) => this.beerIndex = 0);
  }

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
   * Get next beer from beers list in current page
   */
  getSingleBeer(): void {
    const arrPageIndex = this.pageSelectionService.changePageSubject.getValue() - 1;
    if (this.cachedBeers.length) {
      const currentPageBeers = this.cachedBeers[arrPageIndex];
      const beer = currentPageBeers[this.beerIndex];
      if (beer) {
        this.matchedBeerService.changeBeer(beer);
        this.beerIndex++;
      }
    } else {
      this.matchedBeerService.changeBeer({ } as Beer);
    }
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
   * Get random non-alcoholic beer
   * @param {number} abvValue
   * @returns {Observable<Beer>}
   */
  getRandomNonAlcBeer(abvValue = NON_ALCOHOLIC_VALUE): Observable<Beer> {
    if (!this.cachedNonAlcBeers) {
      // added 0.01 because it's this query doesn't include abvValu number, so only "<" not "<="
      return this.http.get<Beer[]>(`${environment.baseUrl}/beers?abv_lt=${+abvValue + 0.001}`).pipe(
        tap((beers: Beer[]) => this.cachedNonAlcBeers = beers),
        map((beers: Beer[]) => this.randomBeerSelector(beers)),
        tap( (beer: Beer) => this.matchedBeerService.changeBeer(beer)),
        // send {} when there is no beer
        map((beer: Beer) => beer ? beer : {} as Beer),
        shareReplay()
      );
    } else {
      const beer = this.randomBeerSelector(this.cachedNonAlcBeers);
      this.matchedBeerService.changeBeer(beer);
      // send {} when there is no beer
      return of(beer ? beer : {} as Beer);
    }
  }

  /**
   * Selects beer randomly from array
   * @param {Beer[]} beers
   * @returns {Beer}
   */
  private randomBeerSelector(beers: Beer[]) {
    const randomIndex = UtilsService.getRandomIntInclusive(0, beers.length - 1);
    return beers[randomIndex];
  }

  /**
   * Get list of beers with description
   * @param {number} currentPage
   * @param {number} beersPerPage
   * @returns {Observable<Beer[]>}
   */
  private getAllBeers(currentPage = INIT_PAGE, beersPerPage = BEERS_PER_PAGE): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${environment.baseUrl}/beers?page=${currentPage}&per_page=${beersPerPage}`).pipe(
      map((beers: Beer[]) => this.excludeKegBeerPipe.transform(beers)),
      tap((beersFromCurrentPage: Beer[]) => this.cachedBeers.push(beersFromCurrentPage)),
      shareReplay()
    );
  }
}
