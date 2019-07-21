import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';
import { Beer } from '../../../models/beer.model';

describe('UtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilsService = TestBed.get(UtilsService);
    expect(service).toBeTruthy();
  });

  it('should check type', () => {
    const checkedTyped = UtilsService.ifObjectType({name: 'test'});
    expect(checkedTyped).toBeTruthy( );
  });

  it('should check type of undefined', () => {
    const checkedTyped = UtilsService.ifObjectType(undefined);
    expect(checkedTyped).toBeFalsy( );
  });

  it('should check randomBeerSelector', () => {
    const beerMock = {name: 'beerMock'}
    const selected = UtilsService.randomBeerSelector([beerMock] as Beer[]);
    expect(selected.name).toBe( beerMock.name);
  });
});
