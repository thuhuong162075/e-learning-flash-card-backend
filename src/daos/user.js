const User = require('../models/user');

const createUser = async ({ email, password, username, role }) => {
  const user = await User.create({ email, password, username, role });
  return user;
};

const findUser = async (condition) => {
  if (typeof condition === 'object' && condition !== null) {
    const user = await User.findOne(condition);
    return user;
  }
  return null;
};

module.exports = {
  createUser,
  findUser,
};
