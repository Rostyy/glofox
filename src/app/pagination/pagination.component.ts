import { Component, OnInit } from '@angular/core';
import { Pagination } from '../classes/pagination/pagination';

@Component({
  selector: 'glofox-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent extends Pagination implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() { }

  pageBack() {
    if (this.page > 1) {
      this.page --;
    }
  }

  pageForward() {
    this.page ++;
  }

}
