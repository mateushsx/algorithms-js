# Ternary Search

## Descrição

A **Busca Ternária (Ternary Search)** é um algoritmo de busca utilizado para encontrar a posição de um elemento em um array ordenado, dividindo o array em três partes iguais. É similar à busca binária, mas ao invés de dividir o array em duas metades, ele o divide em três segmentos menores. O objetivo é localizar o elemento desejado com um número mínimo de comparações, explorando um terço do array em cada iteração.

## Funcionamento

O algoritmo define inicialmente dois pontos (`firstDivisionPoint` e `secondDivisionPoint`) que dividem o array em três partes. Em cada iteração, ele compara o valor procurado com os valores nesses dois pontos para determinar em qual das três partes continuar a busca.

### Estrutura do algoritmo:

1. **Divisão em três partes**:
   - Define dois pontos de divisão:
     - `firstDivisionPoint`: marca o limite do primeiro terço do array.
     - `secondDivisionPoint`: marca o limite do segundo terço do array.
   
2. **Comparação**:
   - Se o valor procurado é igual ao valor no `firstDivisionPoint`, retorna o índice de `firstDivisionPoint`.
   - Se o valor procurado é igual ao valor no `secondDivisionPoint`, retorna o índice de `secondDivisionPoint`.
   - Caso contrário, a busca continua:
     - Se o valor procurado é menor que o valor no `firstDivisionPoint`, a busca se restringe ao primeiro terço.
     - Se o valor procurado é maior que o valor no `secondDivisionPoint`, a busca se restringe ao terceiro terço.
     - Caso contrário, a busca ocorre no segundo terço.

3. **Ajuste dos limites**:
   - Dependendo do valor encontrado, os limites do array são ajustados para focar apenas na parte relevante, ignorando as partes que não contêm o valor desejado.

4. **Repetição do processo**:
   - O processo é repetido até que o valor seja encontrado ou até que o intervalo de pesquisa se torne vazio.

## Complexidade

- **Complexidade de Tempo**: O tempo de execução no pior caso é `O(log3(n))`, pois o array é dividido em três partes em cada iteração.
- **Complexidade de Espaço**: `O(1)` porque o algoritmo não utiliza memória adicional para armazenar dados.

## Exemplo de Código

```javascript
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

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const searchValue = 8;
const result = ternarySearch(array,searchValue);
console.log(result !== -1 ? `Elemento encontrado no índice ${result}` : "Elemento não encontrado.");
