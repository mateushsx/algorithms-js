
# Bucket Sort

O bucket sort (ou bin sort) é um algoritmo de ordenação que utiliza a técnica de dividir os dados em grupos separados, chamados de "baldes" (ou buckets). Cada balde é ordenado individualmente usando algum outro algoritmo de ordenação, como QuickSort ou SelectionSort, e, por fim, todos os baldes são combinados, resultando em uma estrutura de dados ordenada.

<br>

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bucket_sort_concept.svg/375px-Bucket_sort_concept.svg.png"/>


### Como funciona

1. **Criação dos baldes:**  
   - Nesse passo, além da criação dos baldes, também é calculado quantos baldes serão usados para alocar os elementos com base no intervalo de valores.

2. **Distribuição dos elementos:**  
   - Cada item do conjunto é armazenado em seu balde apropriado, de acordo com o intervalo definido.

3. **Ordenação dos baldes:**  
   - Os baldes são ordenados individualmente usando algoritmos de ordenação, como QuickSort, SelectionSort, etc.

4. **Concatenação dos baldes:**  
   - Todos os baldes são concatenados em um único conjunto de dados, resultando na lista final ordenada.

### Código de exemplo

Implementação de uma TAD que representa um balde.

```javascript
class Balde {
  let min;
  let max;
  let valores = []
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }
  adicionar(valor) {
    if (valor >= this.min && valor <= this.max) {
      this.valores.push(valor)
      this.valores.sort() // já ordena os dados
    }
  }
}

let novoBalde = new Balde(10, 20);
novoBalde.adicionar(11); // adiciona
novoBalde.adicionar(9);  // não adiciona: fora do range
novoBalde.adicionar(21); // também não adiciona
```

Esse código ilustra as regras de um balde e seu funcionamento. O próximo passo é calcular quantos baldes são necessários para armazenar um conjunto de dados, por exemplo, para ordenar o conjunto de dados **[0,3,6,7,2,9,6,2]**. O primeiro passo é obter o menor e o maior valor desse conjunto.

```javascript
const getMinAndMax = (array) => {
  let min = array[0];
  let max = array[0];
  
  for (let x = 0; x < array.length; x++) {
    if (array[x] < min) min = array[x];
    if (array[x] > max) max = array[x];
  }
  return [min, max];
}
```

Agora temos os valores **0** e **9**. Com isso, poderíamos ter 3 baldes:

- Balde 1: min: 0, max: 3
- Balde 2: min: 4, max: 7
- Balde 3: min: 7, max: 9

A quantidade de baldes será calculada de forma automática. Vamos agora criar nossos baldes com essas informações.

```javascript
function criarBaldes(min, max, items_qtd) {
  let tmp_buckets = [];
  while (min <= max) {
    let tmp_bucket = new Balde(min, (min + items_qtd));
    tmp_buckets.push(tmp_bucket);
    min = (min + items_qtd) + 1;
  }
  return tmp_buckets;
}
```

Agora, iteramos sobre os elementos do conjunto de entrada e adicionamos os valores nos baldes correspondentes.

```javascript
array.forEach(value => {
   buckets.forEach(b => {b.adicionar(value);});
});
```

Por fim, mesclamos todos os baldes em um único conjunto.

```javascript
buckets.forEach(b => {
  array = array.concat(b.valores);
});
```

### Complexidade de tempo

- **Melhor caso:** O bucket sort pode ter complexidade **O(n + k)**, onde *n* é o número de elementos e *k* é o número de baldes, assumindo que a ordenação interna dos baldes é feita em tempo linear (como no caso do Insertion Sort para pequenas listas).
  
- **Pior caso:** No pior caso, a complexidade pode ser **O(n²)**, se os elementos forem distribuídos de maneira desigual nos baldes, resultando em um ou poucos baldes contendo muitos elementos.

- **Caso médio:** Em geral, o bucket sort opera em tempo **O(n + k)**, sendo eficaz para distribuições uniformes de dados.

### Casos de uso

- **Ordenação de números em faixa limitada:** O bucket sort é ideal para dados que estão distribuídos de maneira uniforme dentro de um intervalo fixo, como notas de exames, idades, ou dados de sensores com variação limitada.

- **Ordenação em sistemas com alta granularidade:** Algoritmos como bucket sort podem ser úteis em sistemas onde há uma alta granularidade na distribuição de dados, como sistemas de controle de tráfego, ordenação de grandes volumes de dados em sistemas de tempo real, entre outros.

