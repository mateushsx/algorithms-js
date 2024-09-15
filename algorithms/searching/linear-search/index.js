const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const elementToFind = 11;

function linearSeach(array, item) {
  if (!Array.isArray(array)) return -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) return item;
  }

  return -1;
}

const elementFoud = linearSeach(elements, elementToFind);

console.log('Elemento:', elementFoud);
