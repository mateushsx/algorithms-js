
# Busca Binária

A **Busca Binária** (ou Binary Search) é um algoritmo eficiente para encontrar um item em uma lista ordenada. Ele divide a lista em duas partes a cada iteração, reduzindo significativamente o número de comparações necessárias em comparação com a busca linear.

## Como funciona

A busca binária começa no meio da lista e compara o item do meio com o item que está sendo buscado. Dependendo da comparação, o algoritmo elimina metade da lista de cada vez. Este processo continua até que o item seja encontrado ou até que a lista a ser pesquisada esteja vazia.

## Código de exemplo

O código a seguir implementa a busca binária em JavaScript:

```javascript
const elements = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const elementToFind = 11;

const startTime = Date.now();

function binarySearch(array, item) {
  if (!Array.isArray(array)) return -1;

  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (start <= end) {
    if (array[middle] === item) {
      return middle;
    } else if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }

    middle = Math.floor((start + end) / 2);
  }

  return -1;
}

const elementFoud = binarySearch(elements, elementToFind);

console.log('Indice do elemento:', elementFoud);
console.log(`Tempo de execução: ${Date.now() - startTime}ms`);
```

### Explicação do código

- **Array de elementos**: O array `elements` contém uma sequência de números inteiros ordenados. O item que você está procurando (`elementToFind`) é definido como `11`.

- **Função `binarySearch`**: A função `binarySearch` recebe dois parâmetros:
  - `array`: O array no qual você deseja buscar o item. O array deve estar ordenado para que a busca binária funcione corretamente.
  - `item`: O item que você deseja encontrar.

  O algoritmo começa verificando o elemento do meio do array. Se o item for igual ao elemento do meio, ele retorna o índice do meio. Se o item for menor que o elemento do meio, o algoritmo continua a busca na metade inferior do array. Se o item for maior, a busca continua na metade superior. O cálculo de `middle` é atualizado a cada iteração até que o item seja encontrado ou até que a lista esteja vazia.

- **Saída**: Neste exemplo, o índice do elemento `11` é encontrado e a saída no console será:
  
  ```bash
  Indice do elemento: 5
  Tempo de execução: Xms
  ```

  Onde `Xms` é o tempo de execução em milissegundos.

### Complexidade de Tempo

A complexidade de tempo da busca binária é **O(log n)**, onde **n** é o número de elementos no array. Isso significa que, no pior caso, o algoritmo reduz o número de comparações necessárias a uma base logarítmica em relação ao tamanho da lista, tornando-o muito mais eficiente do que a busca linear para listas grandes.

### Quando usar a busca binária?

A busca binária é útil quando:

- O array está ordenado.
- Você precisa de um algoritmo eficiente para buscar um item em grandes listas.
- O custo de ordenação do array não é um problema ou o array já está ordenado.
