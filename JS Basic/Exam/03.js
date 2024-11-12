function santasHoliday(input) {
    let numberOfDays = Number(input[0]);
    let roomType = input[1];
    let review = input[2];
    let totalPriceForHoliday = 0;
    switch (roomType) {
        case "room for one person":
            totalPriceForHoliday = (numberOfDays - 1) * 18;
            break;
        case "apartment":
            totalPriceForHoliday = (numberOfDays - 1) * 25;
            if (numberOfDays < 10) {
                totalPriceForHoliday = totalPriceForHoliday * 0.7;
            } else if (numberOfDays < 15) {
                totalPriceForHoliday = totalPriceForHoliday * 0.65;
            } else {
                totalPriceForHoliday = totalPriceForHoliday * 0.5;
            }
            break;
        case "president apartment":
            totalPriceForHoliday = (numberOfDays - 1) * 35;
            if (numberOfDays < 10) {
                totalPriceForHoliday = totalPriceForHoliday * 0.9;
            } else if (numberOfDays < 15) {
                totalPriceForHoliday = totalPriceForHoliday * 0.85;
            } else {
                totalPriceForHoliday = totalPriceForHoliday * 0.8;
            }
            break;
    }
    switch (review) {
        case "positive":
            totalPriceForHoliday = totalPriceForHoliday * 1.25;
            break;
        case "negative":
            totalPriceForHoliday = totalPriceForHoliday * 0.9;
            break;
    }
    console.log(totalPriceForHoliday.toFixed(2));
}
santasHoliday(["30",
    "president apartment",
    "negative"]);