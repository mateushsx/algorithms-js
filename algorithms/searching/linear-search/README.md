# Linear Search

A **Busca Linear** (ou Linear Search) é um dos algoritmos mais simples de busca em uma lista ou array. Ela percorre todos os elementos de forma sequencial até encontrar o elemento desejado ou até ter verificado todos os elementos.

## Como funciona

A busca linear começa no primeiro elemento de um array e compara cada elemento com o item que está sendo buscado. Se o elemento é encontrado, o algoritmo retorna o item. Caso contrário, continua percorrendo a lista até o final. Se o item não for encontrado em nenhum ponto, o algoritmo retorna um valor indicando a ausência do item (geralmente `-1`).

## Código de exemplo

O código a seguir implementa a busca linear em JavaScript:

```javascript
const elements = [2, 8, 3, 1, 5, 6, 7, 9, 10, 11, 15, 13, 12, 14];
const elementToFind = 11;


function linearSeach(array, item) {
  if (!Array.isArray(array)) return -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return item;
    }
  }

  return -1;
}

const elementFoud = linearSeach(elements, elementToFind);

console.log('Elemento:', elementFoud);
```

### Explicação do código

- **Array de elementos**: O array `elements` contém uma sequência de números inteiros. O item que você está procurando (`elementToFind`) é definido como `11`.

- **Função `linearSearch`**: A função `linearSearch` recebe dois parâmetros:
  - `array`: O array no qual você deseja buscar o item.
  - `item`: O item que você deseja encontrar.

  O algoritmo percorre cada elemento do array. Se o elemento for igual ao item, ele retorna o item encontrado. Se nenhum item for encontrado, a função retorna `-1`.

- **Saída**: Neste exemplo, o elemento `11` ele está presente no array, então o algoritmo retorna `11` e a saída no console será:
  
  ```bash
  Elemento: 11
  ```

### Complexidade de Tempo

A complexidade de tempo da busca linear é **O(n)**, onde **n** é o número de elementos no array. Isso significa que, no pior caso, o algoritmo precisará verificar todos os elementos uma vez, resultando em uma execução proporcional ao tamanho da lista.

### Quando usar a busca linear?

A busca linear é útil em casos em que:

- O array não está ordenado.
- Você precisa de um algoritmo simples e fácil de implementar.
- O tamanho do array é pequeno, já que o desempenho pode ser ruim para listas muito grandes devido à necessidade de verificar todos os elementos.
