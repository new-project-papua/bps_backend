const mongoose = require('mongoose')

const skSchema = new mongoose.Schema({
  no_sk: {
    type: String,
    required: true
  },
  pencacah: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }
}, {
  timestamps: true
})

const skModel = mongoose.model('Sk', skSchema)

module.exports = skModel
