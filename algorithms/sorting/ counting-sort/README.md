# Counting Sort

O **Counting Sort** é um algoritmo de ordenação que utiliza a contagem de elementos para organizar os dados. Ele é extremamente eficiente para conjuntos de dados que possuem valores inteiros dentro de um intervalo conhecido e relativamente pequeno. Diferente de outros algoritmos como o Quick Sort ou Merge Sort, o Counting Sort não utiliza comparações para ordenar os elementos.

Caso surja duvidas sobre seu funcionamento, recomendo o video [Counting Sort | GeeksforGeeks](https://www.youtube.com/watch?v=7zuGmKfUt7s)

## Como Funciona?

O Counting Sort organiza os elementos em várias etapas:

1. **Contagem dos elementos**: Cada valor do array original é contado e armazenado em um array auxiliar de contagem.
   
2. **Cálculo das posições**: Os valores acumulados no array de contagem determinam as posições finais dos elementos no array ordenado.

3. **Construção do array ordenado**: Os elementos do array original são inseridos em suas posições finais com base nas informações do array de contagem.

## Código de exemplo

O código abaixo implementa o Counting Sort em JavaScript:

```javascript
function countingSort(array) {
    const length = array.length;
    const maxValue = Math.max(...array);

    let countArray = Array(maxValue + 1).fill(0);
    let outputArray = Array(length).fill(0);

    for (let i = 0; i < length; i++) {
        let position = array[i];
        countArray[position] = countArray[position] + 1;
    }

    for (let i = 1; i <= maxValue; i++) {
        countArray[i] = countArray[i] + countArray[i - 1];
    }

    for (let i = length - 1; i >= 0; i--) {
        let value = array[i];
        let index = countArray[value] - 1;

        outputArray[index] = value;
        countArray[value] = index;
    }

    return outputArray;
}

console.log(countingSort([4, 2, 2, 8, 3, 3, 1]));
```

## Explicação do código

* **Array de contagem**: O `countArray` armazena a quantidade de ocorrências de cada elemento do array original.
* **Contagem acumulativa**: Os valores no `countArray` são ajustados para armazenar a soma acumulada, indicando a posição final de cada elemento no array ordenado.
* **Construção do array ordenado**: Os elementos são colocados no `outputArray` em ordem, utilizando as informações do `countArray`.
* **Resultado final**: O `outputArray` contém os elementos ordenados.

## Complexidade de Tempo

**Melhor caso, pior caso e caso médio: O(n + k)**, onde:
n é o número de elementos no array.
k é o valor máximo no array (range dos valores possíveis).

Essa complexidade linear faz do Counting Sort um algoritmo muito eficiente, mas ele pode ser limitado pela magnitude de k.

## Quando usar o Counting Sort?

* Ideal para conjuntos de dados inteiros e positivos com intervalo pequeno e bem definido.
* Não é adequado para grandes intervalos de valores, pois o tamanho do array auxiliar cresce proporcionalmente ao valor máximo.

