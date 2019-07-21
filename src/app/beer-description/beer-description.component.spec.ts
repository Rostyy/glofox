import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { BeerDescriptionComponent } from './beer-description.component';
import { SearchFieldComponent } from '../search-field/search-field.component';
import { SharedModule } from '../shared/shared.module';
import {ExcludeKegBeerPipe} from '../shared/pipes/exclude-keg-beer/exclude-keg-beer.pipe';

describe('BeerDescriptionComponent', () => {
  let component: BeerDescriptionComponent;
  let fixture: ComponentFixture<BeerDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerDescriptionComponent, SearchFieldComponent ],
      providers: [ ExcludeKegBeerPipe ],
      imports: [ HttpClientTestingModule, ReactiveFormsModule, SharedModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
