function ternarySearch(array, searchValue) {
    let startOfArray = 0;
    let finalOfArray = array.length - 1; 

    while (startOfArray <= finalOfArray) {
        let firstDivisionPoint = startOfArray + Math.floor((finalOfArray - startOfArray) / 3);
        let secondDivisionPoint = finalOfArray - Math.floor((finalOfArray - startOfArray) / 3);

        if(array[firstDivisionPoint] === searchValue) return firstDivisionPoint;
        if(array[secondDivisionPoint] === searchValue) return secondDivisionPoint;

        if(searchValue < array[firstDivisionPoint]) {
            finalOfArray = searchInFirstArray(firstDivisionPoint);
        } else if (searchValue > array[secondDivisionPoint]) {
            startOfArray = searchIntThirdArray(secondDivisionPoint);
        } else {
            ({startOfArray, finalOfArray} = searchInSecundtArray(firstDivisionPoint, secondDivisionPoint));
        }
    }
    return -1;
}


function searchInFirstArray (firstDivisionPoint) {
    return firstDivisionPoint - 1;
}

function searchInSecundtArray(firstDivisionPoint, secondDivisionPoint) {
    return { startOfArray: firstDivisionPoint + 1, finalOfArray: secondDivisionPoint -1};
}

function searchIntThirdArray (secondDivisionPoint) {
    return secondDivisionPoint + 1;
}

// Testando do algoritmo
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const searchValue = 8;
const result = ternarySearch(array,searchValue);
console.log(result !== -1 ? `Elemento encontrado no índice ${result}` : "Elemento não encontrado.");
