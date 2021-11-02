const Book = require('../models/Books');
const Chapter = require('../models/Chapters');

exports.getBook = (req, res, next) => {
    console.log("GET CHAPTER");
}

exports.createBook = (req, res, next) => {
    const { title, author, description, isbn, publisher, publishedDate, pageCount, categories, language } = req.body;
    // Validate request
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
        frontCoverImage: 'https://lh3.googleusercontent.com/a-/AOh14Gj9stElyPW7iXGbMkHShlm42tR6izkSJ557t3vcsw=s96-c',
    });
    newBook.save().then(result => {
        return res.status(200).json({
            message: 'Book created successfully',
            book: result
        });
    }).catch(err => {
        return res.status(500).json({
            message: 'Book creation failed',
            error: err
        });
    });
}

exports.updateBook = (req, res, next) => {
    console.log("UPDATE CHAPTER");
}

exports.deleteBook = (req, res, next) => {
    console.log("DELETE CHAPTER");
}