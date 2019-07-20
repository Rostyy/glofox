import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs/index';

import { MatchedBeerService } from '../services/matched-beer/matched-beer.service';
import { BeerService } from '../services/api/beer.service';
import { PageSelectionService } from '../services/page-selection/page-selection.service';
import { SearchService } from '../services/search/search.service';
import { AlcoholCheck } from '../classes/alcohol-check/alcohol-check';
import { Beer } from '../../models';

@Component({
  selector: 'glofox-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent extends AlcoholCheck implements OnInit, OnDestroy {

  beers$: Observable<Beer[]>;
  pageSubscription: Subscription;

  constructor(private beerService: BeerService,
              public matchedBeerService: MatchedBeerService,
              public searchService: SearchService,
              private pageSelectionService: PageSelectionService
  ) {
    super();
  }

  ngOnInit() {
    this.pageSubscription = this.pageSelectionService.changePage$.subscribe((currentPage: number) => {
      this.beers$ = this.beerService.getBeers(currentPage);
    });
  }

  ngOnDestroy() {
    this.pageSubscription.unsubscribe();
  }

}
