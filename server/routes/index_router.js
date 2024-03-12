const Router = require('express');
const router = new Router();
const user_router = require('./user_router');
const hits_router = require('./hits_router');
const category_router = require('./category_router');
const topiary_router = require('./topiary_router');

router.use('/user', user_router);
router.use('/hits', hits_router);
router.use('/category', category_router);
router.use('/topiary', topiary_router);

module.exports = router;