const mongoose = require('mongoose')

const ketKetenagakerjaanSchema = new mongoose.Schema({
  anggota_keluarga: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'KetKependudukan'
  },
  kegiatan_seminggu_terakhir: String,
  seminggu_terakhir_punya_kerja_tapi_sementara_tidak: String,
  seminggu_terakhir_mencari_pekerjaan: String,
  seminggu_terakhir_mempersiapkan_usaha: String,
  bidang_pekerjaan_seminggu_lalu: String,
  jumlah_jam_kerja_seminggu_lalu: String,
  status_kedudukan_pekerjaan_seminggu_lalu: String,
  pendapatan_bersih_sebulan: Number
}, {
  timestamps: true
})

const ketKetenagakerjaanModel = mongoose.model('KetKetenagakerjaan', ketKetenagakerjaanSchema)

module.exports = ketKetenagakerjaanModel
