//const { request, response } = require("../app");
//const { request, response } = require("express");
let usersModel = require("../model/users.model")



let signup = async (request, response) => {
    let user = request.body;
    user["type"] = "user"
    let userInfo = await usersModel.findOne({ email: user.email, type: "user" });
    //console.log(userInfo);
    if (userInfo == null) {
        let result = await usersModel.insertMany(user);
        console.log(user)
        response.send({ "message": "User Account created successfully" });
    } else {
        response.send("User with Email Exists");
    }
}
let signin = async (request, response) => {
    let user = request.body;
    //user["type"] = "user"
    let userInfo = await usersModel.findOne({ email: user.email, password: user.password });
    if (userInfo != null) {
        response.send("Success");
    } else {
        response.send("Login Failed");
    }
}

module.exports = { signin, signup };