import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search/search.service';

@Component({
  selector: 'glofox-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  search(searchTerm: string) {
    this.searchService.changeTerm(searchTerm);
  }

}
