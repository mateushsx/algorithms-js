const ternarySearch = require('../../../algorithms/searching/ternary-search/index.js');

describe('Ternary Search', () => {
  it('should return the index when target is found', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const target = 8;
    const result = ternarySearch(array, target);
    expect(result).toBe(7);
  });

  it('should return the index when target is found at the beginning', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const target = 1;
    const result = ternarySearch(array, target);
    expect(result).toBe(0);
  });

  it('should return the index when target is found at the end', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const target = 9;
    const result = ternarySearch(array, target);
    expect(result).toBe(8);
  });

  it('should return -1 when target is not found', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const target = 10;
    const result = ternarySearch(array, target);
    expect(result).toBe(-1);
  });

  it('should return the index when array has only one element and target matches', () => {
    const array = [5];
    const target = 5;
    const result = ternarySearch(array, target);
    expect(result).toBe(0);
  });

  it('should return -1 when array is empty', () => {
    const array = [];
    const target = 1;
    const result = ternarySearch(array, target);
    expect(result).toBe(-1);
  });

  it('should return the index when target is found in the middle section', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const target = 5;
    const result = ternarySearch(array, target);
    expect(result).toBe(4);
  });
});
