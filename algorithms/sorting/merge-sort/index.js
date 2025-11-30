function merge(leftIndex, middleIndex, rightIndex, array) {
  const leftSize = middleIndex - leftIndex + 1;
  const rightSize = rightIndex - middleIndex;

  const leftArray = new Array(leftSize);
  const rightArray = new Array(rightSize);

  for (let i = 0; i < leftSize; i++) {
    leftArray[i] = array[leftIndex + i];
  }

  for (let j = 0; j < rightSize; j++) {
    rightArray[j] = array[middleIndex + 1 + j];
  }

  let i = 0;
  let j = 0;
  let k = leftIndex;

  while (i < leftSize && j < rightSize) {
    if (leftArray[i] <= rightArray[j]) {
      array[k] = leftArray[i];
      i++;
    } else {
      array[k] = rightArray[j];
      j++;
    }
    k++;
  }

  while (i < leftSize) {
    array[k] = leftArray[i];
    i++;
    k++;
  }

  while (j < rightSize) {
    array[k] = rightArray[j];
    j++;
    k++;
  }
}

function mergeSortRecursive(start, end, array) {
  if (start < end) {
    const middle = Math.floor((start + end) / 2);

    mergeSortRecursive(start, middle, array);
    mergeSortRecursive(middle + 1, end, array);
    merge(start, middle, end, array);
  }
  return array;
}

function mergeSort(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return array;
  }
  return mergeSortRecursive(0, array.length - 1, [...array]);
}

module.exports = mergeSort;
