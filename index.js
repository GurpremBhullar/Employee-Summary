const inquirer = require ("inquirer");
const fs = require ("fs");
const util = require ("util");
const HTMLgenerator = require ("HTMLgenerator");
const jest = require("jest");
const writeFileAsync = util.promisify(fs.writeFile);


function promptUser() {
    return inquirer.prompt ( [
        {
            type: "input",
            name: "managersName",
            message: "Enter the namer of the Manager: "
        },
        {
            type: "input",
            name: "managerId",
            message: "Enter in the Managers Id: "
        },
        {
            type: "input",
            name: "emailManager",
            message: "Enter the email of the manager: " 
        },

        {
            type: "input",
            name: "firstEngineer",
            message: "Enter the email of the first engineer: "
        }
        ,
        {
            type: "input",
            name: "idFirstEngineer",
            message: "Enter the id of the first engineer: "
        },

        {
            type: "input",
            name: "emailFirstEngineer",
            message: "Enter the email of the first engineer: "
        },

        {
            type: "input",
            name: "secondEngineer",
            message: "Enter the email of the second engineer: "
        },

        {
            type: "input",
            name: "idSecondEngineer",
            message: "Enter the id of the second engineer: "
        },

        {
            type: "input",
            name: "emailSecondEngineer",
            message: "Enter the email of the second engineer: "
        },

        {
            type: "input",
            name: "thirdEngineer",
            message: "Enter the email of the third engineer: "
        },

        {
            type: "input",
            name: "idThirdEngineer",
            message: "Enter the id of the third engineer: "
        },

        {
            type: "input",
            name: "emailThirdEngineer",
            message: "Enter the email of the third engineer: "
        },
    ])
}