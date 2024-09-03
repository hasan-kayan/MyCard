const Sensor = require('../models/sensor');

const checkSensorRegistered = async (req, res, next) => {
  const { sensorId } = req.body;

  if (!sensorId) {
    return res.status(400).json({ error: 'Sensor ID is required' });
  }

  try {
    const sensor = await Sensor.findOne({ sensorId });

    if (!sensor) {
      return res.status(404).json({ error: 'Sensor not registered' });
    }

    // If the sensor is registered, attach it to the request object
    req.sensor = sensor;
    next();
  } catch (error) {
    res.status(500).json({ error: 'Server error while checking sensor registration' });
  }
};

module.exports = checkSensorRegistered;
