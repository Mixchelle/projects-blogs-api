const loginRouter = require('express').Router();
const { userController } = require('../controllers');
const validateLogin = require('../middlewares/validadeLogin');

loginRouter.post('/', validateLogin, userController.userLogin);

module.exports = loginRouter;