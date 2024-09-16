const elements = [2, 8, 3, 1, 5, 6, 7, 9, 10, 11, 15, 13, 12, 14];
const elementToFind = 11;

const startTime = Date.now();
let executedTime = 0;

function linearSeach(array, item) {
  if (!Array.isArray(array)) return -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      executedTime = Date.now() - startTime;
      return item;
    }
  }

  return -1;
}

const elementFoud = linearSeach(elements, elementToFind);

console.log('Elemento:', elementFoud);
console.log(`Tempo de execução: ${executedTime}ms`);
