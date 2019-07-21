import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BeerService } from './beer.service';
import { ExcludeKegBeerPipe } from '../../shared/pipes/exclude-keg-beer/exclude-keg-beer.pipe';

describe('BeerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ ExcludeKegBeerPipe ],
  }));

  it('should be created', () => {
    const service: BeerService = TestBed.get(BeerService);
    expect(service).toBeTruthy();
  });
});
