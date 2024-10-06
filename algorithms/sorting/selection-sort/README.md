#  Selection Sort

O Selection Sort (ou ordenação por seleção) é um algoritmo simples de ordenação, baseado na ideia de encontrar o menor elemento de uma lista e colocá-lo na sua posição correta. Ele é mais intuitivo para entender, mas não é tão eficiente quanto outros métodos, como Merge Sort ou Quick Sort, especialmente em grandes listas.

### Como funciona?

O algoritmo percorre o array repetidamente, selecionando o menor elemento da parte não ordenada do array e movendo-o para a posição correta, que é o início da parte não ordenada. Isso se repete até que todos os elementos estejam ordenados.

### Código de exemplo

A implementação do Selection Sort em JavaScript pode ser feita da seguinte forma:

```js
function searchSmallest(arr) {
  let smallestElement = arr[0];
  let smallestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestElement) {
      smallestElement = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

function selectionSort(arr) {
  let newArray = [];
  let copyArray = arr.slice();

  for (let i = 0; i < arr.length; i++) {
    let smallestIndex = searchSmallest(copyArray);
    newArray.push(copyArray.splice(smallestIndex, 1)[0]);
  }
  return newArray;
}

const exampleArray = [5, 3, 6, 2, 10];
console.log(selectionSort(exampleArray)); // [2, 3, 5, 6, 10]
```

### Explicação do código

- Função `searchSmallest`: procura o menor elemento no array e retorna seu índice.
- Função `selectionSort`: faz uma cópia do array original e cria um novo array vazio. Em seguida, para cada elemento, encontra o menor valor do array copiado, remove-o com `splice()` e o insere no novo array ordenado.
- Saída: a lista é completamente ordenada e exibida no console.

### Complexidade de Tempo

A complexidade de tempo do Selection Sort é:

- Melhor caso: O(n²), porque mesmo que o array já esteja ordenado, ele continua comparando todos os elementos.
- Pior caso e caso médio: O(n²), ocorre em qualquer situação, pois sempre faz duas passagens sobre o array.

### Quando usar o Selection Sort?

- Quando se lida com listas pequenas, onde a simplicidade do algoritmo pode ser mais vantajosa que a performance.
- É fácil de implementar, mas há opções mais eficientes para grandes listas como o Merge Sort ou Quick Sort.