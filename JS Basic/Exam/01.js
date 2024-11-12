function excursion(input) {
    let groupMembers = Number(input[0]);
    let numberOfNights = Number(input[1]);
    let transportPasses = Number(input[2]);
    let museumPasses = Number(input[3]);
    let totalNightsCosts = groupMembers * numberOfNights * 20;
    let totalTraspordPasses = groupMembers * transportPasses * 1.60;
    let totalMuseumPasses = groupMembers * museumPasses * 6;
    let totalExpenses = totalNightsCosts + totalTraspordPasses + totalMuseumPasses;
    totalExpenses = totalExpenses + totalExpenses * 0.25;
    console.log(totalExpenses.toFixed(2));
}
excursion(["20",
    "14",
    "30",
    "6"]);