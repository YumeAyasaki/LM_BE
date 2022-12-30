const express = require('express');
const { create, findById, findByName, loan, returnBook } = require('../controllers/Book');
const router = express.Router();
const Book = require('../model/Book');



router.post('/', create);
router.get('/:_id/', findById);
router.get('/', findByName);
router.put('/loan/:_id/', loan);
router.put('/return/:_id/', returnBook) 

module.exports = router;