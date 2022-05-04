const { Product, Image, Category, User } = require("../models/index")

class CustomerController {
  static async getAllProducts(req, res) {
    try {
      let data = await Product.findAll({
        include: {
          model: Category,
          attributes: { exclude: ['productId', 'createdAt', 'updatedAt'] }
        }
      })
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json('Internal Server Error')
    }
  }

  static async getDetailProduct(req, res) {
    try {
      let { slug } = req.params
      let data = await Product.findOne({
        include: [{
          model: Category,
          attributes: { exclude: ['productId', 'createdAt', 'updatedAt'] }
        }, {
          model: Image,
          attributes: {
            exclude: ['productId', 'createdAt', 'updatedAt']
          }
        }, {
          model: User,
          attributes: {
            exclude: ['username', 'password', 'address', 'createdAt', 'updatedAt']
          }
        }],
        where: {
          slug
        },
        attributes: { exclude: ['slug', 'categoryId', 'authorId', 'createdAt', 'updatedAt'] }
      })

      if (!data) {
        throw { name: 'DATA_NOT_FOUND' }
      }
      res.status(200).json(data)
    } catch (err) {
      if (err.name === 'DATA_NOT_FOUND') {
        res.status(404).json('Data Not Found')
      } else {
        res.status(500).json('Internal Server Error')
      }
    }
  }
}

module.exports = CustomerController