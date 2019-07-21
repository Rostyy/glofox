import { Injectable } from '@angular/core';
import { Beer } from '../../../models/beer.model';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  /**
   * Return random int number from range min...max inclusive
   * @param min
   * @param max
   * @returns {any}
   */
  static getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Check if type of object is object
   * @param {Object} obj
   * @returns {boolean}
   */
  static checkType(obj: object): boolean {
    return typeof obj === 'object';
  }

  /**
   * Selects beer randomly from array
   * @param {Beer[]} beers
   * @returns {Beer}
   */
  static randomBeerSelector(beers: Beer[]) {
    const randomIndex = UtilsService.getRandomIntInclusive(0, beers.length - 1);
    return beers[randomIndex];
  }
}
