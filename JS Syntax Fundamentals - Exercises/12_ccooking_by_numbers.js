function solve(number, ...input) {
    let result = Number(number);
    

    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case 'chop': result /= 2; break;
            case 'dice': result = Math.sqrt(result); break;
            case 'spice': result += 1; break;
            case 'bake': result *= 3; break;
            case 'fillet': result -= result * 0.2; break;
        }
        console.log(result)
    }
}

// Version 2
function solve(...input) {
    let number = Number(input[0]);
    let result = number;

    for (let i = 1; i < input.length; i++) {
        switch (input[i]) {
            case 'chop': result /= 2; break;
            case 'dice': result = Math.sqrt(result); break;
            case 'spice': result += 1; break;
            case 'bake': result *= 3; break;
            case 'fillet': result *= 0.8; break;
        }
        console.log(result)
    }
}