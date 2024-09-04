// app.js
const express = require("express");
const bodyParser = require("body-parser");
// app.js or other main file
require("dotenv").config({ path: "./.env.mail" });
const emailRoutes = require("./src/API-Routes/emailRoutes");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// API Routes
app.use("/api", emailRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
