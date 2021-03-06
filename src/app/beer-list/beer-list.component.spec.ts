import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { BeerListComponent } from './beer-list.component';
import { SearchFieldComponent } from '../search-field/search-field.component';
import { SharedModule } from '../shared/shared.module';
import { ExcludeKegBeerPipe } from '../shared/pipes/exclude-keg-beer/exclude-keg-beer.pipe';

describe('BeerListComponent', () => {
  let component: BeerListComponent;
  let fixture: ComponentFixture<BeerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerListComponent, SearchFieldComponent ],
      providers: [ ExcludeKegBeerPipe ],
      imports: [ HttpClientTestingModule, ReactiveFormsModule, SharedModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
