const mongoose = require('mongoose')

const ketTempatSchema = new mongoose.Schema({
  provinsi: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Provinsi'
  },
  kabupaten: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Kabupaten'
  },
  distrik: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Distrik'
  },
  kelurahan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Kelurahan'
  },
  no_blok_sensus: String,
  nama_SLS: String,
  no_urut_keluarga: String,
  nama_kepala_keluarga: String,
  posisi_koordinat_rumah_tangga: String,
  kode_foto: String,
  alamat_lengkap: String,
  status_kesediaan_wawancara: String,
  catatan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Catatan'
  }
}, {
  timestamps: true
})

const ketTempatModel = mongoose.model('KetTempat', ketTempatSchema)

module.exports = ketTempatModel
