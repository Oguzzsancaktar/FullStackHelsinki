const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name:String,
  username: {
    type: String,
    required: true,
    minlength:3
  },
  hashedPassword: {
    type: String,
    required:true,
  },

})

userSchema.set("toJSON", {
  transform: (document , returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const User = mongoose.model('User', userSchema)


module.exports = User