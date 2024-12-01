function solve(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    let sum = 0;
    let numberLine = '';

    for (let i = num1; i <= num2; i++) {
        sum += i
        numberLine += i + ' '
    }

    console.log(numberLine)
    console.log(`Sum: ${sum}`)
}


// function solve(num1, num2) {
//     let sum = 0;
//     let numberLine = '';

//     for (let i = num1; i <= num2; i++) {
//         sum += i
//         numberLine += i + ' '
//     }

//     console.log(numberLine.trimEnd())
//     console.log(`Sum: ${sum}`)
// }



solve(5, 10)