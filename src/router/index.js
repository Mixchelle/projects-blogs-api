const router = require('express').Router();
const loginRouter = require('./login.router');
const userRouter = require('./user.router');
const categorieRouter = require('./categories.router');

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/categories', categorieRouter);

module.exports = router;