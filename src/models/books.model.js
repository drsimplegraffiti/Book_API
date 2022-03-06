const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
  },
  summary: {
    type: String,
    required: true,
  },
  numberOfPages: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
