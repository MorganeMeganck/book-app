const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  categorie: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  note: {
    type: Number,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
