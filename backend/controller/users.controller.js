let usersModel = require("../model/users.model")

let adminSignIn = (request, response) => {
    //let admin = request.body;
    let userInfo = usersModel.findOne({ email: "admin@email.com", password: "123" });
    if (userInfo != null) {
        response.send("Success");
    } else {
        response.send("Login Failed");
    }
}

module.exports = { adminSignIn };