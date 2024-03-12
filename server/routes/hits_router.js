const Router = require('express');
const router = new Router();
const HitsController = require('../controllers/hits_controller');

router.post('/', HitsController.create);
router.get('/', HitsController.getAll);

module.exports = router;