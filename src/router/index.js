const router = require('express').Router();
const loginRouter = require('./login.router');
const userRouter = require('./user.router');
const categorieRouter = require('./categories.router');
const postRouter = require('./post.router');

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/categories', categorieRouter);
router.use('/post', postRouter);

module.exports = router;