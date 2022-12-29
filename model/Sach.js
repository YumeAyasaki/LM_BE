const mongoose = require('mongoose');

const SachSchema = mongoose.Schema({
    id: {
        type: Number,
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
        required: true
    },
    nguoiTiepNhan: {
        type: String,
        required: true
    },
    trangThai:{
        type: Boolean,
        default: true // True tuc la chua muon 
    }
});

 module.exports = mongoose.model('Sach', SachSchema);

