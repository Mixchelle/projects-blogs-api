const categorieRouter = require('express').Router();
const { categorieController } = require('../controllers');
const { tokenRes } = require('../middlewares/token.middleware');
const validate = require('../middlewares/ValidateCategorie');

categorieRouter.use(tokenRes);
categorieRouter.post('/', validate, categorieController.newCategorie);
categorieRouter.get('/', categorieController.getCategories);

module.exports = categorieRouter;