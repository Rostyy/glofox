import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/index';

import { BeerService } from '../services/api/beer.service';
import { Beer } from '../../models';
import { MatchedBeerService } from '../services/matched-beer/matched-beer.service';


@Component({
  selector: 'glofox-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beers$: Observable<Beer[]>;

  constructor(private beerService: BeerService, public matchedBeerService: MatchedBeerService) { }

  ngOnInit() {
    this.beers$ = this.beerService.getBeers();
    this.matchedBeerService.changeBeer$.subscribe( b => console.log('selected ', b))
  }

}
