// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'tite',
        message: "What is the title of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Please describe your project"
    },
    {
        type: 'input',
        name: 'installation',
        message: "What is the installation process for your application?"
    },
    {
        type: 'input',
        name: 'usage',
        message: "How do you use your project?"
    },
    {
        type: 'input',
        name: 'contribution',
        message: "How can someone contribute to this application?"
    },
    {
        type: 'input',
        name: 'test',
        message: "How would someone run tests on this application?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your GitHub username?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?"
    },
    {
        type: 'input',
        name: 'name',
        message:"What is your name?"
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like?',
        choices: ['MIT', 'GPL', 'BSD']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,`# ${data.title}\n`, function(err) {
        if(err) console.log(err);
        else{
            console.log("Title successfully written!!");
            fs.appendFile(fileName,generateMarkdown(data), (err) => 
            err ? console.error(err) : console.log('Commit saved!'));
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile('./utils/README.md', answers);
    })
}

// Function call to initialize app
init();
