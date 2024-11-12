function multplyTable(input) {
    let number = Number(input[0]);
    let x = number % 10;
    let y = ((Math.trunc(number / 10)) % 10);
    let z = Math.trunc(number / 100);

    for (let a = 1; a <= x; a++) {
        for (let b = 1; b <= y; b++) {
            for (let c = 1; c <= z; c++) {
                let result = a * b * c;
                console.log(`${a} * ${b} * ${c} = ${result};`);
            }
        }
    }
}
multplyTable(["324"]);