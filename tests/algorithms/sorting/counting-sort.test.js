const countingSort = require('../../../algorithms/sorting/ counting-sort/index.js');

describe('Counting Sort', () => {
  it('should sort an unsorted array', () => {
    const array = [2, 8, 3, 1, 5, 6, 7, 9, 10, 11, 15, 13, 12, 14];
    const result = countingSort(array);
    expect(result).toEqual([1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  });

  it('should return a new array without modifying the original', () => {
    const array = [2, 8, 3, 1, 5];
    const result = countingSort(array);
    expect(result).toEqual([1, 2, 3, 5, 8]);
    expect(array).toEqual([2, 8, 3, 1, 5]);
  });

  it('should return the same array when it is already sorted', () => {
    const array = [1, 2, 3, 4, 5];
    const result = countingSort(array);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should sort an array in reverse order', () => {
    const array = [5, 4, 3, 2, 1];
    const result = countingSort(array);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an array with duplicate values', () => {
    const array = [3, 1, 3, 2, 1];
    const result = countingSort(array);
    expect(result).toEqual([1, 1, 2, 3, 3]);
  });

  it('should handle an array with a single element', () => {
    const array = [5];
    const result = countingSort(array);
    expect(result).toEqual([5]);
  });

  it('should handle an empty array', () => {
    const array = [];
    const result = countingSort(array);
    expect(result).toEqual([]);
  });
});
