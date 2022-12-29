const express = require('express');
const { themSach } = require('../controllers/Sach');
const router = express.Router();
const Sach = require('../model/Sach');



router.post('/', themSach);

module.exports = router;