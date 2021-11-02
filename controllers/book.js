const Book = require("../models/Books");
const Chapter = require("../models/Chapters");
const ImageUploader = require("../multer/upload.controller");

exports.getBooks = (req, res, next) => {
  Book.find()
    .then((books) => {
      return res.json({
        success: true,
        msg: "Books fetched successfully",
        books,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        success: false,
        msg: "Internal server error. Try again later.",
      });
    });
};

exports.getBook = (req, res, next) => {
  const isbn = req.params.isbn;
  Book.findOne({ isbn: isbn })
    .then((book) => {
      if (!book) {
        return res.status(404).json({
          success: true,
          message: "Book not found",
        });
      }
      return res.json({
        success: true,
        msg: "Book fetched successfully",
        book,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        success: false,
        msg: "Internal server error. Try again later.",
      });
    });
};

exports.createBook = (req, res, next) => {
  const {
    title,
    author,
    description,
    isbn,
    publisher,
    publishedDate,
    pageCount,
    categories,
    language,
  } = req.body;
  if (!req?.file?.location) {
    return res.status(400).json({
      message: "No image found",
    });
  }

  // Validate request
  Book.findOne({ isbn: isbn })
    .then((book) => {
      if (book) {
        return res.status(400).json({
          message: "Book already exists",
        });
      } else {
        const newBook = new Book({
          title: title,
          author: author,
          description: description,
          isbn: isbn,
          publisher: publisher,
          publishedDate: publishedDate,
          pageCount: pageCount,
          categories: categories,
          language: language,
          averageRating: 0,
          ratingsCount: 0,
          frontCoverImage: req?.file?.location,
        });
        newBook
          .save()
          .then((result) => {
            return res.status(200).json({
              message: "Book created successfully",
              book: result,
            });
          })
          .catch((err) => {
            return res.status(500).json({
              message: "Book creation failed",
              error: err,
            });
          });
      }
    })
    .catch((err) => {
      return res.status(500).json({
        message: "Book creation failed",
        error: err,
      });
    });
};

exports.updateBook = (req, res, next) => {
  console.log("UPDATE CHAPTER");
};

exports.deleteBook = (req, res, next) => {
  console.log("DELETE CHAPTER");
};
