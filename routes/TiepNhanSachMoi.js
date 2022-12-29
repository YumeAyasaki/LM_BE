const express = require('express');
const { themSach } = require('../controllers/TiepNhanSachMoi');
const router = express.Router();
const Sach = require('../model/Sach');



router.post('/', themSach);

module.exports = router;