const Sensor = require('../models/sensor');
const axios = require('axios');

exports.checkAlive = async (req, res) => {
  try {
    const sensors = await Sensor.find();
    const now = new Date();
    const threshold = 5 * 60 * 1000; // 5 minutes in milliseconds
    const deadSensors = [];

    for (let sensor of sensors) {
      if (now - sensor.lastActive > threshold) {
        sensor.isAlive = false;
        deadSensors.push(sensor.sensorId);
      } else {
        sensor.isAlive = true;
      }

      await sensor.save();
    }

    if (deadSensors.length > 0) {
      try {
        await axios.post('http://notification-service-url/notify', {
          deadSensors,
        });
      } catch (notifyError) {
        console.error('Failed to notify the notification service:', notifyError);
      }
    }

    res.status(200).json({ message: 'Check alive completed', deadSensors });
  } catch (error) {
    res.status(500).json({ error: 'Failed to check sensor status' });
  }
};
