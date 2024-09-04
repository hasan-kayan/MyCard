// emailMiddleware.js
const validateEmailData = (req, res, next) => {
    const { to, message, type, timeStamp } = req.body;

    if (!to || !message || !type || !timeStamp) {
        return res.status(400).json({
            success: false,
            message: 'Missing required fields (to, message, type, timeStamp)',
        });
    }

    // Check if the type is either 'Error' or 'Info'
    if (type !== 'Error' && type !== 'Info') {
        return res.status(400).json({
            success: false,
            message: 'Invalid type, must be "Error" or "Info"',
        });
    }

    next();
};

module.exports = {
    validateEmailData,
};
