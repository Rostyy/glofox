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

  constructor(private beerService: BeerService) { }

  ngOnInit() { }

}
