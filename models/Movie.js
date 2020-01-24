const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("movie", MovieSchema);
