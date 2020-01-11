const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      let handlebarsObject = {
        burgers: data
      };
      console.log(handlebarsObject);
      res.render("index", handlebarsObject);
    });
  });
  





module.exports = router;