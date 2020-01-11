// Set up MySQL connection.
const mysql = require("mysql");
const dotenv = require('dotenv');
dotenv.config();
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: "burger_db"
});

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