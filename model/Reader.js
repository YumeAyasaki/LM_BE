const mongoose = require('mongoose');

const ReaderSchema = mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },  
    name : {
        type: String,
        required: true
    },
    type: {
        type: String,
    },
    email: {
        type: String,

    },
    dateOfBirth: {
        type: Date,
    },
    address: {
        type: String,
    },
    createAt: {
        type: Date,
        default: () =>Date.now(),

    },
    createPerson: {
        type: String,
    },
    totalLoan:{
        type: Number
    }
});

 module.exports = mongoose.model('Reader', ReaderSchema);

