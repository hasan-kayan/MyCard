// emailRoutes.js
const express = require('express');
const { sendEmail } = require('../Controllers/emailController');
const { validateEmailData } = require('../Middlewares/emailMiddleware');

const router = express.Router();

// POST endpoint to send email
router.post('/send-email', validateEmailData, sendEmail);

module.exports = router;
