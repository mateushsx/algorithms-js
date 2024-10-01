const list = [2, 8, 3, 1, 5, 6, 7, 9, 10, 11, 15, 13, 12, 14];
const startTime = Date.now();

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(array) {
  let unsorted_elements = array.length;
  let swap_happened;

  do {
    swap_happened = false;
    for (let i = 1; i < unsorted_elements; i++) {
      if (array[i - 1] > array[i]) {
        swap(array, i - 1, i);
        swap_happened = true;
      }
    }
    unsorted_elements--;
  } while (swap_happened);
  return array;
}

console.log('Unsorted list:', list);
console.log('Sorted list:', bubbleSort(list));
console.log(`Tempo de execução: ${Date.now() - startTime}ms`);
