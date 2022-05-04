const express = require("express");
const router = express.Router();
const CustomerController = require("../controllers/customerController")

router.get("/", CustomerController.getAllProducts)
router.get("/products/:slug", CustomerController.getDetailProduct)

module.exports = router