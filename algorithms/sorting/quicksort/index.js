/**
 * Implements the Quick Sort algorithm to order an array of numbers.
 *
 * @param {number[]} arr
 * @returns {number[]}
 * @example
 * const sortedArray = quicksort([3, 6, 1, 8, 2, 5]);
 * console.log(sortedArray); // [1, 2, 3, 5, 6, 8]
 */
function quicksort(arr) {
  if (arr.length < 2) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const smallerThanPivot = [];
  const greaterThanPivot = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === Math.floor(arr.length / 2)) continue;
    if (arr[i] <= pivot) {
      smallerThanPivot.push(arr[i]);
    } else {
      greaterThanPivot.push(arr[i]);
    }
  }

  return quicksort(smallerThanPivot).concat(pivot, quicksort(greaterThanPivot));
}

const exampleArray = [2, 8, 3, 1, 5, 6, 7, 9, 10, 11, 15, 13, 12, 14];
const startTime = Date.now();

console.log("Unsorted array:", exampleArray);
console.log("Sorted array:", quicksort(exampleArray));
console.log(`Runtime: ${Date.now() - startTime}ms`);
