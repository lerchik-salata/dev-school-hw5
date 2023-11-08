function sumOfMultiples(num) {
    let sum = 0;
    let x = 0;

    while(x < num){
        if(x < 0){
            return 0;
        }

        if(x % 3 === 0 || x % 5 === 0){
            sum +=x;
        }
            ++x;
    }
    return sum;
}

console.log(sumOfMultiples(25))