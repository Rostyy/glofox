import { Component, OnInit } from '@angular/core';
import { Pagination } from '../classes/pagination/pagination';
import { PageSelectionService } from '../services/page-selection/page-selection.service';

@Component({
  selector: 'glofox-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent extends Pagination implements OnInit {

  constructor(private pageSelectionService: PageSelectionService) {
    super();
  }

  ngOnInit() { }

  pageBack() {
    if (this.page > 1) {
      this.page --;
      this.pageSelectionService.changePage(this.page);
    }
  }

  pageForward() {
    this.page ++;
    this.pageSelectionService.changePage(this.page);
  }

}
