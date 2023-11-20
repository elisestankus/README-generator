// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a brief description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter instructions for installation.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter the usage information for your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select the license for your project.',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'none'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter any contribution guidelines for your project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter any test instructions for your project.',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
