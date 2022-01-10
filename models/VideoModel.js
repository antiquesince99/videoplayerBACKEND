const mongoose = require("../connection");
const schema = new mongoose.Schema({
  title: String,
  description: String,
  created: { type: Date, default: new Date() },
  file: String,
  thumbnail: String,
});

const model = mongoose.model("Videos", schema);
module.exports = model;
