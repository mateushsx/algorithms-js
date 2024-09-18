// Gera um número inteiro aleatório entre min e max, lembrando que o primeiro é incluso e o segundo não.
// Ex: getRandomInt(1, 5) pode retornar 1, 2, 3 ou 4
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

for (const [min, max] of [[0, 10], [1, 5], [1000, 2000]]) {
    console.log(`Número aleatório entre ${min} e ${max}: ${getRandomInt(min, max)}`);
}
