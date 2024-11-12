function easterEggs(text) {
    let pattern = /(?:@+|#)+([a-z]{3,})[^a-z\d]*\/+(\d+)\/+/ig;
    let match;
    while ((match = pattern.exec(text)) !== null) {
        let color = match[1];
        let amount = match[2];
        console.log(`You found ${amount} ${color} eggs!`);
    }
}

easterEggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);
