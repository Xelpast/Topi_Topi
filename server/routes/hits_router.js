const Router = require('express');
const router = new Router();
const HitsController = require('../controllers/hits_controller');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole("ADMIN"), HitsController.create);
router.get('/', HitsController.getAll);

module.exports = router;