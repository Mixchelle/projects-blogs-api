const { userService } = require('../services/index');

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
  const result = await userService.userLogin(email, password);
  return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const newUser = async (req, res) => {
  try {
 const user = req.body;
 const result = await userService.newUser(user);
 return res.status(201).json(result);
  } catch (err) {
  return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  userLogin,
  newUser,
};