let express = require("express");

let router = express.Router();

let ProductController = require("../controller/product.controller")

router.post("/addProduct", ProductController.addProduct);
router.post("/getProduct", ProductController.getProduct);

module.exports = router