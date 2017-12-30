const User = require('../models/userModel')
const bcrypt = require('bcryptjs')

module.exports = {
  all: (req, res) => {
    User.find()
    .then(result => res.send(result))
    .catch(err => res.send(err))
  },
  create: (req, res) => {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)
    req.body.password = hash
    
    User.create(req.body)
    .then(result => res.send(result))
    .catch(err => res.send(err))
  }
}
