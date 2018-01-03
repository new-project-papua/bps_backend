const mongoose = require('mongoose')

const ketPendidikanSchema = new mongoose.Schema({
  anggota_keluarga: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'KetKependudukan'
  },
  bisa_baca_tulis: String,
  bersekolah: String,
  pendidikan_tertinggi: String,
  tingkat_kelas_tertinggi: String,
  ijazah_tertinggi: String,
  memperoleh_kartu_pip_setahun_terakhir: String,
  memperoleh_beasiswa_pemda: String,
  alasan_tidak_memperoleh_beasiswa_pemda: String
}, {
  timestamps: true
})

const ketPendidikanModel = mongoose.model('KetPendidikan', ketPendidikanSchema)

module.exports = ketPendidikanModel
