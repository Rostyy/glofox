import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/index';

import { BeerService } from '../services/api/beer.service';
import { Beer } from '../../models';

@Component({
  selector: 'glofox-beer-description',
  templateUrl: './beer-description.component.html',
  styleUrls: ['./beer-description.component.scss']
})
export class BeerDescriptionComponent implements OnInit {

  beer$: Observable<Beer>;

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.beer$ = this.beerService.getRandomBeer();
  }

}
