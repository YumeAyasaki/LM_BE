const express = require('express');
const { loan,viewByReaderId } = require('../controllers/BookLoan');
const router = express.Router();
const BookLoan = require('../model/BookLoan');



router.get('/:id/', viewByReaderId);
router.post('/', loan);


module.exports = router;