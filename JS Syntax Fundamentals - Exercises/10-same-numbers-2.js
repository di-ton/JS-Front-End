function sameDigits(number) {
    input = number.toString();
    let firstDigit = input[0];
    let totalSum = Number(firstDigit);
    let isTheSame = true;
    
    for (let i = 1; i < input.length; i++) {
        if (input[i] !== firstDigit) {
            isTheSame = false;
        }
        totalSum += Number(input[i]);   
    } 
    console.log(isTheSame);
    console.log(totalSum);
}


sameDigits(2222222)