const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: String,
});

module.exports = mongoose.model('Account', userSchema, 'account');
