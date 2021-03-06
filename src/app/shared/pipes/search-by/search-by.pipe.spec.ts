import { SearchByPipe } from './search-by.pipe';
import { Beer } from '../../../../models/beer.model';

describe('SearchByPipe', () => {
  const pipe = new SearchByPipe();
  const testBeers = [{
    "id": 1,
    "name": "Buzz",
    "tagline": "A Real Bitter Experience.",
    "first_brewed": "09/2007",
    "description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
    "image_url": "https://images.punkapi.com/v2/keg.png",
    "abv": 4.5,
    "ibu": 60,
    "target_fg": 1010,
    "target_og": 1044,
    "ebc": 20,
    "srm": 10,
    "ph": 4.4,
    "attenuation_level": 75,
    "volume": {
      "value": 20,
      "unit": "litres"
    }
  }] as Beer[];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('search trough pipe', () => {
    expect(pipe.transform(testBeers , 'name', 'dasv dgbuzz')).toEqual([] as Beer[]);
  });

  it('search trough pipe with buzz name', () => {
    expect(pipe.transform(testBeers, 'name', 'buzz')).toEqual(testBeers);
  });
});
