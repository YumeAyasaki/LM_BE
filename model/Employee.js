const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },  
    name : {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    dateOfBirth: {
        type: Date,
    },
    degree: {
        type: String,
    },
    position: {
        type: String,
    },
    department: {
        type: String,
    },
});

 module.exports = mongoose.model('Employee', EmployeeSchema);

