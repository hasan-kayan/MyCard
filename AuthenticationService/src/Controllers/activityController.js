exports.recordActivity = async (req, res, next) => {
    try {
      req.user.activities.push({
        action: req.body.action || req.originalUrl,
        timestamp: new Date(),
      });
      await req.user.save();
      next();
    } catch (error) {
      res.status(500).json({ error: 'Failed to record activity' });
    }
  };
  