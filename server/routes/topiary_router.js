const Router = require('express');
const router = new Router();
const TopiaryController = require('../controllers/topiary_controller');

router.post('/', TopiaryController.create);
router.get('/', TopiaryController.getAll);
router.get('/:id', TopiaryController.getOne);

module.exports = router;