function shuffle(array) {
  if (!Array.isArray(array)) return array;

  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const n = Math.floor(Math.random() * (i + 1));
    const tmp = shuffledArray[n];
    shuffledArray[n] = shuffledArray[i];
    shuffledArray[i] = tmp;
  }

  return shuffledArray;
}

module.exports = shuffle;
