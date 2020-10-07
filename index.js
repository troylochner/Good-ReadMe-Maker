const fs = require("fs");
const util = require("util");
var inquirer = require("inquirer");

getUserInput();


async function getUserInput() {
    try {
        const readMeInput = await inquirer.prompt([{
                type: "input",
                message: "Project Title :",
                name: "projectTitle"
            },
            {
                type: "input",
                message: "Description : ",
                name: "projectDescription"
            },
            {
                type: "input",
                message: "Table of Contents : ",
                name: "tableOfContents"
            },
            {
                type: "input",
                message: "Installation Instructions : ",
                name: "installDirections"
            },
            {
                type: "input",
                message: "Usage Instructions : ",
                name: "appUsageIns"
            },
            {
                type: "input",
                message: "Contributing Developers : ",
                name: "contributors"
            },
            {
                type: "input",
                message: "App Tests : ",
                name: "appTests"
            },
            {
                type: "input",
                message: "Frequently Asked Questions : ",
                name: "faqs"
            },
        ]);

        const filename = "appReadMe.md"; //plan to make this fancier
        
        const readMeContent = 
`
## Project Name: ${readMeInput.projectTitle}

## Project Description :
${readMeInput.projectDescription}

## Table of Contents :
${readMeInput.tableOfContents}

## Installation Directions :
${readMeInput.installDirections}

## Application Usage :
${readMeInput.appUsageIns}

## Contributors :
${readMeInput.contributors}

## App Tests :
${readMeInput.appTests}

## Frequently Asked Questions :
${readMeInput.faqs}

`

        fs.writeFile(filename, readMeContent , function (err) {
            if (err) {
                return console.log(err);
            };
            console.log("Done");
        })
    } catch (err) {
        console.log(err);
    }
}