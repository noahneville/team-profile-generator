// importing our class files
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// importing our helper js files
const employeePrompts = require('./src/employeePrompts');
const generateHTML = require('./src/generateHTML');
// importing node libraries
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const path = require('path');

const dist_dir = path.resolve(__dirname, "dist");
const dist_path = path.join(dist_dir, 'team.html');

const employeeArray = [];

const addManager = async function () {
    console.log(employeePrompts[4]);
    await inquirer.prompt(employeePrompts[0])
    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        employeeArray.push(manager);
        
    });
    moreMembers();
};

const addEngineer = async function () {
    await inquirer.prompt(employeePrompts[1])
    .then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        employeeArray.push(engineer);
        moreMembers();
    });
};

const addIntern = async function () {
    await inquirer.prompt(employeePrompts[2])
    .then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        employeeArray.push(intern);
        moreMembers();
    })
}

const moreMembers = async function () {
    await inquirer.prompt(employeePrompts[3])
    .then((answer) => {
        switch(answer.userSelection) {
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            case 'Finish': 
                buildTeam();
                break;
        }
    })
}

const buildTeam = function () {
    if (!fs.existsSync(dist_dir)){
        fs.mkdirSync(dist_dir);   
    }
    fs.writeFileSync(dist_path, generateHTML(employeeArray), 'utf-8');
    console.log("working");
}

// const writeToFile = util.promisify(fs.writeFile);



const init = async function () {
    await addManager()
    // .then(answers => console.log(answers))   
    // .then((answers) => writeToFile('./dist/myTeam.html', generateHTML(answers)))
    //     .then(() => console.log('Successfully created Team Profile HTML Page!'))
    //     .catch((err) => console.error(err));
};

init();