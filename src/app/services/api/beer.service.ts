import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Beer } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient) { }

  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${environment.baseUrl}/beers`);
  }

  getSingleBeer(): Observable<Beer> {
    return this.http.get<Beer>(`${environment.baseUrl}/beers/1`);
  }

  getRandomBeer(): Observable<Beer> {
    return this.http.get<Beer>(`${environment.baseUrl}/beers/random`);
  }
}
