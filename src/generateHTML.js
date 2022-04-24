const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// takes in an instantiated employee as a parameter and generates the HTML for their individual employee card
const generateTeamCards = function (teamMember) {
// switch case determines role of the passed in team member and generates the HTML for their unique trait 
    switch (teamMember.getRole()) {
        case 'Manager':
            uniqueTrait = `Office Number: ${teamMember.officeNumber}`;
            break;
        case 'Engineer':
            uniqueTrait = `Github: <a href='https://github.com/${teamMember.getGithub()}'>${teamMember.getGithub()}</a>`;
            break;
        case 'Intern':
            uniqueTrait = `School: ${teamMember.getSchool()}`;
            break;
    }
// generates the rest of the card using the methods defined in parent class Employee
    return `
    <div class="card text-center mt-3">
        <div class="card-header text-white bg-dark">
            <h3 class="card-title">${teamMember.getName()}</h3>
            <h4 class="card-title">${teamMember.getRole()}<h4>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">Employee ID Number: ${teamMember.getId()}</li>
                <li class="list-group-item">Email: <a href=mailto: ${teamMember.getEmail()}>${teamMember.getEmail()}</a></li>
                <li class="list-group-item">${uniqueTrait}'</li>
            </ul>
        </div>
    </div>`
}



const generateHTML = function (teamArray) {

    let cardDeck = [];
    teamArray.forEach(element => {
        const card = generateTeamCards(element);
        cardDeck.push(card);
    });

    cardDeck.join('');

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <div class="jumbotron jumbotron-fluid bg-info text-white text-center">
        <h1 class="display-1">Our Team</h1>
    </div>
    <body>
        <div class="container">
            <div class="row d-flex justify-content-center">
                    ${cardDeck}
            </div>
        </div>
    </body>
    </html>`
};

module.exports = generateHTML;