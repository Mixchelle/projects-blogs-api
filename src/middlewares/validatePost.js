const { Category } = require('../models');

const validate = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  const postCategorieId = await Promise.all(categoryIds.map((id) => 
    Category.findOne({ where: { id } })));

  if (!title) {
   return res.status(400).json({ message: 'Some required fields are missing' });
  }
  if (!content || categoryIds < 1) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  if (postCategorieId.includes(null)) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  next();
};

module.exports = validate;