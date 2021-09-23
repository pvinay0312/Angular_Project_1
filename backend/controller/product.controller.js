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


module.exports = { addProduct }