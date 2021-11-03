const Chapter = require("../models/Chapters");
const Book = require("../models/Books");

exports.getChapters = (req, res, next) => {
  const bookId = req.params.bookId;
  Chapter.find({ book: bookId })
    .then((chapters) => {
      res.status(200).json({
        message: "Chapters fetched successfully!",
        chapters: chapters,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Fetching chapters failed!",
      });
    });
};

exports.getChapter = (req, res, next) => {
  const id = req.params.id;
  Chapter.findById(id)
    .then((chapter) => {
      res.status(200).json({
        message: "Chapter fetched successfully!",
        chapter: chapter,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Fetching chapter failed!",
      });
    });
};

exports.createChapter = (req, res, next) => {
  const { title, summary, number } = req.body;
  const bookId = req.params.bookId;
  Book.findById(bookId)
    .then((book) => {
      if (!book) {
        return res.status(404).json({
          message: "Book not found!",
        });
      }
      const chapter = new Chapter({
        title,
        summary,
        number,
        image: req?.file?.location,
        book: bookId,
      });
      return chapter.save().then((result) => {
        console.log(result);
        book.chapters.push(result._id);
        return book.save().then((updatedBook) => {
          return res.status(201).json({
            success: true,
            message: "Chapter created successfully!",
            chapter: result,
          });
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Creating chapter failed!",
      });
    });
};

exports.updateChapter = (req, res, next) => {
  console.log("UPDATE CHAPTER");
};

exports.deleteChapter = (req, res, next) => {
  const id = req.params.id;
  Chapter.findById(id).then((chapter) => {
    if (!chapter) {
      return res.status(404).json({
        message: "Chapter not found!",
      });
    }
    const bookId = chapter.book;
    Book.findById(bookId)
      .then((book) => {
        if (!book) {
          return res.status(404).json({
            message: "Book not found!",
          });
        }
        const index = book.chapters.indexOf(id);
        if (index > -1) {
          book.chapters.splice(index, 1);
        }
        book.save().then((result) => {
          chapter.remove().then((result) => {
            return res.status(200).json({
              success: true,
              message: "Chapter deleted successfully!",
            });
          });
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Deleting chapter failed!",
        });
      });
  });
};
