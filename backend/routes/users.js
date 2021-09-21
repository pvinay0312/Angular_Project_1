var express = require('express');
var router = express.Router();
let usersController = require("../controller/users.controller");
//const usersModel = require('../model/users.model');

/* GET users listing. */
router.post("/signin", usersController.signin);

//signup for user register
router.post("/signUp", usersController.signup);

module.exports = router;
