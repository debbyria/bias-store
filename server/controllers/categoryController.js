const { Category } = require('../models/index')

class CategoryController {
  static async getCategory(req, res) {
    try {
      let data = await Category.findAll()
      res.status(200).json(data)

    } catch (err) {
      res.status(500).json('Internal Server Error')
    }
  }

  static async addCategory(req, res) {
    try {
      let { name } = req.body

      let newCetagory = await Category.create({ name })

      res.status(201).json({
        id: newCetagory.id,
        name: newCetagory.name
      })
    } catch (err) {
      if (err.name === 'SequelizeValidationError') {
        res.status(400).json(err.errors.message)
      } else {
        res.status(500).json('Internal Server Error')
      }
    }
  }

  static async deleteCategory(req, res) {
    try {
      let idCategory = req.params.id

      await Category.destroy({
        where: {
          id: idCategory
        }
      })
      res.status(200).json(`Category ${idCategory} deleted`)
    } catch (err) {
      res.status(500).json('Internal Server Error')
    }
  }
}

module.exports = CategoryController