const { Category } = require('../models');

const newCategorie = async (name) => {
const categorie = await Category.create({ name });
return categorie;
};

const getCategorie = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  newCategorie,
  getCategorie,
};