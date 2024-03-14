const Router = require('express');
const router = new Router();
const TopiaryController = require('../controllers/topiary_controller');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole("ADMIN"), TopiaryController.create);
router.get('/', TopiaryController.getAll);
router.get('/:id', TopiaryController.getOne);

module.exports = router;