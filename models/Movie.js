const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  id: String,
  name: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  year: {
    type: Number,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("movie", movieSchema);
