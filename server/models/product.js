'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category, { foreignKey: 'categoryId' })
      Product.belongsTo(models.User, { foreignKey: 'authorId' })
      Product.hasMany(models.Image, { foreignKey: 'productId' })
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Name is required'
        },
        notEmpty: {
          args: true,
          msg: 'Name is required'
        }
      }
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Slug is required'
        },
        notEmpty: {
          args: true,
          msg: 'Slug is required'
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Description is required'
        },
        notEmpty: {
          args: true,
          msg: 'Description is required'
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Price is required'
        },
        notEmpty: {
          args: true,
          msg: 'Price is required'
        },
        min: {
          args: 10000,
          msg: 'Minimal price is 10000'
        }
      }
    },
    mainImg: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Image is required'
        },
        notEmpty: {
          args: true,
          msg: 'Image is required'
        }
      },
    },
    categoryId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};