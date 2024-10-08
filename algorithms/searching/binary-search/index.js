const elements = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const elementToFind = 11;

const startTime = Date.now(); 

function binarySearch(array, item) {
  if (!Array.isArray(array)) return -1;

  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (start <= end) {
    if (array[middle] === item) {
      return middle;
    } else if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }

    middle = Math.floor((start + end) / 2);
  }

  return -1;
}

const elementFoud = binarySearch(elements, elementToFind);

console.log('Indice do elemento:', elementFoud);
console.log(`Tempo de execução: ${Date.now() - startTime}ms`);

module.exports = binarySearch;