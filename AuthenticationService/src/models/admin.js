// models/admin.js
const mongoose = require('mongoose');
const activitySchema = require('./activity');

const adminSchema = new mongoose.Schema({
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

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
