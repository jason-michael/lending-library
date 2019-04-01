const router = require('express').Router();
const wrapController = require('../../controllers/wrapController');

router.get('/', wrapController.findAll);
router.post('/', wrapController.addNewWrap);

module.exports = router;
