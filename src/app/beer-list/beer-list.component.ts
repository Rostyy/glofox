import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/index';

import { BeerService } from '../services/api/beer.service';
import { Beer } from '../../models';


@Component({
  selector: 'glofox-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beers$: Observable<Beer[]>;

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.beers$ = this.beerService.getBeers();
  }

}
