const express = require('express');
const { create, danhSachSach, findById, findByName } = require('../controllers/Book');
const router = express.Router();
const Sach = require('../model/Book');



router.post('/', create);
router.get('/:id/', findById);
router.get('/', findByName);
module.exports = router;