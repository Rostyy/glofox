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
    this.pageSelectionService.changePage$.subscribe((newPage: number) => {
      this.beerIndex = 0;
    });
  }

  /**
   * Get random beer
   * @returns {Observable<Beer>}
   */
  getInitRandomBeer(): Observable<Beer> {
    return this.http.get<Beer[]>(`${environment.baseUrl}/beers/random`).pipe(
      map((beers: Beer[]) => beers[0]),
      tap( (beer: Beer) => this.matchedBeerService.changeBeer(beer)),
      shareReplay()
    );
  }

  /**
   * Get list of beers with description (if cached - get from cache)
   * @param {number} beersPerPage
   * @returns {Observable<Beer[]>}
   */
  getBeers(beersPerPage = BEERS_PER_PAGE): Observable<Beer[]> {
    const arrIndex = this.pageSelectionService.changePageSubject.getValue() - 1;
    return !this.cachedBeers[arrIndex] ?
      this.getAllBeers(beersPerPage) :
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

  getRandomBeer(): void {
    const arrPageIndex = this.pageSelectionService.changePageSubject.getValue() - 1;
    if (this.cachedBeers.length) {
      const currentPageBeers = this.cachedBeers[arrPageIndex];
      const beer = UtilsService.randomBeerSelector(currentPageBeers);
      if (beer) {
        this.matchedBeerService.changeBeer(beer);
      }
    } else {
      this.matchedBeerService.changeBeer({ } as Beer);
    }
  }

  /**
   * Get random non-alcoholic beer
   * @param {number} abvValue
   * @returns {Observable<Beer>}
   */
  getRandomNonAlcBeer(abvValue = NON_ALCOHOLIC_VALUE): void{
    const arrPageIndex = this.pageSelectionService.changePageSubject.getValue() - 1;
    if (this.cachedBeers.length) {
      const currentPageBeers = this.cachedBeers[arrPageIndex];
      const nonAlcBeers = currentPageBeers.filter((beerFromPage: Beer) => beerFromPage.abv <= abvValue);
      const beer = UtilsService.randomBeerSelector(nonAlcBeers);
      if (beer) {
        this.matchedBeerService.changeBeer(beer);
      } else {
        this.matchedBeerService.changeBeer({ } as Beer);
      }
    } else {
      this.matchedBeerService.changeBeer({ } as Beer);
    }
  }

  /**
   * Get list of beers with description
   * @param {number} beersPerPage
   * @returns {Observable<Beer[]>}
   */
  private getAllBeers(beersPerPage = BEERS_PER_PAGE): Observable<Beer[]> {
    const currentPage = this.pageSelectionService.changePageSubject.getValue();
    return this.http.get<Beer[]>(`${environment.baseUrl}/beers?page=${currentPage}&per_page=${beersPerPage}`).pipe(
      map((beers: Beer[]) => this.excludeKegBeerPipe.transform(beers)),
      tap((beersFromCurrentPage: Beer[]) => this.cachedBeers.push(beersFromCurrentPage)),
      shareReplay()
    );
  }
}
