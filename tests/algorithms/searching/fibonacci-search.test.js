const fibonacciSearch = require('../../../algorithms/searching/fibonacci-search/index.js');

describe('Fibonacci Search', () => {
  it('should return the index when target is found', () => {
    const sortedArray = [
      3, 8, 15, 21, 28, 36, 42, 57, 64, 73, 81, 92, 103, 115, 129,
    ];
    const target = 103;
    const result = fibonacciSearch(sortedArray, target);
    expect(result).toBe(12);
  });

  it('should return the index when target is found at the beginning', () => {
    const sortedArray = [3, 8, 15, 21, 28, 36, 42, 57, 64, 73, 81, 92, 103];
    const target = 3;
    const result = fibonacciSearch(sortedArray, target);
    expect(result).toBe(0);
  });

  it('should return the index when target is found at the end', () => {
    const sortedArray = [3, 8, 15, 21, 28, 36, 42, 57, 64, 73, 81, 92, 103];
    const target = 103;
    const result = fibonacciSearch(sortedArray, target);
    expect(result).toBe(12);
  });

  it('should return -1 when target is not found', () => {
    const sortedArray = [3, 8, 15, 21, 28, 36, 42, 57, 64, 73, 81, 92, 103];
    const target = 100;
    const result = fibonacciSearch(sortedArray, target);
    expect(result).toBe(-1);
  });

  it('should return the index when array has only one element and target matches', () => {
    const sortedArray = [5];
    const target = 5;
    const result = fibonacciSearch(sortedArray, target);
    expect(result).toBe(0);
  });

  it('should return -1 when array is empty', () => {
    const sortedArray = [];
    const target = 1;
    const result = fibonacciSearch(sortedArray, target);
    expect(result).toBe(-1);
  });

  it('should return -1 when array has only one element and target does not match', () => {
    const sortedArray = [5];
    const target = 3;
    const result = fibonacciSearch(sortedArray, target);
    expect(result).toBe(-1);
  });

  it('should handle case where checkNextElement returns false when fibOneBack is 0', () => {
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 6;
    const result = fibonacciSearch(sortedArray, target);
    expect(result).toBe(5);
  });

  it('should handle case where fibOneBack becomes 0 and checkNextElement short-circuits', () => {
    const sortedArray = [1, 2, 3, 4, 5];
    const target = 3;
    const result = fibonacciSearch(sortedArray, target);
    expect(result).toBe(2);
  });

  it('should handle case where checkNextElement is called with fibOneBack as 0', () => {
    const sortedArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    const target = 50;
    const result = fibonacciSearch(sortedArray, target);
    expect(result).toBe(4);
  });

  it('should handle edge case where fibOneBack becomes 0 during search', () => {
    const sortedArray = [1, 2];
    const target = 2;
    const result = fibonacciSearch(sortedArray, target);
    expect(result).toBe(1);
  });

  it('should handle case where checkNextElement short-circuits with fibOneBack = 0', () => {
    const sortedArray = [1, 2, 3];
    const target = 2;
    const result = fibonacciSearch(sortedArray, target);
    expect(result).toBe(1);
  });

  it('should handle case where checkNextElement is false when fibOneBack is falsy', () => {
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8];
    const target = 4;
    const result = fibonacciSearch(sortedArray, target);
    expect(result).toBe(3);
  });

  it('should cover the branch where array[i] > searchValue (first comparison)', () => {
    const sortedArray = [10, 20, 30, 40, 50];
    const target = 1;
    const result = fibonacciSearch(sortedArray, target);
    expect(result).toBe(-1);
  });

  it('should short-circuit checkNextElement when fibOneBack is 0', () => {
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 0;

    const result = fibonacciSearch(sortedArray, target);

    expect(result).toBe(-1);
  });

  it('should return -1 when input is not an array', () => {
    const notAnArray = null;
    const target = 10;

    const result = fibonacciSearch(notAnArray, target);

    expect(result).toBe(-1);
  });

  it('should return -1 when input is not an array (number)', () => {
    const notAnArray = 123;
    const result = fibonacciSearch(notAnArray, 5);
    expect(result).toBe(-1);
  });
});
