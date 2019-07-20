export abstract class Pagination {

  private currentPage = 1;

  set page(currentPage: number) {
    this.currentPage = currentPage;
  }

  get page() {
    return this.currentPage;
  }

  constructor() {}

  abstract pageBack(): void;

  abstract pageForward(): void;
}
