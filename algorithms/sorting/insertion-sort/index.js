function insertionSort(array) {
  const clonedList = [...array];

  for (let index = 1; index < array.length; index++) {
    const currentValue = clonedList[index];

    let j = index - 1;

    while (j >= 0 && clonedList[j] > currentValue) {
      clonedList[j + 1] = clonedList[j];

      j--;
    }

    clonedList[j + 1] = currentValue;
  }

  return clonedList;
}

module.exports = insertionSort;
