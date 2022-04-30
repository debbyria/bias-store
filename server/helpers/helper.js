const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY

function createHashPassword(password) {
  return bcrypt.hashSync(password, 8)
}

function checkPassWithHash(password, hash) {
  return bcrypt.compareSync(password, hash)
}

function generateToken(payload) {
  return jwt.sign(payload, secretKey)
}

function readPayloadFromToken(token) {
  return jwt.verify(token, secretKey)
}

function generateSlug(name) {
  let data = name.split(' ')
  data = data.join('-')
  return data
}

module.exports = {
  createHashPassword,
  checkPassWithHash,
  generateToken,
  generateSlug
}