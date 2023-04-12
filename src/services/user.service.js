const { User } = require('../models/index');
const { tokenMID } = require('../middlewares/index');
const CustomError = require('../middlewares/CustomError');

const userLogin = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) {
  throw new CustomError('Invalid fields', 400);
  }
  const token = tokenMID.generateToken({ id: user.id });
  return { token };
};

const newUser = async (user) => {
  const { email } = user;
  const userExist = await User.findOne({ where: { email } });
  if (userExist) {
  throw new CustomError('User already registered', 400);
}
const data = await User.create(user);
const token = tokenMID.generateToken({ id: data.id });
  return { token };
};

module.exports = {
  userLogin,
  newUser,
};
