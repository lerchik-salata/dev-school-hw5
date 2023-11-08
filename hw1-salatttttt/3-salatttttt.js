function findNb(m) {
   let n = 1;
    while(true) {
        m = m - Math.pow(n, 3)
        if(m === 0) {
            console.log(n);
            break;
        }
        if(m < 0) {
            console.log(-1);
            break;
        }
        n++;
    }
}

findNb(100)