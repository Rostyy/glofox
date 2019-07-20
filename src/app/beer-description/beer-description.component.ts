import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/index';

import { BeerService } from '../services/api/beer.service';
import { Beer } from '../../models';
import { AlcoholCheck } from '../classes/alcohol-check';

@Component({
selector: 'glofox-beer-description',
  templateUrl: './beer-description.component.html',
  styleUrls: ['./beer-description.component.scss']
})
export class BeerDescriptionComponent extends AlcoholCheck implements OnInit {

  beer$: Observable<Beer>;
  count = 0;

  constructor(private beerService: BeerService) {
    super();
  }

  ngOnInit() {
    this.getRandomBeer();
  }

  getRandomBeer() {
    this.beer$ = this.beerService.getRandomBeer();
  }

  getAnotherBeer() {
    this.count++;
    this.beer$ = this.beerService.getSingleBeer(this.count);
  }

  getRandomNonAlcBeer() {
    this.beer$ = this.beerService.getRandomNonAlcBeer();
  }
}
