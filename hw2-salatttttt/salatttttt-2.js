function findEqualSum(arr){
    for(let i = 0; i < arr.length; i++){
        let sumLeftArr = arr.slice(0,i);
        let sumLeft = 0;

        for(let n of sumLeftArr){
            sumLeft += n;
        }

        let sumRightArr = arr.slice(i+1);
        let sumRight = 0;

        for(let n of sumRightArr){
            sumRight += n;
        }

        if(sumRight === sumLeft) {
            return i;
        }
    }
    return -1;
}

console.log(findEqualSum([1,2,3,4,3,2,1]));
console.log(findEqualSum([1, 100, 50,-51,1,1]));
console.log(findEqualSum([20,10,-80,10,10,15,35]));