// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please provide a title for this project.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe the purpose and functionality of this project.',
    },
    {
        type: 'input',
        name: 'link',
        message: 'Please provide a URL link to the deployed project',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license applicable to this project.',
        choices: ['MIT', 'APACHE2.0', 'Boost1.0', 'MPL2.0', 'BSD2', 'BSD3', 'N/A'],
    },
    {
        type: 'input',
        name: 'require',
        message: 'Please list any dependancies required for this project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for this project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide the languages or technologies associated with this project.',
    },
    {
        type: 'input',
        name: 'creator',
        message: 'Please provide your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide a valid email address',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please list any contributors to this project. (Use GitHub usernames)',
        default: '',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide a walk-through of required tests, if applicable.',
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Please provide the relative path to the screenshot image of this project',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log('Creating Professional README.md File...');
        writeToFile('./dist/README.md', generateMarkdown({...responses}));
    });
};

// Function call to initialize app
init();
