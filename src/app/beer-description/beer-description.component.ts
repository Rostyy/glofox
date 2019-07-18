import { Component, OnInit } from '@angular/core';

import { BeerService } from '../services/api/beer.service';

@Component({
  selector: 'glofox-beer-description',
  templateUrl: './beer-description.component.html',
  styleUrls: ['./beer-description.component.scss']
})
export class BeerDescriptionComponent implements OnInit {

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.getBeers().subscribe((beers: any) => console.log(beers));
  }

  getBeers() {
    return this.beerService.getBeers();
  }

}
