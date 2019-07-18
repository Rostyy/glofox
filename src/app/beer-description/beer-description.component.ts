import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/index';

import { BeerService } from '../services/api/beer.service';
import { MatchedBeerService } from '../services/matched-beer/matched-beer.service';
import { Beer } from '../../models';

@Component({
selector: 'glofox-beer-description',
  templateUrl: './beer-description.component.html',
  styleUrls: ['./beer-description.component.scss']
})
export class BeerDescriptionComponent implements OnInit {

  beer$: Observable<Beer>;
  count = 0;

  constructor(private beerService: BeerService, private matchedBeerService: MatchedBeerService) { }

  ngOnInit() {
    this.getRandomBeer();

    this.beer$.subscribe((beer: Beer) => {
      console.log('click on btn', beer);
      this.matchedBeerService.changeBeer(beer);
    });
  }

  getRandomBeer() {
    this.beer$ = this.beerService.getRandomBeer();
  }

  getAnotherBeer() {
    this.count++;
    this.beer$ = this.beerService.getSingleBeer(this.count);
  }
}
