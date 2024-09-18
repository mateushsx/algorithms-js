# Merge Sort

O Merge Sort é um dos algoritmos de ordenação mais eficientes com complexidade de tempo de **O(n log n)**. Ele utiliza o paradigma de divisão e conquista (divide and conquer) para dividir a lista em sublistas menores e, em seguida, combina essas sublistas de maneira ordenada.

## Como funciona?

O Merge Sort funciona dividindo recursivamente o array em duas metades até que cada subarray contenha apenas um elemento. Em seguida, ele combina essas metades de maneira ordenada. Esse processo de combinação é feito por meio de uma função de intercalação, que compara os elementos das duas sublistas e os mescla em uma nova lista já ordenada.

## Código de exemplo

O código a seguir implementa o Merge Sort em JavaScript:

```javascript
const list = [2, 8, 3, 1, 5, 6, 7, 9, 10, 11, 15, 13, 12, 14];
const startTime = Date.now();

function merge(leftIndex, middleIndex, rightIndex, array) {
  const leftSize = middleIndex - leftIndex + 1;
  const rightSize = rightIndex - middleIndex;
  
  const leftArray = new Array(leftSize);
  const rightArray = new Array(rightSize);

  for (let i = 0; i < leftSize; i++) {
    leftArray[i] = array[leftIndex + i];
  }
  
  for (let j = 0; j < rightSize; j++) {
    rightArray[j] = array[middleIndex + 1 + j];
  }

  let i = 0
  let j = 0
  let k = leftIndex;
  
  while (i < leftSize && j < rightSize) {
    if (leftArray[i] <= rightArray[j]) {
      array[k] = leftArray[i];
      i++;
    } else {
      array[k] = rightArray[j];
      j++;
    }
    k++;
  }

  while (i < leftSize) {
    array[k] = leftArray[i];
    i++;
    k++;
  }

  while (j < rightSize) {
    array[k] = rightArray[j];
    j++;
    k++;
  }
}

function mergeSort(start, end, array) {
  if (start < end) {
    const middle = Math.floor((start + end) / 2);

    mergeSort(start, middle, array);
    mergeSort(middle + 1, end, array);
    merge(start, middle, end, array);
  }
  return array;
}

console.log("Unsorted list:", list);
console.log("Sorted list:", mergeSort(0, list.length - 1, list));
console.log(`Tempo de execução: ${Date.now() - startTime}ms`);
```

### Explicação do Código

1. **Array de entrada (`list`)**: O array `list` contém uma sequência de números inteiros desordenados que serão processados pelo algoritmo de Merge Sort para serem organizados em ordem crescente.

2. **Função `mergeSort`**: Esta função implementa o algoritmo de **Merge Sort**, que é um algoritmo de ordenação baseado no paradigma de divisão e conquista. A função divide recursivamente o array em duas partes até que cada subarray contenha apenas um único elemento. Após isso, a função `merge` é utilizada para combinar as sublistas e garantir que os elementos sejam ordenados.

3. **Função `merge`**: A função `merge` tem a responsabilidade de intercalar e combinar duas metades de um array. Ela faz isso criando dois arrays auxiliares (`leftArray` e `rightArray`) que armazenam as duas metades a serem combinadas. Em seguida, os elementos de ambos os arrays são comparados, e o menor valor é inserido de volta no array principal. Após a comparação de todos os elementos, qualquer valor restante nos arrays auxiliares é copiado para o array principal, garantindo que a fusão seja feita corretamente.

4. **Processo de Ordenação**:
    - **Divisão Recursiva**: O array é dividido recursivamente ao meio até que seja impossível dividir mais (ou seja, até que cada subarray tenha apenas um elemento).
    - **Intercalação Ordenada**: As sublistas são gradualmente combinadas na função `merge`, garantindo que os elementos sejam colocados na ordem correta.

5. **Saída**: O algoritmo retorna o array original agora ordenado. O console exibe a lista original (desordenada) e a lista final (ordenada).

### Complexidade de Tempo

A complexidade de tempo do Insertion Sort é:

- **Melhor caso, caso médio e pior caso: O(n log n)**, pois a lista é dividida em duas partes repetidamente e o processo de intercalação leva tempo linear em relação ao tamanho do array.

### Quando usar o Merge Sort?

- O Merge Sort é ideal para listas grandes, onde algoritmos mais simples, como o Insertion Sort, são ineficazes.
- É estável, ou seja, mantém a ordem relativa dos elementos com valores iguais.
- Funciona bem para grandes volumes de dados, mesmo quando o array não está inteiramente carregado na memória, pois é um algoritmo de **ordenação externa**.
- Requer espaço extra proporcional ao tamanho do array, pois precisa de arrays auxiliares para a intercalação.
