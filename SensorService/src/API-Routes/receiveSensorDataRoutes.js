const express = require('express');
const { receiveSensorData } = require('../controllers/receiveSensorDataController');
const checkSensorRegistered = require('../middleware/checkSensorRegistered');
const router = express.Router();

// Apply the middleware to the receive sensor data route
router.post('/receive-sensor-data', checkSensorRegistered, receiveSensorData);

module.exports = router;
