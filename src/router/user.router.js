const userRouter = require('express').Router();
const { userController } = require('../controllers');
const validadeUser = require('../middlewares/validateUser');

userRouter.post('/', validadeUser, userController.newUser);

module.exports = userRouter;