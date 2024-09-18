# Random number in range

Esta é uma forma simples de gerar um número inteiro aleatório dentro de um intervalo.

## Como funciona

A função `getRandomInt` retorna um número inteiro aleatório, considerando o intervalo informado.

Além disso, existe uma opção para incluir ou não o valor final. Isso porque é muito comum em programação o uso de intervalos abertos, no qual o valor inicial é incluso mas o final não. Por exemplo, no próprio JavaScript existem métodos como [`Array.prototype.slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), que usam essa lógica de *start inclusive, end exclusive*.

Mas às vezes precisamos de intervalos fechados (que inclui ambas as pontas), então a função abre a possibilidade de usar ambos.

## Código de exemplo

```javascript
function getRandomInt(minimumValue, maximumValue, includeMaximum=false) {
    return Math.floor(Math.random() * (maximumValue - minimumValue + (includeMaximum ? 1 : 0))) + minimumValue;
}

for (const [minimumValue, maximumValue] of [[0, 10], [1, 5], [1000, 2000]]) {
    console.log(`Número aleatório entre ${minimumValue} e ${maximumValue} (não incluindo o máximo): ${getRandomInt(minimumValue, maximumValue)}`);
    console.log(`Número aleatório entre ${minimumValue} e ${maximumValue} (incluindo o máximo): ${getRandomInt(minimumValue, maximumValue, true)}`);
}
```

### Explicação do código

- **Função `getRandomInt`**: é a responsável por gerar o número aleatório dentro de determinado intervalo. Ela recebe três parâmetros:

    - `minimumValue`: indica o menor valor que pode ser retornado
    - `maximumValue`: indica o maior valor que pode ser retornado. Este pode ou não ser incluso, dependendo do valor passado no terceiro parâmetro
    - `includeMaximum`: se for `true`, `maximumValue` é incluso, se for `false`, `maximuValue` não é incluso. Se não for informado, seu valor será `false` por *default*

    Ou seja:

    - `getRandomInt(1, 4)` pode retornar 1, 2 ou 3
    - `getRandomInt(1, 4, false)` pode retornar 1, 2 ou 3
    - `getRandomInt(1, 4, true)` pode retornar 1, 2, 3 ou 4

    O retorno da função é um número inteiro aleatório, dentro do intervalo determinado pelos parâmetros.

    **Detalhando melhor o cálculo:**

    Em JavaScript, só temos à disposição o [método `Math.random()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) para gerar um número aleatório entre 0 e 1, sendo que o 1 não é incluso. Então para gerar inteiros maiores e dentro de determinados intervalos, é preciso fazer alguns cálculos.
    `Math.random()` retorna um número aleatório entre 0 e 1, sendo que o 1 não é incluso. Ou seja, o valor retornado pode ser no máximo `0.9999999...`.
    
    Sendo assim, ao multiplicar `Math.random()` por um número N, o resultado estará entre 0 e N (sendo que o N não é incluso). Por exemplo, `Math.random() * 5` retorna um número entre 0 e 5, mas como o valor final não é incluso, o valor será no máximo `4.9999...`.
    
    O resto dos cálculos é para garantir que o resultado seja um número inteiro, e esteja no intervalo indicado. Usando como exemplo `minimumValue` igual a 3 e `maximumValue` igual a 8, temos que `maximumValue - minimumValue` é 5, então `Math.random() * (maximumValue - minimumValue)` é um número entre 0 e 5. Ao somar `minimumValue` (que no caso é 3), o resultado estará entre 3 e 8 (lembrando que o valor inicial é incluso e o valor final não). Por fim, `Math.floor` arredonda o número para baixo, para eliminar as casas decimais e o resultado ser um inteiro. Ou seja, `getRandomInt(3, 8)` pode retornar 3, 4, 5, 6 ou 7.
    
    Caso queira incluir o valor máximo, o cálculo muda para `Math.random() * (maximumValue - minimumValue + 1)`. Isso inclui um valor a mais nas possibilidades, fazendo com que `getRandomInt(3, 8, true)` possa retornar 3, 4, 5, 6, 7 ou 8.

- **Código de teste**: é feito um loop para mostrar o funcionamento da função usando alguns intervalos.

    No caso, é usado o array `[[0, 10], [1, 5], [1000, 2000]]`, que por sua vez contém 3 arrays. Cada um destes sub-arrays contém dois números: o valor mínimo e o valor máximo.

    Em seguida, para cada par de números, usa-se a função duas vezes: uma não incluindo o valor máximo, e outra incluindo. Se você testar várias vezes, verá que se incluir o valor máximo, às vezes ele será de fato retornado, o que não acontece se este não for incluso.

- **Saída**: vale lembrar que, por serem números aleatórios, os resultados serão diferentes a cada execução. Segue abaixo a saída de um dos testes:

    ```
    Número aleatório entre 0 e 10 (não incluindo o máximo): 5
    Número aleatório entre 0 e 10 (incluindo o máximo): 7
    Número aleatório entre 1 e 5 (não incluindo o máximo): 4
    Número aleatório entre 1 e 5 (incluindo o máximo): 5
    Número aleatório entre 1000 e 2000 (não incluindo o máximo): 1811
    Número aleatório entre 1000 e 2000 (incluindo o máximo): 1638
    ```


### Possíveis melhorias

A função não está fazendo algumas verificações, como checar se os argumentos são números inteiros (poderia arredondar se forem passados valores quebrados, por exemplo, ou simplesmente dar algum erro), não verifica se `minimumValue` é menor que `maximumValue`, etc. Isso não foi incluído propositalmente, para se concentrar apenas no algoritmo em si, mas nada impede que seja adaptado conforme a necessidade.

### Complexidade de Tempo

Não há *loops*, apenas um cálculo simples, então a complexidade é **O(1)** (constante).
