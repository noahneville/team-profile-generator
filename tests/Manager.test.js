const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('Can accept name as a constructor parameter', () => {
        const name = 'Noah';
        const testManager = new Manager(name);
        expect(testManager.name).toBe(name);
    });
    it('Can accept id as a constructor parameter', () => {
        const id = 1017;
        const testManager = new Manager('noah', id);
        expect(testManager.id).toBe(id);
    });
    it('Can accept email as a constructor parameter', () => {
        const email = "fake@email.bizz";
        const testManager = new Manager('noah', 1017, email);
        expect(testManager.email).toBe(email);
    });
    it('Can accept office number as a constructor parameter', () => {
        const officeNumber = "fake@email.bizz";
        const testManager = new Manager('noah', 1017, 'fake@email.bizz', officeNumber);
        expect(testManager.officeNumber).toBe(officeNumber);
    });
});

describe('Class Functions', () => {
    it('getName() returns name when the function is called', () => {
        const name = 'Noah';
        const testManager = new Manager(name);
        expect(testManager.getName()).toBe(name);
    })
    it('getId returns id when the function is called', () => {
        const id = 1017;
        const testManager = new Manager('noah', id);
        expect(testManager.getId()).toBe(id);
    })
    it('getEmail returns email when the function is called', () => {
        const email = 'fake@email.bizz';
        const testManager = new Manager('noah', 1017, email);
        expect(testManager.getEmail()).toBe(email);
    });
    it('getRole returns role when the function is called', () => {
        const role = 'Manager';
        const testManager = new Manager('Noah', 1017, 'fake@email.bizz');
        expect(testManager.getRole()).toBe(role);
    });
});