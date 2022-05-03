const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userController')
const authentication = require('../middlewares/authentication')


router.post("/login", UserController.userLogin)
router.post("/register", authentication, UserController.userRegister)

module.exports = router