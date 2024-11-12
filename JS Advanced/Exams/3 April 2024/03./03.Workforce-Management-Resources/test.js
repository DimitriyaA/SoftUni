import { expect } from 'chai';
import { workforceManagement } from './workforceManagement.js';

describe('workforceManagement', () => {
    describe('recruitStaff', () => {
        it('Role should be developer', () => {
            expect(() => { workforceManagement.recruitStaff('Lora', 'Manager', 4); }).to.throw('We are not currently hiring for this role.');
            expect(() => { workforceManagement.recruitStaff('Angel', 'Apprentice', 2); }).to.throw('We are not currently hiring for this role.');
        });
        it('Should be hired', () => {

            expect(workforceManagement.recruitStaff('Mila', 'Developer', 7)).to.equal('Mila has been successfully recruited for the role of Developer.');
            expect(workforceManagement.recruitStaff('Alex', 'Developer', 4)).to.equal('Alex has been successfully recruited for the role of Developer.');
        });
        it('is not suitable for the role', () => {
            expect(workforceManagement.recruitStaff('Adam', 'Developer', 2)).to.equal('Adam is not suitable for this role.');
            expect(workforceManagement.recruitStaff('Misha', 'Developer', 1)).to.equal('Misha is not suitable for this role.');
        });
    });

    describe('computeWages', () => {

        it('Should be valid hoursWorked', () => {
            expect(() => { workforceManagement.computeWages(-4); }).to.throw('Invalid hours');
            expect(() => { workforceManagement.computeWages(['4']); }).to.throw('Invalid hours');
            expect(() => { workforceManagement.computeWages(''); }).to.throw('Invalid hours');
        });
        it('Receive the correct salary', () => {
            expect(workforceManagement.computeWages(100)).to.equal(1800);
            expect(workforceManagement.computeWages(160)).to.equal(2880);
        });
        it('Receive the correct salary with bonus', () => {
            expect(workforceManagement.computeWages(200)).to.equal(5100);
        });

    });

    describe('dismissEmployee', () => {

        it('Should have valid input', () => {
            expect(() => { workforceManagement.dismissEmployee('Mila', 2); }).to.throw('Invalid input');
            expect(() => { workforceManagement.dismissEmployee(['Mila', 'Alex'], ['Pepi'], 10); }).to.throw('Invalid input');
            expect(() => workforceManagement.dismissEmployee(['Petar', 'Ivan'], 'a')).to.throw('Invalid input');
            expect(() => workforceManagement.dismissEmployee('not an array', 1)).to.throw('Invalid input');
        });
        it('Should dismissEmproyee', () => {
            expect(workforceManagement.dismissEmployee(['Petar', 'Alex', 'Maria'], 2)).to.equal('Petar, Alex');
        });
    });

});