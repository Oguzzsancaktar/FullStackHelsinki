const User = require('../models/user')
const loginRouter = require('express').Router()
const logger = require('../utils/logger.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

loginRouter.post('/', async (req, res) => {
  const body = req.body

  try {
    const user = await User.findOne({ username: body.username })


    const passwordCorrect = user === null ? false : bcrypt.compare(body.password, user.passwordHash)

    if (!(user && passwordCorrect)) {
      return res.status(401).send('invalid username or password')
    }

    const tokenForUser = {
      username: user.username,
      id: user._id
    }

    const token = jwt.sign(tokenForUser, process.env.SECRET)
    res.status(200).send({ token, username: user.name, name: user.name })

  } catch (error) {
    logger.error(error)
  }

})

module.exports = loginRouter