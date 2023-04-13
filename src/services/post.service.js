const { BlogPost, PostCategory, Category } = require('../models');

// eslint-disable-next-line max-lines-per-function
const newPost = async ({ content, categoryIds, title }, userId) => {
  const catExist = await Category.findAll({ where: { id: categoryIds } });
  const postInfo = { 
    title,
    content,
    userId, 
    published: new Date(), 
    updated: new Date(),
  };
  const post = await BlogPost.create(postInfo);

  const categories = await catExist.map((cat) => ({
    postId: post.id,
    categoryId: cat.id,
  }));

  await PostCategory.bulkCreate(categories);

return post;
};

module.exports = { newPost };