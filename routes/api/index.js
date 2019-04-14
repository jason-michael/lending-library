const router = require('express').Router();
const wrapRoutes = require('./wraps');
router.use('/wraps', wrapRoutes);

module.exports = router;
