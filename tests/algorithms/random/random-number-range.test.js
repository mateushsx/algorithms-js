const getRandomInt = require('../../../algorithms/random/random-number-range/index.js');

describe('Random Number Range', () => {
  it('should return a number within the specified range when includeMaximum is false', () => {
    const min = 0;
    const max = 10;
    const result = getRandomInt(min, max, false);

    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThan(max);
  });

  it('should return a number within the specified range when includeMaximum is true', () => {
    const min = 0;
    const max = 10;
    const result = getRandomInt(min, max, true);

    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  it('should return the minimum value when min equals max and includeMaximum is true', () => {
    const min = 5;
    const max = 5;
    const result = getRandomInt(min, max, true);

    expect(result).toBe(5);
  });

  it('should return the minimum value when min equals max and includeMaximum is false', () => {
    const min = 5;
    const max = 5;
    const result = getRandomInt(min, max, false);

    expect(result).toBe(5);
  });

  it('should handle negative numbers', () => {
    const min = -10;
    const max = -5;
    const result = getRandomInt(min, max, false);

    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThan(max);
  });

  it('should handle large ranges', () => {
    const min = 1000;
    const max = 2000;
    const result = getRandomInt(min, max, false);

    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThan(max);
  });

  it('should use includeMaximum as false by default', () => {
    const min = 0;
    const max = 10;
    const result = getRandomInt(min, max);

    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThan(max);
  });
});
