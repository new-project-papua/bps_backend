const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  sk_aktif: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'sk'
  },
  no_ktp: {
    type: String
  }
}, {
  timestamps: true
})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel
