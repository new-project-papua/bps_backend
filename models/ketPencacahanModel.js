const mongoose = require('mongoose')

const ketPencacahanSchema = new mongoose.Schema({
  ket_tempat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'KetTempat'
  },
  pencacah: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  pengawas: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  waktu_pencacahan: Date,
  hasil_pencacahan: String,
  catatan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Catatan'
  },
  waktu_selesai_wawancara: Date
}, {
  timestamps: true
})

const ketPencacahanModel = mongoose.model('KetPencacahan', ketPencacahanSchema)

module.exports = ketPencacahanModel
