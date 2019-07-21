import { BeerIterator } from '../beer-iterator/beer-iterator';

export abstract class Pagination {

  private currentPage = 1;

  set page(currentPage: number) {
    // after page change reset index iterator ("Another beer" functionality)
    BeerIterator.getBeerIterator().beerIndex = 0;
    this.currentPage = currentPage;
  }

  get page() {
    return this.currentPage;
  }

  constructor() { }

  abstract pageBack(): void;

  abstract pageForward(): void;
}
