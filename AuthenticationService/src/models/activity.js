// models/activity.js
const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  action: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = activitySchema;
