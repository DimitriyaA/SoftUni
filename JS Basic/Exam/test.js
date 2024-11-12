function maidenParty(input) {
    let priceForParty = Number(input[0]);
    let loveMesseges = Number(input[1]);
    let waxCandles = Number(input[2]);
    let keyrings = Number(input[3]);
    let cartoons = Number(input[4]);
    let luckySuprises = Number(input[5]);
    let noDiscount = 0;

    let sum = loveMesseges * 0.6 + waxCandles * 7.2 + keyrings * 3.6 + cartoons * 18.2 + luckySuprises * 22;
    let tools = loveMesseges + waxCandles + keyrings + cartoons + luckySuprises;
    let discount = 0;

    if (tools >= 25) {
        discount = (35 / 100) * sum;
    } else if (tools < 25) {
        discount = 0;

    }
    let finalPrice = sum - discount;
    let hostingCost = (10 / 100) * finalPrice;
    let profit = finalPrice - hostingCost

    if (profit >= priceForParty) {
        console.log(`Yes! ${(profit - priceForParty).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(priceForParty - profit).toFixed(2)} lv needed.`);
    }

}
maidenParty(["40.8",
    "20",
    "25",
    "30",
    "50",
    "10"]);