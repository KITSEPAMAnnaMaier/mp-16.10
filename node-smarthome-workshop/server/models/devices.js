const mongoose = require("mongoose");

const Device = mongoose.model("Device", {
  name: String,
  address: String,
  port: Number,
  state: String,
  log: Array
});

module.exports = Device;
