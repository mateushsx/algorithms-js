function quicksort(array) {
  if (array.length < 2) return array;

  const pivot = array[Math.floor(array.length / 2)];
  const smallerThanPivot = [];
  const greaterThanPivot = [];

  for (let i = 0; i < array.length; i++) {
    if (i === Math.floor(array.length / 2)) continue;
    if (array[i] <= pivot) {
      smallerThanPivot.push(array[i]);
    } else {
      greaterThanPivot.push(array[i]);
    }
  }

  return quicksort(smallerThanPivot).concat(pivot, quicksort(greaterThanPivot));
}

module.exports = quicksort;
