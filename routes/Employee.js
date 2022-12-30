const express = require('express');
const { create } = require('../controllers/Employee');
const router = express.Router();
const Employee = require('../model/Employee');


// Create employee
router.post('/', create);

module.exports = router;