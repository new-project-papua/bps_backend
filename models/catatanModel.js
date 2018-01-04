const mongoose = require('mongoose')

const catatanSchema = new mongoose.Schema({
  deskripsi: String
}, {
  timestamps: true
})

const catatanModel = mongoose.model('Catatan', catatanSchema)

module.exports = catatanModel
