function buscaTernaria(array, searchValue) {
    let startOfArray = 0;
    let finalOfArray = array.length - 1; 

    while (startOfArray <= finalOfArray) {
        let firstDivisionPoint = startOfArray + Math.floor((finalOfArray - startOfArray) / 3);
        let secondDivisionPoint = finalOfArray - Math.floor((finalOfArray - startOfArray) / 3);

        if(array[firstDivisionPoint] === searchValue) return firstDivisionPoint;
        if(array[secondDivisionPoint] === searchValue) return secondDivisionPoint;

        if(searchValue < array[firstDivisionPoint]) {
            finalOfArray = searchInFirstArry(firstDivisionPoint);
        } else if (searchValue > array[secondDivisionPoint]) {
            startOfArray = searchIntThirdArry(secondDivisionPoint);
        } else {
            ({startOfArray, finalOfArray} = searchInSecundtArry(firstDivisionPoint, secondDivisionPoint));
        }
    }
    return -1;
}


function searchInFirstArry (firstDivisionPoint) {
    return firstDivisionPoint - 1;
}

function searchInSecundtArry(firstDivisionPoint, secondDivisionPoint) {
    return { startOfArray: firstDivisionPoint + 1, finalOfArray: secondDivisionPoint -1};
}

function searchIntThirdArry (secondDivisionPoint) {
    return secondDivisionPoint + 1;
}

// Testando do algoritmo
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const searchValue = 8;
const resultado = buscaTernaria(array,searchValue);
console.log(resultado !== -1 ? `Elemento encontrado no índice ${resultado}` : "Elemento não encontrado.");
