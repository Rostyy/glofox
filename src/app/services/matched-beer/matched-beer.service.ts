import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/index';

import { Beer } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class MatchedBeerService {

  private changeBeerSubject = new Subject<Beer>();
  changeBeer$ = this.changeBeerSubject.asObservable();

  constructor() { }

  changeBeer(beer: Beer) {
    this.changeBeerSubject.next(beer);
  }
}
