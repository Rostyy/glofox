import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Beer } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient) { }

  /**
   * Get list of beers with description
   * @returns {Observable<Beer[]>}
   */
  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${environment.baseUrl}/beers`);
  }

  /**
   * Get single beer
   * @returns {Observable<Beer>}
   */
  getSingleBeer(count: number): Observable<Beer> {
    return this.http.get<Beer[]>(`${environment.baseUrl}/beers/${count}`).pipe(
      map((beers: Beer[]) => beers[0])
    );
  }

  /**
   * Get random beer
   * @returns {Observable<Beer>}
   */
  getRandomBeer(): Observable<Beer> {
    return this.http.get<Beer[]>(`${environment.baseUrl}/beers/random`).pipe(
      map((beers: Beer[]) => beers[0])
    );
  }
}
