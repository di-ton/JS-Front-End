function circle_area(input) {
    let result;
    let inputType = typeof(input);
    if (inputType === 'number') {
        result = (Math.PI * Math.pow(input, 2)).toFixed(2)
    } else {
        result = `We can not calculate the circle area, because we receive a ${inputType}.`
    }
    console.log(result)
}

circle_area(5)
circle_area('name')