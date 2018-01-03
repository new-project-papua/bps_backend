const mongoose = require('mongoose')

const ketKependudukanSchema = new mongoose.Schema({
  ket_tempat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'KetTempat'
  },
  waktu_mulai_wawancara: Date,
  nama_anggota_keluarga: String,
  NIK: String,
  hubungan_dengan_kk: String,
  status_kawin: String,
  jenis_kelamin: String,
  bulan_tahun_lahir: String,
  umur: Number,
  status_tinggal_rumah: String,
  alasan_tidak_tinggal_rumah: String,
  status_punya_akte_kelahiran: Boolean,
  alasan_tidak_punya_akte_kelahiran: String
}, {
  timestamps: true
})

const ketKependudukanModel = mongoose.model('KetKependudukan', ketKependudukanSchema)

module.exports = ketKependudukanModel
