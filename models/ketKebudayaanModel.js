const mongoose = require('mongoose')

const ketKebudayaanSchema = new mongoose.Schema({
  anggota_keluarga: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'KetKependudukan'
  },
  agama: String,
  bahasa_di_rumah: String,
  bahasa_daerah_di_rumah: String,
  apakah_bahasa_papua_di_rumah: Boolean,
  bahasa_di_lingkungan: String,
  bahasa_daerah_di_lingkungan: String,
  apakah_bahasa_papua_di_lingkungan: Boolean,
  suku_bangsa: String,
  apakah_suku_bangsa_papua: Boolean
}, {
  timestamps: true
})

const ketKebudayaanModel = mongoose.model('KetKebudayaan', ketKebudayaanSchema)

module.exports = ketKebudayaanModel
