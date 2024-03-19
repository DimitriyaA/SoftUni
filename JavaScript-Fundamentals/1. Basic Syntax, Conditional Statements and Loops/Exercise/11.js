function bitcoinMining(input) {
    let day = 1;
    let money = 0;
    let moneyForTheDay = 0;
    let bitcoins = 0;
    let firstBitcoin = 0;
    let moneyLeft = 0;
    for (let i = 0; i < input.length; i++) {
        let gramsGoldMined = Number(input[i]);
        moneyForTheDay = gramsGoldMined * 67.51;
        if (day % 3 === 0) {
            moneyForTheDay *= 0.7;
        }
        money += moneyForTheDay;
        if (money >= 11949.16) {
            bitcoins += Math.floor(money / 11949.16);
            money -= Math.floor(money / 11949.16) * 11949.16;
            if (firstBitcoin === 0) {
                firstBitcoin = day;
            }
        }
        day++;
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`);
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
//bitcoinMining([100, 200, 300]);
bitcoinMining([3124.15, 504.212, 2511.124]);