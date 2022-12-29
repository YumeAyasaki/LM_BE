const express = require('express');
const { create } = require('../controllers/Employee');
const router = express.Router();
const Employee = require('../model/Employee');



router.post('/add', create);

module.exports = router;