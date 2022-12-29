const express = require('express');
const { themSach, danhSachSach } = require('../controllers/Sach');
const router = express.Router();
const Sach = require('../model/Sach');



router.post('/add', themSach);
router.get('/find', danhSachSach);

module.exports = router;