const mongoose = require('mongoose');

const DocGiaSchema = mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },  
    hoVaTen : {
        type: String,
        required: true
    },
    loai: {
        type: String,
    },
    email: {
        type: String,

    },
    ngaySinh: {
        type: Date,
    },
    diaChi: {
        type: String,
    },
    ngayLapThe: {
        type: Date,

    },
    nguoiLapThe: {
        type: String,
    },
    tongNo:{
        type: Number
    }
});

 module.exports = mongoose.model('DocGia', DocGiaSchema);

