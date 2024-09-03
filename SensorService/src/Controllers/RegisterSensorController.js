const Sensor = require('../models/sensor');

exports.registerSensor = async (req, res) => {
  const { sensorId, type, location } = req.body;

  try {
    let sensor = await Sensor.findOne({ sensorId });

    if (sensor) {
      return res.status(400).json({ error: 'Sensor already registered' });
    }

    sensor = new Sensor({
      sensorId,
      type,
      location,
    });

    await sensor.save();
    res.status(201).json(sensor);
  } catch (error) {
    res.status(500).json({ error: 'Failed to register sensor' });
  }
};
