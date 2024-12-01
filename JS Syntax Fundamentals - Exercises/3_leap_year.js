function leapYear(year) {
    year = Number(year);

    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        console.log(`yes`)
    } else {
        console.log(`no`)
    }
}


// function leapYear(year) {
//     year = Number(year);

//     if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
//         return console.log(`yes`)
//     }
//     console.log(`no`)  
// }