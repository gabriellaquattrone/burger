// Import MySQL connection.
const connection = require("../config/connection.js");

const orm = {

selectAll: function(){
    const queryString = "SELECT * FROM "

},

insertOne: function(){
    const queryString = "INSERT INTO "

},

updateOne: function(){
    const queryString = "UPDATE "

}

};

module.exports = orm;