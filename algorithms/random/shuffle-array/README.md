# Shuffle array

Esta é uma implementação do [algoritmo de Fisher-Yates][1], que serve para embaralhar um array qualquer. No exemplo é usado um array de números, mas pode ser usado para qualquer array, **independente do tipo dos seus elementos**.

  [1]: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle "Descrição do algoritmo Fisher-Yates no Wikipedia"

## Como funciona

A função recebe um array e embaralha seus elementos, trocando-os de posição aleatoriamente. Para isso usa a função `Math.random()`, que é utilizada para obter uma posição aleatória do array e trocar os elementos de lugar. Desta forma 

Como o array é modificado dentro da função, não há necessidade de retorná-lo.

## Código de exemplo

```javascript
function shuffle(array) {
    if (!Array.isArray(array))
        return;

    for (var i = array.length - 1; i > 0; i--) {
        var n = Math.floor(Math.random() * i);
        var tmp = array[n];
        array[n] = array[i];
        array[i] = tmp;
    }
}

const array = [2, 3, 5, 6, 7, 9, 10, 11, 15, 19, 25, 28, 30, 33, 35, 42, 90];
shuffle(array);
console.log('Array embaralhado:', array);

const nomes = ['Fulano', 'Ciclano', 'Beltrano', 'Trajano', 'José', 'Josefa', 'Maria', 'Ana'];
shuffle(nomes);
console.log('Nomes embaralhados:', nomes);
```

### Explicação do código

- **Função `shuffle`**: recebe apenas um parâmetro:

    - `array`: corresponde ao array que será embaralhado

    Importante notar que o array é modificado dentro da função, por isso ela não retorna nada. O código é uma implementação do algoritmo de Fisher-Yates, conforme sua [descrição da Wikipedia][1]:

    ```
    -- To shuffle an array a of n elements (indices 0..n-1):
    for i from n−1 down to 1 do
         j = random integer such that 0 ≤ j ≤ i
         exchange a[j] and a[i]
    ```
    
    Ou seja, é feito um loop da última até a primeira posição. Em cada iteração, gera-se um número aleatório entre zero e a posição atual. Em seguida o elemento da posição atual troca de lugar com o elemento que está na posição indicada pelo número aleatório. Ao final do *loop*, o array estará embaralhado.

- **Arrays**: o código contém um array contendo vários números (`array`) e outro contendo strings (`nomes`). Cada um deles é embaralhado e exibido no console.

    No exemplo acima foram usados números e strings, mas o algoritmo funciona para qualquer array, não importando o tipo dos seus elementos.
    
    Obs: para gerar o número aleatório, você também poderia usar a função `getRandomInt`, que [foi implementada neste mesmo repositório](../random-number-range/index.js). Neste caso, bastaria trocar a linha que chama `Math.random()` por `var n = getRandomInt(0, i);`.

- **Saída**: como o embaralhamento é aleatório, o resultado será diferente a cada execução, mas a princípio os valores estarão embaralhados:

    ```
    Array embaralhado: [19, 42, 11, 90, 2, 15,  9, 6, 33,  3, 35, 7, 28, 30, 10,  5, 25]
    Nomes embaralhados: ['José', 'Josefa', 'Trajano', 'Maria', 'Ciclano', 'Beltrano', 'Ana', 'Fulano']
    ```

    É claro que existe uma chance do array embaralhado ser igual ao original, principalmente se tiver poucos elementos e você embaralhá-lo várias vezes. Mas conforme o tamanho do array cresce, esta chance diminiu consideravelmente.

### Complexidade de Tempo

Como o array é percorrido apenas uma vez, a complexidade do algoritmo é **O(n)**, onde **n** é o número de elementos no array.

