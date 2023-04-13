const { userService } = require('../services/index');

const userLogin = async (req, res) => {
  try {
      const { email, password } = req.body;
      const result = await userService.userLogin(email, password);
      if (result.message) return res.status(400).json(result);
      return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const newUser = async (req, res) => {
  try {
     const { displayName, email, password, image } = req.body;
     const user = { displayName, email, password, image };
     const result = await userService.CreatNewUser(user);
     if (result.message) return res.status(409).json(result);
     return res.status(201).json(result);
  } catch (err) {
      return res.status(500).json({ message: err.message });
  }
};

const allUsers = async (_req, res) => {
  try {
    const result = await userService.allUsers();
      return res.status(200).json(result);
  } catch (err) {
      return res.status(500).json({ message: err.message });
  }
};

const userById = async (req, res) => {
  try {
      const { id } = req.params;
      const result = await userService.userById(id);
      if (result.message) return res.status(404).json(result);
      res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  userLogin,
  newUser,
  allUsers,
  userById,
};