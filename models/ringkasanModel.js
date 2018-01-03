const mongoose = require('mongoose')

const ringkasanSchema = new mongoose.Schema({
  ket_tempat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'KetTempat'
  },
  anggota_keluarga: Number,
  anggota_keluarga_umur_0_sampai_4: Number,
  anggota_keluarga_umur_5_keatas: Number,
  anggota_keluarga_umur_10_keatas: Number
}, {
  timestamps: true
})

const ringkasanModel = mongoose.model('Ringkasan', ringkasanSchema)

module.exports = ringkasanModel
