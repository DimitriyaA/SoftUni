import { expect } from 'chai';
import { lottery } from './lottery.js';

describe('buyLotteryTicket method', () => {
    it('should return correct message when buying tickets', () => {
        const result = lottery.buyLotteryTicket(5, 3, true);
        expect(result).to.equal('You bought 3 tickets for 15$.');
    });

    it('should throw error for invalid input', () => {
        expect(() => lottery.buyLotteryTicket(0, 5, true)).to.throw('Invalid input!');
        expect(() => lottery.buyLotteryTicket(10, -2, true)).to.throw('Invalid input!');
        expect(() => lottery.buyLotteryTicket('abc', 5, true)).to.throw('Invalid input!');
        expect(() => lottery.buyLotteryTicket(5, 3, false)).to.throw('Unable to buy lottery ticket!');
    });
});
describe('checkTicket method', () => {
    it('should return "Congratulations you win, check your reward!" for winning ticket', () => {
        const result = lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 7, 8, 9]);
        expect(result).to.equal('Congratulations you win, check your reward!');
    });

    it('should return "You win the JACKPOT!!!" for jackpot winning ticket', () => {
        const result = lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]);
        expect(result).to.equal('You win the JACKPOT!!!');
    });

    it('should throw error for invalid input', () => {
        expect(() => lottery.checkTicket([1, 2], [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
        expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4])).to.throw('Invalid input!');
    });
});
describe('secondChance method', () => {
    it('should return "You win our second chance prize!" for winning ticket ID', () => {
        const result = lottery.secondChance(12345, [12345, 67890, 54321]);
        expect(result).to.equal('You win our second chance prize!');
    });

    it('should return "Sorry, your ticket didn\'t win!" for non-winning ticket ID', () => {
        const result = lottery.secondChance(98765, [12345, 67890, 54321]);
        expect(result).to.equal('Sorry, your ticket didn\'t win!');
    });

    it('should throw error for invalid input', () => {
        expect(() => lottery.secondChance('abc', [12345, 67890, 54321])).to.throw('Invalid input!');
        expect(() => lottery.secondChance(12345, 'not an array')).to.throw('Invalid input!');
    });
});
