// function solve(num) {
//     num = String(num);
//     let sum = 0;

//     i = 0
//     while (i < num.length) {
//         sum += Number(num[i]);
//         i++;  
//     } 
//     console.log(`${sum}`)
// }

function sumDigits(num) {
    num = String(num);
    // let num = num.toString()
    let sum = 0;
    
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);   
    } 
    console.log(`${sum}`);
}

// function sumDigits(num) {
//     let sum = 0;
    
//     while (num > 0) {
//         sum += num % 10;  
//         num = Math.trunc(num / 10)
//     } 
//     console.log(`${sum}`);
// }



sumDigits('543')