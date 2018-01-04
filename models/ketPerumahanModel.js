const mongoose = require('mongoose')

const ketPerumahanSchema = new mongoose.Schema({
  ket_tempat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'KetTempat'
  },
  jumlah_keluarga_yang_tinggal: Number,
  status_kepemilikan: String,
  luas_lantai: Number,
  bahan_utama_atap_terluas: String,
  bahan_utama_dinding_terluas: String,
  bahan_utama_lantai_terluas: String,
  penggunaan_fasilitas_jamban: String,
  jenis_kloset: String,
  tempat_pembuangan_akhir_tinja: String,
  sumber_air_minum_utama: String,
  jarak_tempat_penampungan_limbah_terdekat: Number,
  sumber_utama_penerangan: String,
  jenis_bahan_bakar_utama_memasak: String
}, {
  timestamps: true
})

const ketPerumahanModel = mongoose.model('KetPerumahan', ketPerumahanSchema)

module.exports = ketPerumahanModel
