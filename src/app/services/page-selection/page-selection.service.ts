import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { INIT_PAGE} from '../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class PageSelectionService {

  private changePageSubject = new BehaviorSubject<number>(INIT_PAGE);
  changePage$ = this.changePageSubject.asObservable();

  constructor() { }

  changePage(pageNumber: number) {
    this.changePageSubject.next(pageNumber);
  }
}
