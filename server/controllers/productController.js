const { Product, Image, Category } = require('../models/index')
const { sequelize } = require('../models/index')
const { generateSlug } = require('../helpers/helper')

class ProductController {
  static async getAllProducts(req, res) {
    try {
      let data = await Product.findAll()
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json('Internal Server Error')
    }
  }

  static async addProduct(req, res) {
    const t = await sequelize.transaction()
    try {
      let { name, description, price, mainImg, categoryId, image1, image2 } = req.body

      let authorId = req.user.id
      let slug = ""

      if (name) {
        slug = generateSlug(name)
      }

      let newProduct = await Product.create({
        name,
        slug,
        description,
        price,
        mainImg,
        categoryId,
        authorId,
      }, { transaction: t })

      let images = []

      if (image1) {
        let obj = {
          productId: newProduct.id,
          imgUrl: image1
        }
        images.push(obj)
      }
      if (image2) {
        let obj = {
          productId: newProduct.id,
          imgUrl: image2
        }
        images.push(obj)
      }

      if (images.length > 0) {
        let newImages = await Image.bulkCreate(images, { transaction: t })
      }
      await t.commit()
      res.status(201).json({
        id: newProduct.id,
        name: newProduct.name
      })

    } catch (err) {
      await t.rollback()

      if (err.name === 'SequelizeValidationError') {
        res.status(400).json(err.errors[0].message)
      } else {
        res.status(500).json('Internal Server Error')
      }
    }
  }

  static async getDetailProduct(req, res) {
    try {
      let { slug } = req.params
      const response = await Product.findOne({
        include: [{
          model: Category,
          attributes: { exclude: ['productId', 'createdAt', 'updatedAt'] }
        }, {
          model: Image,
          attributes: { exclude: ['productId', 'createdAt', 'updatedAt'] }
        }],
        where: {
          slug
        },
        attributes: { exclude: ['categoryId', 'authorId', 'createdAt', 'updatedAt'] }
      })

      if (!response) {
        throw { name: 'DATA_NOT_FOUND' }
      }
      res.status(200).json(response)
    } catch (err) {
      if (err.name === 'DATA_NOT_FOUND') {
        res.status(404).json('Data Not Found')
      } else {
        res.status(500).json('Internal Server Error')
      }
    }
  }

  // static async updateProduct(req, res) {
  //   try {

  //   } catch (err) {

  //   }
  // }
}

module.exports = ProductController