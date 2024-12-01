function math_operations(num1, num2, operator) {
    num1 = Number(num1);
    num2 = Number(num2);
    let result
    switch(operator) {
        case '+': result = num1+num2; break;
        case '-': result = num1-num2; break;
        case '*': result = num1*num2; break;
        case '/': result = num1/num2; break;
        case '%': result = num1%num2; break;
        case '**': result = num1**num2; break;
    }
    console.log(result);
}

math_operations(3, 5, '*')