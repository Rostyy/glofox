import { Component, OnInit } from '@angular/core';
import { SearchService} from '../services/search/search.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Search } from '../classes/search/search';

@Component({
  selector: 'glofox-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit, Search {

  form: FormGroup;

  constructor(private searchService: SearchService, private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  search() {
    if (this.form.valid) {
      this.searchService.changeTerm(this.form.value);
    }
  }

  handleClear() {
    if (!this.form.value.term) {
      this.searchService.changeTerm(this.form.value);
    }
  }

  private initForm() {
    this.form = this.fb.group({
      term: ['', Validators.pattern('^[0-9A-Za-z\\s\\-]+$')],
      radioButtonValue: ['name', Validators.required]
    });
  }
}
