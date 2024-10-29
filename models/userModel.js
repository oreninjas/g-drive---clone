const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    minlenght: [3, "Username must be at least 3 characters long."],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    minlenght: [12, "Email must be at least 12 characters long."],
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlenght: [6, "Password must be at least 6 characters long."],
  },
});

const user = mongoose.model("User", userSchema);

module.exports = user;
