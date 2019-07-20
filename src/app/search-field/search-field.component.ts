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
    this.initForm();
  }

  search() {
    const searchTerm = {
      term: this.form.value.term,
      radioButtonValue: this.form.value.radioButtonValue
    };
    if (this.form.valid) {
      this.searchService.changeTerm(searchTerm);
    }
  }

  private initForm() {
    this.form = this.fb.group({
      term: ['', Validators.pattern('^[0-9A-Za-z\\s\\-]+$')],
      radioButtonValue: ['name', Validators.required]
    });
  }
}
