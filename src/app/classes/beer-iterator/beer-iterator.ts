export class BeerIterator {

  private nextBeerIndex: number;

  set beerIndex(index: number) {
    this.nextBeerIndex = index;
  }

  get beerIndex() {
    return this.nextBeerIndex;
  }
}
