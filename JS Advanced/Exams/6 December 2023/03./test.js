import { expect } from 'chai';
import { petAdoptionAgency } from './petAdoptionAgency.js';

describe('petAdoptionAgency', () => {
    describe('isPetAvailable', () => {
        it('should throw an error for invalid inputs', () => {
            expect(() => { petAdoptionAgency.isPetAvailable(['Cat'], 6, true); }).to.throw('Invalid input');
            expect(() => { petAdoptionAgency.isPetAvailable('Cat', '6', false); }).to.throw('Invalid input');
            expect(() => { petAdoptionAgency.isPetAvailable('Cat', 6, 'true'); }).to.throw('Invalid input');
            expect(() => { petAdoptionAgency.isPetAvailable('Cat', '1', true); }).to.throw('Invalid input');
        });

        it('should return the correct message for no available pets', () => {
            expect(petAdoptionAgency.isPetAvailable('dog', 0, true)).to.equal('Sorry, there are no dog(s) available for adoption at the agency.');
        });

        it('should return the correct message for available pets that are vaccinated', () => {
            expect(petAdoptionAgency.isPetAvailable('dog', 4, true)).to.equal('Great! We have 4 vaccinated dog(s) available for adoption at the agency.');
        });

        it('should return the correct message for available pets that need vaccination', () => {
            expect(petAdoptionAgency.isPetAvailable('dog', 7, false)).to.equal('Great! We have 7 dog(s) available for adoption, but they need vaccination.');
        });
    });

    describe('getRecommendedPets', () => {
        const petList = [
            { name: "Fluffy", traits: "Playful" },
            { name: "Whiskers", traits: "Cuddly" },
            { name: "Fido", traits: "Playful" },
        ];

        it('should throw an error for invalid inputs', () => {
            expect(() => { petAdoptionAgency.getRecommendedPets('invalid', 'Playful'); }).to.throw('Invalid input');
            expect(() => { petAdoptionAgency.getRecommendedPets(petList, 5); }).to.throw('Invalid input');
        });

        it('should return the correct message for no matching pets', () => {
            expect(petAdoptionAgency.getRecommendedPets(petList, 'Aggressive')).to.equal('Sorry, we currently have no recommended pets with the desired traits: Aggressive.');
        });

        it('should return the correct message for matching pets', () => {
            expect(petAdoptionAgency.getRecommendedPets(petList, 'Playful')).to.equal('Recommended pets with the desired traits (Playful): Fluffy, Fido');
            expect(petAdoptionAgency.getRecommendedPets(petList, 'Cuddly')).to.equal('Recommended pets with the desired traits (Cuddly): Whiskers');
        });
    });

    describe('adoptPet', () => {
        it('should throw an error for invalid inputs', () => {
            expect(() => { petAdoptionAgency.adoptPet(['Cat'], 'Gosho'); }).to.throw('Invalid input');
            expect(() => { petAdoptionAgency.adoptPet('Cat', 6); }).to.throw('Invalid input');
        });

        it('should return the correct success message for valid inputs', () => {
            expect(petAdoptionAgency.adoptPet('Cat', 'Gosho')).to.equal('Congratulations, Gosho! You have adopted Cat from the agency. Enjoy your time with your new furry friend!');
            expect(petAdoptionAgency.adoptPet('dog', 'Alex')).to.equal('Congratulations, Alex! You have adopted dog from the agency. Enjoy your time with your new furry friend!');
        });
    });
});