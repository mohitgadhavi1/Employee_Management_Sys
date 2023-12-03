const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  userType: {
    type: String,
    enum: ["employee", "manager"],
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
