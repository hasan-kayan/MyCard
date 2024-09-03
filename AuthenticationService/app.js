const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Import routes
const authRoutes = require('./src/API-Routes/authRoutes');
const activityRoutes = require('./src/API-Routes/activityRoutes');

// Initialize Express
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/activity', activityRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
