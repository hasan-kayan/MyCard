const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// Import routes
const registerSensorRoutes = require("./src/API-Routes/registerSensorRoutes");
const receiveSensorDataRoutes = require("./src/API-Routes/receiveSensorDataRoutes");
const checkAliveRoutes = require("./src/API-Routes/checkAliveRoutes");

// Initialize Express
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Database connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Use routes
app.use("/api/sensors", registerSensorRoutes);
app.use("/api/sensors", receiveSensorDataRoutes);
app.use("/api/sensors", checkAliveRoutes);

// Error handling middleware (optional, for better error handling)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
