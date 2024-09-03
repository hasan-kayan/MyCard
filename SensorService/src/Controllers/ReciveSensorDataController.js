const Sensor = require('../models/sensor');

exports.receiveSensorData = async (req, res) => {
  const { sensorId, value, unit } = req.body;

  try {
    const sensor = await Sensor.findOne({ sensorId });

    if (!sensor) {
      return res.status(404).json({ error: 'Sensor not found' });
    }

    sensor.data.push({ value, unit });
    sensor.lastActive = Date.now();
    sensor.isAlive = true;

    await sensor.save();
    res.status(201).json(sensor);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save sensor data' });
  }
};
