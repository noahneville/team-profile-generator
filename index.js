// building file structure
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const employeePrompts = require('./src/employeePrompts');

const employeeArray = [];

const addManager = function () {
    inquirer.prompt(employeePrompts[0])
    .then((answers) => {
        const Manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        employeeArray.push(Manager);
        moreMembers();
    });
};

const addEngineer = function () {
    inquirer.prompt(employeePrompts[1])
    .then((answers) => {
        const Engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        employeeArray.push(Engineer);
        moreMembers();
    });
};

const addIntern = function () {
    inquirer.prompt(employeePrompts[2])
    .then((answers) => {
        const Intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        employeeArray.push(Intern);
        moreMembers();
    })
}

const moreMembers = function () {
    inquirer.prompt(employeePrompts[3])
    .then((answer) => {
        switch(answer.addSelection) {
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            default: 
                // TODO: Add this function 

        }
    })
}






const writeToFile = function () {

};








const init = function () {
    addManager();
};

init();