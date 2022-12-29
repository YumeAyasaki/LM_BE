const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json())


//Import routes
const TiepNhanSachMoiRoute = require('./routes/TiepNhanSachMoi');
const LapTheDocGiaRoute = require('./routes/LapTheDocGia');

// ==============
app.use('/TiepNhanSachMoi', TiepNhanSachMoiRoute);
app.use('/LapTheDocGia', LapTheDocGiaRoute)


// Connect to DB
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true}, ()=> {
    console.log('Connected to database');
})

//Listen on port 9999 http://localhost:9999/
const PORT = 9999;

app.listen(PORT);