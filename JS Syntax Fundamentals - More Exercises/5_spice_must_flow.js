function solve(spice) {
    let dropedSpice = 0;
    let dayCounter = 0;

    if (spice >= 100) {
        while (spice >= 100) {
            dropedSpice += spice - 26;
            dayCounter += 1;
            spice -= 10;
        }
        dropedSpice -= 26;
    }

    console.log(dayCounter);
    console.log(dropedSpice);
}

solve(111);
solve(450);
