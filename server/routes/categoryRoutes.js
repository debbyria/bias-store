const express = require("express");
const router = express.Router();
const CategoryController = require('../controllers/categoryController')

router.get("/", CategoryController.getCategory)
router.post("/add", CategoryController.addCategory)
router.delete("/:id", CategoryController.deleteCategory)

module.exports = router