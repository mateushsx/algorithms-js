const list = [2, 8, 3, 1, 5, 6, 7, 9, 10, 11, 15, 13, 12, 14];

const startTime = Date.now();

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

console.log('Desorted list:', list);
console.log('Sorted list:', insertionSort(list));
console.log(`Tempo de execução: ${Date.now() - startTime}ms`);
