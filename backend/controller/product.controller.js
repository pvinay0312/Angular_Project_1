const { request, response } = require("express");
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

let updateProduct = (req, res, next) => {
    let { productId, name, price, quantity } = req.body;

    const payload = [
        [name, "name"],
        [price, "price"],
        [quantity, "quantity"],
    ].reduce((obj, [newValue, key]) => {
        if (newValue !== undefined) {
            obj[key] = newValue;
        }
        return obj;
    }, {});
    const update = productModel.findByIdAndUpdate(productId, payload, {
        new: true,
    });
    update
        .exec()
        .then((doc) => res.status(200).json(doc))
        .catch(next);
};

module.exports = { addProduct, getProduct, updateProduct }