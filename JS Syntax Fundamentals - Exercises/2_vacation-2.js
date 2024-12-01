function vacation(num, group, day) {
    num = Number(num);
    let singlePrice = 0;
    if (group == 'Students') {
        if (day == 'Friday') {
            singlePrice = 8.45;
        } else if (day == 'Saturday') {
            singlePrice = 9.80;
        } else if (day == 'Sunday') {
            singlePrice = 10.46;
        }
    } else if (group == 'Business') {
        if (day == 'Friday') {
            singlePrice = 10.90;
        } else if (day == 'Saturday') {
            singlePrice = 15.60;
        } else if (day == 'Sunday') {
            singlePrice = 16;
        }
    } else if (group == 'Regular') {
        if (day == 'Friday') {
            singlePrice = 15;
        } else if (day == 'Saturday') {
            singlePrice = 20;
        } else if (day == 'Sunday') {
            singlePrice = 22.50;
        }
    } 

    let totalPrice = num * singlePrice;
    
    if (group == 'Students' && num >= 30) {
        totalPrice *= 0.85 
    } else if (group == "Business" && num >= 100) {
        totalPrice -= singlePrice * 10
    } else if (group == "Regular" && num >= 10 && num <= 20) {
        totalPrice *= 0.95 
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}