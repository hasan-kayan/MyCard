const express = require('express');
const { recordActivity } = require('../Controllers/activityController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Apply activity recording middleware to all routes that require it
router.use(authMiddleware, recordActivity);

module.exports = router;
