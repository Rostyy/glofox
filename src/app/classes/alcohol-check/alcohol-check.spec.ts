import { AlcoholCheck } from './alcohol-check';

describe('AlcoholCheck', () => {
  const alcCheck = new AlcoholCheck();

  it('should create an instance', () => {
    expect(alcCheck).toBeTruthy();
  });

  it('should check that 0.05 is non alcoholic abv', () => {
    const isNonAlcoholic = alcCheck.isNonAlcoholic('0.04');
    expect(isNonAlcoholic).toBeTruthy();
  });

  it('should check that 8 is alcoholic abv', () => {
    const isNonAlcoholic = alcCheck.isNonAlcoholic('8');
    expect(isNonAlcoholic).toBeFalsy();
  });
});
