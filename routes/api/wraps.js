const router = require('express').Router();
const wrapController = require('../../controllers/wrapController');

router.get('/', wrapController.findAll);
router.put('/', wrapController.toggleAvailable);
router.post('/', wrapController.addNewWrap);
router.delete('/', wrapController.deleteWrap);

module.exports = router;
