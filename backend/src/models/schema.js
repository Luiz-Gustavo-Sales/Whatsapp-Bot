const { Schema, model } = require("mongoose");

const sessions = new Schema({
  user: {
    type: String,
    index: {
      unique: true,
    },
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = model("sessions", sessions);
