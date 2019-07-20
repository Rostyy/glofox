import { Observable } from 'rxjs';
import { Beer } from '../../../models';

export abstract class Pagination {

  private currentPage = 1;

  set page(currentPage: number) {
    this.currentPage = currentPage;
  }

  get page() {
    return this.currentPage;
  }

  constructor() {}

  abstract getBeers(): any;

  pageBack() {
    if (this.page) {
      this.page --;
    }
  }

  pageForward() {
    this.page ++;
  }
}
