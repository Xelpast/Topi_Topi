const Router = require('express');
const router = new Router();
const user_controller = require('../controllers/user_controller');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration', user_controller.registration);
router.post('/authorization', user_controller.authorization);
router.get('/auth', authMiddleware, user_controller.check);

module.exports = router;