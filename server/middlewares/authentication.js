const { User } = require('../models/index')
const { readPayloadFromToken } = require("../helpers/helper")

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers
    const payload = readPayloadFromToken(access_token)

    let checkUser = await User.findByPk(payload.id)

    if (!checkUser) {
      throw { name: 'Authentication Failed' }
    }
    next()
  } catch (err) {
    if (err.name === 'JsonWebTokenError' || err.name === 'Authentication Failed') {
      res.status(401).json('Authentication Failed')
    } else {
      res.status(500).json('Internal Server Error')
    }
  }
}

module.exports = authentication