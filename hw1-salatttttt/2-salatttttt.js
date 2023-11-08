function hanoi(disks, from, aux, dest) {
    let move = 0;

    function moveDisk(n, source, auxiliary, destination) {
        if (n > 0) {
            moveDisk(n - 1, source, destination, auxiliary);

            console.log(`Move disk ${n} from ${source} to ${destination}`);
            move++

            moveDisk(n - 1, auxiliary, source, destination);
        }
    }

    moveDisk(disks, from, aux, dest);

    console.log(`Total moves: ${move}`);
}

hanoi(3, 'A', 'B', 'C');
hanoi(1, 'A', 'B', 'C');