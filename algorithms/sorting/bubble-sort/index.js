function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(array) {
  let unsortedElements = array.length;
  let swapHappened;

  do {
    swapHappened = false;
    for (let i = 1; i < unsortedElements; i++) {
      if (array[i - 1] > array[i]) {
        swap(array, i - 1, i);
        swapHappened = true;
      }
    }
    unsortedElements--;
  } while (swapHappened);
  return array;
}

module.exports = bubbleSort;
