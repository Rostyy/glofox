import { ExcludeKegBeerPipe } from './exclude-keg-beer.pipe';
import { KEG_EXCLUSION } from '../../../constants/constants';
import { Beer } from '../../../../models/beer.model';

describe('ExcludeKegBeerPipe', () => {
  const pipe = new ExcludeKegBeerPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('search ExcludeKegBeerPipe successfully', () => {
    const testBeers = [{name: 'test1', image_url: KEG_EXCLUSION}] as Beer[];
    expect(pipe.transform(testBeers)).toEqual([] as Beer[]);
  });

  it('search ExcludeKegBeerPipe unsuccessfully (no description)', () => {
    const testBeers = [{name: 'test1', image_url: 'good url'}, {name: 'test1', image_url: KEG_EXCLUSION}] as Beer[];
    expect(pipe.transform(testBeers)).toEqual([] as Beer[]);
  });

  it('search ExcludeKegBeerPipe successfully with description', () => {
    const testBeers = [{name: 'test1', image_url: 'good url', description: 'test'}, {name: 'test1', image_url: KEG_EXCLUSION, description: 'test'}] as Beer[];
    expect(pipe.transform(testBeers)).toEqual([testBeers[0]] as Beer[]);
  });
});
