const express = require('express');
const { create, findById, findByName } = require('../controllers/Book');
const router = express.Router();
const Book = require('../model/Book');



router.post('/', create);
router.get('/:_id/', findById);
router.get('/', findByName);
module.exports = router;