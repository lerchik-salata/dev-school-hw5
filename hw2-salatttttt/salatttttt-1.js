function largestRadialSum(arr, day) {
    let n = arr.length;
    let maxSum = -Infinity;

    for (let i = 0; i < n; i++) {
        let current = 0;
        let remaining = day;

        for (let j = i; remaining > 0; j += 2) {
            current += arr[j % n];
            remaining--;
        }

        maxSum = Math.max(maxSum, current);
    }

    return maxSum;
}

console.log(largestRadialSum([1, 5, 6, 3, 4, 2], 3));
console.log(largestRadialSum([1, 1, 0], 1));
console.log(largestRadialSum([1, 2, 3, 4], 2));

