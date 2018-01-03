const mongoose = require('mongoose')

const ketKesehatanSchema = new mongoose.Schema({
  anggota_keluarga: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'KetKependudukan'
  },
  jaminan_kesehatan: String,
  memiliki_kartu_indonesia_sehat: String,
  memiliki_kartu_papua_sehat: String,
  memiliki_keluhan_kesehatan_sebulan_terakhir: String,
  keluhan_kesehatan_mengganggu_kegiatan: String,
  pernah_menderita_penyakit_dalam_tahun_ini: String
}, {
  timestamps: true
})

const ketKesehatanModel = mongoose.model('KetKesehatan', ketKesehatanSchema)

module.exports = ketKesehatanModel
