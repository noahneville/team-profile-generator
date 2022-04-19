const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('Can accept name as a constructor parameter', () => {
        const name = 'Noah';
        const testEngineer = new Engineer(name);
        expect(testEngineer.name).toBe(name);
    });
    it('Can accept id as a constructor parameter', () => {
        const id = 1017;
        const testEngineer = new Engineer('noah', id);
        expect(testEngineer.id).toBe(id);
    });
    it('Can accept email as a constructor parameter', () => {
        const email = "fake@email.bizz";
        const testEngineer = new Engineer('noah', 1017, email);
        expect(testEngineer.email).toBe(email);
    });
    it('Can accept github as a constructor parameter', () => {
        const github = "fake@email.bizz";
        const testEngineer = new Engineer('noah', 1017, 'fake@email.bizz', github);
        expect(testEngineer.github).toBe(github);
    });
});

describe('Class Functions', () => {
    it('getName() returns name when the function is called', () => {
        const name = 'Noah';
        const testEngineer = new Engineer(name);
        expect(testEngineer.getName()).toBe(name);
    })
    it('getId returns id when the function is called', () => {
        const id = 1017;
        const testEngineer = new Engineer('noah', id);
        expect(testEngineer.getId()).toBe(id);
    })
    it('getEmail returns email when the function is called', () => {
        const email = 'fake@email.bizz';
        const testEngineer = new Engineer('noah', 1017, email);
        expect(testEngineer.getEmail()).toBe(email);
    });
    it('getRole returns role when the function is called', () => {
        const role = 'Engineer';
        const testEngineer = new Engineer('Noah', 1017, 'fake@email.bizz');
        expect(testEngineer.getRole()).toBe(role);
    });
    it('returns github when getGithub function is called', () => {
        const github = 'mygithub';
        const testEngineer = new Engineer('Noah', 1017, 'fake@email.bizz', github);
        expect(testEngineer.getGithub()).toBe(github);
    });

});