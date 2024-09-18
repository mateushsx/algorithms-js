# Shuffle array

Esta é uma implementação do [algoritmo de Fisher-Yates][1], que serve para embaralhar um array qualquer. No exemplo é usado um array de números, mas pode ser usado para qualquer array, **independente do tipo dos seus elementos**.

  [1]: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle "Descrição do algoritmo Fisher-Yates no Wikipedia"

## Como funciona

Conforme [descrição da Wikipedia][1]:

```
-- To shuffle an array a of n elements (indices 0..n-1):
for i from n−1 down to 1 do
     j = random integer such that 0 ≤ j ≤ i
     exchange a[j] and a[i]
```

Ou seja, é feito um loop da última até a primeira posição. Para cada posição, gera-se um número aleatório entre zero e a posição atual. Em seguida o elemento da posição atual troca de lugar com o elemento que está na posição indicada pelo número aleatório.

Ao final do *loop*, o array estará embaralhado.

## Código de exemplo

```javascript
function shuffle(array) {
    if (!Array.isArray(array))
        return; // se não é array, sai da função sem fazer nada

    for (var i = array.length - 1; i > 0; i--) {
        var n = Math.floor(Math.random() * i);
        var tmp = array[n];
        array[n] = array[i];
        array[i] = tmp;
    }
    // A função altera o próprio array, então não há necessidade de retorná-lo
}

const array = [2, 3, 5, 6, 7, 9, 10, 11, 15, 19, 25, 28, 30, 33, 35, 42, 90];
shuffle(array);

console.log('Array embaralhado:', array);
```

### Explicação do código

O parâmetro `array` contém um array qualquer. No exemplo acima foram usados números, mas o algoritmo funciona para qualquer array, não importando o tipo dos seus elementos.

A função `shuffle` recebe como parâmetro o array que será embaralhado. Importante notar que o array é modificado dentro da função, por isso ela não retorna nada. O algoritmo é implementando conforme descrição já citada acima.

Obs: para gerar o número aleatório, você também poderia usar a função `getRandomInt`, que [foi implementada neste mesmo repositório](../random-number-range/index.js). Neste caso, bastaria trocar a linha que chama `Math.random()` por `var n = getRandomInt(0, i);`.

### Complexidade de Tempo

Como o array é percorrido apenas uma vez, a complexidade do algoritmo é **O(n)**, onde **n** é o número de elementos no array.

