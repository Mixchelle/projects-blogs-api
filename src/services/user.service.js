const { User } = require('../models');
const { tokenMID } = require('../middlewares/index');

const userLogin = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return { message: 'Invalid fields' };
  }
    const token = tokenMID.generateToken({ id: user.id, email });
  return { token };
};

const CreatNewUser = async (user) => {
  const { email } = user;
  const userExist = await User.findOne({ where: { email } });
  if (userExist) return { message: 'User already registered' };

  const newUser = await User.create(user);
  const token = tokenMID.generateToken({ id: newUser.id });
  return { token };
};

const allUsers = async () => {
  const users = User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const userById = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  if (!user) return { message: 'User does not exist' };
  return user;
};

module.exports = {
  userLogin,
  CreatNewUser,
  allUsers,
  userById,
};
