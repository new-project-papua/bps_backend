const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
  edit: (req, res) => {
    User.update({
      _id: req.params.id
    }, req.body)
    .then(result => res.send(result))
    .catch(err => res.send(err))
  },
  all: (req, res) => {
    User.find()
    .then(result => res.send(result))
    .catch(err => res.send(err))
  },
  byId: (req, res) => {
    User.findOne({
      _id: req.params._id
    })
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
  },
  changePassword: (req, res) => {
    User.findOne({
      _id: req.params._id
    })
    .then(user => {
      bcrypt.compare(req.body.old_password, user.password)
      .then(response => {
        if (response == true) {
          const salt = bcrypt.genSaltSync(10)
          const hash = bcrypt.hashSync(req.body.new_password, salt)
          User.update({
            _id: user._id
          }, {
            password: hash
          })
          .then(result => {
            res.send(result)
          })
          .catch(err => res.send(err))
        } else {
          res.send('old password incorrect')
        }
      })
    })
    .catch(err => res.send(err))
  },
  login: (req, res) => {
    User.findOne({
      username: req.body.username
    })
    .then(user => {
      if (user == null) {
        res.send({
          message: 'username not found'
        })
      } else {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const token = jwt.sign({
            _id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            phone: user.phone,
            username: user.username
          }, process.env.JWT_SECRET)

          const dataUser = {
            _id: user._id,
            first_name: user.first_name,
            last_name: user.last_name
          }

          res.send({
            message: 'login success',
            token: token,
            data: dataUser
          })
        } else {
          res.send({
            message: 'password incorrect'
          })
        }
      }
    })
    .catch(err => res.send(err))
  },
  remove: (req, res) => {
    User.remove({
      _id: req.params._id
    })
    .then(result => res.send(result))
    .catch(err => res.send(err))
  }
}
