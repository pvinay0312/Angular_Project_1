let productModel = require("../model/product.model")

let addProduct = (request, response) => {
    let add = request.body;
    let addItem = productModel.insertMany(add, (err, data) => {
        if (!err) {
            response.send({ "message": "Product Added Sucessfully" });
        } else {
            response.send(err)
        }
    })
}

let getProduct = (request, response) => {
    productModel.find({}, (err, data) => {
        if (!err) {
            response.json(data);
        }
        else {
            response.json(err);
        }
    })
}

module.exports = { addProduct, getProduct }