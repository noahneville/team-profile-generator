const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('Can accept name as a constructor parameter', () => {
        const name = 'Noah';
        const testIntern = new Intern(name);
        expect(testIntern.name).toBe(name);
    });
    it('Can accept id as a constructor parameter', () => {
        const id = 1017;
        const testIntern = new Intern('noah', id);
        expect(testIntern.id).toBe(id);
    });
    it('Can accept email as a constructor parameter', () => {
        const email = "fake@email.bizz";
        const testIntern = new Intern('noah', 1017, email);
        expect(testIntern.email).toBe(email);
    });
    it('Can accept school as a constructor parameter', () => {
        const school = "fake@email.bizz";
        const testIntern = new Intern('noah', 1017, 'fake@email.bizz', school);
        expect(testIntern.school).toBe(school);
    });
});

describe('Class Functions', () => {
    it('getName() returns name when the function is called', () => {
        const name = 'Noah';
        const testIntern = new Intern(name);
        expect(testIntern.getName()).toBe(name);
    })
    it('getId returns id when the function is called', () => {
        const id = 1017;
        const testIntern = new Intern('noah', id);
        expect(testIntern.getId()).toBe(id);
    })
    it('getEmail returns email when the function is called', () => {
        const email = 'fake@email.bizz';
        const testIntern = new Intern('noah', 1017, email);
        expect(testIntern.getEmail()).toBe(email);
    });
    it('getRole returns role when the function is called', () => {
        const role = 'Intern';
        const testIntern = new Intern('Noah', 1017, 'fake@email.bizz');
        expect(testIntern.getRole()).toBe(role);
    });
    it('returns school when getSchool function is called', () => {
        const school = 'UGA';
        const testIntern = new Intern('Noah', 1017, 'fake@email.bizz', school);
        expect(testIntern.getSchool()).toBe(school);
    });

});