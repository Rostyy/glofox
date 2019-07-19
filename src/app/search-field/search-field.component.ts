import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search/search.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'glofox-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {

  radioButtonsForm: FormGroup;

  constructor(private searchService: SearchService, private fb: FormBuilder) { }

  ngOnInit() {
    this.radioButtonsForm = this.fb.group({
      searchProperty: ['name', Validators.required]
    });
  }

  search(searchTerm: string) {
    this.searchService.changeTerm(searchTerm);
  }

  handleChange() {
    console.log(this.radioButtonsForm.value.searchProperty);
  }

}
