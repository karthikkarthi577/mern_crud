const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Age: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("userData", userSchema);
