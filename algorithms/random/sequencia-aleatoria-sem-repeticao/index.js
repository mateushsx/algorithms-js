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