// models/card.js
const mongoose = require('mongoose');
const activitySchema = require('./activity');

const cardSchema = new mongoose.Schema({
  cardId: {
    type: String,
    required: true,
    unique: true,
  },
  activities: [activitySchema],
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;
