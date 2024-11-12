function easterEggs(input) {

    let pattern = /(@+|#+)(?<color>[a-z]{3,})(@+|#+)(?:[^A-Za-z0-9]+)(?<amount>\d+)(?:\/+)/g;
    // (?:[@#]+): Matches one or more "@" or "#".
    // ([a-z]{3,}): Captures the color consisting of lower case alphabetical letters only, with a minimum length of 3.
    // (?:[^a-z0-9]+): Matches one or more characters that are not alphabetical letters or digits.
    // (\d+): Captures the amount consisting only of digits.
    // (?:\/+): Matches one or more "/".

    let exec = pattern.exec(input);

    while (exec) {

        let color = exec.groups.color;
        let amount = exec.groups.amount;
        console.log(`You found ${amount} ${color} eggs!`);

        exec = pattern.exec(input);
    }

}
easterEggs(['#@##@red@#/8/@rEd@/2/#@purple@////10/']);