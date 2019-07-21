import { Component, OnInit } from '@angular/core';

import { BeerService } from '../services/api/beer.service';
import { Beer } from '../../models';
import { AlcoholCheck } from '../classes/alcohol-check/alcohol-check';
import { BeerProducer } from '../classes/beer-producer/beer-producer';
import { NON_ALCOHOLIC_VALUE } from '../constants/constants';
import { UtilsService } from '../services/utils/utils.service';
import { MatchedBeerService } from '../services/matched-beer/matched-beer.service';

@Component({
selector: 'glofox-beer-description',
  templateUrl: './beer-description.component.html',
  styleUrls: ['./beer-description.component.scss']
})
export class BeerDescriptionComponent extends AlcoholCheck implements OnInit, BeerProducer {

  beer: Beer;
  NON_ALCOHOLIC_VALUE = NON_ALCOHOLIC_VALUE;
  showLoader = false;
  objectKeys = Object.keys;
  UtilsService = UtilsService;

  private assignBeer = (beer: Beer) => {
    this.showLoader = false;
    this.beer = beer;
  };

  constructor(private beerService: BeerService,
              private matchedBeerService: MatchedBeerService) {
    super();
  }

  ngOnInit() {
    this.getRandomBeer();
    this.matchedBeerService.changeBeer$.subscribe((beer: Beer) => {
      console.log('main beer', beer);
      this.beer = beer;
    });
  }

  getSingleBeer() {
    this.beerService.getSingleBeer();
  }

  getRandomBeer() {
    this.showLoader = true;
    this.beerService.getRandomBeer().subscribe(this.assignBeer);
  }

  getRandomNonAlcBeer() {
    this.beerService.getRandomNonAlcBeer().subscribe(this.assignBeer);
  }


}
