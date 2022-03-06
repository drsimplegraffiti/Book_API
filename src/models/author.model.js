const mongoose = require("mongoose");
const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  DOB: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Author", authorSchema);
