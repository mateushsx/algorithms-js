# Quick Sort

O **Quick Sort** (ou ordenação rápida) é um dos algoritmos de ordenação mais rápidos. Ele utiliza o conceito de **dividir para conquistar** para organizar os elementos de um array. Ele é amplamente utilizado devido à sua performance, sendo adequado para grandes conjuntos de dados.

### Como funciona?

O Quick Sort escolhe um elemento como **pivô** e particiona o array em dois subarrays: um com os elementos menores ou iguais ao pivô e outro com os elementos maiores. O algoritmo então é aplicado _recursivamente_ a esses subarrays até que toda a lista esteja ordenada.

### Código de exemplo

O código a seguir implementa o Quick Sort em JavaScript:

```js
function quicksort(arr) {
  if (arr.length < 2) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const smallerThanPivot = [];
  const greaterThanPivot = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === Math.floor(arr.length / 2)) continue;
    if (arr[i] <= pivot) {
      smallerThanPivot.push(arr[i]);
    } else {
      greaterThanPivot.push(arr[i]);
    }
  }

  return quicksort(smallerThanPivot).concat(pivot, quicksort(greaterThanPivot));
}

console.log(quicksort([10, 5, 2, 3]));
```

### Explicação do código

- **Array de entrada**: o array `arr` contém os elementos que desejamos ordenar.
- **Escolha do pivô**: o pivô é escolhido como o elemento central do array (`arr[Math.floor(arr.length / 2)]`), o que ajuda a melhorar a eficiência do algoritmo.
- **Particionamento**: o array é dividido em dois subarrays: `smallerThanPivot` com os elementos menores ou iguais ao pivô, e `greaterThanPivot` com os elementos maiores.
- **Recursão**: o algoritmo chama a si mesmo para ordenar os dois subarrays até que a lista completa esteja ordenada.
- **Concatenação**: finalmente, os subarrays ordenados são concatenados com o pivô no meio, formando a lista final ordenada.

### Complexidade de Tempo

- **Melhor caso**: O(n log n) – O array é dividido em partes aproximadamente iguais a cada iteração.
- **Pior caso**: O(n²) – Ocorre quando o pivô escolhido é sempre o menor ou o maior elemento (exemplo: array já ordenado).

### Quando usar o Quick Sort?

- Ideal para grandes volumes de dados.
- Oferece uma excelente performance geral para a maioria dos casos.
- Não é estável, o que significa que a ordem relativa de elementos iguais pode ser alterada.