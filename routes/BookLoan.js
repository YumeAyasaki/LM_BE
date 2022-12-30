const express = require('express');
const { loan,viewByReaderId, returnBook } = require('../controllers/BookLoan');
const router = express.Router();
const BookLoan = require('../model/BookLoan');



router.get('/:id/', viewByReaderId);
router.post('/', loan);
router.put('/', returnBook);


module.exports = router;