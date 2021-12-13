const User = require('../models/user')
const jwt = require('jsonwebtoken');

const loginRouter = require('express').Router()

loginRouter.post('/', async(req, res) => {
      const body = req.body
  
    const user = await User.find()
    res.send(user)
})

module.exports = loginRouter