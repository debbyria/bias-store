const express = require("express");
const router = express.Router();
const authentication = require('../middlewares/authentication')
const CategoryController = require('../controllers/categoryController')

router.use(authentication)

router.get("/", CategoryController.getCategory)
router.post("/add", CategoryController.addCategory)
router.delete("/:id", CategoryController.deleteCategory)

module.exports = router