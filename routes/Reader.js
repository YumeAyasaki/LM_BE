const express = require('express');
const router = express.Router();
const { create, getReaderById } = require('../controllers/Reader');

const Reader = require('../model/Reader');



router.post('/', create);
router.get('/:_id/', getReaderById);


module.exports = router;