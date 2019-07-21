export class BeerIterator {

  private static instance: BeerIterator;

  private nextBeerIndex = 0;

  static getBeerIterator() {
    if (!BeerIterator.instance) {
      BeerIterator.instance = new BeerIterator();
    }
    return BeerIterator.instance;
  }

  set beerIndex(index: number) {
    this.nextBeerIndex = index;
  }

  get beerIndex() {
    return this.nextBeerIndex;
  }
}
