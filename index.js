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
            
        }
    ])
}