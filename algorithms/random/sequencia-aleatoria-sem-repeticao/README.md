# Sequência aleatória sem repetição

Este algoritmo serve para escolher elementos aleatórios de um array, sem repetição. Serviria, por exemplo, para gerar jogos da mega-sena (6 números de 1 a 60, sem repetição).

## Como funciona

A função recebe o array com todos os valores possíveis e o tamanho da amostra que se deseja extrair. O retorno é outro array, contendo os elementos que foram escolhidos aleatoriamente.

Primeiro o array é embaralhado usando o [algoritmo de Fisher-Yates][1], que já foi implementado neste mesmo repositório: para mais detalhes, ver a [implementação](../shuffle-array/index.js) e a [descrição](../shuffle-array/README.md).

Após embaralhar, ele retorna um array contendo os N primeiros elementos.

Por exemplo, se o objetivo é gerar um jogo da mega-sena, basta criar um array contendo os números de 1 a 60, e usar o tamanho 6 para que a função retorne 6 números escolhidos aleatoriamente do array.

Vale lembrar que o algoritmo não se restringe a números, pois pode-se usar arrays contendo qualquer tipo de elementos. Por exemplo, eu posso ter um array de nomes (`array = ['José', 'Maria', 'Ana', 'Joaquim', 'Josefa', 'Marcos']`) e querer escolher apenas dois. Neste caso, basta chamar `sample(array, 2)` que será retornado um array contendo dois nomes aleatoriamente escolhidos do array.

  [1]: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle "Descrição do algoritmo Fisher-Yates no Wikipedia"

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

function sample(array, size) {
    shuffle(array);
    return array.slice(0, size);
}

const numeros = [];
for (var i = 1; i <= 60; i++) {
    numeros.push(i);
}
for (var i = 0; i < 5; i++) {
    console.log('jogo:', sample(numeros, 6));
}

const nomes = ['Fulano', 'Ciclano', 'Beltrano', 'Trajano', 'José', 'Josefa', 'Maria', 'Ana'];
console.log('Escolhe 3 nomes:', sample(nomes, 3));
```

### Explicação do código

- **Função `shuffle`**: ela serve para embaralhar o array, e é a mesma que foi definida [no algoritmo `shuffle-array`](../shuffle-array/index.js) e cuja explicação está [neste mesmo repositório](../shuffle-array/README.md).

- **Função `sample`**: esta é a função que escolhe elementos do array aleatoriamente. Ela recebe dois parâmetros:

    - `array`: o array de onde serão retirados os valores
    - `size`: o tamanho da amostra, ou seja, a quantidade de elementos que serão escolhidos aleatoriamente

    O retorno da função é um array contendo os elementos que foram escolhidos.

    Primeiro a função embaralha o array usando a função `shuffle` (a mesma que está definida [no algoritmo `shuffle-array`](../shuffle-array/index.js)), e depois pega os `size` primeiros elementos.

    Conforme visto no exemplo acima, o algoritmo funciona não só com números, mas com quaisquer tipos de dados. A ideia é "_escolher N elementos aleatórios do array, sem pegar a mesma posição mais de uma vez_", independente do que são esses elementos.

    É claro que se o array tiver elementos repetidos, o resultado também poderá ter. A única garantia é que nenhuma posição do array será escolhida mais de uma vez (mas se duas posições possuírem o mesmo valor, o resultado poderá ter repetições).

- **Arrays usados no exemplo**: no código acima foram usados dois arrays para exemplificar o funcionamento da função.

    - `numeros`: array no qual são adicionados os números de 1 a 60. Depois, escolhemos 5 amostras contendo 6 números cada. Ou seja, o código está simulando a escolha de 5 jogos da mega-sena.
    - `nomes`: array contendo várias strings (no caso, nomes de pessoas quaisquer). Em seguida, escolhem-se 3 nomes aleatoriamente. Poderia ser uma simulação de escolha de um grupo, por exemplo.

### Complexidade de Tempo

Como o array é percorrido apenas uma vez, a complexidade do algoritmo é **O(n)**, onde **n** é o número de elementos no array.
