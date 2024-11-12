class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        if (this.flights.some(flight => flight.flightNumber === flightNumber)) {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        }

        this.flights.push({ flightNumber, destination, departureTime, price });
        return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    }

    bookFlight(passengerName, flightNumber) {
        const flight = this.flights.find(flight => flight.flightNumber === flightNumber);

        if (!flight) {
            return `Flight ${flightNumber} is not available for booking.`;
        }

        this.bookings.push({ passengerName, flightNumber, price: flight.price });
        this.bookingsCount++;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    }

    cancelBooking(passengerName, flightNumber) {
        const bookingIndex = this.bookings.findIndex(
            booking => booking.passengerName === passengerName && booking.flightNumber === flightNumber
        );

        if (bookingIndex === -1) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        }

        this.bookings.splice(bookingIndex, 1);
        this.bookingsCount--;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    }

    showBookings(criteria) {
        if (this.bookings.length === 0) {
            throw new Error('No bookings have been made yet.');
        }

        let bookingsToShow;

        if (criteria === 'all') {
            bookingsToShow = this.bookings;
        } else if (criteria === 'cheap') {
            bookingsToShow = this.bookings.filter(booking => booking.price <= 100);
            if (bookingsToShow.length === 0) {
                return 'No cheap bookings found.';
            }
        } else if (criteria === 'expensive') {
            bookingsToShow = this.bookings.filter(booking => booking.price > 100);
            if (bookingsToShow.length === 0) {
                return 'No expensive bookings found.';
            }
        } else {
            throw new Error('Invalid criteria.');
        }

        let result = '';

        if (criteria === 'all') {
            result += `All bookings(${this.bookingsCount}):\n`;
        } else if (criteria === 'cheap') {
            result += 'Cheap bookings:\n';
        } else if (criteria === 'expensive') {
            result += 'Expensive bookings:\n';
        }

        bookingsToShow.forEach(booking => {
            result += `${booking.passengerName} booked for flight ${booking.flightNumber}.\n`;
        });

        return result.trim();
    }
}

const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));
