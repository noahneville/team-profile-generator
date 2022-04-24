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
    name: 'userSelection',
    choices: [
        'Engineer',
        'Intern',
        'Finish',
    ]
}

// creates variables that contain the right questions for each class by using concat method
const managerPrompt = employeePrompt.concat(officeNumberPrompt);
const engineerPrompt = employeePrompt.concat(githubPrompt);
const internPrompt = employeePrompt.concat(schoolPrompt);

const welcomeMessage = "Welcome to the Team Profile Generator. Input information about your team to generate an HTML page displaying their information. You can add as many engineers and interns as you need later, but first let's start with your Team Manager.";

module.exports = [managerPrompt, engineerPrompt, internPrompt, moreMembersPrompt, welcomeMessage];