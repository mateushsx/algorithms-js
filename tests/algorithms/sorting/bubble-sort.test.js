const bubbleSort = require('../../../algorithms/sorting/bubble-sort/index.js');

describe('Bubble Sort', () => {
  it('should sort an unsorted array', () => {
    const array = [2, 8, 3, 1, 5, 6, 7, 9, 10, 11, 15, 13, 12, 14];
    const result = bubbleSort(array);
    expect(result).toEqual([1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  });

  it('should return the same array when it is already sorted', () => {
    const array = [1, 2, 3, 4, 5];
    const result = bubbleSort(array);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should sort an array in reverse order', () => {
    const array = [5, 4, 3, 2, 1];
    const result = bubbleSort(array);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an array with duplicate values', () => {
    const array = [3, 1, 3, 2, 1];
    const result = bubbleSort(array);
    expect(result).toEqual([1, 1, 2, 3, 3]);
  });

  it('should handle an array with a single element', () => {
    const array = [5];
    const result = bubbleSort(array);
    expect(result).toEqual([5]);
  });

  it('should handle an empty array', () => {
    const array = [];
    const result = bubbleSort(array);
    expect(result).toEqual([]);
  });
});
