function stringGame(input) {

    let sentence = input.shift();
    let currentLine = input.shift();

    while (currentLine !== 'Done') {

        let tempSentence = '';
        let tokens = currentLine.split(' ');

        let command = tokens[0];

        if (command === 'Change') {

            let currentSymbol = tokens[1];
            let newSymbol = tokens[2];
            tempSentence = sentence.replaceAll(currentSymbol, newSymbol);
            sentence = tempSentence;
            console.log(sentence);

        } else if (command === 'Includes') {

            let word = tokens[1];
            if (sentence.includes(word)) {
                console.log("True");
            } else {
                console.log("False");
            }

        } else if (command === 'End') {

            let substring = tokens[1];

            if (sentence.endsWith(substring)) {
                console.log("True");
            } else {
                console.log("False");
            }

        } else if (command === 'Uppercase') {
            sentence = sentence.toUpperCase();
            console.log(sentence);

        } else if (command === 'FindIndex') {
            let char = tokens[1];
            let indexOfChar = sentence.indexOf(char);
            console.log(indexOfChar);

        } else if (command === 'Cut') {
            let startIndex = tokens[1];
            let count = tokens[2];
            let result = sentence.substr(startIndex, count);
            console.log(result);

        }

        currentLine = input.shift();

    }

}

stringGame(["//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done"]);