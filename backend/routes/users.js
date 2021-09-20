var express = require('express');
var router = express.Router();
let usersController = require("../controller/users.controller")

/* GET users listing. */
router.post("/adminSignIn", usersController.adminSignIn);

module.exports = router;
