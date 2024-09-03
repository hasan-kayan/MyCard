// models/team.js
const mongoose = require('mongoose');
const activitySchema = require('./activity');

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  activities: [activitySchema],
});

const Team = mongoose.model('Team', teamSchema);
module.exports = Team;
