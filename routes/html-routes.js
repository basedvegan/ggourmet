var path = require("path");
var express = require('express');
var router = express.Router();
// var cat = require("../models/index.js");

var controllers = require('../controllers/controllers');



router.get('/', controllers.homePage);

router.get('/admin', controllers.adminPage);

router.post('/api/cats', controllers.addCustomerPage);

router.put('/api/cats/:id', controllers.updateCustomerPage);

router.delete('/api/cats/:id', controllers.deleteCustomerPage);

module.exports = router;