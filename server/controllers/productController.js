const { Product } = require('../models/index')

class ProductController {
  static async getAllProducts(req, res) {
    try {
      let data = await Product.findAll()
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err)
    }
  }
}

module.exports = ProductController