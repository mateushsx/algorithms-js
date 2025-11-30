function getRandomInt(minimumValue, maximumValue, includeMaximum = false) {
  return (
    Math.floor(
      Math.random() * (maximumValue - minimumValue + (includeMaximum ? 1 : 0))
    ) + minimumValue
  );
}

module.exports = getRandomInt;
