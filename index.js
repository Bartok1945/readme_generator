const inquirer = require("inquirer");
const fs = require('fs');
const axios = require('axios');

//Validation statement 
const confirmInput = (input) => {
    if (!input) {
        return "You must input a response!"
    }
    return true;
};

//Inquirer prompt array

const inquirerPrompts = [
    {
        type: "name",
        message: "What is the poject's title? ",
        name: "title",
        validate: confirmInput,
      },
      {
        type: "input",
        message: "Provide a description of the project: ",
        name: "description",
        validate: confirmInput,
      },
      {
        type: "input",
        message: "How would a user install this project? ",
        name: "installation",
      },
      {
        type: "input",
        message: "Describe and give examples of usage: ",
        name: "usage",
      },
      {
        type: "list",
        message: "Choose a license for this project: ",
        name: "license",
        choices: ["Apache", "GNU", "MIT", "BSD", "Eclipse", "Mozilla", "Unlicense"],
      },
      {
        type: "input",
        message: "List any collaborators and share their github links: ",
        name: "contributing",
      },
      {
        type: "input",
        message: "If tests are available, provide an example on how to run them: ",
        name: "tests",
      },
      {
        type: "input",
        message: "Enter your GitHub username: ",
        name: "github",
      },
      {
        type: "input",
        message: "Enter your email address: ",
        name: "email",
      },
];

//initiate the inquirer prompts

const startProgram = () =>
    inquirer.prompt(inquirerPrompts).then((response) => {
        fs.writeFile("README.md", writeFile(response), (err) =>
        err ? console.log(err) : console.log("README file generated)")
        );
    });

    // generate file

    const writeFile = ({
        title,
  description,
  installation,
  usage,
  license,
  contributing,
  tests,
  github,
  email,
    }) =>

 `# Title
${title}
![badge](https://img.shields.io/static/v1?label=license&message=${license}&color=green)
## Description
${description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${installation}
## Usage
${usage}
## License
This application is covered under the ${license} license.
## Contributing
${contributing}
## Tests
${tests}
## Questions
- [GitHub](https://github.com/${github})
- Email any questions to ${email}
`;

startProgram();
