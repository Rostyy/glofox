import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import {Searching} from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchTermsSubject = new Subject<Searching>();
  searchTerms$ = this.searchTermsSubject.asObservable();

  constructor() { }

  changeTerm(searchTerm: Searching) {
    this.searchTermsSubject.next(searchTerm);
  }
}
