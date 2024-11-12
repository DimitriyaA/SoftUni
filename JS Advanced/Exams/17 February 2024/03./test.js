import { expect } from 'chai';
import { planYourTrip } from './planYourTrip.js'

describe('planYourTrip', () => {
    describe('choosingDestination', () => {
        it('should throw error for invalid year', () => {
            expect(() => {
                planYourTrip.choosingDestination('Ski Resort', 'Winter', 2023);
            }).to.throw('Invalid Year!');
        });

        it('should throw error for invalid destination', () => {
            expect(() => {
                planYourTrip.choosingDestination('Beach', 'Winter', 2024);
            }).to.throw('This type of destination is not what you are looking for.');
        });

        it('should return message for Winter season', () => {
            const message = planYourTrip.choosingDestination('Ski Resort', 'Winter', 2024);
            expect(message).to.equal('Great choice! The Winter is the perfect time to visit the Ski Resort.');
        });

        it('should return message for non-Winter season', () => {
            const message = planYourTrip.choosingDestination('Ski Resort', 'Summer', 2024);
            expect(message).to.equal('Consider visiting during the Winter for the best experience at the Ski Resort.');
        });

        it('should throw error for null year', () => {
            expect(() => {
                planYourTrip.choosingDestination('Sky Resort', 'Winter', null);
            }).to.throw('Invalid Year!');
        });

        it('should throw error for undefined year', () => {
            expect(() => {
                planYourTrip.choosingDestination('Sky Resort', 'Winter', undefined);
            }).to.throw('Invalid Year!');
        });

        it('should throw error for invalid destination type', () => {
            expect(() => {
                planYourTrip.choosingDestination(0, 'Winter', 2024);
            }).to.throw('This type of destination is not what you are looking for.');
        });
    });


    describe('exploreOptions', () => {
        it('should throw error for invalid activities parameter', () => {
            expect(() => {
                planYourTrip.exploreOptions('Not an array', 0);
            }).to.throw('Invalid Information!');
        });

        it('should throw error for invalid activityIndex parameter', () => {
            expect(() => {
                planYourTrip.exploreOptions(['Skiing', 'Snowboarding'], 'not a number');
            }).to.throw('Invalid Information!');
            expect(() => {
                planYourTrip.exploreOptions(['Skiing', 'Snowboarding'], 2);
            }).to.throw('Invalid Information!');
            expect(() => {
                planYourTrip.exploreOptions(['Skiing', 'Snowboarding'], -1);
            }).to.throw('Invalid Information!');
        });

        it('should return activities without the removed one', () => {
            const activities = ['Skiing', 'Snowboarding', 'Winter Hiking'];
            const result = planYourTrip.exploreOptions(activities, 1);
            expect(result).to.equal('Skiing, Winter Hiking');
        });
        it('should throw error for non-array activities parameter', () => {
            expect(() => {
                planYourTrip.exploreOptions('Mazda', 1);
            }).to.throw('Invalid Information!');
        });

        it('should throw error for non-integer activityIndex parameter', () => {
            expect(() => {
                planYourTrip.exploreOptions(['Mazda'], 3.1);
            }).to.throw('Invalid Information!');
        });
    });

    describe('estimateExpenses', () => {
        it('should throw error for invalid distanceInKilometers', () => {
            expect(() => {
                planYourTrip.estimateExpenses('Not a number', 5);
            }).to.throw('Invalid Information!');
            expect(() => {
                planYourTrip.estimateExpenses(-10, 5);
            }).to.throw('Invalid Information!');
            expect(() => {
                planYourTrip.estimateExpenses(0, 5);
            }).to.throw('Invalid Information!');
        });

        it('should throw error for invalid fuelCostPerLiter', () => {
            expect(() => {
                planYourTrip.estimateExpenses(100, 'Not a number');
            }).to.throw('Invalid Information!');
            expect(() => {
                planYourTrip.estimateExpenses(100, -5);
            }).to.throw('Invalid Information!');
            expect(() => {
                planYourTrip.estimateExpenses(100, 0);
            }).to.throw('Invalid Information!');
        });

        it('should return budget-friendly message for low cost', () => {
            const message = planYourTrip.estimateExpenses(50, 5);
            expect(message).to.equal('The trip is budget-friendly, estimated cost is $250.00.');
        });

        it('should return plan accordingly message for high cost', () => {
            const message = planYourTrip.estimateExpenses(200, 5);
            expect(message).to.equal('The estimated cost for the trip is $1000.00, plan accordingly.');
        });

        it('should throw error for string distanceInKilometers', () => {
            expect(() => {
                planYourTrip.estimateExpenses('5', 5);
            }).to.throw('Invalid Information!');
        });

        it('should throw error for string fuelCostPerLiter', () => {
            expect(() => {
                planYourTrip.estimateExpenses(5, '5');
            }).to.throw('Invalid Information!');
        });
    });
});

