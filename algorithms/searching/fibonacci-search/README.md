# Fibonacci Search

## Descrição

O Fibonacci Search é um algoritmo de busca eficiente que usa a sequência de Fibonacci para dividir a lista de pesquisa. O objetivo é encontrar o índice de um elemento em um array ordenado de maneira similar à Busca Binária, porém utilizando uma abordagem baseada em números de Fibonacci.

## Funcionamento

O algoritmo começa encontrando o menor número de Fibonacci maior ou igual ao comprimento do array. A busca é realizada iterativamente, reduzindo o intervalo de busca com base nos números de Fibonacci, de modo a evitar recursão e melhorar a eficiência espacial.

O processo envolve três números de Fibonacci:
1. `fibCurrent` - número de Fibonacci atual.
2. `fibOneBack` - número de Fibonacci anterior.
3. `fibTwoBack` - número de Fibonacci que está duas posições atrás.

Esses números são utilizados para determinar a posição a ser comparada no array e para atualizar o intervalo de pesquisa.

## Código

```javascript
function fibonacciSearch(array, searchValue) {
  let arraySize =  array.length;

  let fibTwoBack = 0;
  let fibOneBack = 1;
  let fibCurrent = fibOneBack + fibTwoBack;

  while(fibCurrent < arraySize) {
      fibTwoBack = fibOneBack;
      fibOneBack =  fibCurrent;
      fibCurrent = fibTwoBack + fibOneBack;
  };

  let INITIAL_OFFSET = -1;
  let currentOffset = INITIAL_OFFSET;

  while(fibCurrent > 1) {
      let i = Math.min(currentOffset + fibTwoBack, arraySize - 1);

      if(array[i] < searchValue) {
          [fibTwoBack, fibOneBack, fibCurrent] = updateFibonacciValues(fibTwoBack, fibOneBack, true);
          currentOffset = i;
      } else if(array[i] > searchValue) {
          [fibTwoBack, fibOneBack, fibCurrent] = updateFibonacciValues(fibTwoBack, fibOneBack, false);
      } else { 
          return i;
      }
      if (checkNextElement(fibOneBack, array, currentOffset, searchValue)) {
          return currentOffset + 1;
      }
  }
  return -1;
}

function updateFibonacciValues(fibTwoBack, fibOneBack, moveForward = true) {
  let fibCurrent;
  if(moveForward) {
      fibCurrent = fibOneBack;
      fibOneBack = fibTwoBack;
      fibTwoBack = fibCurrent - fibOneBack;
  } else {
      fibCurrent = fibTwoBack;
      fibOneBack = fibOneBack - fibTwoBack;
      fibTwoBack = fibCurrent - fibOneBack
  }
  return [fibTwoBack, fibOneBack, fibCurrent];
}

function checkNextElement(fibOneBack, array, currentOffset, searchValue) {
  return fibOneBack && array[currentOffset + 1] === searchValue;
}

let sortedArray = [3, 8, 15, 21, 28, 36, 42, 57, 64, 73, 81, 92, 103, 115, 129];
const searchValue = 103;
const result = fibonacciSearch(sortedArray, searchValue);
console.log(result, sortedArray[result]);