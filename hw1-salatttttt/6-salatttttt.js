function decreasedNumber(number) {
    let arr = String(number).split("")
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let x = arr[i];
        let j = i;

        while (j > 0 && arr[j - 1] < x) {
            arr[j] = arr[j - 1];
            j = j - 1;
        }

        arr[j] = x;
    }
    let result = Number(arr.join(""));
    return result;
}

console.log(decreasedNumber(42145));
console.log(decreasedNumber(145263))
