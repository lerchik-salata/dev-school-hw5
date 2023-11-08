function highAndLow(string) {
    let nums = string.split(" ").map(Number);
    let i = 1;
    let max = nums[0];
    let min = nums[0];

    for(i; i < nums.length; i++) {
        let num = nums[i];
        if(num > max) {
            max = num;
        }
        if(num < min) {
            min = num;
        }

    }
    let result = String(max) + " " + String(min)
    console.log(result);
}

highAndLow("1 2 3 4 5 6")