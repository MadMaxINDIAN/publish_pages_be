const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    frontCoverImage: {
        type: String,
        required: true
    },
    backCoverImage: {
        type: String,
    },
    chapters: [{
        type: Schema.Types.ObjectId,
        ref: 'Chapters'
    }],
    isbn: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    publishedDate: {
        type: String,
        required: true
    },
    pageCount: {
        type: Number,
        required: true
    },
    categories: {
        type: [String],
        required: true,
        enum: ['Fiction', 'Non-Fiction', 'Children', 'Cooking', 'History', 'Biography', 'Poetry', 'Science', 'Art', 'Religion', 'Travel', 'Other']
    },
    language: {
        type: String,
        required: true
    },
    averageRating: {
        type: Number,
        required: true
    },
    ratingsCount: {
        type: Number,
        required: true
    }
}, {timestamps: true});
