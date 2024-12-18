function solve(x1, y1, x2, y2) {
    let firstResult = Math.sqrt(((x1 - 0) ** 2) + ((y1 - 0) ** 2));
    let secondResult = Math.sqrt(((x2 - 0) ** 2) + ((y2 - 0) ** 2));
    let interLandmarkDistance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));


    if (firstResult === parseInt(firstResult, 10)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    if (secondResult === parseInt(secondResult, 10)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    if (interLandmarkDistance === parseInt(interLandmarkDistance, 10)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}


// Version 2
function solve(x1, y1, x2, y2) {

    if (Number.isInteger(Math.sqrt(((x1 - 0) ** 2) + ((y1 - 0) ** 2)))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    if (Number.isInteger(Math.sqrt(((x2 - 0) ** 2) + ((y2 - 0) ** 2)))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    if (Number.isInteger(Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2)))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}