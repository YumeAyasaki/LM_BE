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
        required:true,

    },
    tacGia: {
        type: String,
        required:true,

    },
    namXuatBan: {
        type: Number,
        required:true,

    },
    nhaXuatBan: {
        type: String,
        required:true,

    },
    ngayNhap: {
        type: Date,
        required:true,

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

