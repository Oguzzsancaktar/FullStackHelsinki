const User = require('../models/user')
const logger = require('../utils/logger')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const jwt = require('jsonwebtoken')


loginRouter.post('/', async (req, res) => {
  const body = req.body


  try {
    const user = await User.findOne({ username: body.username })

    if (!user) {
      return res.status(404).send('user not found')
    }

    const passwordCorrect = await bcrypt.compare(body.password, user.hashedPassword)

    if (!passwordCorrect) {
      return res.status(400).send('Password not correct !')
    }

    const tokenForUser = {
      username: user.username,
      id:user._id
    }

    const token = jwt.sign(tokenForUser, process.env.SECRET)

    res.send({token, username:user.username , name:user.name})

  } catch (error) {
    logger.error(error)
  }
})

module.exports = loginRouter