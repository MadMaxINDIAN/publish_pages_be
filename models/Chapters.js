const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChaptersSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    image: {
        type: String,
    }
});

module.exports = mongoose.model('Chapters', ChaptersSchema);