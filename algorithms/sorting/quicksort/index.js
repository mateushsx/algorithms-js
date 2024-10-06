/**
 * Implements the Quick Sort algorithm to order an array of numbers.
 *
 * @param {number[]} array
 * @returns {number[]}
 * @example
 * const sortedArray = quicksort([3, 6, 1, 8, 2, 5]);
 * console.log(sortedArray); // [1, 2, 3, 5, 6, 8]
 */
function quicksort(array) {
  if (array.length < 2) return array;

  const pivot = array[Math.floor(array.length / 2)];
  const smallerThanPivot = [];
  const greaterThanPivot = [];

  for (let i = 0; i < array.length; i++) {
    if (i === Math.floor(array.length / 2)) continue;
    if (array[i] <= pivot) {
      smallerThanPivot.push(array[i]);
    } else {
      greaterThanPivot.push(array[i]);
    }
  }

  return quicksort(smallerThanPivot).concat(pivot, quicksort(greaterThanPivot));
}

const exampleArray = [2, 8, 3, 1, 5, 6, 7, 9, 10, 11, 15, 13, 12, 14];
const startTime = Date.now();

console.log("Unsorted array:", exampleArray);
console.log("Sorted array:", quicksort(exampleArray));
console.log(`Runtime: ${Date.now() - startTime}ms`);
