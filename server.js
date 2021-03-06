var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require("console.table");
const express = require("express");
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
  console.log("connected as id " + connection.threadId + "\n");

  start();
});

// function which prompts the user for what action they should take
function start() {
    inquirer
  .prompt([
    {
        name: "option",
        type: "list",
        message: "Select an option (Use arrow keys)",
        choices: [
          "Add a Department",
          "Add a Role",
          "Add an Employee",
          "View Departments",
          "View Roles",
          "View Employees",
          "Update Employee Role",
          "Delete a Department",
          "Delete an Employee",
          "Delete a Role",
          "Cancel"
        ]
    },
  ])
       // Using the switch statement together with prompt() to execute a block of code based on user input
      .then(function(answer) {
        console.log("You entered: " + answer.option);
        // Use switch statement to perform different actions based on different conditions
        switch (answer.option) {
        case "Add a Department":
          addDepartment();
          break;
        case "Add a Role":
          addRole();
          break;
        case "Add an Employee":
          addEmployee();
          break;
        case "View Departments":
          viewDepartment();
          break;
        case "View Roles":
          viewRoles();
          break;
        case "View Employees":
          viewEmployees();
          break;
        case "Update Employee Role":
          updateEmployeeRole();
          break;
        case "Delete a Department":
          deleteDepartment();
          break;
        case "Delete an Employee":
          deleteEmployee();
          break;
        case "Delete a Role":
          deleteRole();
          break;
        default:
          quit();
        }
      });
  }

  function addDepartment() {

    inquirer.prompt({
      
        type: "input",
        message: "What is the name of the department?",
        name: "deptName"
    }).then(function(answer){
        connection.query("INSERT INTO departments (department_name) VALUES (?)", [answer.deptName] , function(err, res) {
            if (err) throw err;
            console.table(res);
            start();
    });
    });
}
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What's the name of the role?",
        name: "roleName"
      },
      {
        type: "input",
        message: "What is the salary for this role?",
        name: "salaryTotal"
      },
      {
        type: "input",
        message: "What is the department id number?",
        name: "deptID"
      }
    ])
    .then(function(answer) {
      connection.query("INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)", [answer.roleName, answer.salaryTotal, answer.deptID], function(err, res) {
        if (err) throw err;
        console.table(res);
        start();
      });
    });
}
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What's the first name of the employee?",
        name: "eeFirstName"
      },
      {
        type: "input",
        message: "What's the last name of the employee?",
        name: "eeLastName"
      },
      {
        type: "input",
        message: "What is the employee's role id number?",
        name: "roleID"
      },
      {
        type: "input",
        message: "What is the manager id number?",
        name: "managerID"
      }
    ])
    .then(function(answer) {
      
      connection.query("INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.eeFirstName, answer.eeLastName, answer.roleID, answer.managerID], function(err, res) {
        if (err) throw err;
        console.table(res);
        start();
      });
    });
}
function viewDepartment() {
  // select from the db
  let query = "SELECT * FROM departments";
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
  // show the result to the user (console.table)
}
function viewRoles() {
  // select from the db
  let query = "SELECT * FROM roles";
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
  // show the result to the user (console.table)
}
function viewEmployees() {
  // select from the db
  let query = "SELECT * FROM employees";
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
  // show the result to the user (console.table)
}
//Since we're using inquirer, we can pass the query into the method as an array
function updateEmployeeRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the first name of the employee you want to update?",
        name: "employeeFNUpdate"
      },
      {
        type: "input",
        message: "What is the last name of the employee you want to update?",
        name: "employeeLNUpdate"
      },
      {
        type: "input",
        message: "What number do you want their role id to be changed to?",
        name: "updateRole"
      }
    ])
    .then(function(answer) {
      connection.query('UPDATE employees SET role_id= ? WHERE first_name= ? AND last_name= ?',[answer.updateRole, answer.employeeFNUpdate, answer.employeeLNUpdate],function(err, res) {
        if (err) throw err;
        console.table(res);
        start();
      });
    });
}

function deleteDepartment() {

  inquirer.prompt ({

    type: "input",
    message: "What is the name of the department you want to delete?",
    name: "deleteDep"
  }).then(function(answer){
    connection.query("DELETE FROM departments WHERE department_name= ?",[answer.deleteDep],function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " department deleted!\n");
        // Call start AFTER the DELETE completes
        start();
      }
    );

  });
}

function deleteEmployee() {

  inquirer.prompt ([
    {
      type: "input",
      message: "What's the first name of the employee you want to delete?",
      name: "delFirstName"
    },
    {
      type: "input",
      message: "What's the last name of the employee you want to delete?",
      name: "delLastName"
    },
    {
      type: "input",
      message: "What is the employee's role id number that you want to delete?",
      name: "delRoleID"
    },
    {
      type: "input",
      message: "What is the manager id number that you want to delete?",
      name: "delManagerID"
    }
  ]).then(function(answer){
    connection.query(
      "DELETE FROM employees WHERE first_name= ? AND last_name= ? AND role_id= ? AND manager_id= ?",[answer.delFirstName, answer.delLastName, answer.delRoleID, answer.delManagerID],function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " employee deleted!\n");
        // Call start AFTER the DELETE completes
        start();
      }
    
    );

  });
}

function deleteRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What's the name of the role you want to delete?",
        name: "delRoleName"
      },
      {
        type: "input",
        message: "What is the salary for the role you want to delete?",
        name: "delSalaryTotal"
      },
      {
        type: "input",
        message: "What is the department id number for the role you want to delete?",
        name: "delDeptID"
      }
    ])
    .then(function(answer){
    connection.query(
      "DELETE FROM roles WHERE title= ? AND salary= ? AND department_id= ?",[answer.delRoleName, answer.delSalaryTotal, answer.delDeptID],function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " role deleted!\n");
        // Call start AFTER the DELETE completes
        start();
      }
    
    );

  });
}

function quit() {
  connection.end();
  process.exit();
}
