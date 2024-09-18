# Random number in range

Esta é uma forma simples de gerar um número inteiro aleatório dentro de um intervalo.

## Como funciona

Em JavaScript, só temos à disposição o [método `Math.random()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) para gerar um número aleatório entre 0 e 1. Então para gerar inteiros maiores e dentro de determinados intervalos, é preciso fazer alguns cálculos.

## Código de exemplo

```javascript
// Gera um número inteiro aleatório entre min e max, lembrando que o primeiro é incluso e o segundo não.
// Ex: getRandomInt(1, 5) pode retornar 1, 2, 3 ou 4
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

for (const [min, max] of [[0, 10], [1, 5], [1000, 2000]]) {
    console.log(`Número aleatório entre ${min} e ${max}: ${getRandomInt(min, max)}`);
}
```

### Explicação do código

`Math.random()` retorna um número aleatório entre 0 e 1, sendo que o 1 não é incluso. Ou seja, pode ser no máximo `0.9999999...`. Sendo assim, ao multiplicar por um número N, o resultado estará entre 0 e N (sendo que o N não é incluso). Por exemplo, `Math.random() * 5` retorna um número entre 0 e 5, mas como o valor final não é incluso, o valor será no máximo `4.9999...`.

O resto dos cálculos é para garantir que o resultado está no intervalo indicado. Usando como exemplo `min` igual a 3 e `max` igual a 8, temos que `max - min` é 5, então `Math.random() * (max - min)` é um número entre 0 e 5. Ao somar `min` (que no caso é 3), o resultado estará entre 3 e 8 (lembrando que o valor inicial é incluso e o valor final não). Por fim, `Math.floor` arredonda o número para baixo, para eliminar as casas decimais e o resultado ser um inteiro. Ou seja, `getRandomInt(3, 8)` pode retornar 3, 4, 5, 6 ou 7.

Lembrando que a função não está fazendo algumas verificações, como verificar se os argumentos são números inteiros (poderia arredondar se forem passados valores quebrados, por exemplo), não verifica se `min` é menor que `max`, etc.