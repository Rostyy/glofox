import { Component, OnInit } from '@angular/core';
import { SearchService} from '../services/search/search.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'glofox-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {

  form: FormGroup;

  constructor(private searchService: SearchService, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      term: ['', Validators.required],
      radioButtonValue: ['name', Validators.required]
    });
    this.search();
  }

  search() {
    const searchTerm = {
      term: this.form.value.term,
      radioButtonValue: this.form.value.radioButtonValue
    };
    this.searchService.changeTerm(searchTerm);
  }
}
