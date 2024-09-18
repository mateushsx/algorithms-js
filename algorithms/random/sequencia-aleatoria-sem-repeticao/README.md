# Sequência aleatória sem repetição

Este algoritmo serve para escolher elementos aleatórios de um array, sem repetição. Serviria, por exemplo, para gerar jogos da mega-sena (6 números de 1 a 60, sem repetição).

## Como funciona

A ideia básica é gerar um array com todos os valores possíveis. Depois, este é embaralhado usando o [algoritmo de Fisher-Yates][1], [que já foi implementado neste mesmo repositório](../shuffle-array/index.js). Após embaralhar, basta pegar os N primeiros elementos.

  [1]: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle "Descrição do algoritmo Fisher-Yates no Wikipedia"

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

function sample(array, n) {
    shuffle(array);
    return array.slice(0, n);
}

// gerar vários jogos da mega-sena
const array = [];
// preenche o array com números de 1 a 60
for (var i = 1; i <= 60; i++) {
    array.push(i);
}
// gera alguns jogos
for (var i = 0; i < 5; i++) {
    console.log('jogo:', sample(array, 6));
}

// funciona para qualquer tipo de array
const nomes = ['Fulano', 'Ciclano', 'Beltrano', 'Trajano', 'José', 'Josefa', 'Maria', 'Ana'];
console.log('Escolhe 3 nomes:', sample(nomes, 3));
```

### Explicação do código

A função `shuffle` serve para embaralhar o array, e [é a mesma que foi definida aqui](../shuffle-array/index.js).

A função `sample` recebe dois parâmetros:

- `array`: o array de onde serão retirados os valores
- `n`: quantidade de elementos que serão retornados

Primeiro a função embaralha o array, e depois pega os `n` primeiros elementos. Assim, ela retorna outro array, contendo `n` elementos aleatórios escolhidos do array.

Conforme visto no exemplo acima, o algoritmo funciona não só com números, mas com quaisquer tipos de dados. A ideia é "escolher N elementos aleatórios do array, sem pegar a mesma posição mais de uma vez", independente do que são esses elementos.

É claro que se o array tiver elementos repetidos, o resultado também poderá ter. A única garantia é que nenhuma posição do array será escolhida mais de uma vez (mas se duas posições possuírem o mesmo valor, o resultado poderá ter repetições).

### Complexidade de Tempo

Como o array é percorrido apenas uma vez, a complexidade do algoritmo é **O(n)**, onde **n** é o número de elementos no array.
