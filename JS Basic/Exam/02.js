function maidenParty(input) {
    let maidenPartyCost = Number(input[0]);
    let numberLoveMessages = Number(input[1]);
    let numberWaxRoses = Number(input[2]);
    let numberKeychains = Number(input[3]);
    let numberCaricatures = Number(input[4]);
    let numberLuckySurprises = Number(input[5]);
    let moneyForHosting = 0;
    let totalItemsInShop = numberLoveMessages + numberWaxRoses + numberKeychains + numberCaricatures + numberLuckySurprises;
    let totalMoneyFromShop = numberLoveMessages * 0.6 + numberWaxRoses * 7.2 + numberKeychains * 3.6 + numberCaricatures * 18.2 + numberLuckySurprises * 22;
    if (totalItemsInShop >= 25) {
        totalMoneyFromShop = totalMoneyFromShop * 0.65;
    }
    moneyForHosting = totalMoneyFromShop * 0.1;
    totalMoneyFromShop -= moneyForHosting;
    if (totalMoneyFromShop >= maidenPartyCost) {
        console.log(`Yes! ${(totalMoneyFromShop - maidenPartyCost).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(maidenPartyCost - totalMoneyFromShop).toFixed(2)} lv needed.`);
    }
}
maidenParty(["40.8",
    "20",
    "25",
    "30",
    "50",
    "10"]);