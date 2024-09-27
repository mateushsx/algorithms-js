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