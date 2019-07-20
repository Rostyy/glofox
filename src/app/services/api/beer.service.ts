import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, shareReplay } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Beer } from '../../../models';
import { MatchedBeerService } from '../matched-beer/matched-beer.service';
import { BEERS_PER_PAGE, INIT_PAGE } from '../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient, private matchedBeerService: MatchedBeerService) { }

  /**
   * Get list of beers with description
   * @returns {Observable<Beer[]>}
   */
  getBeers(currentPage = INIT_PAGE, beersPerPage = BEERS_PER_PAGE): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${environment.baseUrl}/beers?page=${currentPage}&per_page=${beersPerPage}`).pipe(
      shareReplay()
    );
  }

  /**
   * Get single beer
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
   * Get random non-alcoholic beer
   * @returns {Observable<Beer>}
   */
  getRandomNonAlcBeer(alcPercent = 0.05): Observable<Beer> {
    return this.http.get<Beer[]>(`${environment.baseUrl}/beers/random`).pipe(
      map((beers: Beer[]) => beers[0]),
      tap( (beer: Beer) => this.matchedBeerService.changeBeer(beer)),
      shareReplay()
    );
  }
}
