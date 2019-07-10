// var express = require("express");
var path = require("path");

// var router = express.Router();

// // Import the model (cat.js) to use its database functions.
var customerModel = require("../models/index.js");

// Create all our routes and set up logic within those routes where required.
exports.homePage = function (req, res) {
  res.sendFile(path.join(__dirname, "../public/blog.html"));
};

exports.adminPage = function (req, res) {
  customerModel.all(function (data) {
    var hbsObject = {
      cats: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
};

exports.addCustomerPage = function (req, res) {
  customerModel.create([
    "name", "sleepy"
  ], [
      req.body.name, req.body.sleepy
    ], function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
};

exports.updateCustomerPage = function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  customerModel.update({
    sleepy: req.body.sleepy
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
};

exports.deleteCustomerPage = function (req, res) {
  var condition = "id = " + req.params.id;

  customerModel.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
};

// Export routes for server.js to use.
// module.exports = router;