const express = require('express');
const { create } = require('../controllers/Reader');
const router = express.Router();
const Reader = require('../model/Reader');



router.post('/add', create);

module.exports = router;