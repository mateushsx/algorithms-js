function searchInFirstArray(firstDivisionPoint) {
  return firstDivisionPoint - 1;
}

function searchInSecondArray(firstDivisionPoint, secondDivisionPoint) {
  return {
    startOfArray: firstDivisionPoint + 1,
    finalOfArray: secondDivisionPoint - 1,
  };
}

function searchInThirdArray(secondDivisionPoint) {
  return secondDivisionPoint + 1;
}

function ternarySearch(array, searchValue) {
  let startOfArray = 0;
  let finalOfArray = array.length - 1;

  while (startOfArray <= finalOfArray) {
    let firstDivisionPoint =
      startOfArray + Math.floor((finalOfArray - startOfArray) / 3);
    let secondDivisionPoint =
      finalOfArray - Math.floor((finalOfArray - startOfArray) / 3);

    if (array[firstDivisionPoint] === searchValue) return firstDivisionPoint;
    if (array[secondDivisionPoint] === searchValue) return secondDivisionPoint;

    if (searchValue < array[firstDivisionPoint]) {
      finalOfArray = searchInFirstArray(firstDivisionPoint);
    } else if (searchValue > array[secondDivisionPoint]) {
      startOfArray = searchInThirdArray(secondDivisionPoint);
    } else {
      ({ startOfArray, finalOfArray } = searchInSecondArray(
        firstDivisionPoint,
        secondDivisionPoint
      ));
    }
  }
  return -1;
}

module.exports = ternarySearch;
