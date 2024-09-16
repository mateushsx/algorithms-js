# Insertion Sort

O Insertion Sort (ou ordenação por inserção) é um dos algoritmos de ordenação mais simples e intuitivos. Ele organiza uma lista ou array "construindo" a lista ordenada elemento por elemento, de forma similar à forma como você organizaria cartas na mão durante um jogo.

## Como funciona?

O algoritmo percorre o array, começando pelo segundo elemento, e compara esse elemento com os anteriores. Se necessário, ele move o elemento para a posição correta em relação aos elementos já ordenados à esquerda. O processo se repete para todos os elementos do array até que ele esteja completamente ordenado.

## Código de exemplo

O código a seguir implementa o Insertion Sort em JavaScript:

```javascript
const list = [2, 8, 3, 1, 5, 6, 7, 9, 10, 11, 15, 13, 12, 14];

const startTime = Date.now();

function insertionSort(array) {
  const clonedList = [...array];

  for (let index = 1; index < array.length; index++) {
    const currentValue = clonedList[index];

    let j = index - 1;

    while (j >= 0 && clonedList[j] > currentValue) {
      clonedList[j + 1] = clonedList[j];
      j--;
    }

    clonedList[j + 1] = currentValue;
  }

  return clonedList;
}

console.log('Lista desordenada:', list);
console.log('Lista ordenada:', insertionSort(list));
console.log(`Tempo de execução: ${Date.now() - startTime}ms`);
```

### Explicação do código

- **Array de entrada**: O array `list` contém uma sequência de números inteiros desordenados.
- **Função `insertionSort`**: Essa função implementa o algoritmo de ordenação por inserção. Ela começa copiando a lista original (`clonedList`) para não modificar o array original. Em seguida, ela percorre a lista a partir do segundo elemento, comparando-o com os elementos anteriores e inserindo-o na posição correta.
- **Loop interno (`while`)**: O loop verifica se o elemento atual é menor que o anterior. Se for, move os elementos maiores uma posição à frente, até encontrar a posição correta para o elemento atual.
- **Saída**: O algoritmo retorna a lista ordenada, e o tempo de execução é exibido no console.

### Complexidade de Tempo

A complexidade de tempo do Insertion Sort é:

- **Melhor caso**: **O(n)**, ocorre quando a lista já está ordenada.
- **Pior caso e caso médio**: **O(n²)**, ocorre quando a lista está em ordem inversa ou parcialmente desordenada.

### Quando usar o Insertion Sort?

- É eficiente para listas pequenas.
- Ideal quando os dados estão quase ordenados.
- O algoritmo é **estável**, o que significa que mantém a ordem relativa dos elementos iguais.
- É simples de implementar e não requer espaço extra além do array de entrada (ordenado **in-place**).
