function isPrime(num) {
    if(num <= 1) {
        return false;
    }
    let x = 2
    for(x; x<num; ++x) {
        if(num % x === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(123456739996))
console.log(isPrime(9661))
console.log(isPrime(1))