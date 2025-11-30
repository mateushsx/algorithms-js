const shuffle = require('../../../algorithms/random/shuffle-array/index.js');

describe('Shuffle Array', () => {
  it('should return an array with the same length', () => {
    const array = [1, 2, 3, 4, 5];
    const result = shuffle(array);

    expect(result).toHaveLength(array.length);
  });

  it('should return a new array without modifying the original', () => {
    const array = [1, 2, 3, 4, 5];
    const originalArray = [...array];
    const result = shuffle(array);

    expect(result).not.toBe(array);
    expect(array).toEqual(originalArray);
  });

  it('should contain all the same elements', () => {
    const array = [1, 2, 3, 4, 5];
    const result = shuffle(array);

    expect(result.sort()).toEqual(array.sort());
  });

  it('should handle an array with a single element', () => {
    const array = [5];
    const result = shuffle(array);

    expect(result).toEqual([5]);
  });

  it('should handle an empty array', () => {
    const array = [];
    const result = shuffle(array);

    expect(result).toEqual([]);
  });

  it('should handle arrays with duplicate values', () => {
    const array = [1, 1, 2, 2, 3, 3];
    const result = shuffle(array);

    expect(result).toHaveLength(array.length);
    expect(result.sort()).toEqual(array.sort());
  });

  it('should return the same value when input is not an array', () => {
    const notArray = 'not an array';
    const result = shuffle(notArray);

    expect(result).toBe(notArray);
  });

  it('should handle arrays with different data types', () => {
    const array = [1, 'a', true, null, undefined];
    const result = shuffle(array);

    expect(result).toHaveLength(array.length);
    expect(result.sort()).toEqual(array.sort());
  });
});
