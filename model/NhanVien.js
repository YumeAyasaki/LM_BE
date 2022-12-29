const mongoose = require('mongoose');

const NhanVienSchema = mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },  
    hoVaTen : {
        type: String,
        required: true
    },
    diaChi: {
        type: String,
    },
    soDienThoai: {
        type: String,
    },
    ngaySinh: {
        type: Date,
    },
    bangCap: {
        type: String,
    },
    chucVu: {
        type: String,
    },
    boPhan: {
        type: String,
    },
});

 module.exports = mongoose.model('NhanVien', NhanVienSchema);

