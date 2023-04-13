const { BlogPost, PostCategory, Category, User } = require('../models');

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

const getpost = async (userId) => {
  const info = [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ];

  const post = await BlogPost.findAll({
  where: { userId },
    include: info,
  });
  return post;
};

const getPostId = async (userId, id) => {
  const info = [
    {
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    },
  ];
  const post = await BlogPost.findOne({
    where: { userId, id },
    include: info,
  });
  if (!post) return { message: 'Post does not exist' };
  return post;
};

module.exports = { newPost, getpost, getPostId };