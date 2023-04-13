const postRouter = require('express').Router();
const { postController } = require('../controllers');
const { tokenRes } = require('../middlewares/token.middleware');
const validate = require('../middlewares/validatePost');

postRouter.use(tokenRes);
postRouter.post('/', validate, postController.newPost);

module.exports = postRouter;