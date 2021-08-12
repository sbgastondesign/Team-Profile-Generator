const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require ("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/template.js");

const team = [];
const idArray = [];

function startApp() {

function addManager() {
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "Enter Manager's name",
      },
      {
        type: "input",
        name: "managerId",
        message: "Enter Manager's id number",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Enter Manager's email",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "Enter Manager's office number",
      },
    ]).then(answers => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
      team.push(manager);
      idArray.push(answers.managerId);
      makeTeam();
    });

  function makeTeam()

  inquirer.prompt([
    {
      type: "list",
      name: "teamSelect",
      message: "Who are you adding to your team?",
      choices: [
        "Engineer",
        "Intern",
        "Exit"
      ]
    }
  ]).then(addChoice => {
    switch (addChoice.teamSelect) {
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;
      default:
        dreamTeam();
    }
  });
}

function addEngineer() {
  inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "Enter Engineer's name",
    },
    {
      type: "input",
      name: "engineerId",
      message: "Enter Engineer's id",
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "Enter Engineer's email",
    },
  ]).then(answers => {
    const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
    team.push(engineer);
    idArray.push(answers.engineerId);
    makeTeam();
  });
}

function addIntern() {
  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "Enter Intern's name",
    },
    {
      type: "input",
      name: "internId",
      message: "Enter Intern's id",
    },
    {
      type: "input",
      name: "internEmail",
      message: "Enter Intern's email",
    },
    {
      type: "input",
      name: "internSchool",
      message: "Enter intern's school",
    },
  ]).then(answers => {
    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
    team.push(intern);
    idArray.push(answers.internId);
    makeTeam();
  });
}
function dreamTeam() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR)
  }
  fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
}

    addManager();
}

startApp()
