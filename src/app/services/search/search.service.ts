import { Injectable } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/internal/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchTermsSubject = new Subject<string>();
  searchTerms$ = this.searchTermsSubject.asObservable().pipe(
    // wait 300ms after each keystroke before considering the term
    debounceTime(300),
    // ignore new term if same as previous term
    distinctUntilChanged()
  );

  constructor() { }

  changeTerm(searchTerm: string) {
    this.searchTermsSubject.next(searchTerm);
  }
}
