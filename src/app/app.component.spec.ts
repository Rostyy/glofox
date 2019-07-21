import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BeerDescriptionComponent } from './beer-description/beer-description.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { SharedModule } from './shared/shared.module';
import { PaginationComponent } from './pagination/pagination.component';
import { ExcludeKegBeerPipe } from './shared/pipes/exclude-keg-beer/exclude-keg-beer.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BeerDescriptionComponent,
        BeerListComponent,
        SearchFieldComponent,
        PaginationComponent
      ],
      providers: [ ExcludeKegBeerPipe ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        SharedModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
