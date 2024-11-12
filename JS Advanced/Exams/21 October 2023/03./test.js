import { expect } from 'chai';
import { onlineStore } from './onlineStore.js';

describe('onlineStore', () => {
    describe('isProductAvailable', () => {
        it('should return product is out of stock message', () => {
            const result = onlineStore.isProductAvailable('Laptop', 0);
            expect(result).to.equal('Sorry, Laptop is currently out of stock.');
        });

        it('should return product is available message', () => {
            const result = onlineStore.isProductAvailable('Laptop', 10);
            expect(result).to.equal('Great! Laptop is available for purchase.');
        });

        it('should throw an error for invalid input', () => {
            expect(() => onlineStore.isProductAvailable('Laptop', '10')).to.throw('Invalid input.');
            expect(() => onlineStore.isProductAvailable(123, 10)).to.throw('Invalid input.');
        });
    });

    describe('canAffordProduct', () => {
        it('should return insufficient funds message', () => {
            const result = onlineStore.canAffordProduct(500, 300);
            expect(result).to.equal("You don't have sufficient funds to buy this product.");
        });

        it('should return product purchased message with remaining balance', () => {
            const result = onlineStore.canAffordProduct(200, 500);
            expect(result).to.equal('Product purchased. Your remaining balance is $300.');
        });

        it('should throw an error for invalid input', () => {
            expect(() => onlineStore.canAffordProduct('200', 500)).to.throw('Invalid input.');
            expect(() => onlineStore.canAffordProduct(200, '500')).to.throw('Invalid input.');
        });
    });

    describe('getRecommendedProducts', () => {
        const products = [
            { name: 'Camera', category: 'Photography' },
            { name: 'Laptop', category: 'Electronics' },
            { name: 'Headphones', category: 'Electronics' },
        ];

        it('should return recommended products for a valid category', () => {
            const result = onlineStore.getRecommendedProducts(products, 'Electronics');
            expect(result).to.equal('Recommended products in the Electronics category: Laptop, Headphones');
        });

        it('should return no recommended products message for an empty category', () => {
            const result = onlineStore.getRecommendedProducts(products, 'Toys');
            expect(result).to.equal('Sorry, we currently have no recommended products in the Toys category.');
        });

        it('should throw an error for invalid input', () => {
            expect(() => onlineStore.getRecommendedProducts('notAnArray', 'Electronics')).to.throw('Invalid input.');
            expect(() => onlineStore.getRecommendedProducts(products, 123)).to.throw('Invalid input.');
        });
    });
});
