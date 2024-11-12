import { expect } from "chai";
import { foodDelivery } from "./food delivery.js";

describe('foodDelivery', () => {
    describe('getCategory', () => {
        it('should throw error for invalid category', () => {
            expect(() => foodDelivery.getCategory('Chicken')).to.throw('Invalid Category!');
            expect(() => foodDelivery.getCategory('Fish')).to.throw('Invalid Category!');
            expect(() => foodDelivery.getCategory('Lamb')).to.throw('Invalid Category!');
        });

        it('should return correct string for Vegan category', () => {
            expect(foodDelivery.getCategory('Vegan')).to.equal('Dishes that contain no animal products.');
        });

        it('should return correct string for Vegetarian category', () => {
            expect(foodDelivery.getCategory('Vegetarian')).to.equal('Dishes that contain no meat or fish.');
        });

        it('should return correct string for Gluten-Free category', () => {
            expect(foodDelivery.getCategory('Gluten-Free')).to.equal('Dishes that contain no gluten.');
        });

        it('should return correct string for All category', () => {
            expect(foodDelivery.getCategory('All')).to.equal('All available dishes.');
        });
    });

    describe('foodDelivery', () => {
        describe('addMenuItem', () => {
            it('should throw error for invalid input', () => {
                expect(() => foodDelivery.addMenuItem('Salad', 10)).to.throw('Invalid Information!');
                expect(() => foodDelivery.addMenuItem(['Salad', 'Appetizer'], '10')).to.throw('Invalid Information!');
                expect(() => foodDelivery.addMenuItem(['Salad', 'Appetizer'], -10)).to.throw('Invalid Information!');
                expect(() => foodDelivery.addMenuItem([], -10)).to.throw('Invalid Information!');
                expect(() => foodDelivery.addMenuItem([], 10)).to.throw('Invalid Information!');
            });

            it('should return correct message when no items match criteria', () => {
                expect(foodDelivery.addMenuItem([{ name: 'Salad', price: 5 }, { name: 'Appetizer', price: 8 }], 5)).to.equal('There are 1 available menu items matching your criteria!');
            });

        });

    });

    describe('foodDelivery', () => {
        describe('calculateOrderCost', () => {
            it('should throw error for invalid input', () => {
                expect(() => foodDelivery.calculateOrderCost(['standart'], 'sauce', true)).to.throw('Invalid Information!');
                expect(() => foodDelivery.calculateOrderCost('standart', ['sauce'], true)).to.throw('Invalid Information!');
                expect(() => foodDelivery.calculateOrderCost('standart', 'sauce', 'true')).to.throw('Invalid Information!');
                expect(() => foodDelivery.calculateOrderCost('standart', 'sauce', 6)).to.throw('Invalid Information!');
            });

            it('should calculate total cost with discount', () => {
                expect(foodDelivery.calculateOrderCost(['standard'], ['sauce'], true)).to.equal('You spend $3.40 for shipping and addons with a 15% discount!');
            });

        });

    });
});