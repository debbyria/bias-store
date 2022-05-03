const { Product, Image, Category } = require('../models/index')
const { sequelize } = require('../models/index')
const { generateSlug } = require('../helpers/helper')
const e = require('express')

class ProductController {
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
      let response = await Product.findOne({
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

      res.status(200).json(response)
    } catch (err) {

      if (err.name === 'DATA_NOT_FOUND') {
        res.status(404).json('Data Not Found')
      } else {
        res.status(500).json('Internal Server Error')
      }
    }
  }

  static async updateProduct(req, res) {
    try {
      let { name, description, price, mainImg, categoryId, image1, image2 } = req.body

      let idProduct = req.params.id
      let slug = ""

      if (name) {
        slug = generateSlug(name)
      }

      await Image.destroy({
        where: {
          productId: idProduct
        }
      })

      let images = []

      if (image1) {
        let obj = {
          productId: idProduct,
          imgUrl: image1
        }
        images.push(obj)
      }
      if (image2) {
        let obj = {
          productId: idProduct,
          imgUrl: image2
        }
        images.push(obj)
      }

      if (images.length > 0) {
        await Image.bulkCreate(images)
      }

      await Product.update({
        name,
        slug,
        description,
        price,
        mainImg,
        categoryId
      }, {
        where: {
          id: idProduct
        }
      })

      res.status(201).json(`Product ${name} has been updated`)
    } catch (err) {
      if (err.name === 'SequelizeValidationError') {
        res.status(400).json(err.errors[0].message)
      } else {
        res.status(500).json('Internal Server Error')
      }
    }
  }

  static async deleteProduct(req, res) {
    try {
      let idProduct = req.params.id

      let data = await Product.findByPk(idProduct)
      if (!data) {
        throw { name: 'DATA_NOT_FOUND' }
      }
      let response = await Product.destroy({
        where: {
          id: idProduct
        }
      })
      res.status(200).json('Product has been deleted')
    } catch (err) {
      if (err.name === 'DATA_NOT_FOUND') {
        res.status(404).json('Data Not Found')
      } else {
        res.status(500).json('Internal Server Error')
      }
    }
  }
}

module.exports = ProductController