const express = require("express");
const router = express.Router();
const authentication = require('../middlewares/authentication')
const ProductController = require('../controllers/productController')

router.use(authentication)

router.get("/", ProductController.getAllProducts)
router.post("/add", ProductController.addProduct)
router.get("/:slug", ProductController.getDetailProduct)
router.put("/:id", ProductController.updateProduct)
router.delete("/:id", ProductController.deleteProduct)

module.exports = router