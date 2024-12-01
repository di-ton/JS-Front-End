function sameDigits(input) {
    input = String(input);
    let totalSum = 0;
    let firstNumber = Number(input[0]);
    let is_the_same = true;
    
    for (let i = 0; i < input.length; i++) {
        if (input[i] != firstNumber) {
            is_the_same = false
        }
        totalSum += Number(input[i]);   
    } 
    console.log(is_the_same);
    console.log(totalSum);
}


sameDigits(2222222)