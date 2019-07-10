// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// // =============================================================
// var path = require("path");

// // Routes
// // =============================================================
// module.exports = function (app) {

//   // Each of the below routes just handles the HTML page that the user gets sent to.

//   // index route loads view.html
//   app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/blog.html"));
//   });

//   app.get("/cms", function (req, res) {
//     res.sendFile(path.join(__dirname, "../views/index.handlebars"));
//   });

//   // blog route loads blog.html
//   app.get("/blog", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/blog.html"));
//   });

// };
var path = require("path");
var express = require('express');
var router = express.Router();
var cat = require("../models/index.js");

var controllers = require('../controllers/controllers');



router.get('/', controllers.homePage);

router.get('/admin', controllers.adminPage);

router.post('/api/cats', controllers.addCustomerPage);

router.put('/api/cats/: id', controllers.updateCustomerPage);

router.delete('/api/cats/: id', controllers.deleteCustomerPage);

module.exports = router;