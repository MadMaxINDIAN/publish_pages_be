const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const constants = require("../constants");

const BooksSchema = new Schema(
  {
    title: {
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
    frontCoverImage: {
      type: String,
      required: true,
    },
    backCoverImage: {
      type: String,
    },
    chapters: [
      {
        type: Schema.Types.ObjectId,
        ref: "Chapters",
      },
    ],
    isbn: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    publishedYear: {
      type: String,
      required: true,
    },
    pageCount: {
      type: Number,
      required: true,
    },
    categories: {
      type: [String],
      required: true,
      enum: constants.categories,
    },
    language: {
      type: String,
      required: true,
      enum: constants.languages,
    },
    averageRating: {
      type: Number,
      required: true,
    },
    ratingsCount: {
      type: Number,
      required: true,
    },
    admin_id: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Books", BooksSchema);
