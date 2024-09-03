const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
  sensorId: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
  },
  location: {
    type: String, // e.g., "Room 101"
    required: false,
  },
  registeredAt: {
    type: Date,
    default: Date.now,
  },
  lastActive: {
    type: Date,
    default: Date.now,
  },
  isAlive: {
    type: Boolean,
    default: true,
  },
  data: [
    {
      value: Number,
      unit: String,
      timestamp: {
        type: Date,
        default: Date.now,
      },
    }
  ]
});

const Sensor = mongoose.model('Sensor', sensorSchema);

module.exports = Sensor;
