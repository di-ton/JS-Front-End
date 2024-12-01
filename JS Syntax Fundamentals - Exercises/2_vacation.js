function vacation(num, group, day) {
    num = Number(num);
    let result;
    if (group == 'Students') {
        if (day == 'Friday') {
            result = num * 8.45;
        } else if (day == 'Saturday') {
            result = num * 9.80;
        } else if (day == 'Sunday') {
            result = num * 10.46;
        }
    } else if (group == 'Business') {
        if (day == 'Friday') {
            result = num * 10.90;
        } else if (day == 'Saturday') {
            result = num * 15.60;
        } else if (day == 'Sunday') {
            result = num * 16;
        }
    } else if (group == 'Regular') {
        if (day == 'Friday') {
            result = num * 15;
        } else if (day == 'Saturday') {
            result = num * 20;
        } else if (day == 'Sunday') {
            result = num * 22.50;
        }
    } 
    
    if (group == 'Students' && num >= 30) {
        result = result * 0.85
    } else if (group == "Business" && num >= 100) {
        result = (result / num) * (num - 10)
    } else if (group == "Regular" && num >= 10 && num <= 20) {
        result = result * 0.95
    }
    console.log(`Total price: ${result.toFixed(2)}`);
}