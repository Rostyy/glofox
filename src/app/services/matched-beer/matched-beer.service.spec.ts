import { TestBed } from '@angular/core/testing';

import { MatchedBeerService } from './matched-beer.service';

describe('MatchedBeerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchedBeerService = TestBed.get(MatchedBeerService);
    expect(service).toBeTruthy();
  });
});
