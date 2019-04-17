const router = require('express').Router();
const { findAllWraps, addWrap, deleteWrap, updateWrap } = require('./controller');

router.get('/api/v1/wraps', findAllWraps);
router.put('/api/v1/wraps', updateWrap);
router.post('/api/v1/wraps', addWrap);
router.delete('/api/v1/wraps', deleteWrap);

module.exports = router;
