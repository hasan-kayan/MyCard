const express = require('express');
const { registerUser, loginUser } = require('../Controllers/authController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

// Similar routes can be created for Admin, Team, etc.

module.exports = router;
