const mongoose = require("mongoose");

const cubeSchema = new mongoose.Schema({
  name: String,
  describtion: String,
  imageUrl: String,
  difficultyLevel: Number,
});

const Cube = mongoose.model("Cube", cubeSchema);

module.exports = Cube;
