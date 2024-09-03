// models/user.js
const mongoose = require('mongoose');
const activitySchema = require('./activity');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  activities: [activitySchema],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
