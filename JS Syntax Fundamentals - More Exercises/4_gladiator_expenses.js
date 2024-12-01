function solve(lostFigthsCount, helmetPrice, swordPrice, ShieldPrice, armorPrice) { 
    let totalExpences = 0;
    
    let helmets = Math.floor(lostFigthsCount / 2);
    let swords = Math.floor(lostFigthsCount / 3);
    let shields = Math.floor(lostFigthsCount / 6);
    let armor = 0;

    if (shields >= 2) {
        armor = Math.floor(shields / 2);
    } 

    totalExpences = helmetPrice * helmets + swordPrice * swords + ShieldPrice * shields + armor * armorPrice
    console.log(`Gladiator expenses: ${totalExpences.toFixed(2)} aureus`)
}

solve(7,
    2,
    3,
    4,
    5
    )

solve(23,
    12.50,
    21.50,
    40,
    200
    )