const express = require('express');
const { checkAlive } = require('../controllers/checkAliveController');
const checkSensorRegistered = require('../middleware/checkSensorRegistered');
const router = express.Router();

// Apply the middleware to routes that need sensor registration checks
router.get('/check-alive', checkSensorRegistered, checkAlive);

module.exports = router;
