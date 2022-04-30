const { checkPassWithHash, generateToken } = require('../helpers/helper')
const { User } = require('../models/index')

class UserController {
  static async userRegister(req, res) {
    try {
      let { username, email, password, phoneNumber, address } = req.body

      let newUser = await User.create({
        username,
        email,
        password,
        phoneNumber,
        address
      })
      res.status(201).json({
        data: {
          id: newUser.id,
          email: newUser.email
        }
      })
    } catch (err) {
      if (err.name === 'SequelizeUniqueConstraintError' || err.name === 'SequelizeValidationError') {
        let errors = err.errors.map(el => {
          return el.message
        })

        res.status(400).json({ errors: errors.join(', ') })
      } else {
        res.status(500).json('Internal Server Error')
      }
    }
  }

  static async userLogin(req, res) {
    try {
      let { email, password } = req.body

      let checkedEmail = await User.findOne({
        where: {
          email
        }
      })

      if (!checkedEmail) {
        throw { name: "USER_NOT_VALID" }
      }

      let checkValidPass = checkPassWithHash(password, checkedEmail.password)

      if (!checkValidPass) {
        throw { name: "USER_NOT_VALID" }
      }

      let payload = {
        id: checkedEmail.id,
        email: checkedEmail.email
      }
      let token = generateToken(payload)

      res.status(200).json({
        access_token: token,
        id: checkedEmail.id,
        username: checkedEmail.username,
        role: checkedEmail.role
      })

    } catch (err) {
      if (err.name === "USER_NOT_VALID") {
        res.status(401).json({
          errors: 'Invalid Email or Password'
        })
      } else {
        res.status(500).json('Internal Server Error')
      }
    }
  }
}

module.exports = UserController