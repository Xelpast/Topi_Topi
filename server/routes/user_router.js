const Router = require('express');
const router = new Router();
const UserController = require('../controllers/user_controller');
const user_controller = require('../controllers/user_controller');

router.post('/registration', user_controller.registration);
router.post('/authorization', user_controller.authorization);
router.get('/auth', user_controller.check);

module.exports = router;