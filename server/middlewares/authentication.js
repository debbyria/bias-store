const { User } = require('../models/index')
const { readPayloadFromToken } = require("../helpers/helper")

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers
    const payload = readPayloadFromToken(access_token)

    let checkUser = await User.findByPk(payload.id)

    if (!checkUser) {
      throw { name: 'Authentication Failed' }
    } else {
      req.user = {
        id: checkUser.id,
        username: checkUser.username
      }
    }
    next()
  } catch (err) {
    res.status(401).json('Authentication Failed')
  }
}

module.exports = authentication