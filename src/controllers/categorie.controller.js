const { categorieService } = require('../services/index');

const newCategorie = async (req, res) => {
  try {
  const { name } = req.body;
  const result = await categorieService.newCategorie(name);
  if (result.message) return res.status(400).json(result);
  return res.status(201).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getCategories = async (_req, res) => {
  try {
    const result = await categorieService.getCategorie();
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
newCategorie,
getCategories,
};