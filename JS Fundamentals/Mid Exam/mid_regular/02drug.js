function friendList(input) {
    let friendsList = input.shift().split(', ');

    let blacklistedNames = 0;
    let lostNames = 0;

    for (let action of input) {
        if (action === 'Report') {
            break;
        }

        let [command, indexInput, name] = action.split(' ');

        switch (command) {
            case 'Blacklist':
                if (friendsList.includes(indexInput)) {
                    let index = friendsList.indexOf(indexInput);
                    friendsList[index] = "Blacklisted";
                    blacklistedNames++;
                    console.log(`${indexInput} was blacklisted.`);
                } else {
                    console.log(`${indexInput} was not found.`);
                }
                break;

            case 'Error':
                let index = Number(indexInput);
                if (index >= 0 && index < friendsList.length && friendsList[index] !== "Blacklisted" && friends[index] !== "Lost") {
                    console.log(`${friendsList[index]} was lost due to an error.`);
                    friendsList[index] = "Lost";
                    lostNames++;
                }
                break;

            case 'Change':
                let indexChange = Number(indexInput);
                if (indexChange >= 0 && indexChange < friendsList.length) {
                    console.log(`${friendsList[indexChange]} changed his username to ${name}.`);
                    friendsList[indexChange] = name;
                }
                break;
        }
    }

    console.log(`Blacklisted names: ${blacklistedNames}`);
    console.log(`Lost names: ${lostNames}`);
    console.log(friendsList.join(' '));
}