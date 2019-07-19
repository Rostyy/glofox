import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/internal/operators';

import {Searching} from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchTermsSubject = new Subject<Searching>();
  searchTerms$ = this.searchTermsSubject.asObservable().pipe(
    // wait 300ms after each keystroke before considering the term
    debounceTime(300),
    // ignore new term if same as previous term
    distinctUntilChanged()
  );

  constructor() { }

  changeTerm(searchTerm: Searching) {
    this.searchTermsSubject.next(searchTerm);
  }
}
