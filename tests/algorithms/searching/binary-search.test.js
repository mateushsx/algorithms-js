const binarySearch = require('../../../algorithms/searching/binary-search/index.js');

describe('Binary Search', () => {
  it('should return the index when target is found in the middle', () => {
    const array = [1, 3, 5, 7, 9, 11, 13];
    const target = 7;
    const result = binarySearch(array, target);
    expect(result).toBe(3);
  });

  it('should return the index when target is found at the end', () => {
    const array = [1, 3, 5, 7, 9, 11, 13];
    const target = 13;
    const result = binarySearch(array, target);
    expect(result).toBe(6);
  });

  it('should return -1 when target is not found and is greater than all elements', () => {
    const array = [1, 3, 5, 7, 9, 11, 13];
    const target = 14;
    const result = binarySearch(array, target);
    expect(result).toBe(-1);
  });

  it('should return -1 when target is not found and is between elements', () => {
    const array = [1, 3, 5, 7, 9, 11, 13];
    const target = 4;
    const result = binarySearch(array, target);
    expect(result).toBe(-1);
  });

  it('should return the index when array has only one element and target matches', () => {
    const array = [5];
    const target = 5;
    const result = binarySearch(array, target);
    expect(result).toBe(0);
  });

  it('should return -1 when array is empty', () => {
    const array = [];
    const target = 1;
    const result = binarySearch(array, target);
    expect(result).toBe(-1);
  });

  it('should return -1 when input is not an array', () => {
    const notArray = 'not an array';
    const target = 1;
    const result = binarySearch(notArray, target);
    expect(result).toBe(-1);
  });
});
