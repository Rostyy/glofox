import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BeerService } from './beer.service';
import { ExcludeKegBeerPipe } from '../../shared/pipes/exclude-keg-beer/exclude-keg-beer.pipe';
import { MatchedBeerService } from '../matched-beer/matched-beer.service';
import { PageSelectionService } from '../page-selection/page-selection.service';

describe('BeerService', () => {
  let beerService: BeerService;
  let excludeKegBeerPipe: ExcludeKegBeerPipe;
  let matchedBeerServiceSpy: jasmine.SpyObj<MatchedBeerService>;
  let pageSelectionService: PageSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        ExcludeKegBeerPipe,
        MatchedBeerService,
        PageSelectionService
      ]
    });
    beerService = TestBed.get(BeerService);
    excludeKegBeerPipe = TestBed.get(ExcludeKegBeerPipe);
    matchedBeerServiceSpy = TestBed.get(MatchedBeerService);
    pageSelectionService = TestBed.get(PageSelectionService);
  });

  it('should be created', () => {
    const service: BeerService = TestBed.get(BeerService);
    expect(service).toBeTruthy();
  });
});
