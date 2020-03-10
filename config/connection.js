// Set up MySQL connection.
const mysql = require("mysql");
const dotenv = require('dotenv');
dotenv.config();
let connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
 connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: "burgers_db"
})};

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as ID " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

// fixed the bug pushing to heroku