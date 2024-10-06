const exampleArray = [2, 8, 3, 1, 5, 6, 7, 9, 10, 11, 15, 13, 12, 14];

const startTime = Date.now();

/**
 * Finds the index of the smallest element in an array.
 * @param {number[]} array
 * @returns {number}
 * @throws {Error}
 */
function findSmallestIndex(array) {
  if (array.length === 0) {
    throw new Error("The array is empty");
  }

  let smallestElement = array[0];
  let smallestIndex = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallestElement) {
      smallestElement = array[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

/**
 * Sort an array using the Selection Sort algorithm.
 * @param {number[]} array
 * @returns {number[]}
 */
function selectionSort(array) {
  const sortedArray = [];
  const unsortedArray = [...array];

  while (unsortedArray.length > 0) {
    const smallestIndex = findSmallestIndex(unsortedArray);
    sortedArray.push(unsortedArray[smallestIndex]);
    unsortedArray.splice(smallestIndex, 1);
  }

  return sortedArray;
}

console.log('Unsorted array:', exampleArray);
console.log('Sorted array:', selectionSort(exampleArray));
console.log(`Runtime: ${Date.now() - startTime}ms`);
