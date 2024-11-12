class BikeRentalService {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.availableBikes = [];
    }

    addBikes(bikes) {
        const addedBrands = [];

        for (let element of bikes) {
            let [brand, quantity, price] = element.split("-");

            price = Number(price);
            quantity = Number(quantity);

            const existingBike = this.availableBikes.find(bike => bike.brand === brand);

            if (existingBike) {
                existingBike.quantity += quantity;
                if (price > existingBike.price) {
                    existingBike.price = price;
                }
            } else {
                this.availableBikes.push({ brand, quantity, price });
                addedBrands.push(brand);
            }
        }

        return `Successfully added ${addedBrands.join(", ")}`;
    }

    rentBikes(selectedBikes) {
        let totalPrice = 0;
        let brandNotFound = false;

        for (let element of selectedBikes) {
            const [brand, quantity] = element.split("-");
            const bike = this.availableBikes.find(b => b.brand === brand);

            if (!bike || bike.quantity < parseInt(quantity)) {
                brandNotFound = true;
                break;
            } else {
                totalPrice += parseInt(quantity) * bike.price;
                bike.quantity -= parseInt(quantity);
            }
        }

        if (brandNotFound) {
            return `Some of the bikes are unavailable or low on quantity in the bike rental service.`;
        }

        return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    returnBikes(returnedBikes) {
        let brandNotFound = false;

        for (let element of returnedBikes) {
            const [brand, quantity] = element.split("-");
            const bike = this.availableBikes.find(b => b.brand === brand);

            if (!bike) {
                brandNotFound = true;
                break;
            } else {
                bike.quantity += parseInt(quantity);
            }
        }

        if (brandNotFound) {
            return "Some of the returned bikes are not from our selection.";
        } else {
            return "Thank you for returning!";
        }
    }

    revision() {
        let result = [];
        result.push(`Available bikes:`);

        const sortedBikes = this.availableBikes.sort((a, b) => a.price - b.price);

        for (let bike of sortedBikes) {
            result.push(`${bike.brand} quantity:${bike.quantity} price:$${bike.price}`);
        }

        result.push(
            `The name of the bike rental service is ${this.name}, and the location is ${this.location}.`
        );

        return result.join(`\n`);
    }
}


const rentalService = new BikeRentalService("MyBikes", "CityCenter");

console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
console.log(rentalService.rentBikes(["Mountain Bike-5", "City Bike-5"]));
console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3"]));
console.log(rentalService.revision());