const express = require('express');
const { themNhanVien } = require('../controllers/NhanVien');
const router = express.Router();
const NhanVien = require('../model/NhanVien');



router.post('/', themNhanVien);

module.exports = router;