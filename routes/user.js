const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { addUser } = require('../controllers/user');

// Register
router.post('/register', addUser);

module.exports = router;