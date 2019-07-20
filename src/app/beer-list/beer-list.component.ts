import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/index';

import { BeerService } from '../services/api/beer.service';
import { Beer } from '../../models';
import { MatchedBeerService } from '../services/matched-beer/matched-beer.service';
import { SearchService } from '../services/search/search.service';
import { AlcoholCheck } from '../classes/alcohol-check';


@Component({
  selector: 'glofox-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent extends AlcoholCheck implements OnInit {

  beers$: Observable<Beer[]>;

  constructor(private beerService: BeerService,
              public matchedBeerService: MatchedBeerService,
              public searchService: SearchService
  ) {
    super();
  }

  ngOnInit() {
    this.beers$ = this.beerService.getBeers();
  }

}
