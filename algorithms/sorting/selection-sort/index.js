function findSmallestIndex(array) {
  if (array.length === 0) {
    throw new Error('The array is empty');
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

function selectionSort(array) {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error('The array is empty');
  }

  const sortedArray = [];
  const unsortedArray = [...array];

  while (unsortedArray.length > 0) {
    const smallestIndex = findSmallestIndex(unsortedArray);
    sortedArray.push(unsortedArray[smallestIndex]);
    unsortedArray.splice(smallestIndex, 1);
  }

  return sortedArray;
}

module.exports = selectionSort;
module.exports.findSmallestIndex = findSmallestIndex;
