var mysql = require("mysql");
var inquirer = require("inquirer");

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
// ALLS YOUR DOTENV FILE .ENV
require('dotenv').config();               
app.get('/', (req, res) => {
    // THE PASSWORD VARIABLE YOU SET
    res.send(process.env.PASSWORD);       
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "",
    database: "myEmployee_DB"
  });

// // connect to the mysql server and sql database
// connection.connect(function(err) {
//     if (err) throw err;
//     // run the start function after the connection is made to prompt the user
//     start();
//   });

// // function which prompts the user for what action they should take
// function start() {
//     inquirer
//   .prompt([
//     {
//         type: "input",
//         message: "Find songs by artist",
//     },
//     {
//         type: "input",
//         message: "Search for a specific song",
//     },

//   ])
//       .then(function(answer) {
        
//         if (answer.postOrBid === "POST") {
//           postAuction();
//         }
//         else if(answer.postOrBid === "BID") {
//           bidAuction();
//         } else{
//           connection.end();
//         }
//       });
//   }