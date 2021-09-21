//const { request, response } = require("../app");
const { request, response } = require("express");
let usersModel = require("../model/users.model")

let adminSignIn = (request, response) => {
    let admin = request.body;
    let userInfo = usersModel.findOne({ email: admin.email, password: admin.password, type: "admin" });
    if (userInfo != null) {
        response.send("Success");
    } else {
        response.send("Login Failed");
    }
}

let signup = (request, response) => {
    let user = request.body;
    user["type"] = "user"
    let userExists = usersModel.findOne({ email: user.email, type: "user" });
    //console.log(userExists);
    if (user != null) {
        let result = usersModel.insertMany(user);
        console.log(user)
        response.send("User Account created successfully");
    } else {
        response.send("User with Email Exists");
    }

    // } catch (error) {
    //     //response.status(error.response.status)
    //     return response.send(error);
    // }
}

module.exports = { adminSignIn, signup };