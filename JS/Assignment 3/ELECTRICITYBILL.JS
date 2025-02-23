function calculateElectricityBill(units, timeOfDay) {
    let rate;
    if (units < 100) {
        rate = 5;
    } else if (units <= 300) {
        rate = 4;
    } else {
        rate = 3;
    }
    if (timeOfDay >= 20 || timeOfDay < 8) {
        rate *= 1.10;
    }
    
    return (units * rate).toFixed(2);
}

console.log(calculateElectricityBill(200, 21)); 
