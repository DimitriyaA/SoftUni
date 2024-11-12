function excursionSale(input) {
    let numberSeaExcursions = Number(input[0]);
    let numberMountainExcursions = Number(input[1]);
    let index = 2;
    let profit = 0;
    while (index < input.length) {
        let excursionType = input[index];
        if (excursionType === "Stop") {
            break;
        }
        if (excursionType === "sea" && numberSeaExcursions > 0) {
            profit += 680;
            numberSeaExcursions -= 1;
        } else if (excursionType === "mountain" && numberMountainExcursions > 0) {
            profit += 499;
            numberMountainExcursions -= 1;
        }
        index++;
    }
    if (numberSeaExcursions === 0 && numberMountainExcursions === 0) {
        console.log('Good job! Everything is sold.');
    }
    console.log(`Profit: ${profit} leva.`);
}
excursionSale(["2",
    "2",
    "sea",
    "mountain",
    "sea",
    "sea",
    "mountain"]);