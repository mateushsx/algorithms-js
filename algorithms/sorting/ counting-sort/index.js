/**
 * Sort an array using the Counting Sort algorithm.
 * @param {number[]} array
 * @returns {number[]}
 */
function countingSort(array) {
    const length = array.length;
    const maxValue = Math.max(...array);

    let countArray = Array(maxValue + 1).fill(0);
    let outputArray = Array(length).fill(0);

    for (let i = 0; i < length; i++) {
        let position = array[i];

        countArray[position] = countArray[position] + 1;
    }

    for (let i = 1; i <= maxValue; i++) {
        countArray[i] = countArray[i] + countArray[i - 1];
    }

    for (let i = length - 1; i >= 0; i--) {
        let value = array[i];
        let index = countArray[value] - 1;

        outputArray[index] = value;
        countArray[value] = index;
    }

    return outputArray;
}
const exampleArray = [2, 8, 3, 1, 5, 6, 7, 9, 10, 11, 15, 13, 12, 14];
const startTime = Date.now();

console.log("Unsorted array:", exampleArray);
console.log("Sorted array:", countingSort(exampleArray));
console.log(`Runtime: ${Date.now() - startTime}ms`);
