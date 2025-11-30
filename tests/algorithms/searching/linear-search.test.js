const linearSearch = require('../../../algorithms/searching/linear-search/index.js');

describe('Linear Search', () => {
  it('should return the index when target is found', () => {
    const array = [1, 3, 5, 7, 9, 11, 13];
    const target = 7;
    const result = linearSearch(array, target);
    expect(result).toBe(3);
  });

  it('should return -1 when target is not found', () => {
    const array = [1, 3, 5, 7, 9, 11, 13];
    const target = 4;
    const result = linearSearch(array, target);
    expect(result).toBe(-1);
  });

  it('should return the index when array has only one element and target matches', () => {
    const array = [5];
    const target = 5;
    const result = linearSearch(array, target);
    expect(result).toBe(0);
  });

  it('should return -1 when array is empty', () => {
    const array = [];
    const target = 1;
    const result = linearSearch(array, target);
    expect(result).toBe(-1);
  });

  it('should return -1 when input is not an array', () => {
    const notArray = 'not an array';
    const target = 1;
    const result = linearSearch(notArray, target);
    expect(result).toBe(-1);
  });
});
