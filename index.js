const fs = require("fs");
const util = require("util");
var inquirer = require("inquirer");


async function getUserInput() {
    try {
        const userData = await inquirer.prompt([{
                type: "input",
                message: "What is your name?",
                name: "name"
            },
            {
                type: "input",
                message: "Where do you live",
                name: "location"
            },
            {
                type: "input",
                message: "Write a brief bio about yourself.",
                name: "bio"
            },
            {
                type: "input",
                message: "What is your linkedIn URL",
                name: "linkedin"
            },
            {
                type: "input",
                message: "What is your Git Hub profile URL?",
                name: "github"
            }
        ]);

        const filename = "index.html"; //plan to make this fancier
        const htmlContent = 
`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>A Simple Simple Bio Page</title>
</head>
<body>
<p>Name: ${userData.name}</p>
<p>Location: ${userData.location}</p>
<p>Bio: ${userData.bio}</p>
<p>LinkedIn: ${userData.linkedin}</p>
<p>Github: ${userData.github}</p>
</body>
</html>`

        fs.writeFile(filename, htmlContent , function (err) {
            if (err) {
                return console.log(err);
            };
            console.log("Done");
        })
    } catch (err) {
        console.log(err);
    }
}