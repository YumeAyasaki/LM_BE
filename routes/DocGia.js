const express = require('express');
const { lapThe } = require('../controllers/DocGia');
const router = express.Router();
const DocGia = require('../model/DocGia');



router.post('/add', lapThe);

module.exports = router;