// emailController.js
const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
    const { to, message, type, timeStamp } = req.body;

    // Setup Nodemailer transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL, // Your email
            pass: process.env.PASSWORD, // Your email password
        },
    });

    // Email options
    let mailOptions = {
        from: process.env.EMAIL,
        to: to,
        subject: `Notification: ${type}`,
        text: `Message: ${message}\nTimestamp: ${timeStamp}`,
    };

    // Send email
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error sending email', error });
    }
};

module.exports = {
    sendEmail,
};
