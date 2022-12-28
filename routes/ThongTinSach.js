const express = require('express');
const { themSach } = require('../controllers/ThongTinSach');
const router = express.Router();
const Sach = require('../model/Sach');


router.post('/', themSach);

module.exports = router;