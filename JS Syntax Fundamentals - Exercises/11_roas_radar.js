function solve(speed, area) {
    let exceeding_speed = false;
    let speedLimit = 0;
    switch (area) {
        case 'motorway': speedLimit = 130; break;
        case 'interstate': speedLimit = 90; break;
        case 'city': speedLimit = 50; break;
        case 'residential': speedLimit = 20; break;
    }

    if (area === 'motorway' && speed > 130) {
        exceeding_speed = true
    } else if (area === 'interstate' && speed > 90) {
        exceeding_speed = true
    } else if (area === 'city' && speed > 50) {
        exceeding_speed = true
    } else if (area === 'residential' && speed > 20) {
        exceeding_speed = true
    } 

    
    if (exceeding_speed === false) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    } else {
        if (speed - speedLimit <= 20) {
            console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - speeding`)
        } else if (speed - speedLimit <= 40) {
            console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`)
        } else if (speed - speedLimit > 40) {
            console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - reckless driving`)
        }
    }
}