const userRouter = require('express').Router();
const { userController } = require('../controllers');
const validadeUser = require('../middlewares/validateUser');
const { tokenRes } = require('../middlewares/token.middleware');

userRouter.post('/', validadeUser, userController.newUser);
userRouter.use(tokenRes);
userRouter.get('/', userController.allUsers);
userRouter.get('/:id', userController.userById);

module.exports = userRouter;