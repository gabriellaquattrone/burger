// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

let burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
          cb(res);
      });
    },
    
    insertOne: function() {
      orm.insertOne();
    },
    updateOne: function() {
      orm.updateOne();
    }
  };
  

  
// Export the database functions for the controller 
module.exports = burger;