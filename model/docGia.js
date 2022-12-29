const mongoose = require('mongoose');

const DocGiaSchema = mongoose.Schema({
    id: {
        type: Number,
    },  
    hoVaTen : {
        type: String,
        required: true
    },
    loai: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required:true,

    },
    ngaySinh: {
        type: Date,
        required:true,
    },
    diaChi: {
        type: String,
        required:true,
    },
    ngayLapThe: {
        type: Date,
        required:true,

    },
    nguoiLapThe: {
        type: String,
        required: true
    },
});

 module.exports = mongoose.model('DocGia', DocGiaSchema);

