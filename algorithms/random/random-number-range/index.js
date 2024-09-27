function getRandomInt(minimumValue, maximumValue, includeMaximum=false) {
    return Math.floor(Math.random() * (maximumValue - minimumValue + (includeMaximum ? 1 : 0))) + minimumValue;
}

for (const [minimumValue, maximumValue] of [[0, 10], [1, 5], [1000, 2000]]) {
    console.log(`Número aleatório entre ${minimumValue} e ${maximumValue} (não incluindo o máximo): ${getRandomInt(minimumValue, maximumValue)}`);
    console.log(`Número aleatório entre ${minimumValue} e ${maximumValue} (incluindo o máximo): ${getRandomInt(minimumValue, maximumValue, true)}`);
}
