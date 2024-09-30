# Bubble Sort

O Bubble Sort é um dos algoritmos de ordenação mais simples. Por sua simplicidade, muitas vezes é utilizado como uma ferramenta de aprendizado.

O Bubble Sort baseia-se na comparação de elementos adjacentes na lista, trocando-os de posição quando necessário.

## Como funciona?

O Bubble Sort percorre o array do início ao fim, quantas vezes for necessário, comparando um elemento com outro adjacente a ele. Se eles não estiverem ordenados entre si, eles são trocados de posição. Se estiverem ordenados, o algoritmo passa para a posição seguinte e repete esse procedimento.

Este seria o passo-a-passo:

1. Percorra a lista da esquerda para a direita.
2. Compare cada elemento com o elemento adjacente.
3. Se o elemento à esquerda for maior que o elemento à direita, troque-os de posição.
4. Repita os passos 1 a 3 até que a lista esteja ordenada, ou seja, que não tenha sido necessária nenhuma troca de posição na última passagem pela lista.


## Código de exemplo

O código a seguir implementa o Bubble Sort em JavaScript:

```javascript
const list = [2, 8, 3, 1, 5, 6, 7, 9, 10, 11, 15, 13, 12, 14];
const startTime = Date.now();

function swap (array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(array) {

  let unsorted_elements = array.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 1; i < unsorted_elements; i++) {
      if (array[i - 1] > array[i]) {
        swap(array, i - 1, i);
        swapped = true;
      }
    }
    unsorted_elements--;
  } while (swapped);
  return array;
}

console.log("Unsorted list:", list);
console.log("Sorted list:", bubbleSort(list));
console.log(`Tempo de execução: ${Date.now() - startTime}ms`);
```

### Explicação do código

1. **Array de entrada (`list`)**: O array `list` contém uma sequência de números inteiros desordenados que serão processados pelo algoritmo de Bubble Sort para serem organizados em ordem crescente.

2. **Função `bubbleSort`**: Esta função implementa o algoritmo de **Bubble Sort**, que percorre a lista quantas vezes for necessário, alternando a posição de elementos adjacentes até que todos estejam ordenados.

- **Primeiro loop (`do-while`)**: Faz com que o segundo loop seja realizado enquanto alguma troca tiver acontecido. Se não tiver havido trocas, cessa a repetição, pois a lista está ordenada.

- **Segundo loop (`for`)**: percorre a lista, do segundo elemento até o último elemento não ordenado. Compara o elemento corrente (`i`) com o elemento anterior e troca a posição deles se estiverem fora da ordem.

3. **Função `swap`**: É uma função auxiliar ao processo, com a única responsabilidade de, dado um array e dois índices (`i` e `j`), alternar os valores, colocando em `i` o que estava em `j` e vice-versa.

4. **Saída**: O algoritmo retorna o array original agora ordenado. O console exibe a lista original (desordenada) e a lista final (ordenada).

### Complexidade de tempo

A complexidade de tempo do Bubble Sort é:

- **Melhor caso: O(n)**, ocorre quando a lista já está ordenada.

- **Caso médio e pior caso: O(n^2)**, ocorre quando a lista está em ordem inversa ou parcialmente desordenada.

### Otimizações

O algoritmo "básico" do Bubble Sort percorre a lista _do início ao fim_ quantas vezes for necessário até que, ao percorrê-la, não seja necessário trocar nenhum elemento de lugar.

Uma primeira otimização a ser feita é percorrer a lista do início ao fim na primeira passagem, do início até o penúltimo elemento na segunda, até o antepenúltimo na terceira, e assim sucessivamente. Isso porque, a cada passagem, há a garantia de que há um elemento a mais, na ordem correta, ao final da lista. Essa otimização está implementada no exemplo.

Outra otimização possível leva em conta que, a cada passagem, os elementos que ficaram após (à direita de) o último elemento que foi trocado. Ou seja, na passagem seguinte, esses elementos não precisam ser reavaliados.

As otimizações não afetam a medição de complexidade de tempo.

### Quando usar o Bubble Sort?

- É eficiente para listas pequenas.
- É ideal quando os dados estão quase ordenados.
- É estável, o que significa que mantém a ordem relativa dos elementos iguais.
- É simples de implementar e não requer espaço extra além do array de entrada (ordenado in-place).
- Há críticas em relação a esse algoritmo, pois não haveria nenhuma situação em que ele teria vantagens em comparação com outros em termos de simplicidade de implementação, complexidade ou eficiência.