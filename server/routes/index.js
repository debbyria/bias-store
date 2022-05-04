const express = require('express')
const router = express.Router()
const userRoutes = require('./userRoutes')
const productRoutes = require('./productRoutes')
const categoryRoutes = require('./categoryRoutes')
const customerRoutes = require('./customerRoutes')
const authentication = require('../middlewares/authentication')

router.use("/users", userRoutes)
router.use("/public", customerRoutes)
router.use(authentication)
router.use("/products", productRoutes)
router.use("/categories", categoryRoutes)

module.exports = router
