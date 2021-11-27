const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChaptersSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  book: {
    type: Schema.Types.ObjectId,
    ref: "Books",
    required: true,
    immutable: true,
  },
}, {timestamps: true});

module.exports = mongoose.model("Chapters", ChaptersSchema);
