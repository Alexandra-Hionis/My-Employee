var mysql = require("mysql");
var inquirer = require("inquirer");
const express = require('express');
const app = express();


// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Loukianosbrother10!",
  database: "myEmployee_DB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  // start();
  console.log("Connected");
});

// function which prompts the user for what action they should take
function start() {
    inquirer
  .prompt([
    {
        name: "option",
        type: "list",
        message: "Select an option using the arrow keys",
        choices: [
          "Add a Department",
          "Add a Role",
          "Add an Employee",
          "View Departments",
          "View Roles",
          "View Employees",
          "Update Employee Roles",
          "Cancel"
        ]
    },
  ])
       // Using the switch statement together with prompt() to execute a block of code based on user input
      .then(function(answer) {
        console.log("You entered: " + result.option);
        // Use switch statement to perform different actions based on different conditions
        switch (result.option) {
        case "Add a Department":
          addDepartment();
          break;
        case "Add role":
          addRole();
          break;
        case "Add employee":
          addEmployee();
          break;
        case "View departments":
          viewDepartment();
          break;
        case "View roles":
          viewRoles();
          break;
        case "View employees":
          viewEmployees();
          break;
        case "Update employee role":
          updateEmployee();
          break;
        default:
          quit();
        }
      });
  }

  