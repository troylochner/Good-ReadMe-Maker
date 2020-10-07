const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

const writeFileAsync = util.promisify(fs.writeFile);

function getUserInput() {
    return inquirer.prompt([
          {
              type: "input",
              message: "Project Title :",
              name: "projectTitle"
          }, {
              type: "input",
              message: "Description : ",
              name: "projectDescription"
          }, {
              type: "input",
              message: "Table of Contents : ",
              name: "tableOfContents"
          }, {
              type: "input",
              message: "Installation Instructions : ",
              name: "installDirections"
          }, {
              type: "input",
              message: "Usage Instructions : ",
              name: "appUsageIns"
          }, {
              type: "input",
              message: "Contributing Developers : ",
              name: "contributors"
          }, {
              type: "input",
              message: "App Tests : ",
              name: "appTests"
          }, {
              type: "input",
              message: "Frequently Asked Questions : ",
              name: "faqs"
          }
        ]);
    }


function makeReadMe(answers){   
    return `
    
![GitHub commit activity](https://img.shields.io/github/commit-activity/w/troylochner/Good-ReadMe-Maker?style=flat-square)
![GitHub commit activity](https://img.shields.io/github/commit-activity/w/troylochner/covid19-info?style=for-the-badge)

## Project Name: ${answers.projectTitle}


## Project Description :
${answers.projectDescription}

## Table of Contents :
${answers.tableOfContents}

## Installation Directions :
${answers.installDirections}

## Application Usage :
${answers.appUsageIns}

## Contributors :
${answers.contributors}

## App Tests :
${answers.appTests}

## Frequently Asked Questions :
${answers.faqs}
`
}


getUserInput()
  .then(function(answers) {
    const readMeMD = makeReadMe(answers);

    return writeFileAsync("README_AUTO.md", readMeMD);
  })
  .then(function() {
    console.log("Successfully wrote to auto readme file.");
  })
  .catch(function(err) {
    console.log(err);
  });
