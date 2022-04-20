// this file contains the arrays of questions asked with inquirer.prompt in addManager/addEngineer/addIntern functions
// employeePrompt is the base set of questions that are asked for all employees
const employeePrompt = [
    {
        type: 'input',
        message: "What is this employee's name",
        name: "name",
    },
    {
        type: 'input',
        message: 'What is their Employee ID number?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is their email address?',
        name: 'email',
    },
];

// question for manager only
const officeNumberPrompt = {
    type: 'input',
    message: 'What is their office number?',
    name: 'officeNumber',
};

// question for engineer only
const githubPrompt = {
    type: 'input',
    message: 'What is their GitHub username?',
    name: 'github',
};

// question for intern only
const schoolPrompt = {
    type: 'input',
    message: 'What school do they attend?',
    name: 'school',
};

// ask if user wants to add more members or finish building team
const moreMembersPrompt = {
    type: 'list',
    message: 'Would you like to add an engineer, an intern, or finish building your team?',
    name: 'addSelection',
    choices: [
        'Engineer',
        'Intern',
        'Finished building my team.'
    ]
}

// creates variables that contain the right questions for each class by using concat method
const managerPrompt = employeePrompt.concat(officeNumberPrompt);
const engineerPrompt = employeePrompt.concat(githubPrompt);
const internPrompt = employeePrompt.concat(schoolPrompt);

module.exports = [managerPrompt, engineerPrompt, internPrompt, moreMembersPrompt];