import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/index';

import { BeerService } from '../services/api/beer.service';
import { Beer } from '../../models';
import { AlcoholCheck } from '../classes/alcohol-check/alcohol-check';
import { BeerProducer } from '../classes/beer-producer/beer-producer';
import { NON_ALCOHOLIC_VALUE } from '../constants/constants';

@Component({
selector: 'glofox-beer-description',
  templateUrl: './beer-description.component.html',
  styleUrls: ['./beer-description.component.scss']
})
export class BeerDescriptionComponent extends AlcoholCheck implements OnInit, BeerProducer {

  beer$: Observable<Beer>;
  count = 0;
  NON_ALCOHOLIC_VALUE = NON_ALCOHOLIC_VALUE;

  constructor(private beerService: BeerService) {
    super();
  }

  ngOnInit() {
    this.getRandomBeer();
  }

  getRandomBeer() {
    this.beer$ = this.beerService.getRandomBeer();
  }

  getSingleBeer() {
    this.count++;
    this.beer$ = this.beerService.getSingleBeer(this.count);
  }

  getRandomNonAlcBeer() {
    this.beer$ = this.beerService.getRandomNonAlcBeer();
  }
}
