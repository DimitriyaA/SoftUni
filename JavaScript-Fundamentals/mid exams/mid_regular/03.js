function phoneShop(input) {
    let currStorage = input[0];
    let arr = currStorage.slice(0);
    let phones = currStorage.split(', ');

    for (let last of input) {
        if (last === "End") {
            break;
        }

        let [command, phone] = last.split(' - ');

        switch (command) {
            case 'Add':
                if (!phones.includes(phone)) {
                    phones.push(phone);
                }
                break;

            case 'Remove':
                if (phones.includes(phone)) {
                    phones = phones.filter(phoneRemove => phoneRemove !== phone);
                }
                break;

            case 'Bonus phone':
                let [oldPhone, newPhone] = phone.split(':');
                let index = phones.indexOf(oldPhone);
                if (index > 0) {
                    phones.splice(index + 1, 0, newPhone);
                }
                break;

            case 'Last':
                let lastInStorage = phones.indexOf(phone);
                if (lastInStorage > 0) {
                    phones.splice(lastInStorage, 1);
                    phones.push(phone);
                }
                break;
        }
    }

    console.log(phones.join(', '));
}

phoneShop(["SamsungA50, MotorolaG5, IphoneSE",
    "Add - Iphone10",
    "Remove - IphoneSE",
    "End"]);