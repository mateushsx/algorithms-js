# Merge Sort

O Merge Sort é um dos algoritmos de ordenação mais eficientes com complexidade de tempo de **O(n log n)**. Ele utiliza o paradigma de divisão e conquista (divide and conquer) para dividir a lista em sublistas menores e, em seguida, combina essas sublistas de maneira ordenada.

## Como funciona?

O Merge Sort funciona dividindo recursivamente o array em duas metades até que cada subarray contenha apenas um elemento. Em seguida, ele combina essas metades de maneira ordenada. Esse processo de combinação é feito por meio de uma função de intercalação, que compara os elementos das duas sublistas e os mescla em uma nova lista já ordenada.

## Código de exemplo

O código a seguir implementa o Merge Sort em JavaScript:

```javascript
const list = [2, 8, 3, 1, 5, 6, 7, 9, 10, 11, 15, 13, 12, 14];

const startTime = Date.now();

function intercala(indiceEsquerdo, indiceMeio, indiceDireito, array) {
  const n1 = indiceMeio - indiceEsquerdo + 1;
  const n2 = indiceDireito - indiceMeio;
  const L = [];
  const R = [];

  // Preenchendo os vetores auxiliares
  for (let i = 0; i < n1; i++) {
    L[i] = array[indiceEsquerdo + i];
  }
  for (let j = 0; j < n2; j++) {
    R[j] = array[indiceMeio + 1 + j];
  }

  let i = 0,
    j = 0,
    k = indiceEsquerdo;

  // Intercalação das sublistas
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      array[k] = L[i];
      i++;
    } else {
      array[k] = R[j];
      j++;
    }
    k++;
  }

  // Copiando os elementos restantes
  while (i < n1) {
    array[k] = L[i];
    i++;
    k++;
  }
  while (j < n2) {
    array[k] = R[j];
    j++;
    k++;
  }
}

function mergeSort(inicio, fim, array) {
  if (inicio < fim) {
    const meio = Math.floor((inicio + fim) / 2);

    mergeSort(inicio, meio, array);
    mergeSort(meio + 1, fim, array);
    intercala(inicio, meio, fim, array);
  }
  return array;
}

console.log("Lista desordenada:", list);
console.log("Lista ordenada:", mergeSort(0, list.length - 1, list));
console.log(`Tempo de execução: ${Date.now() - startTime}ms`);
```

### Explicação do código

- **Array de entrada**: O array `list` contém uma sequência de números inteiros desordenados.
- **Função `mergeSort`**: Essa função implementa o algoritmo de Merge Sort. Ela divide o array em duas partes recursivamente até que os subarrays contenham um único elemento. Em seguida, a função `intercala` é chamada para combinar as sublistas de forma ordenada.
- **Função (`intercala`)**: Esta função realiza a fusão das duas metades já divididas, comparando os elementos e colocando-os na ordem correta em um array resultante.
- **Saída**: O algoritmo retorna a lista ordenada, e o tempo de execução é exibido no console.

### Complexidade de Tempo

A complexidade de tempo do Insertion Sort é:

- **Melhor caso, caso médio e pior caso: O(n log n)**, pois a lista é dividida em duas partes repetidamente e o processo de intercalação leva tempo linear em relação ao tamanho do array.

### Quando usar o Merge Sort?

- O Merge Sort é ideal para listas grandes, onde algoritmos mais simples, como o Insertion Sort, são ineficazes.
- É estável, ou seja, mantém a ordem relativa dos elementos com valores iguais.
- Funciona bem para grandes volumes de dados, mesmo quando o array não está inteiramente carregado na memória, pois é um algoritmo de **ordenação externa**.
- Requer espaço extra proporcional ao tamanho do array, pois precisa de arrays auxiliares para a intercalação.
