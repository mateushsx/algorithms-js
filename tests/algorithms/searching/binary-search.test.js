const binarySearch = require('../../../algorithms/searching/binary-search/index.js');

describe('Binary Search', () => {
  it('alvo: 7, lista(1,3,5,7,9,11,13)', () => {
    const array = [1, 3, 5, 7, 9, 11, 13];
    const target = 7;
    const result = binarySearch(array, target);
    expect(result).toBe(3);
  });

  it('alvo: 13, lista(1,3,5,7,9,11,13)', () => {
    const array = [1, 3, 5, 7, 9, 11, 13];
    const target = 13;
    const result = binarySearch(array, target);
    expect(result).toBe(6);
  });

  it('alvo: 14, lista(1,3,5,7,9,11,13)', () => {
    const array = [1, 3, 5, 7, 9, 11, 13];
    const target = 14;
    const result = binarySearch(array, target);
    expect(result).toBe(-1);
  });

  it('alvo: 4, lista(1, 3, 5, 7, 9, 11, 13)', () => {
    const array = [1, 3, 5, 7, 9, 11, 13];
    const target = 4;
    const result = binarySearch(array, target);
    expect(result).toBe(-1);
  });

  it('alvo: 5, lista(5)', () => {
    const array = [5];
    const target = 5;
    const result = binarySearch(array, target);
    expect(result).toBe(0);
  });

  it('alvo: 1, lista(vazia)', () => {
    const array = [];
    const target = 1;
    const result = binarySearch(array, target);
    expect(result).toBe(-1);
  });
});
