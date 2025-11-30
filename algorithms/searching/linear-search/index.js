function linearSearch(array, item) {
  if (!Array.isArray(array)) return -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }

  return -1;
}

module.exports = linearSearch;
