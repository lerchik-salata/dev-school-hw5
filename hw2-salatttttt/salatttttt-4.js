function unpackSausages(arr) {
    let unpackedSausages = [];
    let sausagesCounter = 0;
    for (let boxes of arr) {

        for (let box of boxes) {

            if (box[0] === "[" && box[box.length - 1] === "]") {
                let sausageBox = box.slice(1, -1);

                if (sausageBox.length % 4 === 0) {
                    let sortedBox = sausageBox.split("").sort().join(" ");

                    if(sortedBox[0] === sortedBox[sortedBox.length-1]){
                        sausagesCounter++;
                        unpackedSausages.push(sortedBox);
                    }

                    if (sausagesCounter % 5 === 0) {
                        unpackedSausages.pop();
                    }
                }
            }
        }
    }
    let result = unpackedSausages.join(" ");
    return result;
}

console.log(unpackSausages([ [ "(-)", "[IIII]", "[))))]" ], [ "IuI", "[llll]" ], [ "[@@@@]", "UwU",
    "[IlII]" ], [ "IuI", "[))))]", "x" ], [] ]));