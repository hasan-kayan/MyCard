const express = require("express");
const { registerSensor } = require("../Controllers/RegisterSensorController");
const router = express.Router();

router.post("/register-sensor", registerSensor);

module.exports = router;
