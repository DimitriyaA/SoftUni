function cookingMasterClass(array) {
    let data = array.slice(0);
    let budget = data.shift();
    let students = data.shift();
    let flourPrice = data.shift();
    let singleEggPrice = data.shift();
    let singleApronPrice = data.shift();
    let freePackages = Math.floor(students / 5);
    let totalCosts = 0;
    totalCosts = (singleApronPrice * (Math.ceil(students * 1.2))) + (singleEggPrice * 10 * students) + (flourPrice * (students - freePackages));
    if (totalCosts <= budget) {
        console.log(`Items purchased for ${totalCosts.toFixed(2)}$.`);
    } else {
        let neededMoney = totalCosts - budget;
        console.log(`${neededMoney.toFixed(2)}$ more needed.`)
    }
}
cookingMasterClass(['100', '25', '4.0', '1.0', '6.0']);



