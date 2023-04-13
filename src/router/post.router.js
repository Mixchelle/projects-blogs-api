const postRouter = require('express').Router();
const { postController } = require('../controllers');
const { tokenRes } = require('../middlewares/token.middleware');
const validate = require('../middlewares/validatePost');

postRouter.use(tokenRes);
postRouter.post('/', validate, postController.newPost);
postRouter.get('/', postController.getPost);
postRouter.get('/:id', postController.getPostId);

module.exports = postRouter;