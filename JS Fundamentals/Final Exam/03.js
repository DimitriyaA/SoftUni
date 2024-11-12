
function dictionary(input) {
    let dictionary = {};

    // Store words and definitions in the dictionary
    input.shift().split(' | ').forEach(dictionaryEntry => {
        let [word, definition] = dictionaryEntry.split(': ');
        if (!dictionary[word]) {
            dictionary[word] = [];
        }
        dictionary[word].push(definition);
    });

    // Get words for testing
    let testWords = input.shift().split(' | ');

    // Command - Test or Hand Over
    let command = input.shift();

    // Process command
    if (command === 'Test') {
        for (let word of testWords) {
            if (dictionary[word]) {
                console.log(`${word}:`);
                dictionary[word].forEach(definition => {
                    console.log(` -${definition}`);
                });
            }
        }
    } else if (command === 'Hand Over') {
        console.log(Object.keys(dictionary).join(' '));
    }
}
dictionary(["programmer: an animal, which turns coffee into code | developer: a magician",
    "fish | domino",
    "Hand Over"]);