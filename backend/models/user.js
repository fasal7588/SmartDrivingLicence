const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: String,
  licenceNumber: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;