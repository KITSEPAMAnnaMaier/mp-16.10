const mongoose = require("mongoose");

const Group = mongoose.model("Group", {
  name: String,
  devices: Array,
  state: String,
  log: Array
});

module.exports = Group;
