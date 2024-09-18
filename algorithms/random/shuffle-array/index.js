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

// funciona para qualquer tipo de array
const nomes = ['Fulano', 'Ciclano', 'Beltrano', 'Trajano', 'José', 'Josefa', 'Maria', 'Ana'];
shuffle(nomes);
console.log('Nomes embaralhados:', nomes);