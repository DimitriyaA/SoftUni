import { expect } from 'chai';
import { recipeSelection } from './recipeSelection.js';

describe('recipeSelection', () => {
    describe('isTypeSuitable', () => {
        it('should throw an error if type is not a string', () => {
            expect(() => recipeSelection.isTypeSuitable(123, 'Vegetarian')).to.throw('Invalid input');
        });

        it('should throw an error if dietaryRestriction is not a string', () => {
            expect(() => recipeSelection.isTypeSuitable('Meat', 123)).to.throw('Invalid input');
        });

        it('should return message for vegetarian restriction with meat', () => {
            expect(recipeSelection.isTypeSuitable('Meat', 'Vegetarian')).to.equal('This recipe is not suitable for vegetarians');
        });

        it('should return message for vegan restriction with meat', () => {
            expect(recipeSelection.isTypeSuitable('Meat', 'Vegan')).to.equal('This recipe is not suitable for vegans');
        });

        it('should return message for vegan restriction with dairy', () => {
            expect(recipeSelection.isTypeSuitable('Dairy', 'Vegan')).to.equal('This recipe is not suitable for vegans');
        });

        it('should return message for other combinations', () => {
            expect(recipeSelection.isTypeSuitable('Vegetable', 'Vegetarian')).to.equal('This recipe is suitable for your dietary restriction');
        });
    });

    describe('isItAffordable', () => {
        it('should throw an error if price is not a number', () => {
            expect(() => recipeSelection.isItAffordable('10', 100)).to.throw('Invalid input');
        });

        it('should throw an error if budget is not a number', () => {
            expect(() => recipeSelection.isItAffordable(10, '100')).to.throw('Invalid input');
        });

        it('should return not enough budget message if budget is less than price', () => {
            expect(recipeSelection.isItAffordable(100, 50)).to.equal("You don't have enough budget to afford this recipe");
        });

        it('should return remaining budget message if budget is enough', () => {
            expect(recipeSelection.isItAffordable(50, 100)).to.equal('Recipe ingredients bought. You have 50$ left');
        });
    });

    describe('getRecipesByCategory', () => {
        it('should throw an error if recipes is not an array', () => {
            expect(() => recipeSelection.getRecipesByCategory('not an array', 'Asian')).to.throw('Invalid input');
        });

        it('should throw an error if category is not a string', () => {
            expect(() => recipeSelection.getRecipesByCategory([], 123)).to.throw('Invalid input');
        });

        it('should return the correct recipe titles for a given category', () => {
            const recipes = [
                { title: 'Spicy Tofu Stir-Fry', category: 'Asian' },
                { title: 'Chicken Curry', category: 'Indian' },
                { title: 'Sushi', category: 'Asian' },
            ];
            expect(recipeSelection.getRecipesByCategory(recipes, 'Asian')).to.deep.equal(['Spicy Tofu Stir-Fry', 'Sushi']);
        });

        it('should return an empty array if no recipes match the category', () => {
            const recipes = [
                { title: 'Spicy Tofu Stir-Fry', category: 'Asian' },
                { title: 'Chicken Curry', category: 'Indian' },
            ];
            expect(recipeSelection.getRecipesByCategory(recipes, 'Mexican')).to.deep.equal([]);
        });
    });
});
