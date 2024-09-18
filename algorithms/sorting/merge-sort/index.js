const list = [2, 8, 3, 1, 5, 6, 7, 9, 10, 11, 15, 13, 12, 14];

const startTime = Date.now();

function intercala(indiceEsquerdo, indiceMeio, indiceDireito, array) {
  const n1 = indiceMeio - indiceEsquerdo + 1;
  const n2 = indiceDireito - indiceMeio;
  const L = [];
  const R = [];
  let i = 0;
  let j = 0;
  //Preenchendo os vetores auxiliares:
  for (i = 0; i < n1; i++) {
    L[i] = array[indiceEsquerdo + i];
  }
  for (j = 0; j < n2; j++) {
    R[j] = array[indiceMeio + 1 + j];
  }
  // Parte responsável por ordenar
  i = 0;
  j = 0;
  let k = indiceEsquerdo;
  while (i < n1 && j < n2) {
    if (L[i] < R[j]) {
      array[k] = L[i];
      i++;
    } else {
      array[k] = R[j];
      j++;
    }
    k++;
  }
  // Nessa parte jogamos os dados que sobraram no vetor resultante
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

console.log("Desorted list:", list);
console.log("Sorted list:", mergeSort(0, list.length - 1, list));
console.log(`Tempo de execução: ${Date.now() - startTime}ms`);
