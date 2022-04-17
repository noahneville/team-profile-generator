const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        this.github = github;
        super(name, id, email);
    };

    etGithub();

    getRole() {
        return 'Engineer';
    };
};