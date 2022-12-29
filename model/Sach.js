const mongoose = require('mongoose');

const SachSchema = mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },  
    tenSach: {
        type: String,
        required: true
    },
    theLoai: {
        type: String,

    },
    tacGia: {
        type: String,

    },
    namXuatBan: {
        type: Number,

    },
    nhaXuatBan: {
        type: String,

    },
    ngayNhap: {
        type: Date,

    },
    triGia: {
        type: Number,
    },
    nguoiTiepNhan: {
        type: String,
    },
    trangThai:{
        type: Boolean,
        default: true // True tuc la chua muon 
    }
});

 module.exports = mongoose.model('Sach', SachSchema);

