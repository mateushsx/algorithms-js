function fibonacciSearch(arr, x) {
    let arrSize =  arr.length;

    let fibbM2 = 0;
    let fibbM1 = 1;
    let fibM = fibbM1 + fibbM2;

    while(fibM < arrSize) {
        fibbM2 = fibbM1;
        fibbM1 =  fibM;
        fibM = fibbM2 + fibbM1;
    };

    let offset = -1;

    while(fibM > 1) {
        let i = Math.min(offset + fibbM2, arrSize - 1);

        if(arr[i] < x) {
            fibM = fibbM1;
            fibbM1 = fibbM2;
            fibbM2 = fibM - fibbM1;
            offset = i;
        } else if(arr[i] > x) {
            fibM = fibbM2;
            fibbM1 = fibbM1 - fibbM2;
            fibbM2 = fibM - fibbM1;
        } else { 
            return i;
        }

        if(fibbM1 && arr[offset + 1] === x) {
            return offset + 1;
        }

    }
    return -1;
}

let sortedArray = [3, 8, 15, 21, 28, 36, 42, 57, 64, 73, 81, 92, 103, 115, 129];
const x = 103;
const result = fibonacciSearch(sortedArray, x);
console.log(result, sortedArray[result]);