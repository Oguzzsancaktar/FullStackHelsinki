const userRouter = require('express').Router()
const User = require('../models/user')
const logger = require('../utils/logger')
const bcrypt = require('bcrypt')


userRouter.get('/', async (req, res) => {
  const users = await User.find({})

  if (!users) {
    return res.status(404).send('users not found')
  }

  res.send(users)

})
let passwordSalt = 10
userRouter.post('/', async (req, res) => {
  const body = req.body
  const hashedPassword = await bcrypt.hash(body.password, passwordSalt)

  if (!body) {
    return res.status(400).json({ error: 'Content is missing'})
  }
  try {
    const user = new User({
      name:body.name,
      username: body.username,
      hashedPassword

    })
    
    if (!user) {
      return res.status(400).send()
    }

    const savedUser = await user.save()
    res.status(201).send(savedUser)
    
  } catch (error) {
    logger.error(error)
  }

})




module.exports = userRouter