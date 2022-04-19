const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('Can accept name as a constructor parameter', () => {
        const name = 'Noah';
        const testEmployee = new Employee(name);
        expect(testEmployee.name).toBe(name);
    });
    it('Can accept id as a constructor parameter', () => {
        const id = 1017;
        const testEmployee = new Employee('noah', id);
        expect(testEmployee.id).toBe(id);
    });
    it('Can accept email as a constructor parameter', () => {
        const email = "fake@email.bizz";
        const testEmployee = new Employee('noah', 1017, email);
        expect(testEmployee.email).toBe(email);
    });
});

describe('Class Functions', () => {
    it('getName() returns name when the function is called', () => {
        const name = 'Noah';
        const testEmployee = new Employee(name);
        expect(testEmployee.getName()).toBe(name);
    })
    it('getId returns id when the function is called', () => {
        const id = 1017;
        const testEmployee = new Employee('noah', id);
        expect(testEmployee.getId()).toBe(id);
    })
    it('getEmail returns email when the function is called', () => {
        const email = 'fake@email.bizz';
        const testEmployee = new Employee('noah', 1017, email);
        expect(testEmployee.getEmail()).toBe(email);
    });
    it('getRole returns role when the function is called', () => {
        const role = 'Employee';
        const testEmployee = new Employee('Noah', 1017, 'fake@email.bizz');
        expect(testEmployee.getRole()).toBe(role);
    });

});